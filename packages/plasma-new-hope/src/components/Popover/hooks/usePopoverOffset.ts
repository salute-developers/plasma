import { useEffect, useState } from 'react';

const allowedPlacements = [
    'top-start',
    'top-end',
    'bottom-start',
    'bottom-end',
    'left-start',
    'left-end',
    'right-start',
    'right-end',
] as const;

type Placement = typeof allowedPlacements[number];

const widthThreshold = 28;
const offsetXStartThreshold = 17;
const offsetXEndThreshold = 19;

interface UsePopoverOffsetOptions {
    handleRef: React.RefObject<HTMLDivElement>;
    placement?: string;
    offsetOuter: [number, number];
}

export const usePopoverOffset = ({ handleRef, placement, offsetOuter }: UsePopoverOffsetOptions): [number, number] => {
    const [offset, setOffset] = useState<[number, number]>(offsetOuter);

    useEffect(() => {
        const refElement = handleRef.current;

        if (!refElement || !allowedPlacements.includes(placement as Placement)) {
            setOffset(offsetOuter);
            return;
        }

        const { width, height } = refElement.getBoundingClientRect();

        const isVertical = placement?.startsWith('top') || placement?.startsWith('bottom');
        const isEnd = placement?.endsWith('end');
        const isStart = placement?.endsWith('start');

        let offsetX = offsetOuter[0];
        const offsetY = offsetOuter[1];

        if (isVertical) {
            if ((isStart || isEnd) && width < widthThreshold) {
                offsetX = isEnd
                    ? offsetXStartThreshold - width / 2 + offsetOuter[0]
                    : -offsetXStartThreshold + width / 2 - offsetOuter[0];
            }
        }

        if (!isVertical && (isStart || isEnd) && height < widthThreshold) {
            offsetX = isStart ? -offsetXEndThreshold + height / 2 : offsetXEndThreshold - height / 2;
        }

        setOffset([offsetX, offsetY]);
    }, [handleRef, placement, offsetOuter]);

    return offset;
};
