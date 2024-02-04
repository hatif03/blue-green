import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import Header from '@/components/Header'
import Listings from '@/components/Listings'

const Page = () => {
  return (
    <View style={{flex:1, backgroundColor:"#fff"}}>
      <Stack.Screen
        options={{
          header: () => <Header/>,
        }}
      />
      <Listings/>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})