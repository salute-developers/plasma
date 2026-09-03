export const iconStyleOptions = [
    { label: 'Outline', value: 'outline' },
    { label: 'Outline Bold', value: 'outlineBold' },
    { label: 'Fill', value: 'fill' },
] as const;

export type IconStyle = typeof iconStyleOptions[number]['value'];

export const defaultIconStyle: IconStyle = 'outline';

export const isIconStyle = (value: string): value is IconStyle =>
    iconStyleOptions.some((option) => option.value === value);

export const matchesIconStyle = (iconName: string, iconStyle: IconStyle) =>
    iconName.toLocaleLowerCase().endsWith(iconStyle.toLocaleLowerCase());
