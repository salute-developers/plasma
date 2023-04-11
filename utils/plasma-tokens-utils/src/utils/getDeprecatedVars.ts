import { upperFirstLetter } from './upperFirstLetter';

const deprecatedRegexList = new RegExp('salutejs_');

export const getDeprecatedVars = (name: string) => {
    const fileName = name.replace(deprecatedRegexList, '');

    const [themeName, themeMode] = fileName.split('__');

    if (!themeName || !themeMode) {
        return ['', ''];
    }

    const deprecatedThemeName = `${themeMode}${upperFirstLetter(themeName)}`;
    const deprecated = `
/** @deprecated использовать вместо этого ${name} */
export const ${deprecatedThemeName} = ${name};`;

    return [deprecated, deprecatedThemeName];
};
