import { sbermarketShadows } from '../../data/shadows';

import {
    mageTypoProperties,
    sageTypoProperties,
    soulmateTypoProperties,
    rulerTypoProperties,
    plasmaTypoProperties,
    sbermarketTypoProperties,
} from '@salutejs/plasma-typo';

export { themesColorTokenGroups, themesColorTokenGroupsFallback } from './generateColorTokens';

export const typoArchetypes = {
    mage: mageTypoProperties,
    sage: sageTypoProperties,
    soulmate: soulmateTypoProperties,
    ruler: rulerTypoProperties,
    plasma: plasmaTypoProperties,
    sbermarket: sbermarketTypoProperties,
};

export const shadowTokens = {
    sbermarket: sbermarketShadows,
};
