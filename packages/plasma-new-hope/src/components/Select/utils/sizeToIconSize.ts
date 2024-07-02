import { SelectProps } from '../Select.types';

export const sizeToIconSize = (size?: string, variant?: SelectProps['variant']) => {
    if (size === 'xs' || (size === 's' && variant === 'tight')) return 'xs';

    return 's';
};
