import { createVariablesByArcheType, mergeTypoProps } from '../helpers';
import type { CreateVariablesByArcheTypeProps, TypoProps } from '../types';

export const baseTypoS: TypoProps = {
    'dspl-l': {
        'font-size': '5.5rem',
        'font-weight': '300',
        'line-height': '5.75rem',
    },
    'dspl-l-bold': {
        'font-size': '5.5rem',
        'font-weight': '600',
        'line-height': '5.75rem',
    },
    'dspl-m': {
        'font-size': '3.5rem',
        'font-weight': '300',
        'line-height': '3.875rem',
    },
    'dspl-m-bold': {
        'font-size': '3.5rem',
        'font-weight': '600',
        'line-height': '3.875rem',
    },
    'dspl-s': {
        'font-size': '2.5rem',
        'font-weight': '300',
        'line-height': '2.875rem',
    },
    'dspl-s-bold': {
        'font-size': '2.5rem',
        'font-weight': '600',
        'line-height': '2.875rem',
    },
    h1: {
        'font-size': '1.75rem',
        'font-weight': '400',
        'line-height': '2.125rem',
    },
    'h1-bold': {
        'font-size': '1.75rem',
        'font-weight': '600',
        'line-height': '2.125rem',
    },
    h2: {
        'font-size': '1.5rem',
        'font-weight': '400',
        'line-height': '1.875rem',
    },
    'h2-bold': {
        'font-size': '1.5rem',
        'font-weight': '600',
        'line-height': '1.875rem',
    },
    h3: {
        'font-size': '1.25rem',
        'font-weight': '400',
        'line-height': '1.625rem',
    },
    'h3-bold': {
        'font-size': '1.25rem',
        'font-weight': '600',
        'line-height': '1.625rem',
    },
    h4: {
        'font-size': '1.125rem',
        'font-weight': '400',
        'line-height': '1.5rem',
    },
    'h4-bold': {
        'font-size': '1.125rem',
        'font-weight': '600',
        'line-height': '1.5rem',
    },
    h5: {
        'font-size': '1rem',
        'font-weight': '400',
        'line-height': '1.375rem',
    },
    'h5-bold': {
        'font-size': '1rem',
        'font-weight': '600',
        'line-height': '1.375rem',
    },
    'body-l': {
        'font-size': '1.125rem',
        'font-weight': '400',
        'line-height': '1.375rem',
    },
    'body-l-bold': {
        'font-size': '1.125rem',
        'font-weight': '600',
        'line-height': '1.375rem',
    },
    'body-m': {
        'font-size': '1rem',
        'font-weight': '400',
        'line-height': '1.25rem',
    },
    'body-m-bold': {
        'font-size': '1rem',
        'font-weight': '600',
        'line-height': '1.25rem',
    },
    'body-s': {
        'font-size': '0.875rem',
        'font-weight': '400',
        'line-height': '1.125rem',
    },
    'body-s-bold': {
        'font-size': '0.875rem',
        'font-weight': '600',
        'line-height': '1.125rem',
    },
    'body-xs': {
        'font-size': '0.75rem',
        'font-weight': '400',
        'line-height': '0.875rem',
    },
    'body-xs-bold': {
        'font-size': '0.75rem',
        'font-weight': '600',
        'line-height': '0.875rem',
    },
    'body-xxs': {
        'font-size': '0.625rem',
        'font-weight': '400',
        'line-height': '0.75rem',
    },
    'body-xxs-bold': {
        'font-size': '0.625rem',
        'font-weight': '600',
        'line-height': '0.75rem',
    },
    'text-l': {
        'font-size': '1.125rem',
        'font-weight': '400',
        'line-height': '1.625rem',
    },
    'text-l-bold': {
        'font-size': '1.125rem',
        'font-weight': '600',
        'line-height': '1.625rem',
    },
    'text-m': {
        'font-size': '1rem',
        'font-weight': '400',
        'line-height': '1.5rem',
    },
    'text-m-bold': {
        'font-size': '1rem',
        'font-weight': '600',
        'line-height': '1.5rem',
    },
    'text-s': {
        'font-size': '0.875rem',
        'font-weight': '400',
        'line-height': '1.25rem',
    },
    'text-s-bold': {
        'font-size': '0.875rem',
        'font-weight': '600',
        'line-height': '1.25rem',
    },
    'text-xs': {
        'font-size': '0.75rem',
        'font-weight': '400',
        'line-height': '1rem',
    },
    'text-xs-bold': {
        'font-size': '0.75rem',
        'font-weight': '600',
        'line-height': '1rem',
    },
};

