import React from 'react';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    description: string;
    icon?: React.ReactNode;
    buttonText?: string;
    buttonAction?: () => void;
}
