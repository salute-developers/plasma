import fs from 'fs';
import path from 'path';
import { ROBO_COMMENT, HTML_FONT_SIZE } from '@salutejs/plasma-tokens-utils';

import { typo } from '../../../data';

export const createRootIndex = (srcDir: string) => {
    const rootIndexTsDir = path.join(srcDir, 'index.ts');

    const indexTsContent = `${ROBO_COMMENT}import * as colors from './colors';
    import * as colorValues from './colors/values';
    import * as typography from './typography';
    import * as typographyValues from './typographyValues';
    
    export { colors };
    export { colorValues };
    export { typography };
    export { typographyValues };
    
    export const sberPortalScale = ${typo.sberPortal.scale};
    export const sberBoxScale = ${typo.sberBox.scale};
    export const mobileScale = ${typo.mobile.scale};
    export const scalingPixelBasis = ${HTML_FONT_SIZE};
    
    export * from './colors';
    export * from './typography';
    export * from './typographyValues';
    export * from './typo';
    export * from './themes';
    `;

    fs.writeFileSync(rootIndexTsDir, indexTsContent);
};
