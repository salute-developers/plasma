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

import {
    createRootIndex,
    createThemes,
    createLegacyTypo,
    createBrands,
    createDefaultBrand,
    createCSSStyles,
} from './creators';

// Генерация токенов для кастомных тем из data/themes
export const themesTokenDataGroups = generateThemesTokenDataGroups(path.join(__dirname, '../data/themes'));
// Добавляем старые токены для обратной совместимости
export const themesTokensSet = getThemesTokensFallback(themesTokenDataGroups);

const { default__dark, default__light, ...themesTokensFallback } = themesTokensSet;

const typoArchetypes = {
    mage: mageTypoObject,
    sage: sageTypoObject,
    soulmate: soulmateTypoObject,
    ruler: rulerTypoObject,
    plasma: plasmaTypoObject,
    sbermarket: sbermarketTypoObject,
};

const outDir = 'src';
fs.existsSync(outDir) || fs.mkdirSync(outDir);

/** ========================================================= **/
/** ================== Генерация index.ts =================== **/
/** ========================================================= **/
createRootIndex(outDir);
/** ========================================================= **/
/** ================= Генерация цветов и тем ================ **/
/** ========================================================= **/
createThemes(outDir, themesTokensFallback);
/** ========================================================= **/
/** ================== Генерация css стилей ================= **/
/** ========================================================= **/
createCSSStyles(outDir, themesTokensFallback, typoArchetypes);
/** ========================================================= **/
/** ======== Генерация тем, на основе созданных схем ======== **/
/** ========================================================= **/
createBrands(outDir, themesTokensFallback);
/** ========================================================= **/
/** ======== Генерация темы, на основе базовой схемы ======== **/
/** ========================================================= **/
createDefaultBrand(outDir, default__dark);
/** ========================================================= **/
/** ============ Генерация типографической сетки ============ **/
/** ========================================================= **/
createLegacyTypo(outDir);
