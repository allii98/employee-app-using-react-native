import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Linking , Dimensions} from 'react-native'
import { IconMasis} from '../../assets'

const Masis = ({title}) => {
    const Icon = () => {
        if (title === 'masis') return <IconMasis />;
        return <IconMasis/>
    }

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={ ()=>{ Linking.openURL('http://mips.msalgroup.com:8181/masis/')}}>
                <View style={styles.masis}>
                    <Icon />
                </View>
                <View style={styles.text}>
                    <Text >Peminjaman Assets</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Masis
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
        width: windowWidth * 0.50,
        height: windowHeight * 0.05,
        alignItems: "center",
        top: 3
    },
    masis:{
        width: 120,
        height: 100,
        alignItems: "center",
        top: 10,
    }
})
