import React from 'react';
import {View, StyleSheet,Text, Pressable, Touchable, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './../Pages/Home'
import Detail from './../Pages/Detail'
import { Icon } from 'native-base';

const Right = () =>{
    return (
        <TouchableOpacity style={{ marginRight:15 }}>
            <Text>
                <Icon type='FontAwesome' name='shopping-cart' color='black' fontSize={20} />
            </Text>
        </TouchableOpacity>
    )
}
const Stack = createNativeStackNavigator()
const Route = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group screenOptions={{
                    headerRight: () =>(
                        <Right />
                    ),
                    title:'WarriorPropy',
                    headerTitleStyle:{
                        fontFamily:'League',
                        fontSize:30,
                        
                    },
                }}>
                    <Stack.Screen name='home' component={Home}/>
                    <Stack.Screen name='detail' component={Detail}
                />
                </Stack.Group>
                
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})

export default Route;
