import styled, { css } from 'styled-components';

import { privateTokens, tokens } from './Spinner.tokens';

// Мягкий переход убирает ступенчатость на границе mask.
const edgeSmoothing = '0.03125rem';

const size = `var(${tokens.size}, 1.5rem)`;

// Сторона бокса спиннера.
const box = '100cqmin';

// Начало и длина дуги из макета, в градусах по часовой стрелке от 12 часов.
const arcStart = 133.8;
const arcLength = 316.7;
// Середина разрыва между головой и хвостом.
const gapMiddle = 180 + arcLength / 2;

const padding = `var(${privateTokens.padding})`;
const diameter = `var(${privateTokens.diameter})`;
const thickness = `var(${privateTokens.thickness})`;

// Цвет затухающего конца дуги.
const tailColor = 'rgba(255, 255, 255, 0.06)';

// Отступ до дуги из макета: 16/24/36/48/56/88/128px → 1/2/3/4/4/6/8px.
const paddingByBox = `min(${box} / 12, ${box} * 0.05 + 0.1rem)`;

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

const ringMask = `radial-gradient(
        circle closest-side,
        transparent calc(100% - ${thickness} - ${edgeSmoothing}),
        #000 calc(100% - ${thickness} + ${edgeSmoothing})
    )`;

const arcMask = `conic-gradient(from ${arcStart}deg, #000 ${arcLength}deg, transparent ${arcLength}deg)`;

// Скруглённый конец дуги — круг в маске на осевой линии.
const capMask = (angle: number) => {
    const axisRadius = `(${diameter} - ${thickness}) / 2`;
    const x = `calc(50% + ${Math.sin(toRadians(angle)).toFixed(5)} * ${axisRadius})`;
    const y = `calc(50% - ${Math.cos(toRadians(angle)).toFixed(5)} * ${axisRadius})`;

    return `radial-gradient(
        circle at ${x} ${y},
        #000 calc(${thickness} / 2 - ${edgeSmoothing}),
        transparent calc(${thickness} / 2 + ${edgeSmoothing})
    )`;
};

// Слои сверху вниз: (кольцо ∩ сектор дуги) ∪ кап начала ∪ кап конца.
const mask = [capMask(arcStart + arcLength), capMask(arcStart), ringMask, arcMask].join(', ');

export const SpinnerRing = styled.div`
    box-sizing: border-box;
    width: ${diameter};
    height: ${diameter};
    margin: auto;
    border-radius: 50%;

    background: conic-gradient(
        from ${arcStart}deg,
        ${tailColor} 0deg,
        currentColor ${arcLength}deg,
        currentColor ${gapMiddle}deg,
        ${tailColor} ${gapMiddle}deg
    );

    -webkit-mask: ${mask};
    mask: ${mask};
    -webkit-mask-composite: source-over, source-over, source-in, source-over;
    mask-composite: add, add, intersect, add;
`;

export const BodyWrapper = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const base = css`
    ${privateTokens.padding}: var(${tokens.padding}, ${paddingByBox});
    ${privateTokens.diameter}: calc(${box} - 2 * ${padding});
    ${privateTokens.thickness}: var(${tokens.thickness}, calc(var(${privateTokens.diameter}) * 0.1));

    @supports (width: round(1px, 1px)) {
        ${privateTokens.padding}: var(${tokens.padding}, round(${paddingByBox}, 1px));
    }

    position: relative;
    display: flex;
    box-sizing: border-box;
    width: ${size};
    height: ${size};
    container-type: size;

    color: var(${tokens.color}, currentColor);

    animation: spinnerRotateAnimation var(${tokens.animationDuration}, 1s) linear infinite;

    @keyframes spinnerRotateAnimation {
        to {
            transform: rotate(360deg);
        }
    }
`;
