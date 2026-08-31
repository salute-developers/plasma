import { css } from 'styled-components';

import { privateTokens, tokens } from './Spinner.tokens';

// Мягкий переход убирает ступенчатость на границе mask.
const edgeSmoothing = '0.03125rem';

const size = `var(${tokens.size}, 1.5rem)`;
const arcStart = `var(${tokens.arcStart}, 133.8deg)`;
const arcLength = `var(${tokens.arcLength}, 316.7deg)`;

// Насколько цветовой градиент отстаёт от начала дуги, чтобы затухание попало на хвост.
const tailOffset = '40deg';

// Fallback повторяет отступы из size-вариаций для произвольного размера.
const paddingFallback = `min(
        calc(${size} * 0.125 - 0.0625rem),
        calc(${size} / 12),
        calc(${size} * 0.05 + 0.1rem)
    )`;

// Кольцо заданной толщины.
const ringMask = `radial-gradient(
            circle var(${privateTokens.outerRadius}),
            transparent calc(var(${privateTokens.outerRadius}) - var(${privateTokens.thickness}) - ${edgeSmoothing}),
            #000 calc(var(${privateTokens.outerRadius}) - var(${privateTokens.thickness}) + ${edgeSmoothing})
                calc(var(${privateTokens.outerRadius}) - ${edgeSmoothing}),
            transparent calc(var(${privateTokens.outerRadius}) + ${edgeSmoothing})
        )
        padding-box`;

// Скругление дуги на заданном угле.
const capMask = (angle: string) => `radial-gradient(
            circle calc(var(${privateTokens.thickness}) / 2) at
                calc(50% + var(${privateTokens.capOffset}) * cos(${angle} - 90deg))
                calc(50% + var(${privateTokens.capOffset}) * sin(${angle} - 90deg)),
            #000 calc(100% - ${edgeSmoothing}),
            transparent calc(100% + ${edgeSmoothing})
        )
        padding-box`;

// Сектор, ограничивающий длину дуги.
const arcMask = `conic-gradient(
            from ${arcStart},
            #000 0deg ${arcLength},
            transparent ${arcLength}
        )
        padding-box`;

// Маска: кольцо ∩ (сектор ∪ два скруглённых конца).
export const base = css`
    ${privateTokens.padding}: var(${tokens.padding}, ${paddingFallback});
    ${privateTokens.diameter}: calc(${size} - 2 * var(${privateTokens.padding}));
    ${privateTokens.thickness}: var(${tokens.thickness}, calc(var(${privateTokens.diameter}) * 0.1));

    ${privateTokens.outerRadius}: calc(var(${privateTokens.diameter}) / 2);
    ${privateTokens.capOffset}: calc(
        var(${privateTokens.outerRadius}) - var(${privateTokens.thickness}) / 2
    );
    ${privateTokens.arcEnd}: calc(${arcStart} + ${arcLength});
    ${privateTokens.mask}: ${ringMask}, ${capMask(`var(${privateTokens.arcEnd})`)},
        ${capMask(arcStart)}, ${arcMask};

    display: flex;
    box-sizing: border-box;
    width: ${size};
    height: ${size};
    padding: var(${privateTokens.padding});

    color: var(${tokens.color}, currentColor);

    background: conic-gradient(
            from calc(${arcStart} - ${tailOffset}),
            currentColor 0deg,
            rgba(255, 255, 255, 0.06) 32.4deg,
            currentColor 360deg
        )
        padding-box;

    -webkit-mask: var(${privateTokens.mask});
    mask: var(${privateTokens.mask});
    -webkit-mask-composite: source-in, source-over, source-over, source-over;
    mask-composite: intersect, add, add, add;

    animation: spinnerRotateAnimation var(${tokens.animationDuration}, 1s) linear infinite;

    @keyframes spinnerRotateAnimation {
        to {
            transform: rotate(360deg);
        }
    }
`;
