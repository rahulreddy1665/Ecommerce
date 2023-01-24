import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { CommonStyles } from '../../styles/Globalstyles'
import { ColorConstants } from '../../constants/constants'
import { LeftIcon } from '../../assets/icons/LeftIcon'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/CustomHeader/Header'

const Support = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            {/* Header part for categories data */}
            <Header text={'Support'} />
            <ScrollView>

            </ScrollView>
            <View style={{ alignItems: 'center', marginTop: 20, }}>
                <TouchableOpacity style={CommonStyles.button} onPress={() => navigation.navigate("AddTicket")}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Regular', color: ColorConstants.White, marginTop: 10 }}>Add Ticket</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Support