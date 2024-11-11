import { RefObject } from 'react';

export const createEvent = <T extends HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>(
    ref: RefObject<T>,
) => {
    if (ref.current) {
        const event = new Event('change', { bubbles: true });
        Object.defineProperty(event, 'target', { writable: false, value: ref.current });
        const syntheticEvent = createSyntheticEvent(event) as React.ChangeEvent<typeof ref.current>;
        return syntheticEvent;
    }

    return null;
};

export const createSyntheticEvent = <T extends Element, E extends Event>(event: E): React.SyntheticEvent<T, E> => {
    let isDefaultPrevented = false;
    let isPropagationStopped = false;
    const preventDefault = () => {
        isDefaultPrevented = true;
        event.preventDefault();
    };
    const stopPropagation = () => {
        isPropagationStopped = true;
        event.stopPropagation();
    };
    return {
        nativeEvent: event,
        currentTarget: event.currentTarget as EventTarget & T,
        target: event.target as EventTarget & T,
        bubbles: event.bubbles,
        cancelable: event.cancelable,
        defaultPrevented: event.defaultPrevented,
        eventPhase: event.eventPhase,
        isTrusted: event.isTrusted,
        preventDefault,
        isDefaultPrevented: () => isDefaultPrevented,
        stopPropagation,
        isPropagationStopped: () => isPropagationStopped,
        persist: () => {},
        timeStamp: event.timeStamp,
        type: event.type,
    };
};
