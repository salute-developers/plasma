import { attachToRoot, getDeprecatedVars } from '../utils';
import type { DataObject, GeneratedFiles, ThemeTokenDataGroups } from '../types';

import { generateFile } from './generateFile';
import { getThemeData } from './getThemeData';

export const generateThemes = (
    themes: Record<string, ThemeTokenDataGroups>,
    mixin: DataObject = {},
    withDeprecated = false,
    withKebabCase?: boolean,
) => {
    const files: GeneratedFiles = [];
    let indexContent = '';

    for (const [fileName, themeItem] of Object.entries(themes)) {
        const theme = getThemeData(themeItem, mixin, withKebabCase);
        const [deprecated, deprecatedThemeName] = withDeprecated ? getDeprecatedVars(fileName) : ['', ''];

        const fileNames = [fileName];
        if (withDeprecated && deprecated) {
            fileNames.push(deprecatedThemeName);
        }

        indexContent += `export { ${fileNames.join(', ')} } from './${fileName}';\n`;

        files.push(generateFile(fileName, attachToRoot(theme), deprecated));
    }

    files.push({
        file: 'index.ts',
        content: indexContent,
    });

    return files;
};
