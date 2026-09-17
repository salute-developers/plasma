import styled, { css } from 'styled-components';

import { privateTokens, tokens } from './Spinner.tokens';

const size = `var(${tokens.size}, 1.5rem)`;
const tailColor = `var(${tokens.tailColor}, rgba(255, 255, 255, 0.06))`;
const animationDuration = `var(${tokens.animationDuration}, 1s)`;

const padding = `var(${privateTokens.padding})`;
const diameter = `var(${privateTokens.diameter})`;
const strokeSize = `var(${privateTokens.strokeSize})`;

/* Дуга занимает content-box корня. */
const box = '100cqmin';

const arcStart = `var(${tokens.arcStart}, 133.8deg)`;
const arcLength = `var(${tokens.arcLength}, 316.7deg)`;
const arcEnd = `calc(${arcStart} + ${arcLength})`;
const gapMiddle = `calc(180deg + ${arcLength} / 2)`;

/* Отступ из макета: 16/24/36/48/56/88/128px → 1/2/3/4/4/6/8px. */
const paddingByBox = `min(${box} / 12, ${box} * 0.05 + 0.1rem)`;

/* Мягкий переход убирает ступенчатость на кромке капа. */
const edgeSmoothing = '0.25px';

/* Центр скруглённого конца дуги — на осевой линии кольца. */
const capCenter = (angle: string) =>
    `calc(50% + sin(${angle}) * ((${diameter} - ${strokeSize}) / 2)) calc(50% - cos(${angle}) * ((${diameter} - ${strokeSize}) / 2))`;

/* Кап входит в маску, а не рисуется поверх: иначе на перекрытии альфа удваивается. */
const cap = (angle: string) =>
    `radial-gradient(circle at ${capCenter(
        angle,
    )}, #000 calc(${strokeSize} / 2 - ${edgeSmoothing}), transparent calc(${strokeSize} / 2 + ${edgeSmoothing}))`;

const arcSector = `conic-gradient(from ${arcStart}, #000 ${arcLength}, transparent ${arcLength})`;

/* Дырка кольца — content-box; внешнюю окружность даёт border-radius самого элемента. */
const ringHole = 'linear-gradient(#000 0 0) content-box';

/* Слои сверху вниз: (сектор − дырка) ∪ кап начала ∪ кап конца. */
const mask = [cap(arcEnd), cap(arcStart), arcSector, ringHole].join(', ');

export const SpinnerRing = styled.div<{ customStrokeSize?: number }>`
    ${privateTokens.strokeSize}: ${({ customStrokeSize }) =>
        customStrokeSize !== undefined
            ? `${customStrokeSize}px`
            : `var(${tokens.strokeSize}, calc(var(${privateTokens.diameter}) * 0.1))`};

    box-sizing: border-box;
    width: ${diameter};
    height: ${diameter};
    margin: ${padding};
    padding: ${strokeSize};
    border-radius: 50%;

    background: conic-gradient(
        from ${arcStart},
        ${tailColor} 0deg,
        currentColor ${arcLength},
        currentColor ${gapMiddle},
        ${tailColor} ${gapMiddle}
    );

    -webkit-mask: ${mask};
    mask: ${mask};
    -webkit-mask-composite: source-over, source-over, source-out, source-over;
    mask-composite: add, add, subtract, add;

    animation: spinnerRotateAnimation ${animationDuration} linear infinite;

    @keyframes spinnerRotateAnimation {
        to {
            transform: rotate(360deg);
        }
    }
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
`;
