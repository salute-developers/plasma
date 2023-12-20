import React from 'react';

import { IconProps } from '../IconRoot';

export const NoPhotoFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <mask
            id="mask0_38_215"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
                fill="currentColor"
            />
        </mask>
        <g mask="url(#mask0_38_215)">
            <rect width="36" height="36" fill="currentColor" />
        </g>
        <path
            d="M16.3405 22H17.7805L14.6125 13.6H13.1605L10.0285 22H11.3845L12.1405 19.888H15.5725L16.3405 22ZM13.8565 15.136L15.1525 18.736H12.5605L13.8565 15.136ZM24.5492 22H25.9892L22.8212 13.6H21.3692L18.2372 22H19.5932L20.3492 19.888H23.7812L24.5492 22ZM22.0652 15.136L23.3612 18.736H20.7692L22.0652 15.136Z"
            fill="currentColor"
        />
    </svg>
);
