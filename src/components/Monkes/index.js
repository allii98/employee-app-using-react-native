import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Linking,Dimensions } from 'react-native'
import { IconMonkes} from '../../assets'

const Monkes = ({title}) => {
    const Icon = () => {
        if (title === 'Monkes') return <IconMonkes />;
        return <IconMonkes/>
    }
    return (
        <View >
            <TouchableOpacity style={styles.container} onPress={ ()=>{ Linking.openURL('http://mips.msalgroup.com:8181/monkes/')}}>
                <View style={styles.monkes}>
                    <Icon />
                </View>
                <View style={styles.text}>
                    <Text >Monitoring Kesehatan Karyawan</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Monkes
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
        width: windowWidth * 0.89,
        height: windowHeight * 0.05,
        textAlign: "center",
        top: 3
    },
    monkes:{
        width: 120,
        height: 100,
        alignItems: "center",
        top: 10,
    }
})
