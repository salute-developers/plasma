import { css } from "styled-components";
import { BasicPopupBasePlacement, PopupBasePlacement } from "./types";

export const handlePosition = (placement?: PopupBasePlacement, offset?: [number | string, number | string]) => {
    let x = '0rem';
    let y = '0rem';
    if (offset) {
        const [_x, _y] = offset;
        x = typeof _x === 'number' ? `${_x}rem` : _x;
        y = typeof _y === 'number' ? `${_y}rem` : _y;
    }

    if (!placement || placement === 'center') {
        return css`
            left: calc(50% + ${x});
            top: calc(50% - ${y});
            transform: translate(-50%, -50%);
        `;
    }

    let left;
    let right;
    let top;
    let bottom;
    const placements = placement.split('-') as BasicPopupBasePlacement[];

    placements.forEach((placement: BasicPopupBasePlacement) => {
        switch (placement) {
            case 'left':
                left = x;
                break;
            case 'right':
                right = x;
                break;
            case 'top':
                top = y;
                break;
            case 'bottom':
                bottom = y;
                break;
            default:
                break;
        }
    });

    const isCenteredX = left === undefined && right === undefined;
    const isCenteredY = top === undefined && bottom === undefined;

    return css`
        left: ${left};
        right: ${right};
        top: ${top};
        bottom: ${bottom};
        ${isCenteredX &&
        css`
            left: calc(50% + ${x});
            transform: translateX(-50%);
        `}
        ${isCenteredY &&
        css`
            top: calc(50% - ${y});
            transform: translateY(-50%);
        `}
    `;
};