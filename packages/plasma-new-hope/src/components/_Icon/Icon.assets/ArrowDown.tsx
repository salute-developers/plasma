import React from 'react';

import { IconProps } from '../IconRoot';

export const ArrowDown: React.FC<IconProps> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7744 4.375C12.1886 4.375 12.5244 4.71079 12.5244 5.125V17.0642L16.7441 12.8446C17.037 12.5517 17.5119 12.5517 17.8047 12.8446C18.0976 13.1375 18.0976 13.6123 17.8047 13.9052L12.3047 19.4052C12.1597 19.5503 11.9616 19.6296 11.7566 19.6247C11.5515 19.6198 11.3574 19.5312 11.2195 19.3794L6.21946 13.8794C5.94083 13.5729 5.96342 13.0986 6.26991 12.8199C6.57641 12.5413 7.05074 12.5639 7.32937 12.8704L11.0244 16.9349V5.125C11.0244 4.71079 11.3602 4.375 11.7744 4.375Z"
                fill="currentColor"
                fillOpacity="0.96"
            />
        </svg>
    );
};
