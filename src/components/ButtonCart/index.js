import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

export default function ButtonCart(props) {
 return (
    <View style={styles.cartArea}>
        <Button
        onPress={props.onPress}
        title="Adicionar ao carrinho"
        color="#007AFF"
        accessibilityLabel="Adicionar ao carrinho"
        />
    </View>
  );
}