import React, { PropsWithChildren } from 'react';

interface FieldProps {
    active: string;
    name: string;
}

export const FormField: React.FC<PropsWithChildren<FieldProps>> = (props) => {
    const { children, active, name } = props;

    if (name !== active) {
        return null;
    }

    return <>{children}</>;
};
