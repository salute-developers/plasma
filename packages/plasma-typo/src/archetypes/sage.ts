import { createVariablesByArcheType, mergeTypoProps } from '../helpers';
import { CreateVariablesByArcheTypeProps } from '../types';

import { baseTypoL, baseTypoM, baseTypoS, typoCommonProps } from './mage';

const typo = {
    'dspl-l': {
        'font-weight': '400',
    },
    'dspl-l-bold': {
        'font-weight': '600',
    },
    'dspl-l-medium': {
        'font-weight': '500',
    },
    'dspl-m': {
        'font-weight': '400',
    },
    'dspl-m-bold': {
        'font-weight': '600',
    },
    'dspl-m-medium': {
        'font-weight': '500',
    },
    'dspl-s': {
        'font-weight': '400',
    },
    'dspl-s-bold': {
        'font-weight': '600',
    },
    'dspl-s-medium': {
        'font-weight': '500',
    },
    h1: {
        'font-weight': '400',
    },
    'h1-bold': {
        'font-weight': '600',
    },
    'h1-medium': {
        'font-weight': '500',
    },
    h2: {
        'font-weight': '400',
    },
    'h2-bold': {
        'font-weight': '600',
    },
    'h2-medium': {
        'font-weight': '500',
    },
    h3: {
        'font-weight': '400',
    },
    'h3-bold': {
        'font-weight': '600',
    },
    'h3-medium': {
        'font-weight': '500',
    },
    h4: {
        'font-weight': '400',
    },
    'h4-bold': {
        'font-weight': '600',
    },
    'h4-medium': {
        'font-weight': '500',
    },
    h5: {
        'font-weight': '400',
    },
    'h5-bold': {
        'font-weight': '600',
    },
    'h5-medium': {
        'font-weight': '500',
    },
    'body-l': {
        'font-weight': '400',
    },
    'body-l-bold': {
        'font-weight': '600',
    },
    'body-l-medium': {
        'font-weight': '500',
    },
    'body-m': {
        'font-weight': '400',
    },
    'body-m-bold': {
        'font-weight': '600',
    },
    'body-m-medium': {
        'font-weight': '500',
    },
    'body-s': {
        'font-weight': '400',
    },
    'body-s-bold': {
        'font-weight': '600',
    },
    'body-s-medium': {
        'font-weight': '500',
    },
    'body-xs': {
        'font-weight': '400',
    },
    'body-xs-bold': {
        'font-weight': '600',
    },
    'body-xs-medium': {
        'font-weight': '500',
    },
    'body-xxs': {
        'font-weight': '400',
    },
    'body-xxs-bold': {
        'font-weight': '600',
    },
    'body-xxs-medium': {
        'font-weight': '500',
    },
    'text-l': {
        'font-weight': '400',
    },
    'text-l-bold': {
        'font-weight': '600',
    },
    'text-l-medium': {
        'font-weight': '500',
    },
    'text-m': {
        'font-weight': '400',
    },
    'text-m-bold': {
        'font-weight': '600',
    },
    'text-m-medium': {
        'font-weight': '500',
    },
    'text-s': {
        'font-weight': '400',
    },
    'text-s-bold': {
        'font-weight': '600',
    },
    'text-s-medium': {
        'font-weight': '500',
    },
    'text-xs': {
        'font-weight': '400',
    },
    'text-xs-bold': {
        'font-weight': '600',
    },
    'text-xs-medium': {
        'font-weight': '500',
    },
};

const displayFontFamily = 'SB Serif Display';
const textFontFamily = 'SB Sans Text';

export const sageTypoProperties = {
    s: mergeTypoProps(baseTypoS, typo, typoCommonProps(displayFontFamily, textFontFamily)),
    m: mergeTypoProps(baseTypoM, typo, typoCommonProps(displayFontFamily, textFontFamily)),
    l: mergeTypoProps(baseTypoL, typo, typoCommonProps(displayFontFamily, textFontFamily)),
};

export const sageTypoObject: CreateVariablesByArcheTypeProps = {
    displayFontFamily,
    textFontFamily,
    typoS: mergeTypoProps(baseTypoS, typo),
    typoM: mergeTypoProps(baseTypoM, typo),
    typoL: mergeTypoProps(baseTypoL, typo),
    getTypoCommonProps: typoCommonProps,
};

export const sage = createVariablesByArcheType(sageTypoObject);
