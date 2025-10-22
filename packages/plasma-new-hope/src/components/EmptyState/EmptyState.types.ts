import React from 'react';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    description: React.ReactNode;
    icon?: React.ReactNode;
    buttonText?: string;
    buttonAction?: () => void;
}
