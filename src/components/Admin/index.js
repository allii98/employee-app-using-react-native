import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking, Dimensions } from 'react-native'
import { IconAdmin } from '../../assets'

const Admin = () => {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => { Linking.openURL('http://mips.msalgroup.com:8181/absensi_ho/login') }}>
                <View style={styles.admin}>
                    <IconAdmin />
                </View>
                <View style={styles.text}>
                    <Text>Admin Absensi HO</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Admin
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
        width: windowWidth * 0.89,
        height: windowHeight * 0.05,
        textAlign: "center",
        top: 1
    },
    admin: {
        width: 120,
        height: 100,
        alignItems: "center",
        top: 5,
    }

})
