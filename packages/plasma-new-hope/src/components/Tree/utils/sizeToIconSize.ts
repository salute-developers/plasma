export const sizeToIconSize = (size?: string, variant?: string) => {
    if (size === 'xs' || (variant === 'tight' && size === 's')) return 'xs';

    return 's';
};
