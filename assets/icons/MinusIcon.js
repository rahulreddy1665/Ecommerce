import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export const MinusIcon = props => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-minus"
            {...props}
        >
            <Path d="M5 12h14" />
        </Svg>
    );
};

