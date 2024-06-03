import { SelectNewProps } from '../SelectNew.types';

export const sizeToIconSize = (size?: string, variant?: SelectNewProps['variant']) => {
    if (size === 'xs' || (size === 's' && variant === 'tight')) return 'xs';

    return 's';
};
