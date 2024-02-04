import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle:{
          fontFamily:"mon-sb"
        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel:"Home",
          tabBarIcon: ({color, size}) => <AntDesign name="home" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='store'
        options={{
          tabBarLabel:"Store",
          tabBarIcon: ({color, size}) => <Ionicons name="storefront-outline" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='wiki'
        options={{
          tabBarLabel:"Wiki",
          tabBarIcon: ({color, size}) => <AntDesign name="book" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel:"Profile",
          tabBarIcon: ({color, size}) => <FontAwesome name="user-circle-o" size={size} color={color} />
        }}
      />
    </Tabs>
  )
}

export default Layout

const styles = StyleSheet.create({})