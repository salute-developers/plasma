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
    /**
     * Цвет тумблера прокрутки при наведении
     */
    thumbHoverColor?: string;
    /**
     * Цвет тумблера прокрутки при нажатии
     */
    thumbActiveColor?: string;
    /**
     * Смещение по высоте
     */
    scrollHeightOffset?: string;
};

export const addScrollbar = (args: ScrollbarProps) => {
    const { scrollWidth, trackColor, thumbColor, thumbHoverColor, thumbActiveColor, scrollHeightOffset = 0 } = args;

    return `
        &::-webkit-scrollbar {
            width: ${scrollWidth};
            height: ${scrollWidth};
        }

        &::-webkit-scrollbar-track {
            border-radius: ${scrollWidth};

            background-color: ${trackColor};

            margin-top: ${scrollHeightOffset};
            margin-bottom: ${scrollHeightOffset};
        }

        &::-webkit-scrollbar-thumb {
            border-radius: ${scrollWidth};
            background-color: ${thumbColor};

            transition: background-color 0.2s ease;

            &:hover {
                background-color: ${thumbHoverColor ?? thumbColor};
            }

            &:active {
                background-color: ${thumbActiveColor ?? thumbColor};
            }
        }
    `;
};
