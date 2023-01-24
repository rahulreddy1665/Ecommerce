import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const LeftIcon = props => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill={props.fill}
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left"
            {...props}
        >
            <Path d="M19 12H5M12 19l-7-7 7-7" />
        </Svg>
    );
};

