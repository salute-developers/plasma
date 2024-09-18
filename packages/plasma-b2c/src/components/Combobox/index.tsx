import React, { forwardRef, ComponentProps } from 'react';

import { Combobox as ComboboxOld } from './Legacy';
import { Combobox as ComboboxNew } from './Combobox';

export { ComboboxDivider, ComboboxFooter, ComboboxGroup, ComboboxHeader, ComboboxItem } from './Legacy';

export type { ComboboxOldProps as ComboboxProps } from '@salutejs/plasma-new-hope/styled-components';

type PropsOld = ComponentProps<typeof ComboboxOld> & { items?: never };
type PropsNew = ComponentProps<typeof ComboboxNew>;

type CommonProps = PropsOld | PropsNew;

const Combobox = forwardRef<HTMLInputElement, CommonProps>((props, ref) => {
    if (props.items) {
        return <ComboboxNew ref={ref} {...props} />;
    }

    return <ComboboxOld ref={ref} {...props} />;
});

export { Combobox };
