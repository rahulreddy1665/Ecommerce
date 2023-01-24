import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LeftIcon } from '../../assets/icons/LeftIcon'
import { CommonStyles } from '../../styles/Globalstyles'
import { ColorConstants } from '../../constants/constants'

export default function Header(props) {
    return (
        <View>
            {/* Header part for categories data */}
            <View style={CommonStyles.Header}>
                <TouchableOpacity style={{ marginTop: 14, marginLeft: 10, flexDirection: "row" }}>
                    <LeftIcon color={ColorConstants.Black} />
                    <Text style={CommonStyles.HeaderText}>{props.text}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}