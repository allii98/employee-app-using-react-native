import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Linking, Dimensions } from 'react-native'
import { IconHelpdesk} from '../../assets'

const Helpdesk = ({title}) => {
    const Icon = () => {
        if (title === 'helpdesk') return <IconHelpdesk />;
        return <IconHelpdesk/>
    }
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={ ()=>{ Linking.openURL('http://mips.msalgroup.com:8181/mashedes/')}}>
                <View style={styles.helpdesk}>
                    <Icon />
                </View>
                <View style={styles.text}>
                    <Text >Helpdesk</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Helpdesk
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
        top: 3
    },
    helpdesk:{
        width: 120,
        height: 100,
        alignItems: "center",
        top: 10,
    }

})
