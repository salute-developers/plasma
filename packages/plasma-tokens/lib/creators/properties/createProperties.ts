import fs from 'fs-extra';
import path from 'path';

import { createColorBrands, createTypos, createShadows } from '.';
import { ThemeTokenDataGroups } from '../../tokensGenerator/types';

const propsDir = path.join('properties');
const propsColorDir = path.join(propsDir, 'color');
const propsShadowDir = path.join(propsDir, 'shadow');
const propsTypoDir = path.join(propsDir, 'typo');

export const createProperties = (
    themesColorTokenGroups: Record<string, ThemeTokenDataGroups>,
    shadowTokens: Record<string, any>,
    typoArchetypes: Record<string, any>,
) => {
    fs.ensureDirSync(propsDir);

    createColorBrands(propsColorDir, themesColorTokenGroups);
    createTypos(propsTypoDir, typoArchetypes);
    createShadows(propsShadowDir, shadowTokens);
};
