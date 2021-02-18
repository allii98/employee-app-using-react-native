import React, { useState, useEffect } from 'react'
import {
    ImageBackground,
    TouchableOpacity,
    Linking,
    Button,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    View,
    ScrollView
}
    from 'react-native'
import { color } from 'react-native-reanimated'
import { ImageHeader, Logoo } from '../../assets'
import {
    AbsensiWfh,
    AbsensiWfo,
    AplikasiMonkes,
    AplikasiHelpdesk,
    AplikasiMasis,
    AplikasiMarketing,
    AplikasiAgronomi,
     AplikasiLogistik,
     AplikasiKarir,
     AplikasiSlip,
     AplikasiData,
     AplikasiMips,
     AplikasiNetmon,
     AplikasiAdmin,
     ButtonIcon,
     AplikasiTransitHo,
     AplikasiTransit,
     PM
}
    from '../../components'
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';


const Welcome = ({ navigation }) => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        var d = new Date();
        var dayName = days[d.getDay()];
        setCurrentDate(
            dayName + ' , ' + date + '/' + month + '/' + year
        );
    }, []);

    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={ImageHeader} style={styles.header}>
                    <Image source={Logoo} style={styles.logo} />
                    <Text style={styles.label}>Dashboard</Text>
                    <Text style={styles.textDate}>{currentDate}</Text>
                </ImageBackground>
                <View  >
                <AbsensiWfh />
                <AbsensiWfo />
                <AplikasiHelpdesk />
                <AplikasiMasis />
                <AplikasiMonkes />
                {/* <ButtonIcon /> */}
                <AplikasiMarketing />
                <AplikasiSlip />
                <AplikasiKarir />
                <AplikasiAgronomi />
                <AplikasiAdmin />
                <AplikasiData />
                <AplikasiMips />
                <AplikasiNetmon />
                <AplikasiLogistik />
                <AplikasiTransit />
                <AplikasiTransitHo />
                <PM />
                </View>
                
                
                
                
                </ScrollView>
        </View>
    )
}

export default Welcome

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#ECF2F5',
    },
    header: {
        width: windowWidth,
        height: windowHeight * 0.40,

    },
    logo: {
        position: 'absolute',
        width: windowWidth * 0.18,
        height: windowHeight * 0.10,
        left: 275,
        top: 32
    },
    label: {
        height: windowHeight * 0.07,
        width: windowWidth * 0.55,
        left: 34,
        top: windowHeight * 0.10,
        fontFamily: 'Trirong',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 42,
        color: 'white'
    },
    textDate: {
        height: windowHeight * 0.05,
        width: windowWidth * 0.55,
        left: 35,
        top: windowHeight * 0.08,
        fontFamily: 'Trirong',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 42,
        color: 'white'
    },
   
    // box:{
      
    //     justifyContent: 'space-between',
    //     marginTop:  windowHeight * 0.02,
        
    // },
    box2:{
       
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        flexWrap: 'wrap',
    }

})
