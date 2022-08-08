import fs from 'fs';
import path from 'path';
import { getCSSVariableName, TokenDataGroup, writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';

import { themesFolder } from './constants';
import { theme2ColorTokenDataGroups } from './generateTokens';
import { ThemeTokenDataGroups } from './types';

const createHtmlTemplate = (themeName: string, tokens: string) => `
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="data:,">
        <title>${themeName}</title>
    </head>

    <body>
        <div id="root">${tokens}</div>
    </body>
</html>
`;

const createColorTokenTemplates = (tokens: TokenDataGroup<string>, textColor: string) => {
    return Object.entries(tokens)
        .map(
            ([name, token]) => `
        <div style="display:flex; align-items: center; margin-bottom: 8px;">
            <div style="border-radius: 50%; height: 72px; min-width: 72px; margin-right: 8px; background-color: ${
                token.value
            }"></div>
            <div style="display: flex; flex-direction: column; color: ${textColor};">
                <span>${token.comment}</span>
                <span>${name}</span>
                <span>${getCSSVariableName(`colors-${name}`)}</span>
            </div>
        </div>
    `,
        )
        .join('');
};

const createColorModeTokenTemplates = (themeDataGroups: ThemeTokenDataGroups) => {
    return `
        <div>
            ${Object.entries(themeDataGroups)
                .map(
                    ([mode, values]) => `
                <h2>${mode}</h2>
                <div style="display: grid; grid-gap: 10px; grid-template-columns: repeat(3, 1fr); padding: 5px; border-radius: 6px; background-color: ${
                    values.backgroundPrimary.value
                }">
                    ${createColorTokenTemplates(values, values.textPrimary.value)}
                </div>
            `,
                )
                .join('')}
        </div>
    `;
};

export const generateThemeHtml = (themeName: string) => {
    const fileContent = fs.readFileSync(path.join(themesFolder, `${themeName}.json`), 'utf-8');

    const theme = JSON.parse(fileContent);
    const themeTokens = theme2ColorTokenDataGroups(theme);

    const tokensTemplate = createColorModeTokenTemplates(themeTokens);
    const html = createHtmlTemplate(theme.config.name, tokensTemplate);

    writeGeneratedToFS(themesFolder, [
        {
            file: `${themeName}.html`,
            content: html,
        },
    ]);
};

export const generateThemesHtmlView = () => {
    if (!fs.existsSync(themesFolder)) {
        process.exit();
    }

    fs.readdirSync(themesFolder, { withFileTypes: true })
        .filter((item) => item.isFile() && path.extname(path.join(themesFolder, item.name)) === '.json')
        .map((item) => {
            generateThemeHtml(item.name.replace('.json', ''));
        });
};
