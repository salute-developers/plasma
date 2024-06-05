type ActiveProps = {
    /**
     * Цвет фона нажатого элемента.
     */
    activeBackground?: string;
    /**
     * Цвет текста нажатого элемента.
     */
    activeColor?: string;
    /**
     * Начертание шрифта.
     */
    activeFontWeight?: string;
};

export const addActive = (args: ActiveProps) => {
    const { activeBackground, activeColor, activeFontWeight } = args;

    return `
        &:active {
            background-color: ${activeBackground};
            color: ${activeColor};
            font-weight: ${activeFontWeight};
        }
    `;
};
