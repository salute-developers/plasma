import { ROBO_COMMENT } from '../constants';
import type { TokenDataGroup, DataObject, GeneratedFiles } from '../types';
import { attachToRoot, extractTokenData, objectToCSSVariables, getDeprecatedVars } from '../utils';

import { generateFile } from './generateFile';

// Метод для поиска ключа, у которого может быть  префикс
const findExistedProp = (themeData: Record<string, string>, prop: string) =>
    Object.keys(themeData).find((data) => data.endsWith(prop)) || '';

/**
 * Генерация цветовых схем для создания глобального стиля.
 * @param {Record<string, TokenDataGroup<string>>>} colorThemes Цветовые схемы, разложенные по названиям
 * @return {GeneratedFiles}
 */
export const generateColorThemes = (
    colorThemes: Record<string, TokenDataGroup<string>>,
    mixin: DataObject = {},
    withDeprecated = false,
) => {
    const files: GeneratedFiles = [];
    let indexContent = ROBO_COMMENT;

    for (const [fileName, themeItem] of Object.entries(colorThemes)) {
        const { fromData, ...theme } = themeItem;
        const themeData = extractTokenData(theme);
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
                    ...objectToCSSVariables(themeData, 'colors', Boolean(fromData)),
                    ...objectToCSSVariables(mixin),
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
