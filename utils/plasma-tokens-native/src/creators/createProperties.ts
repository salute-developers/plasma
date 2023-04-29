import fs from 'fs';
import path from 'path';

import type { ThemeTokenDataGroups } from '../types';

import { createColorBrands } from './createColorBrands';
import { createTypos } from './createTypos';
import { createShadows } from './createShadows';

const propsDir = path.join('properties');
const propsColorDir = path.join(propsDir, 'color');
const propsShadowDir = path.join(propsDir, 'shadow');
const propsTypoDir = path.join(propsDir, 'typo');

export const createProperties = (
    themesColorTokenGroups: Record<string, Record<string, ThemeTokenDataGroups>>,
    shadowTokens: Record<string, any>,
    typoArchetypes: Record<string, any>,
) => {
    fs.existsSync(propsDir) || fs.mkdirSync(propsDir);

    createColorBrands(propsColorDir, themesColorTokenGroups);
    createTypos(propsTypoDir, typoArchetypes);
    createShadows(propsShadowDir, shadowTokens);
};
