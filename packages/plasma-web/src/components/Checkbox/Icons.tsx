import React from 'react';
import { white } from '@salutejs/plasma-tokens-b2b';
import styled from 'styled-components';

const sizesRem = {
    s: 0.875, // 14px
    m: 1.25, // 20px
};

interface SvgProps {
    size: string | number;
    color?: string;
}

const DoneSvg: React.FC<SvgProps> = ({ size, color }) => (
    <svg width="100%" viewBox="0 0 18 18" fill="none" style={{ width: `${size}rem` }}>
        <path
            fill={color}
            d="m5.70711,8.15582c-0.39053,-0.39052 -1.02369,-0.39052 -1.41422,0c-0.39052,0.39053 -0.39052,1.02369 0,1.41422l3.70666,3.70666l6.71095,-6.70248c0.3908,-0.39027 0.3912,-1.02344 0.0009,-1.41421c-0.3903,-0.39077 -1.02344,-0.39117 -1.41421,-0.00089l-5.29674,5.29004l-2.29334,-2.29334z"
        />
    </svg>
);
const IndeterminateSvg: React.FC<SvgProps> = ({ size, color }) => (
    <svg width="100%" viewBox="0 0 18 18" fill="none" style={{ width: `${size}rem` }}>
        <path strokeLinecap="round" strokeWidth="2" stroke={color} d="m5.09449,9.0315l8,0" />
    </svg>
);

interface IconProps {
    size: keyof typeof sizesRem;
    color?: string;
    className?: string;
}

const StyledRoot = styled.div`
    display: inline-flex;
`;

// TODO: https://github.com/salute-developers/plasma/issues/206
export const Done: React.FC<IconProps> = ({ size, color = white, className }) => {
    return (
        <StyledRoot className={className}>
            <DoneSvg color={color} size={sizesRem[size]} />
        </StyledRoot>
    );
};

// TODO: https://github.com/salute-developers/plasma/issues/206
export const Indeterminate: React.FC<IconProps> = ({ size, color = white, className }) => {
    return (
        <StyledRoot className={className}>
            <IndeterminateSvg color={color} size={sizesRem[size]} />
        </StyledRoot>
    );
};
