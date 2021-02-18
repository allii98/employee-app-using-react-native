import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity,Linking, Dimensions } from "react-native";
import { IconAgronomi } from '../../assets'

const Agronomi = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Box has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View>
                    <View style={styles.modalView}>
                        <View style={styles.box}>

                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://mips.msalgroup.com:8181/agronomi_msal/')}}>

                            <IconAgronomi />
                            <Text style={styles.modalText}>MSAL AGRONOMI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://mips.msalgroup.com:8181/agronomi_mapa/')}}>

                            <IconAgronomi />
                            <Text style={styles.modalText}>MAPA AGRONOMI</Text>
                        </TouchableOpacity >
                        </View>
                       
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View >

                <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
                    <View style={styles.agronomi}>
                        <IconAgronomi />
                    </View>
                    <View style={styles.text}>
                        <Text >Agronomi</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default Agronomi
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    box:{
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
    },
    container: {
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
        width:  windowWidth * 0.25,
        height: windowHeight * 0.05,
        alignItems: "center",
        top: 1
    },
    agronomi: {
        width: 120,
        height: 100,
        alignItems: "center",
        top: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 100,
        alignItems: "center",
        shadowColor: "#000",
        
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 2,
        elevation: 2,
        top: 90
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
        width: 100,
        height: 19,
        marginBottom: 15,
        textAlign: "center",
        top: 10
    }
})
