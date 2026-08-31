import { css } from 'styled-components';

import { privateTokens, tokens } from './Spinner.tokens';

/*
 * Кольцо с угловым градиентом собрано без SVG:
 */
export const base = css`
    ${privateTokens.thickness}: var(${tokens.thickness}, 10%);
    /* Полпикселя запаса под сглаживание: кольцо вписано в mask-box по касательной, и если внешняя
       кромка ляжет ровно на 50%, её растушёвка окажется за границей бокса и срежется — по четырём
       сторонам появятся плоские участки. Отступ ниже уменьшен на те же 0.5px, поэтому радиус
       кольца остаётся ровно тем, что задан токеном */
    ${privateTokens.outerRadius}: calc(50% - 0.03125rem);
    ${privateTokens.capRadius}: calc(var(${privateTokens.thickness}) * 0.55);
    ${privateTokens.capOffset}: calc(var(${privateTokens.outerRadius}) - var(${privateTokens.thickness}) / 2);
    ${privateTokens.mask}: radial-gradient(
                ellipse 100% 100%,
                transparent calc(var(${privateTokens.outerRadius}) - var(${privateTokens.thickness}) - 0.03125rem),
                #000 calc(var(${privateTokens.outerRadius}) - var(${privateTokens.thickness}))
                    var(${privateTokens.outerRadius}),
                transparent calc(var(${privateTokens.outerRadius}) + 0.03125rem)
            )
            content-box,
        radial-gradient(
                ellipse var(${privateTokens.capRadius}) var(${privateTokens.capRadius}) at
                    calc(50% + var(${privateTokens.capOffset}) * 0.99998)
                    calc(50% + var(${privateTokens.capOffset}) * 0.00784),
                #000 calc(100% - 0.03125rem),
                transparent
            )
            content-box,
        radial-gradient(
                ellipse var(${privateTokens.capRadius}) var(${privateTokens.capRadius}) at
                    calc(50% + var(${privateTokens.capOffset}) * 0.72151)
                    calc(50% + var(${privateTokens.capOffset}) * 0.69242),
                #000 calc(100% - 0.03125rem),
                transparent
            )
            content-box,
        conic-gradient(from 133.82deg, #000 0deg 316.63deg, transparent 316.63deg) content-box;

    display: flex;
    box-sizing: border-box;
    width: var(${tokens.size});
    height: var(${tokens.size});

    padding: calc(
        var(
                ${tokens.padding},
                min(
                    calc(var(${tokens.size}) * 0.125 - 0.0625rem),
                    calc(var(${tokens.size}) / 12),
                    calc(var(${tokens.size}) * 0.05 + 0.1rem)
                )
            ) - 0.03125rem
    );

    color: var(${tokens.color});

    background: conic-gradient(
            from 97.45deg,
            currentColor 0deg,
            rgba(255, 255, 255, 0.06) 32.4deg,
            currentColor 360deg
        )
        content-box;

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
