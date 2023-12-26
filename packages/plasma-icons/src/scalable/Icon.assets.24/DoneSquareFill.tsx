import React from 'react';

import { IconProps } from '../IconRoot';

export const DoneSquareFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 3C4.45507 3 3 4.45508 3 6.25V17.75C3 19.5449 4.45508 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25ZM18.0304 9.28033C18.3233 8.98744 18.3233 8.51256 18.0304 8.21967C17.7375 7.92678 17.2626 7.92678 16.9697 8.21967L10 15.1893L7.53038 12.7197C7.23748 12.4268 6.76261 12.4268 6.46972 12.7197C6.17682 13.0126 6.17682 13.4874 6.46972 13.7803L9.46972 16.7803C9.76261 17.0732 10.2375 17.0732 10.5304 16.7803L18.0304 9.28033Z"
            fill="currentColor"
        />
    </svg>
);
