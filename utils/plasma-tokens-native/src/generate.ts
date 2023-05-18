import path from 'path';
import { generateThemesTokenDataGroups } from '@salutejs/plasma-tokens-utils';
import {
    mageTypoProperties,
    sageTypoProperties,
    soulmateTypoProperties,
    rulerTypoProperties,
    plasmaTypoProperties,
    sbermarketTypoProperties,
} from '@salutejs/plasma-typo';

// Директория создаётся после выполнения команды prepare
import { sbermarketShadows } from '../data/shadows';

import { createProperties } from './creators';

const themesColorTokenGroups = generateThemesTokenDataGroups(path.join(__dirname, '../data/themes'));

const shadowTokens = {
    sbermarket: sbermarketShadows,
};

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
