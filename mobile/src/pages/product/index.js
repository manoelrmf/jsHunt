import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import './../../config/StatusBarConfig'
import { useNavigation, useRoute } from '@react-navigation/native'


export default function Product() { 
  
  const navigation = useNavigation()
  const route = useRoute()
  const product = route.params.product
 

  return (
    <View style={styles.container}>
      <Text>{product.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  }
});
