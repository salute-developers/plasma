import type { TextFieldSliderProps } from '../TextFieldSlider.types';

type FormatterArgs = {
    decimalScale?: number;
    thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';
    thousandSeparator?: boolean | string;
    decimalSeparator?: string;
    fixedDecimalScale?: boolean;
    allowNegative?: boolean;
    allowLeadingZeros?: boolean;
};

export const createFormatterArgs = (
    props: Pick<
        TextFieldSliderProps,
        'decimalScale' | 'thousandsGroupStyle' | 'thousandSeparator' | 'decimalSeparator' | 'fixedDecimalScale'
    >,
    options?: Partial<FormatterArgs>,
): FormatterArgs => ({
    decimalScale: props.decimalScale,
    thousandsGroupStyle: props.thousandsGroupStyle,
    thousandSeparator: props.thousandSeparator,
    decimalSeparator: props.decimalSeparator,
    fixedDecimalScale: props.fixedDecimalScale,
    allowNegative: true,
    allowLeadingZeros: false,
    ...options,
});

export const createNormalizedFormatterArgs = (
    props: Pick<
        TextFieldSliderProps,
        'decimalScale' | 'thousandsGroupStyle' | 'thousandSeparator' | 'decimalSeparator' | 'fixedDecimalScale'
    >,
): FormatterArgs => ({
    ...createFormatterArgs(props),
    thousandSeparator: '',
    decimalSeparator: '.',
    thousandsGroupStyle: 'none',
});
