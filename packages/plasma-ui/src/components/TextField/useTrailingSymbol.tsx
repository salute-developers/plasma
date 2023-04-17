import { useEffect, useRef, useState, RefObject, ReactElement, InputHTMLAttributes } from 'react';
import { useDebouncedFunction, useResizeObserver } from '@salutejs/plasma-core';

const trimPx = (str: string) => str.replace('px', '');

const getInputOffset = (inputRef: RefObject<HTMLInputElement>): [number, number] => {
    if (!inputRef || !inputRef.current) {
        return [0, 0];
    }

    const { paddingLeft, paddingRight } = getComputedStyle(inputRef?.current);

    const left = parseInt(trimPx(paddingLeft), 10);
    const right = parseInt(trimPx(paddingRight), 10);

    return [left, right];
};

type UseTrailingSymbol = Partial<{
    contentLeft: ReactElement;
    contentRight: ReactElement;
    rightTrailingSymbols: string;
    size: 'l' | 'm';
    value: InputHTMLAttributes<HTMLInputElement>['value'];
    rightTrailingSymbolsWidth: number;
    deviceScale: number;
}>;

export const useTrailingSymbol = ({
    size,
    contentLeft,
    contentRight,
    rightTrailingSymbols = '',
    value,
    rightTrailingSymbolsWidth = 0,
    deviceScale,
}: UseTrailingSymbol) => {
    const hiddenDivRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [inputOffset, setInputOffset] = useState<[number, number]>([0, 0]);
    const [rightTrailingSymbolsPosition, setRightTrailingSymbolsPosition] = useState<number>(0);
    const [inputWidth, setInputWidth] = useState<number>(0);

    const currentTrailingSymbolsWidth = rightTrailingSymbols.length === 1 ? 0 : rightTrailingSymbolsWidth;

    const debouncedResize = useDebouncedFunction((width: number) => setInputWidth(width), 100);

    useResizeObserver(inputRef, (currentElement) => {
        const { width } = currentElement.getBoundingClientRect();

        debouncedResize(width);
    });

    useEffect(() => {
        if (!rightTrailingSymbols) {
            return;
        }

        setInputOffset(getInputOffset(inputRef));
    }, [
        size,
        Boolean(contentLeft),
        Boolean(contentRight),
        rightTrailingSymbols,
        currentTrailingSymbolsWidth,
        deviceScale,
    ]);

    useEffect(() => {
        if (!rightTrailingSymbols) {
            return;
        }

        const [inputOffsetLeft, inputOffsetRight] = inputOffset;

        const inputWidthBase = inputWidth - inputOffsetLeft - inputOffsetRight;
        const hiddenDivWidth = hiddenDivRef?.current?.clientWidth || 0;

        const position =
            hiddenDivWidth > inputWidthBase ? inputWidth - inputOffsetRight : hiddenDivWidth + inputOffsetLeft;

        setRightTrailingSymbolsPosition(position);
    }, [
        value,
        inputOffset,
        rightTrailingSymbols,
        size,
        Boolean(contentLeft),
        Boolean(contentRight),
        deviceScale,
        inputWidth,
    ]);

    return { inputRef, hiddenDivRef, rightTrailingSymbolsPosition };
};
