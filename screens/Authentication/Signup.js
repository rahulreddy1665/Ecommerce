import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CommonStyles, SignupStyles } from '../../styles/Globalstyles'
import LottieView from 'lottie-react-native';
import { ColorConstants, FORM_INPUT_RULES, INPUT_FIELD_NAME, INPUT_PLACE_HOLDER_CONSTANTS, stringConstants } from '../../constants/constants';
import { FormTextInput } from '../../components/Inputs/RegistrationInput';
import { PhoneIcon } from '../../assets/icons/PhoneIcon';
import { useForm } from "react-hook-form"
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    // variables for reacthook forms
    const { control, formState, handleSubmit } = useForm();

    const navigation = useNavigation()

    const onSubmit = () => {
        navigation.navigate("OTP")
    }
    return (
        <View style={[CommonStyles.Container, { alignItems: 'center', backgroundColor: ColorConstants.White }]}>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20, marginTop: 100 }}>Welcome </Text>
            <LottieView
                source={require('../../assets/login.json')}
                style={{ width: 200, height: 200, marginBottom: 30 }}
                autoPlay
            />
            {/* Login Form */}
            <View style={SignupStyles.centeredView}>
                <FormTextInput
                    inputName={INPUT_FIELD_NAME.PHONE_NUMBER}
                    control={control}
                    formState={formState}
                    maxLength={10}
                    defaultValue={stringConstants.EMPTY}
                    rules={FORM_INPUT_RULES.phoneNumberRule}
                    placeholder={INPUT_PLACE_HOLDER_CONSTANTS.PHONE_NUMBER}
                    keyboardType="numeric"
                    returnKeyType="next"
                    icon={<PhoneIcon style={{ marginRight: 5 }} />}
                />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={SignupStyles.OTPButton} onPress={handleSubmit(onSubmit)} >
                        <Text style={{ textAlign: "center", marginVertical: 15, fontFamily: "Poppins-Regular", color: "#FFFFFF", fontSize: 15 }}>Get OTP</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Signup