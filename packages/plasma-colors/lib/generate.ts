import fs from 'fs';
import path from 'path';

import { getDirectoryContent } from './utils';
import { createIndex, createTypes, createPalette } from './creators';

const palette = getDirectoryContent(path.join(__dirname, '../palette'));

const outDir = 'src';

fs.existsSync(outDir) || fs.mkdirSync(outDir);

/** ========================================================= **/
/** ================== Генерация index.ts =================== **/
/** ========================================================= **/
createIndex(outDir);
/** ========================================================= **/
/** ================== Генерация types.ts =================== **/
/** ========================================================= **/
createTypes(outDir);
/** ========================================================= **/
/** =================== Генерация palette =================== **/
/** ========================================================= **/
createPalette(outDir, palette);
