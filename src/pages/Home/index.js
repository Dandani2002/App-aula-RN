import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home ({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {  
        getUser();
    },[]) 


    const getUser = async () => {
        try {

            const user = await AsyncStorage.getItem('user');

            const parsedUser = JSON.parse(user);
            
            setEmail(parseUser.email);
            setPassword(parsedUser.password);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Email: {email}</Text>
            <Text>Senha: {password}</Text>
            <Text>Home Screen</Text>
            <Button title='Ir para about' onPress={() => navigation.navigate('Products')} />
        </View>
    )
}

export default Home;