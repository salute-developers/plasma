import React from 'react';

import { tokens } from './Checkbox.tokens';

export const Done = () => (
    <div style={{ display: 'inline-flex' }}>
        <svg width="100%" viewBox="0 0 18 18" fill="none" style={{ width: `var(${tokens.triggerSize})` }}>
            <path
                fill={`var(${tokens.iconColor})`}
                d="m5.70711,8.15582c-0.39053,-0.39052 -1.02369,-0.39052 -1.41422,0c-0.39052,0.39053 -0.39052,1.02369 0,1.41422l3.70666,3.70666l6.71095,-6.70248c0.3908,-0.39027 0.3912,-1.02344 0.0009,-1.41421c-0.3903,-0.39077 -1.02344,-0.39117 -1.41421,-0.00089l-5.29674,5.29004l-2.29334,-2.29334z"
            />
        </svg>
    </div>
);

export const DoneThin = () => (
    <div style={{ display: 'inline-flex' }}>
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" style={{ width: `var(${tokens.triggerSize})` }}>
            <path d="M0.5 4L3.5 7L9.5 1" stroke={`var(${tokens.iconColor})`} />
        </svg>
    </div>
);

export const Indeterminate = () => (
    <div style={{ display: 'inline-flex' }}>
        <svg width="100%" viewBox="0 0 18 18" fill="none" style={{ width: `var(${tokens.triggerSize})` }}>
            <path strokeLinecap="round" strokeWidth="2" stroke={`var(${tokens.iconColor})`} d="m5.09449,9.0315l8,0" />
        </svg>
    </div>
);

export const IndeterminateThin = () => (
    <div style={{ display: 'inline-flex' }}>
        <svg width="100%" viewBox="0 0 18 18" fill="none" style={{ width: `var(${tokens.triggerSize})` }}>
            <path strokeLinecap="round" strokeWidth="1" stroke={`var(${tokens.iconColor})`} d="m5.09449,9.0315l8,0" />
        </svg>
    </div>
);
