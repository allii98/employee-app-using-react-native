import React, { useState } from 'react'
import { Alert, Modal, Button,StyleSheet, Text, Pressable, View,TouchableOpacity, processColor,Dimensions, navigation } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { IconAgronomi} from '../../assets';

const ButtonIcon = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
   
    
  );
};



export default ButtonIcon
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container:{
    marginBottom: 12,
        marginLeft: 20,
        marginRight: 20,
    backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    },
    text: {
      width: windowWidth * 0.25,
      height: windowHeight * 0.05,
      alignItems: "center",
      top: 5
  },
  lain: {
      width: 120,
      height: 100,
      alignItems: "center",
      top: 10,

  },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 15,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 150,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 2,
        elevation: 2,
        top: 130,
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        width: 80,
        height: 19,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
