import type { TokenDataGroup, DataObject, GeneratedFiles } from '../types';
import { attachToRoot, extractTokenData, objectToCSSVariables, getDeprecatedVars } from '../utils';

import { generateFile } from './generateFile';

// TODO: https://github.com/salute-developers/plasma/issues/512

/**
 * Генерация цветовых схем для создания глобального стиля.
 * @param {Record<string, TokenDataGroup<string>>>} colorThemes Цветовые схемы, разложенные по названиям
 * @return {GeneratedFiles}
 */
export const generateColorThemes = (
    colorThemes: Record<string, TokenDataGroup<string>>,
    mixin: DataObject = {},
    withDeprecated = false,
    fallbackColorThemes?: Record<string, TokenDataGroup<string>>,
) => {
    const files: GeneratedFiles = [];
    let indexContent = '';

    for (const [fileName, themeItem] of Object.entries(colorThemes)) {
        const themeData = extractTokenData(themeItem);
        const fallbackThemeData = fallbackColorThemes ? extractTokenData(fallbackColorThemes[fileName]) : {};
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
                    ...objectToCSSVariables(themeData, 'colors'),
                    ...objectToCSSVariables(mixin),
                    ...objectToCSSVariables(fallbackThemeData, '', false, true),
                    color: themeData.text,
                    backgroundColor: themeData.background,
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
