import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import styles from './styles';
import Estacio from "../../../assets/Estacio.jpg";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login ({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const saveAndNavigate = async () => {
        const emailLength = email.length;
        const passwordLength = password.length;
        if (emailLength > 0 && passwordLength > 0){
            const user = {
                email: email,
                password: password
            }
            await asyncStorageSave(user);
            return navigation.navigate("Products");
        } else {
            console.log('Preencha todos os campos');
        }
    }


    const asyncStorageSave = async (user) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(user));
            console.log('salvou no asyncstorage');
        } catch (error) {
            console.log('erro ao salvar no asyncstorage');
        }
    }



    return(
        <View style={styles.container}>
        <View>
            <Image source={Estacio} style={styles.logo}></Image>
        </View>
            <Text style={styles.title}>Login Screen</Text>
            <TextInput value = {email} onChangeText={(e) => setEmail(e)}placeholder="User email" style={styles.input}></TextInput>
            <TextInput value={password} onChangeText={(e) => setPassword(e)}  secureTextEntry={true} placeholder="User password"style={styles.input}></TextInput>
            <View style={styles.buttonContainer}>
                <Button style={styles.loginButton} title="Logar" onPress={saveAndNavigate}></Button>
            </View>
        </View>
    );
  }
