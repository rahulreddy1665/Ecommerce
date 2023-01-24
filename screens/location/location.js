import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { LocationIcon } from '../../assets/icons/LocationIcon'
import { XIcon } from '../../assets/icons/XIcon'
import { ColorConstants } from '../../constants/constants'
import { CommonStyles, LocationStyles } from '../../styles/Globalstyles'

const location = () => {
    const navigation = useNavigation()
    return (
        <View style={CommonStyles.Container}>
            {/* Header Part */}
            <View style={{ padding: 12, justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={LocationStyles.LocationText}>Choose Location</Text>
                <TouchableOpacity style={{ marginTop: 10, marginRight: 10 }} onPress={() => navigation.goback()}>
                    <XIcon stroke={ColorConstants.GREY} />
                </TouchableOpacity>
            </View>
            {/* Pincode Part */}
            <View style={{ justifyContent: "center", alignItems: "center", }}>
                <View
                    style={{
                        backgroundColor: '#fff',
                        padding: 4,
                        marginTop: 20,
                        marginVertical: 5,
                        width: "90%",
                        elevation: 5,
                        flexDirection: 'row',
                        borderRadius: 11, flexDirection: "row"
                    }}
                >
                    <TextInput
                        autoCapitalize="characters"
                        autoCorrect={false}
                        clearButtonMode="always"
                        placeholder="Check the pincode"
                        style={{ backgroundColor: '#fff', width: "60%", paddingHorizontal: 12, }}
                    />
                    <TouchableOpacity style={LocationStyles.PincodeButton}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Regular', color: ColorConstants.White, marginTop: 14 }}>CHECK</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* For selecting current location */}
            <TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10 }}>
                    <LocationIcon stroke={ColorConstants.Black} style={{ marginLeft: 10, marginRight: 10 }} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, color: ColorConstants.Ecommerce }}>Select current location</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default location