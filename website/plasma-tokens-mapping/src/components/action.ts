'use server';

import { getTheme, saveTheme } from '../data';

function isString(data: FormDataEntryValue | null): data is string {
    return typeof data === 'string';
}

export async function saveForm(formData: FormData) {
    console.log('Saving Theme');
    const themeName = formData.get('name');
    const themeData = formData.get('data');

    if (!isString(themeName)) {
        throw new Error('Name should be string');
    }
    if (!isString(themeData)) {
        throw new Error('Data should be string');
    }

    const theme = await getTheme(themeName);

    console.log(theme);
    // TODO: parse error ??
    theme.value = JSON.parse(themeData as string);
    await saveTheme(theme);

    return 'succes';
}
