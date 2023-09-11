'use client';

import { ThemeState, useTheme } from '../../state';

export const SaveTheme = () => {
    const theme = useTheme();
    const _theme = { ...theme } as Partial<ThemeState>;

    // TODO: how to keep it better in globale state?
    delete _theme.previewType;

    const onClick = async () => {
        const rawResponse = await fetch('/api/theme', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(_theme),
        });
        const response = await rawResponse.json();

        console.log(response);
        alert(response.status);
    };

    return (
        <button type="button" onClick={onClick}>
            SAVE_THEME
        </button>
    );
};
