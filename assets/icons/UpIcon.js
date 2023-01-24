import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const UpIcon = props => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-up"
            {...props}
        >
            <Path d="m18 15-6-6-6 6" />
        </Svg>
    );
};

