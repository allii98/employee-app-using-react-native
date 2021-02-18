import React, { useState }  from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Linking } from 'react-native'
import { useNetInfo } from "@react-native-community/netinfo";
import { IconWfh } from '../../assets'

const Wfh = () => {
    const netInfo = useNetInfo();
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => { Linking.openURL('http://mips.msalgroup.com:8181/absensi_ho/') }}>
                <View style={styles.wfh}>
                    <IconWfh />
                    {/* <Text>Type: {netInfo.type}</Text>
                    <Text>Is Connected? {netInfo.isConnected.toString()}</Text> */}
                </View>
                <View style={styles.text}>
                    <Text >Absensi WFH</Text>

                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Wfh
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
    wfh: {
        width: 120,
        height: 100,
        alignItems: "center",
        top: 10,

    }
})
