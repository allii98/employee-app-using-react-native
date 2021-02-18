import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Image, Text, View } from 'react-native'
import {bgSplash, Logo} from '../../assets'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome');
        }, 2000)
    },[navigation]);
    return (
        <ImageBackground source={bgSplash} style={styles.background}>
            <Image source={Logo} style={styles.logo}/>
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 269,
        height: 224 
    }

})
