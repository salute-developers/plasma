import fs from 'fs-extra';
import path from 'path';

import { createLegacyBase, createLegacyTheme, createColorBrands, createTypos, createShadows } from '.';
import { ThemeTokenDataGroups } from '../../tokensGenerator/types';

const propsDir = path.join('properties');
const propsColorDir = path.join(propsDir, 'color');
const propsColorBrandsDir = path.join(propsColorDir, 'brands');
const propsShadowDir = path.join(propsDir, 'shadow');
const propsTypoDir = path.join(propsDir, 'typo');

export const createProperties = (
    themesColorTokenGroups: Record<string, ThemeTokenDataGroups>,
    shadowTokens: Record<string, any>,
    typoArchetypes: Record<string, any>,
) => {
    fs.ensureDirSync(propsDir);

    createLegacyBase(propsColorDir);
    createLegacyTheme(propsColorDir);

    createColorBrands(propsColorBrandsDir, themesColorTokenGroups);
    createTypos(propsTypoDir, typoArchetypes);
    createShadows(propsShadowDir, shadowTokens);
};
