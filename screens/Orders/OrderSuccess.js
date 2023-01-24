import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CommonStyles, SplashscreenStyles } from '../../styles/Globalstyles'
import LottieView from 'lottie-react-native';
import { ColorConstants } from '../../constants/constants';

const OrderSuccess = () => {
    return (
        // Styles imported from global stylesheet
        <View style={SplashscreenStyles.container}>
            {/* Lottiview for animations */}
            <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ marginTop: 200, fontFamily: "Poppins-Bold", fontSize: 18 }}>Your order is successfull</Text>
                <LottieView
                    source={require('../../assets/Success.json')}
                    style={{ width: 200, height: 200, }}
                    autoPlay
                />
                <View style={{ width: '50%' }}>
                    <TouchableOpacity style={CommonStyles.button}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Regular', color: ColorConstants.White, marginTop: 10 }}>Back to Dashboard</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OrderSuccess