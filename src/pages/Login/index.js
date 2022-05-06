import React from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import styles from './styles';
import Estacio from "../../../assets/Estacio.jpg";
import { useNavigation } from '@react-navigation/native';

export default function Login({navigation}){
    
    const saveAndNavigate = () => {
        navigation.navigate("Products");
    }

    return(
        <View style={styles.container}>
        <View>
            <Image source={Estacio} style={styles.logo}></Image>
        </View>
            <Text style={styles.title}>Login Screen</Text>
            <TextInput placeholder="User email" style={styles.input}></TextInput>
            <TextInput placeholder="User password" secureTextEntry={true} style={styles.input}></TextInput>
            <View style={styles.buttonContainer}>
                <Button style={styles.loginButton} title="Logar" onPress={saveAndNavigate}></Button>
            </View>
        </View>
    );
}