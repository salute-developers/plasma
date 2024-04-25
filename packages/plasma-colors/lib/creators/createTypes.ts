import fs from 'fs';
import path from 'path';

import { ROBO_COMMENT } from '../utils';

export const createTypes = (srcDir: string) => {
    const typesDir = path.join(srcDir, 'types.ts');

    const typesTsContent = `${ROBO_COMMENT}
    export type PlasmaSaturation = 1000 | 950 | 900 | 850 | 800 | 700 | 600 | 500 | 400 | 300 | 250 | 200 | 150 | 100 | 50;
    export type PlasmaColor = Record</* sat */ PlasmaSaturation, /* hex */ string>;
    export type PlasmaPalette = Record</* hue */ string, PlasmaColor>;
`;

    fs.writeFileSync(typesDir, typesTsContent);
};
