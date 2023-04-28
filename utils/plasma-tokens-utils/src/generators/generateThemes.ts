import type { DataObject, GeneratedFiles, ThemeTokenDataGroups } from '../types';
import {
    attachToRoot,
    extractTokenData,
    getDeprecatedVars,
    objectToCSSShadowVariables,
    objectToCSSVariables,
} from '../utils';

import { generateFile } from './generateFile';

// Метод для поиска ключа, у которого может быть  префикс
const findExistedProp = (themeData: Record<string, string>, prop: string) =>
    Object.keys(themeData).find((data) => data.endsWith(prop)) || '';

export const generateThemes = (
    themes: Record<string, ThemeTokenDataGroups>,
    mixin: DataObject = {},
    withDeprecated = false,
) => {
    const withPrefixDesign = false;
    const files: GeneratedFiles = [];
    let indexContent = '';

    for (const [fileName, themeItem] of Object.entries(themes)) {
        const { color = {}, shadow = {} } = themeItem;
        const themeData = extractTokenData(color);
        const themeShadow = extractTokenData(shadow);

        const [deprecated, deprecatedThemeName] = withDeprecated ? getDeprecatedVars(fileName) : ['', ''];

        const fileNames = [fileName];
        if (withDeprecated && deprecated) {
            fileNames.push(deprecatedThemeName);
        }

        indexContent += `export { ${fileNames.join(', ')} } from './${fileName}';\n`;

        files.push(
            generateFile(
                fileName,
                attachToRoot({
                    ...objectToCSSVariables(themeData, '', withPrefixDesign),
                    ...objectToCSSShadowVariables(themeShadow),
                    ...objectToCSSVariables(mixin, '', withPrefixDesign),
                    color: themeData[findExistedProp(themeData, 'text')],
                    backgroundColor: themeData[findExistedProp(themeData, 'background')],
                }),
                deprecated,
            ),
        );
    }

    files.push({
        file: 'index.ts',
        content: indexContent,
    });

    return files;
};
