import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome6 } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const Tools = () => {
  return (
    <View style={styles.theBox}>
        <View style={styles.theRow}>
            <TouchableOpacity style={styles.infoContainer}>
                <View style={styles.iconView}>
                    <FontAwesome6 name="sack-xmark" size={20} color="black" />
                </View>
                <Text style={styles.displayText}>Fertilizer</Text>
                <Text style={styles.displayText}>Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoContainer}>
                <View style={styles.iconView}>
                    <MaterialIcons name="pest-control" size={20} color="black" />
                </View>
                <Text style={styles.displayText}>Pests &</Text>
                <Text style={styles.displayText}>Diseases</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.theRow}>
            <TouchableOpacity style={styles.infoContainer}>
                <View style={styles.iconView}>
                    <FontAwesome6 name="leaf" size={20} color="black" />
                </View>
                <Text style={styles.displayText}>Cultivation</Text>
                <Text style={styles.displayText}>Tips</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoContainer}>
                <View style={styles.iconView}>
                    <Entypo name="warning" size={20} color="black" />
                </View>
                <Text style={styles.displayText}>Pests &</Text>
                <Text style={styles.displayText}>Diseases Alerts</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    theBox: {
        flexDirection: "column",
        padding: 2,
        marginBottom: 5,
        marginTop: 5,
        height: 300,
    },
    theRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    infoContainer: {
        backgroundColor: "#D4E6F1",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        width: "45%",
        margin: 5,
        height: 120,
        borderRadius: 10,
        fontFamily: "mon-sb",
        padding: 20

    },
    iconView: {
        backgroundColor:"#fff", 
        borderRadius:100, 
        width:35, 
        height: 35, 
        alignItems:"center", 
        justifyContent: "center",
        marginBottom: 4,
    },
    displayText: {
        fontFamily: "mon-sb"
    },
})


export default Tools