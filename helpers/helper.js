export const onChangeByValueType = (inputProps, value, props) => {
    switch (props.inputName) {
        default:
            inputProps.field.onChange(value);
            break;
    }
};