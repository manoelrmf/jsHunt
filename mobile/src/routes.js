import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Main from './pages/main'
import Product from './pages/product'

export default function Routes(){
    return(
        <NavigationContainer >
            <AppStack.Navigator 
              screenOptions={{
                headerShown: true,
                headerTitleAlign:'center',
                headerStyle: {
                  backgroundColor: "#da552f"
                },
                headerTintColor: '#fff'
              }}>
                <AppStack.Screen          
                  options={{ title: 'JSHunt' }}
                  name="Main"
                  component={Main} 
                />
                <AppStack.Screen
                  options={({
                     route }) => 
                      ({ title: route.params.product.title 
                  })}
                  name="Product"
                  component={Product}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
