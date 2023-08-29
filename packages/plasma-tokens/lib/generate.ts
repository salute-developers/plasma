import fs from 'fs';
import path from 'path';
import { generateThemesTokenDataGroups, getThemesTokensFallback } from '@salutejs/plasma-tokens-utils';

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
createCSSStyles(outDir, themesTokensFallback);
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

// TODO: при добавлении токенов в темы посмотреть на https://theme-ui.com/theme-spec/#styles
