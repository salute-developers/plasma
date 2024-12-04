import { classes } from '../Calendar.tokens';

export type SelectedProps = {
    /**
     * Минимальная ширина дочернего дива.
     */
    minWidth?: string;
    /**
     * Минимальная высота дочернего дива.
     */
    minHeight?: string;
    /**
     * Начертание шрифта.
     */
    selectedFontWeight?: string;
    /**
     * Цвет фона выбранного элемента.
     */
    selectedBackground?: string;
    /**
     * Цвет текста выбранного элемента.
     */
    selectedColor?: string;
    /**
     * Цвет фона элемента, который можно выбрать.
     */
    selectableBackgroundHover?: string;
    /**
     * Цвет границы сегодняшнего дня.
     */
    currentBorderColor?: string;
    /**
     * Цвет фона нажатого элемента.
     */
    activeBackground?: string;
    /**
     * Цвет текста нажатого элемента.
     */
    activeColor?: string;
};

export const addSelected = (args: SelectedProps) => {
    const {
        minWidth,
        minHeight,
        selectedFontWeight,
        selectedBackground,
        selectedColor,
        selectableBackgroundHover,
        currentBorderColor,
    } = args;

    return `
        outline: none;
        cursor: pointer;

        &:hover {
            background-color: ${selectableBackgroundHover};
        };
        

        &.${classes.hoveredItem}, &.${classes.hoveredItem}:hover {
            background-color: ${selectedBackground};
            color: ${selectedColor};
            cursor: pointer;
            font-weight: ${selectedFontWeight};
        }

        &.${classes.selectedItem}:not(.${classes.currentItem}) {
            border: 0;
            background-color: ${selectedBackground};
            color: ${selectedColor};
            cursor: default;
            font-weight: ${selectedFontWeight};
        };

        &.${classes.currentItem} {
            border: 0.063rem solid ${currentBorderColor};

            &.${classes.selectedItem} {
                background-color: initial;
                color: ${selectedColor};
                font-weight: ${selectedFontWeight};

                & > div:first-of-type {
                    background-color: ${selectedBackground};
                    min-width: ${minWidth};
                    min-height: ${minHeight};
                }
            }
        };
    `;
};
