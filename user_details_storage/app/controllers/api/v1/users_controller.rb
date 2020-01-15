module Api
  module V1
    class UsersController < ApplicationController
      skip_before_action :verify_authenticity_token

      def index
        users = User.all
        #render json: {status: 'SUCCESS', message: 'Loaded users', data: users}, status: :ok
        render json: users
      end

      def show
        user = User.find(params[:id])
        render json: {status: 'SUCCESS', message: 'Loaded user with id', data: user}, status: :ok
      end

      def create
        user = User.new(user_params)
        if user.save
          render json: {status: 'SUCCESS', message: 'Saved a user', data: user}, status: :ok
        else
          render json: {status: 'ERROR', message: 'User not saved', data: user.errors.full_messages}, status: :unprocessable_entity
        end
      end

      def destroy
        user = User.find(params[:id])
        user.destroy
        render json: {status: 'SUCCESS', message: 'User Deleted', data: user}, status: :ok
      end

      def update
        user = User.find(params[:id])
        if user.update_attributes(user_params)
          render json: {status: 'SUCCESS', message: 'User updated', data: user}, status: :ok
        else
          render json: {status: 'ERROR', message: 'Update unsuccessful', data: user}, status: :unprocessable_entity
        end
      end

      private
      def user_params
        params.require(:user).permit(:first_name, :last_name)
      end

    end
  end
end
