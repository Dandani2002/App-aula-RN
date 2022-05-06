import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default function Product(props) {
 return (
     <View>
        <View style={styles.detailsView}>
            <Text style={styles.productName}>{props.name}</Text>
        </View>
        <View style={styles.detailsContainer}>
            <Image style={styles.icon} source={{ uri: 'https://arquivosbordados.com/wp-content/uploads/2021/10/embroidery-design-logo_753eeb22-e242-4204-bf27-f3012cc27322-1.jpg' }}></Image>
            <Text style={styles.sonyName}>Sony</Text>
        </View>
        <View>
            <Text style={styles.productDescription}>{props.description}</Text>
        </View>
        <View>
            <Text style={styles.productPrice}>{props.price}</Text>
        </View>
      </View>
  );
}