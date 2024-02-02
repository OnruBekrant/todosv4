import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Box, Text } from '@/utils/theme'
import useGlobalStore from '@/store'

const Home = () => {
    const navigation=useNavigation()
    const {tasks, categories} = useGlobalStore()
  return (
    <View>
      <Text variant='text2Xl'>Home</Text>
      {
        categories.map(category=><Box py="4" bg='blu500'><Text>{category.name}</Text></Box>)
      }
      <Pressable onPress={()=>{navigation.navigate("CreateCategory")}}>
        <Text variant='text4Xl' color='green500'>navigate to create category</Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})