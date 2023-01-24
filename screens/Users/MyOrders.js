import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ColorConstants } from '../../constants/constants'
import { CommonStyles } from '../../styles/Globalstyles'
import { LeftIcon } from '../../assets/icons/LeftIcon'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native'
const MyOrders = () => {
    const navigation = useNavigation()
    return (
        <View>
            {/* Header part for categories data */}
            <View style={CommonStyles.Header}>
                <TouchableOpacity style={{ marginTop: 14, marginLeft: 10, flexDirection: "row" }}>
                    <LeftIcon color={ColorConstants.Black} />
                    <Text style={CommonStyles.HeaderText}>My Orders</Text>
                </TouchableOpacity>
            </View>
            {/* Lottiview for animations */}
            <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                <LottieView
                    source={require('../../assets/order.json')}
                    style={{ width: 200, height: 200, marginTop: 50 }}
                    autoPlay
                />
                <Text style={{ marginTop: 100, fontFamily: "Poppins-SemiBold" }}>We are waiting for you to Order</Text>
                <View style={{ justifyContent: "center", alignItems: "center", width: '50%' }}>
                    <TouchableOpacity style={{ width: "100%", borderRadius: 6, backgroundColor: ColorConstants.Ecommerce, height: 40 }} onPress={() => navigation.navigate("bottom")}>
                        <Text style={{ color: ColorConstants.White, marginTop: 11, textAlign: 'center' }}>Lets Get Start Shopping</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default MyOrders