import { useEffect, RefObject } from 'react';

const WHITE_TO_TRANSPARENT = 'rgba(255, 255, 255, 1)';
const BLACK_TRANSPARENT = 'rgba(0, 0, 0, 0)';
const BLACK_OPAQUE = 'rgba(0, 0, 0, 1)';
const TRANSPARENT = 'rgba(255, 255, 255, 0)';

export const usePaintSaturation = (
    canvas: RefObject<HTMLCanvasElement>,
    hue: number,
    squareWidth: number,
    squareHeight: number,
): void => {
    useEffect(() => {
        const ctx = canvas.current?.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.fillRect(0, 0, squareWidth, squareHeight);

        const gradientWhite = ctx.createLinearGradient(0, 0, squareWidth, 0);
        gradientWhite.addColorStop(0, WHITE_TO_TRANSPARENT);
        gradientWhite.addColorStop(1, TRANSPARENT);
        ctx.fillStyle = gradientWhite;
        ctx.fillRect(0, 0, squareWidth, squareHeight);

        const gradientBlack = ctx.createLinearGradient(0, 0, 0, squareHeight);
        gradientBlack.addColorStop(0, BLACK_TRANSPARENT);
        gradientBlack.addColorStop(1, BLACK_OPAQUE);
        ctx.fillStyle = gradientBlack;
        ctx.fillRect(0, 0, squareWidth, squareHeight);
    }, [canvas, hue, squareWidth, squareHeight]);
};
