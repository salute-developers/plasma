import { ColorStop, gradientParser } from './gradientParser';

export const getColors = (value: string, defaultColor: string, defaultGradient: string): ColorStop[] => {
    if (value?.includes('gradient')) {
        const isConic = value.includes('conic');
        if (isConic) {
            console.warn('Конические градиенты пока не поддерживаются');
            return gradientParser(defaultGradient).colorStops;
        }
        return gradientParser(value).colorStops;
    }

    return [{ value: value || defaultColor, left: 0 }];
};

export const formatInputValues = (value: number, min: number, max: number): number => {
    if (Number.isNaN(value)) return min;
    return Math.min(Math.max(value, min), max);
};

export const round = (val: number) => {
    return Math.round(val);
};
