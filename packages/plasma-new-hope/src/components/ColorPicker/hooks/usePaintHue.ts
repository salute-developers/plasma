import { useEffect, RefObject } from 'react';
import tinycolor from 'tinycolor2';

const paintGradient = (ctx: CanvasRenderingContext2D, width: number, stops: string[]): void => {
    ctx.clearRect(0, 0, width, 14);
    ctx.beginPath();
    ctx.rect(0, 0, width, 14);
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    stops.forEach((color, i) => {
        gradient.addColorStop(i / (stops.length - 1), color);
    });
    ctx.fillStyle = gradient;
    ctx.fill();
};

const getCtx = (canvas: RefObject<HTMLCanvasElement>): CanvasRenderingContext2D | null =>
    canvas.current?.getContext('2d', { willReadFrequently: true }) ?? null;

export const usePaintHue = (canvas: RefObject<HTMLCanvasElement>, squareWidth: number): void => {
    useEffect(() => {
        const ctx = getCtx(canvas);
        if (!ctx) return;

        const stops = Array.from({ length: 13 }, (_, i) => `hsl(${i * 30}, 100%, 50%)`);
        paintGradient(ctx, squareWidth, stops);
    }, [squareWidth]);
};

export const usePaintSat = (canvas: RefObject<HTMLCanvasElement>, h: number, l: number, squareWidth: number): void => {
    useEffect(() => {
        const ctx = getCtx(canvas);
        if (!ctx) return;

        const stops = Array.from({ length: 11 }, (_, i) => `hsl(${h}, ${i * 10}%, ${l}%)`);
        paintGradient(ctx, squareWidth, stops);
    }, [h, l, squareWidth]);
};

export const usePaintLight = (
    canvas: RefObject<HTMLCanvasElement>,
    h: number,
    s: number,
    squareWidth: number,
): void => {
    useEffect(() => {
        const ctx = getCtx(canvas);
        if (!ctx) return;

        const stops = Array.from({ length: 11 }, (_, i) => `hsl(${h}, ${s}%, ${i * 10}%)`);
        paintGradient(ctx, squareWidth, stops);
    }, [h, s, squareWidth]);
};

export const usePaintBright = (
    canvas: RefObject<HTMLCanvasElement>,
    h: number,
    s: number,
    squareWidth: number,
): void => {
    useEffect(() => {
        const ctx = getCtx(canvas);
        if (!ctx) return;

        const stops = Array.from({ length: 11 }, (_, i) => tinycolor({ h, s, v: i / 10 }).toHslString());
        paintGradient(ctx, squareWidth, stops);
    }, [h, s, squareWidth]);
};
