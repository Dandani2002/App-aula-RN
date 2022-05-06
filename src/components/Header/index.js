import React from 'react';
import { View, Image, Text } from 'react-native';
import header from '../../../assets/header.png';
import styles from './styles';

export default function Header(props) {
 return (
    <View style={styles.headerView}>
        <Image source={header} style={styles.header} ></Image>
        <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}