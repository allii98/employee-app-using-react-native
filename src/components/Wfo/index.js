import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Linking, Dimensions } from 'react-native'
import { IconWfo } from '../../assets'

const Wfo = () => {


    return (
        <View >
            <TouchableOpacity style={styles.container} onPress={() => { Linking.openURL('http://192.168.1.237/absensi_ho_wfo/') }}>
                <View style={styles.wfo}>
                    <IconWfo />
                </View>
                <View style={styles.text}>
                    <Text >Absensi WFO</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Wfo
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
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
        width: windowWidth * 0.25,
        height: windowHeight * 0.05,
        alignItems: "center",
        top: 1
    },
    wfo: {
        width: 120,
        height: 100,
        alignItems: "center",
        top: 10,
    }

})
