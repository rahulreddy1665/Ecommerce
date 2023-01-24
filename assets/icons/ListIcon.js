import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ListIcon = props => {
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
            className="feather feather-save"
            {...props}
        >
            <Path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <Path d="M17 21v-8H7v8M7 3v5h8" />
        </Svg>
    );
};

