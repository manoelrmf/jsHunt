import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Main from './pages/main'

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
                <AppStack.Screen  name="JSHunt"component={Main} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}