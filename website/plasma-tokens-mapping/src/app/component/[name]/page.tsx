import fs from 'fs-extra';
import path from 'path';

// import { ComponentBuilder, ModifierBuilder } from '../../modifier';
// import { Themes } from '../../components/ThemesServer';
import { getThemes } from '../../../data';

import { ThemeSwitch } from '../../../components/ThemeSwitch';
import { ComponentBuilder } from '../../../components/ComponentBuilder';

import { ThemeProvider, ThemeState } from '../../../state';

const PLASMA_DIR = process.env.PLASMA_DIR!;
const plasmaNewHopePath = path.join(PLASMA_DIR, 'packages/plasma-new-hope');

type QueryParams = {
    theme: string;
}

export default async function ComponentPage({ params, searchParams }: { params: { name: string }; searchParams?: QueryParams }) {
    const { name } = params;

    console.log('>___<');
    console.log(searchParams);

    const activeTheme = searchParams ? searchParams.theme : 'plasma_b2c';

    const componentDir = path.join(plasmaNewHopePath, 'src/components', name);
    const dirs = await fs.readdir(componentDir);

    const modDirs = dirs.filter((dir) => dir.startsWith('_'));

    const modsAPI = {} as Record<string, Array<string>>;

    for (const modName of modDirs) {
        const tokens = await fs.readJSON(path.join(componentDir, modName, 'tokens.json'));

        modsAPI[modName] = tokens;
    }

    const themes = await getThemes();
    const theme = themes.find(theme => theme.name === activeTheme)!

    console.log(theme);

    // TODO: improve typings
    const themeObj = (theme.value as unknown) as ThemeState;
    themeObj.name = theme.name;

    const componentTheme = ((theme.value as unknown) as ThemeState).components[name];


    return (
        <>
            <ThemeProvider key={theme.name} initialTheme={themeObj}>
                <ComponentBuilder
                    name={name}
                    theme={componentTheme}
                    variationsAPI={modsAPI}
                    themeSwitcher={<ThemeSwitch active={activeTheme} />}
                />
            </ThemeProvider>

            {/* <ComponentBuilder name={name} modsAPI={modsAPI} theme={theme} /> */}
        </>
    );
}
