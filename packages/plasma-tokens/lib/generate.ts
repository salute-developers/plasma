import fs from 'fs-extra';

import { createRootIndex, createThemes, createLegacyTypo, createProperties, createBrands } from './creators';

import {
    themesColorTokenGroups,
    themesColorTokenGroupsFallback,
    shadowTokens,
    typoArchetypes,
} from './tokensGenerator';

const outDir = 'src';
fs.ensureDirSync(outDir);

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
/** ========================================================= **/
/** ============== Генерация токенов для натива ============= **/
/** ========================================================= **/
createProperties(themesColorTokenGroups, shadowTokens, typoArchetypes);

// TODO: при добавлении токенов в темы посмотреть на https://theme-ui.com/theme-spec/#styles
