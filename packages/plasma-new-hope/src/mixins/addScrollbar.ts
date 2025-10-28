import { CSSProperties } from 'react';

export type ScrollbarProps = {
    /**
     * Ширина полосы прокрутки
     */
    scrollWidth?: CSSProperties['width'];
    /**
     * Цвет трэка прокрутки
     */
    trackColor?: string;
    /**
     * Цвет тумблера прокрутки
     */
    thumbColor?: string;
};

export const addScrollbar = (args: ScrollbarProps) => {
    const { scrollWidth, trackColor, thumbColor } = args;

    return `
        &::-webkit-scrollbar {
            width: ${scrollWidth};
            height: ${scrollWidth};
        }

        &::-webkit-scrollbar-track {
            background-color: ${trackColor};
            border-radius: ${scrollWidth};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${thumbColor};
            border-radius: ${scrollWidth};
            transition: background-color 0.2s ease;

            &:hover {
                background-color: ${thumbColor};
            }

            &:active {
                background-color: ${thumbColor};
            }
        }
    `;
};
