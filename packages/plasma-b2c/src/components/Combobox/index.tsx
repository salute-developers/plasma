import React, { forwardRef, ComponentProps, FC, ForwardedRef, ReactElement } from 'react';
import { ItemOption, ComboboxProps, boundCombobox, getFormComponentGenerator } from '@salutejs/plasma-new-hope';

import { config } from './Combobox.config';
import { Combobox as ComboboxOld } from './Legacy';
import { Combobox as ComboboxNew } from './Combobox';

export { ComboboxDivider, ComboboxFooter, ComboboxGroup, ComboboxHeader, ComboboxItem } from './Legacy';

export type { ComboboxOldProps as ComboboxProps } from '@salutejs/plasma-new-hope/styled-components';

function fixedForwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
): (props: P & React.RefAttributes<T>) => React.ReactElement | null {
    return forwardRef(render as any) as any;
}

type PropsFromConfig = keyof typeof config['variations'];

type PropsOld = ComponentProps<typeof ComboboxOld> & { items?: never };

type PropsNew<T extends ItemOption> = Omit<ComboboxProps<T>, PropsFromConfig> &
    Pick<ComponentProps<typeof ComboboxNew>, PropsFromConfig>;

type CommonProps<T extends ItemOption> = PropsOld | PropsNew<T>;

const ComboboxComponent = <T extends ItemOption>(props: CommonProps<T>, ref: React.ForwardedRef<HTMLInputElement>) => {
    if (props.items) {
        return <ComboboxNew ref={ref} {...(props as any)} />;
    }

    return <ComboboxOld ref={ref} {...props} />;
};

const ComboboxFixedRef = fixedForwardRef(ComboboxComponent);

export const Combobox = boundCombobox({
    base: ComboboxFixedRef as FC<ComboboxProps>,
    baseForm: getFormComponentGenerator(ComboboxFixedRef as FC<ComboboxProps>),
}) as <T extends ItemOption>(props: PropsNew<T> & { ref?: ForwardedRef<HTMLInputElement> }) => ReactElement | null;
