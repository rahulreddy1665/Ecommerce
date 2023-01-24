import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CIcon = props => {
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
            className="feather feather-package"
            {...props}
        >
            <Path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <Path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
        </Svg>
    );
};

