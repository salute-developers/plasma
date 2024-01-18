import React from 'react';

import { IconProps } from '../IconRoot';

export const Search: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.75 3.5C6.29822 3.5 3.5 6.29822 3.5 9.75C3.5 13.2018 6.29822 16 9.75 16C13.2018 16 16 13.2018 16 9.75C16 6.29822 13.2018 3.5 9.75 3.5ZM2 9.75C2 5.46979 5.46979 2 9.75 2C14.0302 2 17.5 5.46979 17.5 9.75C17.5 11.62 16.8377 13.3353 15.7348 14.6742L20.7803 19.7197C21.0732 20.0126 21.0732 20.4874 20.7803 20.7803C20.4874 21.0732 20.0126 21.0732 19.7197 20.7803L14.6742 15.7348C13.3353 16.8377 11.62 17.5 9.75 17.5C5.46979 17.5 2 14.0302 2 9.75Z"
            fill="currentColor"
        />
    </svg>
);
