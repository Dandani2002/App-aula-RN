import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';

import ButtonCart from '../../components/ButtonCart'; 
import Header from '../../components/Header';
import Product from '../../components/Product';

export default function Products() {

  const navigation = useNavigation();
 return (
    <SafeAreaView>
        <Header title="Consoles"/>
        <Product 
        name="Xbox Series X"
        description="Lorem ipsum dolor sit amet conseqt adiscipli elit. Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit."
        price="R$ 4.0000,00"
        />
        <ButtonCart onPress={() => navigation.navigate("Cart")}/>
    </SafeAreaView>
  );
}