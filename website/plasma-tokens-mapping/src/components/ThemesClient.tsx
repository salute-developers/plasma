'use client';

import { ChangeEventHandler, useState } from 'react';

export interface ThemesSelectProps {
    themes: Array<{
        name: string;
        value: JSON;
    }>;
}

export function ThemesSelect(props: ThemesSelectProps) {
    const [themes, setThemes] = useState(
        props.themes.map((a) => ({
            ...a,
            value: JSON.stringify(a.value),
        })),
    );
    const [active, setActive] = useState(0);

    const onChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
        const themeName = e.target.value;
        setActive(themes.findIndex((theme) => theme.name === themeName));
    };

    const onEdit: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setThemes(
            themes.map((theme, ix) => {
                if (ix === active) {
                    return {
                        ...theme,
                        value: e.target.value,
                    };
                }

                return theme;
            }),
        );
    };

    const themeData = themes[active].value;
    console.log(themeData);

    return (
        <div>
            <select name="name" onChange={onChange}>
                {themes.map((theme) => {
                    return <option key={theme.name}>{theme.name}</option>;
                })}
            </select>
            <textarea name="data" onChange={onEdit} value={themeData}></textarea>
        </div>
    );
}
