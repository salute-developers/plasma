import { ColorStop } from '../ColorPicker.types';

import { GradientNode } from './gradientParser';
import { formatInputValues } from './formatters';

type GradientInput = string | GradientNode;

interface Bounds {
    offsetLeft: number;
    offsetTop: number;
    clientWidth: number;
    clientHeight: number;
}

const DIRECTION_DEGREES: Record<string, number> = {
    'to top': 0,
    'to bottom': 180,
    'to left': 270,
    'to right': 90,
    'to top right': 45,
    'to bottom right': 135,
    'to bottom left': 225,
    'to top left': 315,
};

const convertShortHandDeg = (dir: string): number => DIRECTION_DEGREES[dir] ?? parseInt(dir || '0', 10);

const getClientXY = (e: MouseEvent | TouchEvent): { clientX: number; clientY: number } => {
    if (e instanceof MouseEvent) {
        return { clientX: e.clientX, clientY: e.clientY };
    }
    const touch = e.touches[0];
    return { clientX: touch?.clientX ?? 0, clientY: touch?.clientY ?? 0 };
};

export const safeBounds = (e: MouseEvent | TouchEvent): Bounds => {
    const target = e.target as HTMLElement | null;
    const client = target?.parentElement?.getBoundingClientRect();
    const className = target?.className ?? '';
    const adjuster = className === 'c-resize ps-rl' ? 15 : 0;

    return {
        offsetLeft: (client?.x ?? 0) + adjuster,
        offsetTop: client?.y ?? 0,
        clientWidth: client?.width ?? 0,
        clientHeight: client?.height ?? 0,
    };
};

export const isUpperCase = (str: string): boolean => str?.[0] === str?.[0]?.toUpperCase();

export const objectToString = (value: GradientInput): string => {
    if (typeof value === 'string') return value;

    if (value.type.includes('gradient')) {
        const sorted = [...value.colorStops].sort((a, b) => a.left - b.left);
        const string = sorted.map((c) => `${c.value} ${c.left}%`).join(', ');
        const degs = convertShortHandDeg(
            value.orientation && !Array.isArray(value.orientation) ? value.orientation.value : '',
        );
        const gradientStr = value.type === 'linear-gradient' ? `${degs}deg` : 'circle';
        return `${value.type}(${gradientStr}, ${string})`;
    }

    return value.colorStops[0]?.value ?? 'rgba(175, 51, 242, 1)';
};

export const getColorObj = (colors: ColorStop[]) => {
    const upperObj = colors.find((c) => isUpperCase(c.value));
    const ccObj = upperObj ?? colors[0];
    return {
        currentColor: ccObj?.value ?? 'rgba(175, 51, 242, 1)',
        currentLeft: ccObj?.left ?? 0,
    };
};

export const getHandleValue = (e: MouseEvent | TouchEvent, barSize: number): number => {
    const { offsetLeft, clientWidth } = safeBounds(e);
    const { clientX } = getClientXY(e);
    const pos = clientX - offsetLeft - barSize / 2;
    const adjuster = clientWidth - 18;
    const bounded = formatInputValues(pos, 0, adjuster);
    return Math.round(bounded / (adjuster / 100));
};

export const computeSquareXY = (
    s: number,
    v: number,
    squareWidth: number,
    squareHeight: number,
    crossSize: number,
): [number, number] => {
    const x = s * squareWidth - crossSize / 2;
    const y = ((100 - v) / 100) * squareHeight - crossSize / 2;
    return [x, y];
};

export const computePickerPosition = (e: MouseEvent | TouchEvent, crossSize: number): [number, number] => {
    const { offsetLeft, offsetTop, clientWidth, clientHeight } = safeBounds(e);
    const { clientX, clientY } = getClientXY(e);

    const x = formatInputValues(clientX - offsetLeft - crossSize / 2, -9, clientWidth - 10);
    const y = formatInputValues(clientY - offsetTop - crossSize / 2, -9, clientHeight - 10);

    return [x, y];
};

const getDegrees = (value: string): number => {
    const s1 = value?.split(',')[0];
    const s2 = s1?.split('(')[1]?.replace('deg', '') ?? '0';
    return convertShortHandDeg(s2);
};

export const getDetails = (value: string) => {
    const isGradient = value?.includes('gradient');
    const gradientType = value?.split('(')[0];
    const degrees = getDegrees(value);
    const degreeStr = gradientType === 'linear-gradient' ? `${degrees}deg` : 'circle';

    return {
        degrees,
        degreeStr,
        isGradient,
        gradientType,
    };
};
