import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Linking , Dimensions} from 'react-native'
import { IconLogistik} from '../../assets'

const Logistik = ({title}) => {
    const Icon = () => {
        if (title === 'Logistik') return <IconLogistik />;
        return <IconLogistik/>
    }
    return (
        <View >
            <TouchableOpacity style={styles.container} onPress={ ()=>{ Linking.openURL('http://192.168.1.237/app_logistik_msal_alfan/')}}>
                <View style={styles.logistik}>
                    <Icon />
                </View>
                <View style={styles.text}>
                    <Text >Logistik MSAL</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Logistik
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
        logistik:{
            width: 120,
            height: 100,
            alignItems: "center",
            top: 5,
        }
})
