import fs from 'fs';
import path from 'path';

import { generateColorThemesTokenDataGroups, getMapDeprecatedColorTokens } from '@salutejs/plasma-tokens-utils';

import { createRootIndex, createThemes, createLegacyTypo, createBrands } from './creators';

// Генерация токенов для кастомных тем из data/themes
export const themesColorTokenGroups = generateColorThemesTokenDataGroups(path.join(__dirname, '../data/themes'));
// Добавляем старые токены для обратной совместимости
export const themesColorTokenGroupsFallback = getMapDeprecatedColorTokens(themesColorTokenGroups);

const outDir = 'src';
fs.existsSync(outDir) || fs.mkdirSync(outDir);

/** ========================================================= **/
/** ================== Генерация index.ts =================== **/
/** ========================================================= **/
createRootIndex(outDir);
/** ========================================================= **/
/** ================= Генерация цветов и тем ================ **/
/** ========================================================= **/
createThemes(outDir, themesColorTokenGroupsFallback);
/** ========================================================= **/
/** ======== Генерация тем, на основе созданных схем ======== **/
/** ========================================================= **/
createBrands(outDir, themesColorTokenGroupsFallback);
/** ========================================================= **/
/** ============ Генерация типографической сетки ============ **/
/** ========================================================= **/
createLegacyTypo(outDir);

// TODO: при добавлении токенов в темы посмотреть на https://theme-ui.com/theme-spec/#styles
