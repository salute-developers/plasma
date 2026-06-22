export type TextGradientProps = {
    /**
     * Градиент для текстовой ноды компонента.
     * Принимает любое валидное CSS-значение gradient.
     * @example 'linear-gradient(90deg, #f00, #00f)'
     */
    textGradient?: string;
    /**
     * Градиент текстовой ноды при наведении.
     * Если не задан — используется значение `textGradient`.
     */
    textGradientHover?: string;
    /**
     * Градиент текстовой ноды в активном состоянии.
     * Если не задан — используется значение `textGradient`.
     */
    textGradientActive?: string;
};