export const baseTypoM = {
    'dspl-l': {
        'font-size': '7rem',
        'font-weight': '300',
        'line-height': '7rem',
    },
    'dspl-l-bold': {
        'font-size': '7rem',
        'font-weight': '600',
        'line-height': '7rem',
    },
    'dspl-m': {
        'font-size': '4.5rem',
        'font-weight': '300',
        'line-height': '4.75rem',
    },
    'dspl-m-bold': {
        'font-size': '4.5rem',
        'font-weight': '600',
        'line-height': '4.75rem',
    },
    'dspl-s': {
        'font-size': '3rem',
        'font-weight': '300',
        'line-height': '3.375rem',
    },
    'dspl-s-bold': {
        'font-size': '3rem',
        'font-weight': '600',
        'line-height': '3.375rem',
    },
    h1: {
        'font-size': '2.5rem',
        'font-weight': '400',
        'line-height': '2.875rem',
    },
    'h1-bold': {
        'font-size': '2.5rem',
        'font-weight': '600',
        'line-height': '2.875rem',
    },
    h2: {
        'font-size': '1.75rem',
        'font-weight': '400',
        'line-height': '2.125rem',
    },
    'h2-bold': {
        'font-size': '1.75rem',
        'font-weight': '600',
        'line-height': '2.125rem',
    },
    h3: {
        'font-size': '1.25rem',
        'font-weight': '400',
        'line-height': '1.625rem',
    },
    'h3-bold': {
        'font-size': '1.25rem',
        'font-weight': '600',
        'line-height': '1.625rem',
    },
    h4: {
        'font-size': '1.125rem',
        'font-weight': '400',
        'line-height': '1.5rem',
    },
    'h4-bold': {
        'font-size': '1.125rem',
        'font-weight': '600',
        'line-height': '1.5rem',
    },
    h5: {
        'font-size': '1rem',
        'font-weight': '400',
        'line-height': '1.375rem',
    },
    'h5-bold': {
        'font-size': '1rem',
        'font-weight': '600',
        'line-height': '1.375rem',
    },
    'body-l': {
        'font-size': '1.125rem',
        'font-weight': '400',
        'line-height': '1.375rem',
    },
    'body-l-bold': {
        'font-size': '1.125rem',
        'font-weight': '600',
        'line-height': '1.375rem',
    },
    'body-m': {
        'font-size': '1rem',
        'font-weight': '400',
        'line-height': '1.25rem',
    },
    'body-m-bold': {
        'font-size': '1rem',
        'font-weight': '600',
        'line-height': '1.25rem',
    },
    'body-s': {
        'font-size': '0.875rem',
        'font-weight': '400',
        'line-height': '1.125rem',
    },
    'body-s-bold': {
        'font-size': '0.875rem',
        'font-weight': '600',
        'line-height': '1.125rem',
    },
    'body-xs': {
        'font-size': '0.75rem',
        'font-weight': '400',
        'line-height': '0.875rem',
    },
    'body-xs-bold': {
        'font-size': '0.75rem',
        'font-weight': '600',
        'line-height': '0.875rem',
    },
    'body-xxs': {
        'font-size': '0.625rem',
        'font-weight': '400',
        'line-height': '0.75rem',
    },
    'body-xxs-bold': {
        'font-size': '0.625rem',
        'font-weight': '600',
        'line-height': '0.75rem',
    },
    'text-l': {
        'font-size': '1.25rem',
        'font-weight': '400',
        'line-height': '1.75rem',
    },
    'text-l-bold': {
        'font-size': '1.25rem',
        'font-weight': '600',
        'line-height': '1.75rem',
    },
    'text-m': {
        'font-size': '1rem',
        'font-weight': '400',
        'line-height': '1.5rem',
    },
    'text-m-bold': {
        'font-size': '1rem',
        'font-weight': '600',
        'line-height': '1.5rem',
    },
    'text-s': {
        'font-size': '0.875rem',
        'font-weight': '400',
        'line-height': '1.25rem',
    },
    'text-s-bold': {
        'font-size': '0.875rem',
        'font-weight': '600',
        'line-height': '1.25rem',
    },
    'text-xs': {
        'font-size': '0.75rem',
        'font-weight': '400',
        'line-height': '1rem',
    },
    'text-xs-bold': {
        'font-size': '0.75rem',
        'font-weight': '600',
        'line-height': '1rem',
    },
};

