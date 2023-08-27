'use client';

import { styled } from "@linaria/react";
import { BgType, useTheme, useThemeDispatch } from "../../state";
import { useEffect } from "react";

const Root = styled.div`
    display: flex;
    flex-direction: column;
    width: 6rem;
`;

export const BGSwitcher = () => {
    const theme = useTheme();
    const dispatch = useThemeDispatch();

    const onCheck: React.ChangeEventHandler<HTMLInputElement> = e => {
        const bgType = e.target.value as BgType;

        dispatch({
            type: 'change_preview_bg',
            bgType,
        });
    };

    const { previewType } = theme;

    // NOTE: https://github.com/vercel/next.js/issues/49499
    if (process.env.NODE_ENV === 'development') {
        useEffect(() => {
            for (const el of document.getElementsByName('bg-switch')) {
                if (el.hasAttribute('checked')) {
                    (el as HTMLInputElement).checked = true
                }
            }
        }, []);
    }

    return (
        <Root>
            <label>
                <input
                    name="bg-switch"
                    checked={previewType == BgType.NO}
                    value={BgType.NO}
                    onChange={onCheck}
                    type="radio" />
                no bg
            </label>
            <label>
                <input
                    name="bg-switch"
                    checked={previewType == BgType.SQUARE}
                    value={BgType.SQUARE}
                    onChange={onCheck}
                    type="radio" />
                squares
            </label>
            <label>
                <input
                    name="bg-switch"
                    checked={previewType == BgType.DARK}
                    value={BgType.DARK}
                    onChange={onCheck}
                    type="radio" />
                dark
            </label>
        </Root>
    );
};