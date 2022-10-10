import fs from 'fs';
import path from 'path';
import { TokenData, writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';

import { themesFolder } from './constants';
import { Theme, ThemeMode, TokenGroup, TokensByType, TokenType } from './types';

type ThemeGroupTokens = Theme['dark'];

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

    <body style="margin: 0">
        <div id="root">${tokens}</div>
    </body>
</html>
`;

const createTokenTemplate = (name: string, token: TokenData, primary?: string, tertiary?: string) => {
    return `
        <div style="display: flex; flex-direction: column; font-size: 14px; margin-bottom: 24px; color: ${primary}">
            <div style="display: flex; align-items: center">
                <div style="height: 44px; width: 44px; border-radius: 50%; margin-right: 16px; background: ${token.value}"></div>
                <span style="margin-right: 4px; font-weight: 600;">${name}</span>
                <span style="color: ${tertiary}; flex: 1;">${token.value}</span>
            </div>
            <div style="margin-top: 12px; ">${token.comment}</div>
        </div>
    `;
};

const mapGroupOnGroupTitle: Record<TokenGroup, string> = {
    textIcons: 'Text&Icons',
    controlsSurfaces: 'Controls&Surfaces',
    backgrounds: 'Backgrounds',
    overlay: 'Overlay',
};

const createGroupTemplate = (mode: ThemeMode, group: TokenGroup, theme: Theme) => {
    return `
        <div style="font-size: 48px; font-weight: 600">${mapGroupOnGroupTitle[group]}</div>
        <div>
            ${Object.entries(theme[mode][group] as TokensByType)
                .map(
                    ([type, tokens]) => `
                <div style="display: flex; margin-bottom: 60px">
                    <div style="margin-right: 40px; font-size: 14px; font-weight: 660;">${type}</div>
                    <div style="display: grid; grid-gap: 10px; grid-template-columns: repeat(3, 1fr); padding: 20px; border-radius: 50px; width: 100%; background: ${
                        (mode === 'light' && type === 'onDark') || (mode === 'dark' && type !== 'onLight')
                            ? theme.dark.backgrounds.default?.backgroundPrimary.value
                            : theme.light.backgrounds.default?.backgroundPrimary.value
                    };">
                        ${Object.entries(tokens as Record<string, TokenData>)
                            .map(
                                ([name, token]) => `
                            ${createTokenTemplate(
                                name,
                                token,
                                theme[mode].textIcons[type === 'inverse' ? 'default' : (type as TokenType)]?.textPrimary
                                    .value,
                                theme[mode].textIcons[type === 'inverse' ? 'default' : (type as TokenType)]
                                    ?.textTertiary.value,
                            )}
                        `,
                            )
                            .join('')}
                    </div>
                </div>
            `,
                )
                .join('')}
        </div>
    `;
};

const createModeTemplate = (mode: ThemeMode, theme: Theme) => {
    const name = theme.config.name;

    return `
        <div style="margin-bottom: 50px; padding: 30px; border-radius: 50px; background: ${
            theme[mode].backgrounds.default?.backgroundPrimary.value
        }; color: ${theme[mode].textIcons.default?.textPrimary.value}">
            <div style="font-size: 24px; font-weight: 600;">${
                mode === 'light' ? `🌝 Light ${name}` : `🌚 Dark ${name}`
            }</div>
            ${(Object.keys(theme[mode]) as TokenGroup[])
                .filter((groupName) => mapGroupOnGroupTitle[groupName])
                .map((groupName) => createGroupTemplate(mode, groupName, theme))
                .join('')}
        </div>
    `;
};

export const generateThemeHtml = (themeName: string) => {
    const fileContent = fs.readFileSync(path.join(themesFolder, `${themeName}.json`), 'utf-8');

    const theme: Theme = JSON.parse(fileContent);
    const lightTemplate = createModeTemplate('light', theme);
    const darkTemplate = createModeTemplate('dark', theme);

    const template = `
        <div style="display: flex; flex-direction: column;">
            ${lightTemplate}
            ${darkTemplate}
        </div>
    `;
    const html = createHtmlTemplate(theme.config.name, template);

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
