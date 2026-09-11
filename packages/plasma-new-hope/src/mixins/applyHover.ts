/**
 * Стили только на устройствах с настоящим hover (мышь), без «залипания» после тапа.
 *
 * @example
 * ${applyHover(`
 *     :hover {
 *         color: var(${tokens.colorHover});
 *     }
 * `)}
 */
export const applyHover = (styles: string) => `
    @media (hover: hover) and (pointer: fine) {
        ${styles}
    }
`;
