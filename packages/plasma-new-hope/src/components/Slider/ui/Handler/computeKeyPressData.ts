import { KeyboardEvent } from 'react';
import type { DraggableData } from 'react-draggable';

const KeyboardSupport = {
    PageUp: 33,
    PageDown: 34,
    End: 35,
    Home: 36,
    ArrowLeft: 37,
    ArrowUp: 38,
    ArrowRight: 39,
    ArrowDown: 40,
};

interface Params {
    isVertical: boolean;
    stepSize: number;
    position: number;
    max: number;
    computedMultipleSteps: number;
}

const { ArrowUp, ArrowRight, ArrowDown, ArrowLeft, Home, End, PageDown, PageUp } = KeyboardSupport;

const computeVerticalMovement = (
    event: KeyboardEvent<HTMLDivElement>,
    { stepSize, position, max, computedMultipleSteps }: Params,
) => {
    const { keyCode, target } = event;

    const data: DraggableData = {
        x: 0,
        deltaX: 0,
        lastX: 0,
        y: 0,
        deltaY: stepSize,
        lastY: position,
        node: target as HTMLDivElement,
    };

    switch (keyCode) {
        case ArrowUp:
        case ArrowRight:
            data.y = position - stepSize;
            data.deltaY = -stepSize;
            break;
        case ArrowDown:
        case ArrowLeft:
            data.y = position + stepSize;
            break;
        case PageUp:
            data.y = position - computedMultipleSteps;
            data.deltaY = -computedMultipleSteps;
            break;
        case PageDown:
            data.y = position + computedMultipleSteps;
            data.deltaY = computedMultipleSteps;
            break;
        case End:
            data.y = max * stepSize;
            break;
        case Home:
            data.y = 0;
            break;
        default:
            data.y = 0;
    }

    return data;
};

const computeHorizontalMovement = (
    event: KeyboardEvent<HTMLDivElement>,
    { stepSize, position, max, computedMultipleSteps }: Params,
) => {
    const { keyCode, target } = event;

    const data: DraggableData = {
        x: 0,
        deltaX: stepSize,
        lastX: position,
        y: 0,
        deltaY: 0,
        lastY: 0,
        node: target as HTMLDivElement,
    };

    switch (keyCode) {
        case ArrowUp:
        case ArrowRight:
            data.x = position + stepSize;
            break;
        case ArrowDown:
        case ArrowLeft:
            data.x = position - stepSize;
            data.deltaX = -stepSize;
            break;
        case PageUp:
            data.x = position + computedMultipleSteps;
            data.deltaX = computedMultipleSteps;
            break;
        case PageDown:
            data.x = position - computedMultipleSteps;
            data.deltaX = -computedMultipleSteps;
            break;
        case End:
            data.x = max * stepSize;
            break;
        case Home:
            data.x = 0;
            break;
        default:
            data.x = 0;
    }

    return data;
};

export const computeKeyPressData = (event: KeyboardEvent<HTMLDivElement>, params: Params) => {
    const { keyCode } = event;

    if (!Object.values(KeyboardSupport).includes(keyCode)) {
        return null;
    }

    return params.isVertical ? computeVerticalMovement(event, params) : computeHorizontalMovement(event, params);
};
