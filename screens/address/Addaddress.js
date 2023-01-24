import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CommonStyles } from '../../styles/Globalstyles'
import { ColorConstants, FORM_INPUT_RULES, INPUT_FIELD_NAME, INPUT_PLACE_HOLDER_CONSTANTS, stringConstants } from '../../constants/constants'
import { LeftIcon } from '../../assets/icons/LeftIcon'
import { FormTextInput } from '../../components/Inputs/RegistrationInput'
import { useForm } from 'react-hook-form';
import Header from '../../components/CustomHeader/Header'

const Addaddress = () => {
    const { control, formState, handleSubmit, reset } = useForm();
    return (
        <View style={{ backgroundColor: ColorConstants.White, flex: 1 }}>
            {/* Header part for categories data */}
            <Header text={'Add Address'} />
            {/* Address field */}
            <View style={{
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text
                    style={[
                        CommonStyles.subHeading,
                        {
                            marginLeft: 20,
                            marginRight: 'auto',
                            marginTop: -2,
                            marginBottom: 5,
                        },
                    ]}>
                    Enter Full name:
                </Text>
                <FormTextInput
                    inputName={INPUT_FIELD_NAME.FULL_NAME}
                    control={control}
                    formState={formState}
                    defaultValue={stringConstants.EMPTY}
                    placeholder={INPUT_PLACE_HOLDER_CONSTANTS.FULL_NAME}
                    returnKeyType="next"
                />
            </View>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text
                    style={[
                        CommonStyles.subHeading,
                        {
                            marginLeft: 20,
                            marginRight: 'auto',
                            marginTop: -20,
                            marginBottom: 5,
                        },
                    ]}>
                    Enter Phone number:
                </Text>
                <FormTextInput
                    inputName={INPUT_FIELD_NAME.PHONE_NUMBER}
                    control={control}
                    formState={formState}
                    defaultValue={stringConstants.EMPTY}
                    placeholder={INPUT_PLACE_HOLDER_CONSTANTS.PHONE_NUMBER}
                    returnKeyType="next"
                />
            </View>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text
                    style={[
                        CommonStyles.subHeading,
                        {
                            marginLeft: 20,
                            marginRight: 'auto',
                            marginTop: -20,
                            marginBottom: 5,
                        },
                    ]}>
                    Enter Pincode:
                </Text>
                <FormTextInput
                    inputName={INPUT_FIELD_NAME.PinCode}
                    control={control}
                    formState={formState}
                    rules={FORM_INPUT_RULES.pinCodeRule}
                    defaultValue={stringConstants.EMPTY}
                    placeholder={INPUT_PLACE_HOLDER_CONSTANTS.PinCode}
                    returnKeyType="next"
                />
            </View>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text
                    style={[
                        CommonStyles.subHeading,
                        {
                            marginLeft: 20,
                            marginRight: 'auto',
                            marginTop: -20,
                            marginBottom: 5,
                        },
                    ]}>
                    Enter House number/Building Number:
                </Text>
                <FormTextInput
                    inputName={INPUT_FIELD_NAME.House}
                    control={control}
                    formState={formState}
                    rules={FORM_INPUT_RULES.houseRule}
                    defaultValue={stringConstants.EMPTY}
                    placeholder={INPUT_PLACE_HOLDER_CONSTANTS.House}
                    returnKeyType="next"
                />
            </View>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Text
                    style={[
                        CommonStyles.subHeading,
                        {
                            marginLeft: 20,
                            marginRight: 'auto',
                            marginTop: -20,
                            marginBottom: 5,
                        },
                    ]}>
                    Enter Street Name:
                </Text>
                <FormTextInput
                    inputName={INPUT_FIELD_NAME.Street}
                    control={control}
                    formState={formState}
                    defaultValue={stringConstants.EMPTY}
                    placeholder={INPUT_PLACE_HOLDER_CONSTANTS.Street}
                    returnKeyType="next"
                />
            </View>
            <Text
                style={[
                    CommonStyles.subHeading,
                    {
                        marginLeft: 20,
                        marginRight: 'auto',
                        marginTop: -20,
                        marginBottom: 5,
                    },
                ]}>
                Dropdown for address type:
            </Text>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <View style={{ width: '80%' }}>
                    <TouchableOpacity style={CommonStyles.button}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Regular', color: ColorConstants.White, marginTop: 10 }}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Addaddress