import { ComboboxProps } from '../Combobox.types';

export const sizeToIconSize = (size?: string, variant?: ComboboxProps['variant']) => {
    if (size === 'xs' || (size === 's' && variant === 'tight')) return 'xs';

    return 's';
};
