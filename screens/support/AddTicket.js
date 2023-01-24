import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { ColorConstants, FORM_INPUT_RULES, INPUT_FIELD_NAME, INPUT_PLACE_HOLDER_CONSTANTS } from '../../constants/constants'
import { CommonStyles } from '../../styles/Globalstyles'
import { LeftIcon } from '../../assets/icons/LeftIcon'
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../components/Inputs/RegistrationInput'
import Header from '../../components/CustomHeader/Header'

const AddTicket = () => {
    // Variables for hook form
    const { control, formState, handleSubmit, setValue } = useForm();
    return (
        <View style={{ flex: 1, backgroundColor: ColorConstants.White }}>
            {/* Header part for categories data */}
            <Header text={'Add Ticket'} />

            {/* Ticket form using custom form input */}

            <View style={{ justifyContent: "center", margin: "auto", alignItems: "center" }}>
                {/* Ticket title and description field */}
                <Text style={[CommonStyles.subHeading, { marginLeft: 20, marginRight: "auto" }]}>Ticket Title:</Text>
                <FormTextInput
                    inputName={INPUT_FIELD_NAME.TICKET_TITLE}
                    control={control}
                    style={{ height: Platform.OS === 'ios' ? 50 : null }}
                    formState={formState}
                    maxLength={15}
                    rules={FORM_INPUT_RULES.tickettitleRule}
                    underlineColorAndroid="#f000"
                    placeholder={INPUT_PLACE_HOLDER_CONSTANTS.TICKET_TITLE}
                    placeholderTextColor="#333333"
                    autoCapitalize="sentences"
                    keyboardType="default"
                    returnKeyType="next"
                />
                <Text style={[CommonStyles.subHeading, { marginLeft: 20, marginRight: "auto" }]}>Ticket Description:</Text>
                <FormTextInput
                    inputName={INPUT_FIELD_NAME.TICKET_DESCRIPTION}
                    control={control}
                    formState={formState}
                    rules={FORM_INPUT_RULES.ticketdescripRule}
                    underlineColorAndroid="#f000"
                    placeholder={INPUT_PLACE_HOLDER_CONSTANTS.TICKET_DESCRIPTION}
                    placeholderTextColor="#333333"
                    autoCapitalize="sentences"
                    keyboardType="default"
                    returnKeyType="next"
                    style={{ height: Platform.OS === 'ios' ? 50 : null }}
                    numberOfLines={Platform.OS === 'ios' ? 50 : 6}
                    textAlignVertical={'top'}
                />

                <View style={{ width: '90%' }}>
                    <TouchableOpacity style={CommonStyles.button}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Regular', color: ColorConstants.White, marginTop: 10 }}>Add Ticket</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}

export default AddTicket