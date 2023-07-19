import path from 'path';
import { generateThemesTokenDataGroups, generateShadowsToken } from '@salutejs/plasma-tokens-utils';
import {
    mageTypoProperties,
    sageTypoProperties,
    soulmateTypoProperties,
    rulerTypoProperties,
    plasmaTypoProperties,
    sbermarketTypoProperties,
} from '@salutejs/plasma-typo';

import { createProperties } from './creators';

const themeDir = path.join(__dirname, '../data/themes');

const themesColorTokenGroups = generateThemesTokenDataGroups(themeDir);
const shadowTokens = generateShadowsToken(themeDir);

const typoArchetypes = {
    mage: mageTypoProperties,
    sage: sageTypoProperties,
    soulmate: soulmateTypoProperties,
    ruler: rulerTypoProperties,
    plasma: plasmaTypoProperties,
    sbermarket: sbermarketTypoProperties,
};

/** ========================================================= **/
/** ============== Генерация токенов для натива ============= **/
/** ========================================================= **/
createProperties(themesColorTokenGroups, shadowTokens, typoArchetypes);
