import React from 'react';

import { IconProps } from '../IconRoot';

export const BlockOutline: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.543 5.48234L18.5177 17.457C21.3202 14.1175 21.1512 9.13034 18.0104 5.98959C14.8697 2.84884 9.88255 2.67976 6.543 5.48234ZM17.457 18.5177L5.48234 6.543C2.67976 9.88255 2.84884 14.8697 5.98959 18.0104C9.13034 21.1512 14.1175 21.3202 17.457 18.5177ZM4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C22.9763 8.83418 22.9763 15.1658 19.0711 19.0711C15.1658 22.9763 8.83418 22.9763 4.92893 19.0711C1.02369 15.1658 1.02369 8.83418 4.92893 4.92893Z"
            fill="currentColor"
        />
    </svg>
);
