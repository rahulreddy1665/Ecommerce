import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/CustomHeader/Header';
import { ColorConstants, screenNames } from '../../constants/constants';
import { CommonStyles } from '../../styles/Globalstyles';

const Address = () => {
    const navigation = useNavigation()
    return (
        <View>
            {/* Header part for categories data */}
            <Header text={'Manage Address'} />
            {/* Lottie view for animation */}
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', marginTop: 200 }}>You dont have any address saved on your device</Text>
                <LottieView
                    source={require('../../assets/location.json')}
                    style={{ width: 200, height: 200, }}
                    autoPlay
                />
                <View style={{ width: '50%' }}>
                    <TouchableOpacity style={CommonStyles.button} onPress={() => navigation.navigate(screenNames.ADDADDRESS)}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Regular', color: ColorConstants.White, marginTop: 10 }}>Add Address</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Address