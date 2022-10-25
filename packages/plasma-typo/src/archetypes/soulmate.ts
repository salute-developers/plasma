import { createVariablesByArcheType, mergeTypoProps } from '../helpers';

import { baseTypoL, baseTypoM, baseTypoS, typoCommonProps } from './mage';

const typo = {
    'dspl-l': {
        'font-weight': '400',
    },
    'dspl-l-bold': {
        'font-weight': '700',
    },
    'dspl-m': {
        'font-weight': '400',
    },
    'dspl-m-bold': {
        'font-weight': '700',
    },
    'dspl-s': {
        'font-weight': '400',
    },
    'dspl-s-bold': {
        'font-weight': '700',
    },
    h1: {
        'font-weight': '400',
    },
    'h1-bold': {
        'font-weight': '700',
    },
    h2: {
        'font-weight': '400',
    },
    'h2-bold': {
        'font-weight': '700',
    },
    h3: {
        'font-weight': '400',
    },
    'h3-bold': {
        'font-weight': '700',
    },
    h4: {
        'font-weight': '400',
    },
    'h4-bold': {
        'font-weight': '700',
    },
    h5: {
        'font-weight': '400',
    },
    'h5-bold': {
        'font-weight': '700',
    },
    'body-l': {
        'font-weight': '400',
    },
    'body-l-bold': {
        'font-weight': '700',
    },
    'body-m': {
        'font-weight': '400',
    },
    'body-m-bold': {
        'font-weight': '700',
    },
    'body-s': {
        'font-weight': '400',
    },
    'body-s-bold': {
        'font-weight': '700',
    },
    'body-xs': {
        'font-weight': '400',
    },
    'body-xs-bold': {
        'font-weight': '700',
    },
    'body-xxs': {
        'font-weight': '400',
    },
    'body-xxs-bold': {
        'font-weight': '700',
    },
    'text-l': {
        'font-weight': '400',
    },
    'text-l-bold': {
        'font-weight': '700',
    },
    'text-m': {
        'font-weight': '400',
    },
    'text-m-bold': {
        'font-weight': '700',
    },
    'text-s': {
        'font-weight': '400',
    },
    'text-s-bold': {
        'font-weight': '700',
    },
    'text-xs': {
        'font-weight': '400',
    },
    'text-xs-bold': {
        'font-weight': '700',
    },
};

const displayFontFamily = 'SB Sans Display';
const textFontFamily = 'SB Sans Text';

export const soulmateTypoProperties = {
    s: mergeTypoProps(baseTypoS, typo, typoCommonProps(displayFontFamily, textFontFamily)),
    m: mergeTypoProps(baseTypoM, typo, typoCommonProps(displayFontFamily, textFontFamily)),
    l: mergeTypoProps(baseTypoL, typo, typoCommonProps(displayFontFamily, textFontFamily)),
};

export const soulmate = createVariablesByArcheType({
    displayFontFamily,
    textFontFamily,
    typoS: mergeTypoProps(baseTypoS, typo),
    typoM: mergeTypoProps(baseTypoM, typo),
    typoL: mergeTypoProps(baseTypoL, typo),
});
