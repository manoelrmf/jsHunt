import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import './../../config/StatusBarConfig'
import api from './../../services/api'

export default function Main() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    loadProducts()
  }, [])

  async function loadProducts() {
    const response = await api.get(`/products?page=1`)
    const { docs } = response.data
    setProducts(docs)
  }

  return (
    <View style={styles.container}>
      <Text>Página Main</Text>
      {products.map(product => (
        <Text key={product._id}>{product.title}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-start"
  },
});
