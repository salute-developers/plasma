import React, { forwardRef } from 'react';

import { ComboboxBoundlerProps, ComboboxBoundlerPropsComponent } from './Combobox.types';

export const boundCombobox: (args: ComboboxBoundlerProps) => React.FC<ComboboxBoundlerPropsComponent> = ({
    base: ComboboxBase,
    baseForm: ComboboxBaseForm,
}) =>
    forwardRef<HTMLSelectElement, ComboboxBoundlerPropsComponent>((rest, ref) => {
        if (rest.formType) {
            return <ComboboxBaseForm ref={ref} {...rest} />;
        }

        if (!rest.formType) {
            return <ComboboxBase {...rest} />;
        }

        return null;
    });
