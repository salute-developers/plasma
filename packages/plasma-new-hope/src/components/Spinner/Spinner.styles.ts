import styled, { css } from 'styled-components';

import { privateTokens, tokens } from './Spinner.tokens';

// Мягкий переход убирает ступенчатость на границе mask.
const edgeSmoothing = '0.03125rem';

const size = `var(${tokens.size}, 1.5rem)`;
const arcStart = `var(${tokens.arcStart}, 133.8deg)`;
const arcLength = `var(${tokens.arcLength}, 316.7deg)`;

const padding = `var(${privateTokens.padding})`;
const diameter = `var(${privateTokens.diameter})`;
const thickness = `var(${privateTokens.thickness})`;

// Цвет затухающего конца дуги.
const tailColor = 'rgba(255, 255, 255, 0.06)';

// Fallback повторяет отступы из size-вариаций для произвольного размера.
const paddingFallback = `min(
        calc(${size} * 0.125 - 0.0625rem),
        calc(${size} / 12),
        calc(${size} * 0.05 + 0.1rem)
    )`;

const ringMask = `radial-gradient(
        circle closest-side,
        transparent calc(100% - ${thickness} - ${edgeSmoothing}),
        #000 calc(100% - ${thickness} + ${edgeSmoothing})
    )`;

/*
 * Скруглённый конец дуги.
 */
const cap = `
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${thickness};
    height: ${thickness};
    margin: calc(${thickness} / -2);
    border-radius: 50%;
    background: var(${privateTokens.capColor});
`;

// Сдвиг из центра на осевую линию.
const capOffset = `translateY(calc((${thickness} - ${diameter}) / 2))`;

export const SpinnerRing = styled.div`
    box-sizing: border-box;
    width: ${diameter};
    height: ${diameter};
    margin: auto;
    border-radius: 50%;

    background: conic-gradient(
        from ${arcStart},
        ${tailColor} 0deg,
        currentColor ${arcLength},
        transparent ${arcLength}
    );

    -webkit-mask: ${ringMask};
    mask: ${ringMask};
`;

export const base = css`
    ${privateTokens.padding}: var(${tokens.padding}, ${paddingFallback});
    ${privateTokens.diameter}: calc(${size} - 2 * ${padding});
    ${privateTokens.thickness}: var(${tokens.thickness}, calc(var(${privateTokens.diameter}) * 0.1));

    position: relative;
    display: flex;
    box-sizing: border-box;
    width: ${size};
    height: ${size};
    padding: ${padding};

    color: var(${tokens.color}, currentColor);

    animation: spinnerRotateAnimation var(${tokens.animationDuration}, 1s) linear infinite;

    &::before {
        ${privateTokens.capColor}: ${tailColor};
        ${cap};

        transform: rotate(${arcStart}) ${capOffset};
    }

    &::after {
        ${privateTokens.capColor}: currentColor;
        ${cap};

        transform: rotate(calc(${arcStart} + ${arcLength})) ${capOffset};
    }

    @keyframes spinnerRotateAnimation {
        to {
            transform: rotate(360deg);
        }
    }
`;
