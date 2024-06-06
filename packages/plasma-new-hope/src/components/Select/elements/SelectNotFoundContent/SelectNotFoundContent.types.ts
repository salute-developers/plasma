import React from 'react';

export interface Props {
    icon?: React.ReactElement;
    description: string;
    buttonText?: string;
    buttonAction?: () => void;
}
