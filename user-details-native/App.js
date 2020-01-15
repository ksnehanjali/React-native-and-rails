import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import User from './components/User';

export default function App() {
  
  const[users, setUsers]=useState([]);
  const[firstName, setFirstName]=useState("");
  const[lastName, setLastName]=useState("");
  
  useEffect(() => {
    console.log("In useEffect");
    fetch('http://localhost:3001/api/v1/users')
    .then((jsonResponse) => {   return jsonResponse.json();})
    .then((parsedResponse) => {   setUsers(parsedResponse); })
    .catch((error) => { console.log("Error loading users!"); })
  }, []);

  return (
    <View style={styles.container}>
      <Text>Registered Users</Text>
      <User names={users} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});