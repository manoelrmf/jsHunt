import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
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

  function renderItem({ item }){
    return (
      <View style={styles.productContiner}>
        <Text style={styles.productItle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>

        <TouchableOpacity style={styles.productButton} onPress={() => {}}>
          <Text style={styles.productButtonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={products}
        keyExtractor={item => item._id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },

  list:{
    padding: 20
  },

  productContiner: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },

  productItle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },

  productDescription: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24
  },

  productButton: {
    height: 47,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#da552f',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    paddingLeft: 125,
    paddingRight: 100
  },

  productButtonText: {
    fontSize: 16,
    color: '#da552f',
    fontWeight: 'bold'
  }
  


});
