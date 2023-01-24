import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View, } from 'react-native';
import { onChangeByValueType } from "../../helpers/helper";
import { InputStyles } from "../../styles/Globalstyles";

// Custom inout filed using react-hook forms
export const FormTextInput = props => {
    return (
        <React.Fragment>
            <View style={[InputStyles.View, { borderColor: props.formState.errors[props.inputName]?.message ? 'red' : "#F5F5F5" }]}>
                <Controller
                    name={props.inputName}
                    control={props.control}
                    defaultValue={props.defaultValue}
                    autoCompleteType='off'
                    rules={props.rules}
                    render={inputProps => {
                        return (
                            <TextInput
                                {...props}
                                value={inputProps.field.value}
                                onChangeText={value =>
                                    onChangeByValueType(inputProps, value, props)
                                }
                                style={[props.style, { color: "#3d3d3d" }]}
                                placeholderTextColor="#3d3d3d"
                            />
                        );
                    }}
                />
            </View>
            {/* For getting error message */}
            <View>
                <Text style={InputStyles.error}>
                    {props.formState.errors[props.inputName]?.message}
                </Text>
            </View>
        </React.Fragment>
    );
};