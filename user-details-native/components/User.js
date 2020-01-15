import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const User = (props) => {

    let {names} = props;
    console.log(names);

    return(
		<View>
		{
			names.map((user, i) => {
				let {first_name, last_name} = user;
				return(
					<View key={i}>
						<Text>{first_name} {last_name}</Text>
					</View>
				);
			})
		}
		</View>
	);
}

export default User;