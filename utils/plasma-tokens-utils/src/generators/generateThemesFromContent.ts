import { ColorMode, GeneratedFiles, ThemeContent } from '../types';
import { jsToCss } from '../utils';

import { generateFile } from './generateFile';

// TODO: Использовать этот метод вместо generateThemes
export const generateThemesFromContent = (theme: ThemeContent) => {
    const files: GeneratedFiles = [];
    let indexContent = '';

    for (const [fileName, content] of Object.entries(theme)) {
        const lightTheme = `${fileName}__${ColorMode.LIGHT}`;
        const darkTheme = `${fileName}__${ColorMode.DARK}`;

        const colorsDarkContent = `${jsToCss(content.dark, ':root')}\n`;
        const colorsLightContent = `${jsToCss(content.light, ':root')}\n`;
        const typoContent = `\n${content.typo.filter(Boolean).join('\n\n')}\n`;

        indexContent += `export { ${lightTheme} } from './${lightTheme}';\n`;
        indexContent += `export { ${darkTheme} } from './${darkTheme}';\n`;

        files.push(
            generateFile(lightTheme, `[\`${colorsLightContent + typoContent}\`] as unknown as TemplateStringsArray`),
            generateFile(darkTheme, `[\`${colorsDarkContent + typoContent}\`] as unknown as TemplateStringsArray`),
        );
    }

    files.push({
        file: 'index.ts',
        content: indexContent,
    });

    return files;
};
