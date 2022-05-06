import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Cart(navigation) {
 return (
     <View style={styles.container}>
         <Text>Carrinho de compras</Text>
         <Button title='Navigate' onPress={() => alert("Compras adicionadas ao carrinho")}/>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});