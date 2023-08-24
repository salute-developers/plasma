'use client';

import { LegacyRef, useEffect, useRef } from "react";


export const ThemeSwitchStyle = () => {
    // TODO: Why i need fucking casting to LegacyRef??
    const inputRef = useRef<HTMLInputElement>();

    useEffect(() => {
        inputRef.current!.checked = document.documentElement.dataset['theme'] === 'dark';
    }, [])

    const onCheck: React.ChangeEventHandler<HTMLInputElement> = e => {
        const data = document.documentElement.dataset;
        data['theme'] = e.target.checked ? 'dark': 'light';
    }
    return (
        <label>
            <input ref={inputRef as LegacyRef<HTMLInputElement>} onChange={onCheck} type="checkbox"></input>
            Dark
        </label>
    )
}