import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking, Dimensions } from 'react-native'
import { IconMips } from '../../assets'

const MipsHo = () => {
    return (
        <View >
            <TouchableOpacity style={styles.container} onPress={() => { Linking.openURL('http://mips.msalgroup.com:8181/mips_home/app/index.php/auth/login/') }}>
                <View style={styles.mips}>
                    <IconMips />
                </View>
                <View style={styles.text}>
                    <Text >MIPS HO</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MipsHo
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
    mips: {
        width: 120,
        height: 100,
        alignItems: "center",
        top: 5,
    }
})
