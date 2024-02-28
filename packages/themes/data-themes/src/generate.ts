import fs from 'fs';
import path from 'path';
import { generateThemesTokenDataGroups, getThemesTokensFallback } from '@salutejs/plasma-tokens-utils';
import {
    mageTypoObject,
    plasmaTypoObject,
    rulerTypoObject,
    sageTypoObject,
    sbermarketTypoObject,
    soulmateTypoObject,
} from '@salutejs/plasma-typo';

import { createRootIndex, createThemes, createTokens, createDefaultTokens, createCSSStyles } from './creators';

const typoArchetypes = {
    mage: mageTypoObject,
    sage: sageTypoObject,
    soulmate: soulmateTypoObject,
    ruler: rulerTypoObject,
    plasma: plasmaTypoObject,
    sbermarket: sbermarketTypoObject,
};

export const generate = (themeNames: string[], archetype: keyof typeof typoArchetypes) => {
    // Генерация токенов для кастомных тем из data/themes
    const themesTokenDataGroups = generateThemesTokenDataGroups(path.join(__dirname, '../../data/themes'), themeNames);
    // Добавляем старые токены для обратной совместимости
    const themesTokensSet = getThemesTokensFallback(themesTokenDataGroups, false);

    const { default__dark, default__light, ...themesTokensFallback } = themesTokensSet;

    const outDir = 'src';
    fs.existsSync(outDir) || fs.mkdirSync(outDir);

    /** ========================================================= **/
    /** ================== Генерация index.ts =================== **/
    /** ========================================================= **/
    createRootIndex(outDir);
    /** ========================================================= **/
    /** ==================== Генерация тем ====================== **/
    /** ========================================================= **/
    createThemes(outDir, themesTokensFallback, typoArchetypes[archetype]);
    /** ========================================================= **/
    /** ================== Генерация css стилей ================= **/
    /** ========================================================= **/
    createCSSStyles(outDir, themesTokensFallback, typoArchetypes[archetype]);
    /** ========================================================= **/
    /** ====== Генерация токенов, на основе созданных схем ====== **/
    /** ========================================================= **/
    createTokens(outDir, themesTokensFallback);
    /** ========================================================= **/
    /** ====+== Генерация токенов, на основе базовой схемы ====== **/
    /** ========================================================= **/
    createDefaultTokens(outDir, default__light);
};
