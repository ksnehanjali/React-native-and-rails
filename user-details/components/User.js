import React, { useState, useEffect } from 'react';
import { View, Text, Button, Table, StyleSheet, Row, Rows} from 'react-native';

const User = () => {

    const[errors, setErrors] = useState(null);
    const[users, setUsers] = useState([]); 

    useEffect( () => {
        const apiUrl = 'localhost:3001/api/v1/users/';

    });

    return(
        <View>
            
        </View>
    );
}

const styles = StyleSheet.create({

});

export default User;