import React from 'react';

export interface Props {
    description: string;
    icon?: React.ReactElement;
    buttonText?: string;
    buttonAction?: () => void;
}
