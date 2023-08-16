'use client';

import { useTheme } from '../../state';

export const SaveTheme = () => {
    const theme = useTheme();

    const onClick = async () => {
        const rawResponse = await fetch('/api/theme', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(theme),
        });
        const response = await rawResponse.json();

        console.log(response);
    };

    return (
        <button type="button" onClick={onClick}>
            SAVE_THEME
        </button>
    );
};
