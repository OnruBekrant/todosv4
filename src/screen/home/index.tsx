import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation=useNavigation()
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={()=>{navigation.navigate("CreateTask")}}>
        <text>
            Navigate to create task
        </text>
      </Pressable>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})