import { StyleSheet, Text,TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { nanoid } from 'nanoid/non-secure'
import { Box } from '@/utils/theme'

const CreateCategory = () => {
    const [newCategory, setNewCategory] = useState<ICategory>({
        id: 'category-${nanoid()}',
        color: {
            code:"",
            id: 'color-${nanoid()}',
            name:"",
        },
        name:"",
    })

  return (
    <Box flex={1} bg = "gray500" pb='10'>
        <Box
        flexDirection='column'
        alignItems='center'
        justifyContent='space-between'
        mx='4'
        >
        <Box
        width={"100%"}
        mt='5'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        >
        <Box 
        width={"100%"} 
        bg='white' 
        borderRadius='rounded2Xl' 
        alignItems='center' 
        justifyContent='center' 
        p='4'
        >
            <TextInput 
                value={newCategory.name}
                style={{
                    fontSize:20,
                    width:"100%",
                }}
                onChangeText={(text)=>{
                    setNewCategory((prev)=>{
                        return {
                            ...prev,
                            name: text,
                        }
                    })
                }}
                placeholder='Create new category'
            />
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default CreateCategory

const styles = StyleSheet.create({})