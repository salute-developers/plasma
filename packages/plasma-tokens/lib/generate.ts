import fs from 'fs';

import { createRootIndex, createThemes, createLegacyTypo, createBrands } from './creators';

import { themesColorTokenGroupsFallback } from './tokensGenerator';

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
