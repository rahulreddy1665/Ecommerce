import { View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SplashscreenStyles } from '../styles/Globalstyles'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { screenNames } from '../constants/constants';

const Splashscreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(screenNames.HOME)
        }, 2000);
    })
    return (
        // Styles imported from global stylesheet
        <View style={SplashscreenStyles.container}>
            {/* Lottiview for animations */}
            <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image source={require("../assets/Company.gif")} style={{ width: 200, height: 200, marginTop: 100 }} autoPlay loop
                    hardwareAccelerationAndroid />
                <LottieView
                    source={require('../assets/Splash.json')}
                    style={{ width: 200, height: 200, }}
                    autoPlay
                />
            </View>
        </View>
    )
}

export default Splashscreen