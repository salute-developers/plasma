export const appearances = ['default', 'clear', 'transparent'];
export const iconSizeMap: Record<string, string> = {
    l: '1rem',
    xs: '0.625rem',
};

export const getIconSize = (size: string): string => iconSizeMap[size] ?? '0.75rem';
