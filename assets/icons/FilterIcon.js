import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Filtericon = props => {
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
            className="feather feather-filter"
            {...props}
        >
            <Path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
        </Svg>
    );
};

