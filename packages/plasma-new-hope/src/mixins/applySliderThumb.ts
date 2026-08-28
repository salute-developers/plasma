export type SliderThumbTokens = {
    /**
     * Ширина бегунка.
     */
    width: string;
    /**
     * Высота бегунка. Если не задана — используется width.
     */
    height: string;
    /**
     * Скругление бегунка.
     */
    borderRadius: string;
    /**
     * Толщина рамки.
     */
    borderWidth: string;
    /**
     * Цвет рамки в обычном состоянии.
     */
    borderColor: string;
    /**
     * Цвет рамки в состояниях hover/active/focus.
     */
    focusBorderColor: string;
    /**
     * Заливка бегунка.
     */
    background: string;
    /**
     * Содержимое внутри бегунка.
     */
    innerContent: string;
};

/**
 * Слои фона бегунка. Порядок: содержимое, заливка по padding-box, рамка по border-box.
 */
const thumbLayers = (tokens: SliderThumbTokens, borderColorToken: string, innerContent: string) => `
    background: ${innerContent} no-repeat center,
        linear-gradient(var(${tokens.background}, transparent), var(${tokens.background}, transparent)) padding-box,
        var(${borderColorToken}, transparent) border-box;
`;

/**
 * Миксин бегунка слайдера.
 *
 * Рамка рисуется слоем фона по border-box, а не через box-shadow: так её толщина может быть
 * асимметричной, форма — эллиптической, а внутрь бегунка можно положить содержимое (innerContent).
 *
 * В обычном состоянии innerContent не показывается — только в hover/active/focus,
 * см. applySliderThumbFocus.
 */
export const applySliderThumb = (tokens: SliderThumbTokens) => `
    box-sizing: content-box;
    width: var(${tokens.width});
    height: var(${tokens.height}, var(${tokens.width}));
    border-radius: var(${tokens.borderRadius}, 50%);
    cursor: grab;

    border-style: solid;
    border-color: transparent;
    border-width: var(${tokens.borderWidth}, 0);

    transition: background-color 0.1s ease-in-out, background-image 0.1s ease-in-out;

    ${thumbLayers(tokens, tokens.borderColor, 'none')}
`;

/**
 * Состояния hover/active/focus бегунка: меняется цвет рамки и показывается innerContent.
 */
export const applySliderThumbFocus = (tokens: SliderThumbTokens) =>
    thumbLayers(tokens, tokens.focusBorderColor, `var(${tokens.innerContent}, none)`);
