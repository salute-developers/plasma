import React, { useContext } from 'react';
import type { FC } from 'react';
import { IconRoot } from '@salutejs/plasma-icons';
import type { IconProps } from '@salutejs/plasma-icons';

import { Context } from '../../store';

type AbstractIconProps = {
    name: string;
    component: FC<IconProps>;
    isDeprecate: boolean;
};

export const AbstractIcon = ({ name, component: Component, isDeprecate }: AbstractIconProps) => {
    const { state } = useContext(Context);

    const props = {
        size: name === state.wizardItemName ? state.size.value : state.gridItemsSize.value,
        color: name === state.wizardItemName ? state.color.value : 'inherit',
    };

    // INFO: В том случае когда у нас иконка из старого набора (нет фактического файла для нужного размера),
    // INFO: используем обертку IconRoot.
    // INFO: В противном случае используем компонент иконки.
    return isDeprecate ? <IconRoot icon={Component} {...props} /> : <Component {...props} />;
};
