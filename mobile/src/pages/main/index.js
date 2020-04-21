import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import './../../config/StatusBarConfig'
import api from './../../services/api'
import { useNavigation } from '@react-navigation/native'

export default function Main() {
  const [products, setProducts] = useState([])
  const [productInfo, setProductInfo] = useState({})
  const [page, setPage] = useState(1)
  const navigation = useNavigation()

  useEffect(() => {
    loadProducts(1)
  }, [])
  
  function navigateToProduct(product) {
    navigation.navigate('Product', { product })
  }

  async function loadProducts(page) {
    const response = await api.get(`/products?page=${page}`)
    const { docs, ...productInfo } = response.data
    setProducts([...products, ...docs])
    setProductInfo(productInfo)
    setPage(page)
  }

  function loadMore() {
    if (page === parseInt(productInfo.pages)) return

    const pageNumber = page + 1

    loadProducts(pageNumber)
  }

  function renderItem({ item }) {
    return (
      <View style={styles.productContiner}>
        <Text style={styles.productItle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>

        <TouchableOpacity style={styles.productButton} onPress={() => navigateToProduct(item)}>
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
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },

  list: {
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
