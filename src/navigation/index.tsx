import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './types'
import Home from '@/screen/home'
import createTask from '@/screen/create-task'
import CreateCategory from '@/screen/create-category'

const Stack= createNativeStackNavigator<RootStackParamList>()


const Navigation = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='CreateTask' component={createTask} />
    <Stack.Screen name='CreateCategory' component={CreateCategory}/>
    </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})