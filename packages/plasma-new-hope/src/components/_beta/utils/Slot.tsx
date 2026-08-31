import React, { forwardRef, isValidElement, cloneElement } from 'react';

const mergeRefs = (...refs: Array<React.Ref<unknown> | undefined>) => (value: unknown) => {
    refs.forEach((ref) => {
        if (typeof ref === 'function') {
            ref(value);
        } else if (ref) {
            (ref as React.MutableRefObject<unknown>).current = value;
        }
    });
};

const mergeHandlers = (childHandler?: (...args: unknown[]) => void, slotHandler?: (...args: unknown[]) => void) => (
    ...args: unknown[]
) => {
    childHandler?.(...args);
    slotHandler?.(...args);
};

export const Slot = forwardRef<HTMLElement, Record<string, unknown>>(({ children, ...slotProps }, forwardedRef) => {
    if (!isValidElement<Record<string, unknown>>(children)) {
        return null;
    }

    const childProps = children.props;
    const mergedProps: Record<string, unknown> = { ...slotProps };

    Object.keys(slotProps).forEach((key) => {
        if (/^on[A-Z]/.test(key)) {
            mergedProps[key] = mergeHandlers(
                childProps[key] as ((...args: unknown[]) => void) | undefined,
                slotProps[key] as ((...args: unknown[]) => void) | undefined,
            );
        }
    });

    if (childProps.className || slotProps.className) {
        mergedProps.className = [slotProps.className, childProps.className].filter(Boolean).join(' ');
    }

    if (childProps.style || slotProps.style) {
        mergedProps.style = { ...(slotProps.style as object), ...(childProps.style as object) };
    }

    const childRef = (children as React.ReactElement & { ref?: React.Ref<unknown> }).ref;
    mergedProps.ref = mergeRefs(childRef, forwardedRef);

    return cloneElement(children, mergedProps);
});
