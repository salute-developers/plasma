import fs from 'fs';
import path from 'path';

import type { ThemeTokenDataGroups } from '../types';

import { createColorBrands } from './createColorBrands';
import { createTypos } from './createTypos';
import { createShadows } from './createShadows';
import { createBorderRadius } from './createBorderRadius';

const propsDir = path.join('properties');
const propsColorDir = path.join(propsDir, 'color');
const propsShadowDir = path.join(propsDir, 'shadow');
const propsBorderRadiusDir = path.join(propsDir, 'borderRadius');
const propsTypoDir = path.join(propsDir, 'typo');

export const createProperties = (
    themesColorTokenGroups: Record<string, Record<string, ThemeTokenDataGroups>>,
    shadowTokens: Record<string, any>,
    borderRadiusTokens: Record<string, any>,
    typoArchetypes: Record<string, any>,
) => {
    fs.existsSync(propsDir) || fs.mkdirSync(propsDir);

    createColorBrands(propsColorDir, themesColorTokenGroups);
    createShadows(propsShadowDir, shadowTokens);
    createBorderRadius(propsBorderRadiusDir, borderRadiusTokens);
    createTypos(propsTypoDir, typoArchetypes);
};
