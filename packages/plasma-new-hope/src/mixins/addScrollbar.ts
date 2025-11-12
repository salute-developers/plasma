import { CSSProperties } from 'react';

export type ScrollbarProps = {
    /**
     * Ширина полосы прокрутки
     */
    scrollWidth?: CSSProperties['width'];
    /**
     * Цвет track
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
            border-radius: ${scrollWidth};

            background-color: ${trackColor};
        }

        &::-webkit-scrollbar-thumb {
            border-radius: ${scrollWidth};
            background-color: ${thumbColor};

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
