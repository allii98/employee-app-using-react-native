import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking , Dimensions} from 'react-native'
import { IconPM} from '../../assets'
const Pm = () => {
    return (
        <View>
        <TouchableOpacity style={styles.container} onPress={ ()=>{ Linking.openURL('http://mips.msalgroup.com:8181/PMPABRIK/')}}>
            <View style={styles.net}>
                <IconPM />
            </View>
            <View style={styles.text}>
                <Text >PM Pabrik</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default Pm
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
    text:{
        width: windowWidth * 0.25,
        height: windowHeight * 0.05,
        alignItems: "center",
        top: 1
    },
    net:{
        width: 120,
        height: 100,
        alignItems: "center",
        top: 5,

    }
})
