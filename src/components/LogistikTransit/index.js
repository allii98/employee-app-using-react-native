import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity,Linking, Dimensions } from "react-native";
import { IconTransit,IconAgronomi,IconMsal, IconPsam,IconPeak,IconMapa } from '../../assets'

const LogistikTransit = () => {
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

                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://mips.msalgroup.com:8181/logistiktransit/login_msal.php')}}>

                            <IconMsal />
                            
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://mips.msalgroup.com:8181/logistiktransit/login_psam.php')}}>

                        <IconPsam />
                        </TouchableOpacity >
                        
                        </View>
                        <View style={styles.box1}>

                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://mips.msalgroup.com:8181/logistiktransit/login_peak.php')}}>

                            <IconPeak />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://mips.msalgroup.com:8181/logistiktransit/login_mapa.php')}}>

                        <IconMapa />
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
                    <View style={styles.transit}>
                        <IconTransit />
                    </View>
                    <View style={styles.text}>
                        <Text >Logistik Transit RO</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default LogistikTransit
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    box1:{
       flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
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
        width: windowWidth * 0.89,
        height: windowHeight * 0.05,
        textAlign: "center",
        top: 1
    },
    transit: {
        width: 120,
        height: 110,
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
        
        margin: 10,
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
    },
    box:{
        flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    }
})