export const baseTypoL = {
    'dspl-l': {
        'font-size': '8rem',
        'font-weight': '300',
        'line-height': '8rem',
    },
    'dspl-l-bold': {
        'font-size': '8rem',
        'font-weight': '600',
        'line-height': '8rem',
    },
    'dspl-m': {
        'font-size': '5.5rem',
        'font-weight': '300',
        'line-height': '5.75rem',
    },
    'dspl-m-bold': {
        'font-size': '5.5rem',
        'font-weight': '600',
        'line-height': '5.75rem',
    },
    'dspl-s': {
        'font-size': '4rem',
        'font-weight': '300',
        'line-height': '4.25rem',
    },
    'dspl-s-bold': {
        'font-size': '4rem',
        'font-weight': '600',
        'line-height': '4.25rem',
    },
    h1: {
        'font-size': '3rem',
        'font-weight': '400',
        'line-height': '3.375rem',
    },
    'h1-bold': {
        'font-size': '3rem',
        'font-weight': '600',
        'line-height': '3.375rem',
    },
    h2: {
        'font-size': '2rem',
        'font-weight': '400',
        'line-height': '2.375rem',
    },
    'h2-bold': {
        'font-size': '2rem',
        'font-weight': '600',
        'line-height': '2.375rem',
    },
    h3: {
        'font-size': '1.5rem',
        'font-weight': '400',
        'line-height': '1.875rem',
    },
    'h3-bold': {
        'font-size': '1.5rem',
        'font-weight': '600',
        'line-height': '1.875rem',
    },
    h4: {
        'font-size': '1.25rem',
        'font-weight': '400',
        'line-height': '1.625rem',
    },
    'h4-bold': {
        'font-size': '1.25rem',
        'font-weight': '600',
        'line-height': '1.625rem',
    },
    h5: {
        'font-size': '1.125rem',
        'font-weight': '400',
        'line-height': '1.5rem',
    },
    'h5-bold': {
        'font-size': '1.125rem',
        'font-weight': '600',
        'line-height': '1.5rem',
    },
    'body-l': {
        'font-size': '1.125rem',
        'font-weight': '400',
        'line-height': '1.375rem',
    },
    'body-l-bold': {
        'font-size': '1.125rem',
        'font-weight': '600',
        'line-height': '1.375rem',
    },
    'body-m': {
        'font-size': '1rem',
        'font-weight': '400',
        'line-height': '1.25rem',
    },
    'body-m-bold': {
        'font-size': '1rem',
        'font-weight': '600',
        'line-height': '1.25rem',
    },
    'body-s': {
        'font-size': '0.875rem',
        'font-weight': '400',
        'line-height': '1.125rem',
    },
    'body-s-bold': {
        'font-size': '0.875rem',
        'font-weight': '600',
        'line-height': '1.125rem',
    },
    'body-xs': {
        'font-size': '0.75rem',
        'font-weight': '400',
        'line-height': '0.875rem',
    },
    'body-xs-bold': {
        'font-size': '0.75rem',
        'font-weight': '600',
        'line-height': '0.875rem',
    },
    'body-xxs': {
        'font-size': '0.625rem',
        'font-weight': '400',
        'line-height': '0.75rem',
    },
    'body-xxs-bold': {
        'font-size': '0.625rem',
        'font-weight': '600',
        'line-height': '0.75rem',
    },
    'text-l': {
        'font-size': '1.5rem',
        'font-weight': '400',
        'line-height': '2rem',
    },
    'text-l-bold': {
        'font-size': '1.5rem',
        'font-weight': '600',
        'line-height': '2rem',
    },
    'text-m': {
        'font-size': '1.125rem',
        'font-weight': '400',
        'line-height': '1.625rem',
    },
    'text-m-bold': {
        'font-size': '1.125rem',
        'font-weight': '600',
        'line-height': '1.625rem',
    },
    'text-s': {
        'font-size': '0.875rem',
        'font-weight': '400',
        'line-height': '1.25rem',
    },
    'text-s-bold': {
        'font-size': '0.875rem',
        'font-weight': '600',
        'line-height': '1.25rem',
    },
    'text-xs': {
        'font-size': '0.75rem',
        'font-weight': '400',
        'line-height': '1rem',
    },
    'text-xs-bold': {
        'font-size': '0.75rem',
        'font-weight': '600',
        'line-height': '1rem',
    },
};

export const typoCommonProps = (displayFontFamily: string, textFontFamily: string) => ({
    'dspl-l': {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    'dspl-l-bold': {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    'dspl-m': {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    'dspl-m-bold': {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    'dspl-s': {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    'dspl-s-bold': {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    h1: {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    'h1-bold': {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    h2: {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    'h2-bold': {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    h3: {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    'h3-bold': {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    h4: {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    'h4-bold': {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    h5: {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    'h5-bold': {
        'font-family': displayFontFamily,
        'letter-spacing': 'normal',
        'font-style': 'normal',
    },
    'body-l': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'body-l-bold': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'body-m': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'body-m-bold': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'body-s': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'body-s-bold': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'body-xs': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'body-xs-bold': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'body-xxs': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'body-xxs-bold': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'text-l': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'text-l-bold': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'text-m': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'text-m-bold': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'text-s': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'text-s-bold': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02emm',
        'font-style': 'normal',
    },
    'text-xs': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
    'text-xs-bold': {
        'font-family': textFontFamily,
        'letter-spacing': '-0.02em',
        'font-style': 'normal',
    },
});

const displayFontFamily = 'SB Sans Display';
const textFontFamily = 'SB Sans Text';

export const mageTypoProperties = {
    s: mergeTypoProps(baseTypoS, typoCommonProps(displayFontFamily, textFontFamily)),
    m: mergeTypoProps(baseTypoM, typoCommonProps(displayFontFamily, textFontFamily)),
    l: mergeTypoProps(baseTypoL, typoCommonProps(displayFontFamily, textFontFamily)),
};

export const mageTypoObject: CreateVariablesByArcheTypeProps = {
    displayFontFamily,
    textFontFamily,
    typoS: baseTypoS,
    typoM: baseTypoM,
    typoL: baseTypoL,
    getTypoCommonProps: typoCommonProps,
};

export const mage = createVariablesByArcheType(mageTypoObject);
