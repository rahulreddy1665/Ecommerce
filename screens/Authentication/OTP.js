import Header from '../../components/CustomHeader/Header'
import { CommonStyles, OtpStyles, styles } from '../../styles/Globalstyles'
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { useNavigation } from '@react-navigation/native';
import { ColorConstants } from '../../constants/constants';

const OTP = () => {
    const CELL_COUNT = 6;
    const RESEND_OTP_TIME_LIMIT = 180;
    //otp
    let resendOtpTimerInterval
    const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
        RESEND_OTP_TIME_LIMIT,
    );

    //to restart  otp timer
    const startResendOtpTimer = () => {
        if (resendOtpTimerInterval) {
            clearInterval(resendOtpTimerInterval);
        }
        resendOtpTimerInterval = setInterval(() => {
            if (resendButtonDisabledTime <= 0) {
                clearInterval(resendOtpTimerInterval);
            } else {
                setResendButtonDisabledTime(resendButtonDisabledTime - 1);
            }
        }, 1000);
    };

    //on click of resend button
    const onResendOtpButtonPress = async () => {
        //clear input field
        setValue('')
        setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
        startResendOtpTimer();
        signInWithPhoneNumber();
        // resend OTP Api call
        // todo
    };

    //declarations for input field
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    //start timer on screen on launch
    useEffect(() => {
        startResendOtpTimer();
        return () => {
            if (resendOtpTimerInterval) {
                clearInterval(resendOtpTimerInterval);
            }
        };
    }, [resendButtonDisabledTime]);

    // var str = route.params.Phone.toString();
    // const { Phone } = route.params

    // For converting phone number using regex
    // var replaced = Phone.toString().replace(/.(?=.{3,}$)/g, '*');
    // const code = replaced
    const [confirm, SetConfirm] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()


    // For auto verifying the otp
    // useEffect(() => {
    //     // For fetching the otp
    //     RNOtpVerify.getOtp()
    //         .then(p =>
    //             RNOtpVerify.addListener(message => {
    //                 try {
    //                     if (message) {
    //                         const messageArray = message.split('\n');
    //                         if (messageArray[1]) {
    //                             const otp = /(\d{6})/g.exec(message)[1];
    //                             if (otp.length === 6) {
    //                                 setValue(otp)
    //                                 setLoading(false)
    //                                 onSubmit(otp)
    //                                 // to auto submit otp in 6 secs
    //                             }
    //                         }
    //                     }
    //                 } catch (error) {
    //                     console.log(error)
    //                 }
    //             }),
    //         )
    //         .catch(error => {
    //             console.log(error)
    //         });
    //     // remove listener on unmount
    //     return () => {
    //         RNOtpVerify.removeListener();
    //     };
    // }, [])


    // Verify function with firebase
    const onSubmit = async (e) => {
        console.log("hello")

    };

    return (
        <View style={CommonStyles.Container}>
            <Header text={'OTP'} />
            {/* Error Messages  */}
            <View style={OtpStyles.row}>
                <Text style={OtpStyles.heading}>Verification Code</Text>
                <Text style={OtpStyles.subheading2}>Please enter the code sent to "789"</Text>
                {error !== "" ?
                    <Text style={{ color: 'red', marginBottom: 10, marginTop: 10, textAlign: "center", fontFamily: "Poppins-Regular" }}>{error}</Text>
                    :
                    null}
                {/* Pincode input */}
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[styles.cellRoot, isFocused && styles.focusCell]}>
                            <Text style={styles.cellText}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
            </View>
            {/* Use this while getting auto verify OTP */}
            {/* <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity style={[OtpStyles.OTPButton2, { backgroundColor: loading ? ColorConstants.LIGHTCOLOR : ColorConstants.Ecommerce, }]} onPress={onSubmit} >
                    {loading ? <ActivityIndicator size="large" color="#FFFFFF" style={{ marginVertical: 8, }} /> : <Text style={{ textAlign: "center", marginVertical: 15, fontFamily: "Poppins-Regular", color: "#FFFFFF", fontSize: 15 }}>Verify</Text>}
                </TouchableOpacity>
            </View> */}

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity style={[OtpStyles.OTPButton2, { backgroundColor: ColorConstants.Ecommerce, }]} onPress={onSubmit} >
                    <Text style={{ textAlign: "center", marginVertical: 15, fontFamily: "Poppins-Regular", color: "#FFFFFF", fontSize: 15 }}>Verify</Text>
                </TouchableOpacity>
            </View>

            {/* Rules of getting delayed OTp */}
            <Text style={[OtpStyles.subheading, { marginTop: 40 }]}>Trouble Getting OTP?</Text>
            <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 20 }}>
                <Text>{'\u2022'}</Text>
                <Text style={{ marginLeft: 5, fontFamily: "Poppins-Regular", fontSize: 12, width: "90%" }}>Make sure to enter the correct phone number with the country code</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 20, marginLeft: 20, width: "90%" }}>
                <Text>{'\u2022'}</Text>
                {/* View for resend otp  */}
                {resendButtonDisabledTime > 0 ? (
                    <Text style={styles.resendCodeText}>Resend Authorisation Code in {resendButtonDisabledTime} sec</Text>
                ) : (
                    // Button for resending OTP
                    <TouchableOpacity
                    >
                        <View style={styles.resendCodeContainer}>
                            <Text style={styles.resendCode} > Resend Authorisation Code</Text>
                            <Text > in {resendButtonDisabledTime} sec</Text>
                        </View>
                    </TouchableOpacity >
                )
                }
            </View>
        </View>
    )
}

export default OTP