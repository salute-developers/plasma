import { ROBO_COMMENT } from '../constants';
import type { TokenDataGroup, DataObject, GeneratedFiles } from '../types';
import { attachToRoot, extractTokenData, objectToCSSVariables } from '../utils';

import { generateFile } from './generateFile';

/**
 * Генерация цветовых схем для создания глобального стиля.
 * @param {Record<string, TokenDataGroup<string>>>} colorThemes Цветовые схемы, разложенные по названиям
 * @return {GeneratedFiles}
 */
export const generateColorThemes = (colorThemes: Record<string, TokenDataGroup<string>>, mixin: DataObject = {}) => {
    const files: GeneratedFiles = [];
    let indexContent = ROBO_COMMENT;

    for (const [fileName, themeItem] of Object.entries(colorThemes)) {
        const { fromData, ...theme } = themeItem;

        const themeData = extractTokenData(theme);
        indexContent += `export { ${fileName} } from './${fileName}';\n`;

        files.push(
            generateFile(
                fileName,
                attachToRoot({
                    ...objectToCSSVariables(themeData, 'colors', Boolean(fromData)),
                    ...objectToCSSVariables(mixin),
                    color: themeData.text,
                    backgroundColor: themeData.background,
                }),
            ),
        );
    }

    files.push({
        file: 'index.ts',
        content: indexContent,
    });

    return files;
};
