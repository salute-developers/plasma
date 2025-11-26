import * as React from 'react';
import { mergeRefs, mergeHandlers } from 'src/utils';

export const Slot = React.forwardRef<any, any>((props, forwardedRef) => {
    const { children, ...slotProps } = props;

    if (!React.isValidElement(children)) {
        return null;
    }

    const child = children as React.ReactElement<any>;
    const childProps = child.props;

    const mergedProps: Record<string, any> = { ...slotProps };

    // merge event handlers
    for (const key in slotProps) {
        if (/^on[A-Z]/.test(key)) {
            mergedProps[key] = mergeHandlers(childProps[key], slotProps[key]);
        }
    }

    if (childProps.className || slotProps.className) {
        mergedProps.className = [slotProps.className, childProps.className].filter(Boolean).join(' ');
    }

    // merge style
    if (childProps.style || slotProps.style) {
        mergedProps.style = { ...slotProps.style, ...childProps.style };
    }

    mergedProps.ref = mergeRefs(childProps.ref, forwardedRef);

    return React.cloneElement(children, mergedProps);
});
