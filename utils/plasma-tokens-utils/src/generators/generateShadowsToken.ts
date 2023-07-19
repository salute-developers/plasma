import fs from 'fs';
import path from 'path';

export const generateShadowsToken = (themesFolder: string) => {
    if (!fs.existsSync(themesFolder)) {
        return {};
    }

    return fs
        .readdirSync(themesFolder, { withFileTypes: true })
        .filter((item) => item.isFile() && path.extname(path.join(themesFolder, item.name)) === '.json')
        .reduce((colorSchemas, item) => {
            const fileContent = fs.readFileSync(path.join(themesFolder, item.name), 'utf-8');
            const shadowTokens = JSON.parse(fileContent).shadow;
            const themeName = path.parse(item.name).name;

            return {
                ...colorSchemas,
                [themeName]: {
                    ...shadowTokens,
                },
            };
        }, {});
};
