import React from 'react';

import { ComboboxBoundlerProps, ComboboxBoundlerPropsComponent } from './Combobox.types';

export const boundCombobox: (args: ComboboxBoundlerProps) => React.FC<ComboboxBoundlerPropsComponent> = ({
    base: ComboboxBase,
    baseForm: ComboboxBaseForm,
}) => (rest) => {
    if (rest.formType) {
        return <ComboboxBaseForm {...rest} />;
    }

    if (!rest.formType) {
        return <ComboboxBase {...rest} />;
    }

    return null;
};
