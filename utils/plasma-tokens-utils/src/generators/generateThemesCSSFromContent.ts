import { ColorMode, GeneratedFiles, ThemeContent } from '../types';
import { jsToCss } from '../utils';

import { generateCommonFile } from './generateFile';

// TODO: Использовать этот метод вместо generateThemesCSS
export const generateThemesCSSFromContent = (theme: ThemeContent) => {
    const files: GeneratedFiles = [];

    for (const [fileName, content] of Object.entries(theme)) {
        const lightTheme = `${fileName}__${ColorMode.LIGHT}`;
        const darkTheme = `${fileName}__${ColorMode.DARK}`;
        const moduleTheme = `${fileName}.module`;

        const colorsDarkContent = `${jsToCss(content.dark, ':root')}\n`;
        const colorsLightContent = `${jsToCss(content.light, ':root')}\n`;
        const colorModuleContent = `${[jsToCss(content.dark, ':root'), jsToCss(content.light, ':root')]
            .join('\n')
            .replace(':root', `.${ColorMode.DARK}`)
            .replace(':root', `.${ColorMode.LIGHT}`)}\n`;

        const typoContent = `\n${content.typo.filter(Boolean).join('\n\n')}\n`;
        const typoModuleContent = `\n${content.typo
            .filter(Boolean)
            .join('\n\n')
            .replace(/:root/gim, `.${ColorMode.LIGHT},\n  .${ColorMode.DARK}`)}\n`;

        files.push(
            generateCommonFile(lightTheme, 'css', `${colorsLightContent + typoContent}`),
            generateCommonFile(darkTheme, 'css', `${colorsDarkContent + typoContent}`),
            generateCommonFile(moduleTheme, 'css', `${colorModuleContent + typoModuleContent}`),
        );
    }

    return files;
};
