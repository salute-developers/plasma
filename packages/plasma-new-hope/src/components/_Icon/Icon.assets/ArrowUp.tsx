import React from 'react';

import { IconProps } from '../IconRoot';

export const ArrowUp: React.FC<IconProps> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2923 4.37521C12.4973 4.38009 12.6914 4.46873 12.8294 4.6205L17.8294 10.1205C18.108 10.427 18.0854 10.9013 17.7789 11.18C17.4724 11.4586 16.9981 11.436 16.7195 11.1295L13.0244 7.06496V18.8749C13.0244 19.2891 12.6886 19.6249 12.2744 19.6249C11.8602 19.6249 11.5244 19.2891 11.5244 18.8749V6.93566L7.30474 11.1553C7.01185 11.4482 6.53698 11.4482 6.24408 11.1553C5.95119 10.8624 5.95119 10.3876 6.24408 10.0947L11.7441 4.59467C11.8891 4.44964 12.0872 4.37033 12.2923 4.37521Z"
                fill="currentColor"
                fillOpacity="0.96"
            />
        </svg>
    );
};
