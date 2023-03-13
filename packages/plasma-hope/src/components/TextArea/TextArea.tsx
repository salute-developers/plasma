import React, { createRef, forwardRef, useMemo, useState } from 'react';

import { useResizeObserver } from '../../hooks';

import { TextAreaWeb } from './views/web/TextAreaWeb';
import { TextAreaB2C } from './views/b2c/TextAreaB2C';
import type { TextAreaProps as TextAreaPropsBase } from './types';

const componentMap = {
    web: TextAreaWeb,
    b2c: TextAreaB2C,
};

const ROOT_FONT_SIZE = 16;

export type TextAreaProps = TextAreaPropsBase & {
    design: 'b2c' | 'web';
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, innerRef) => {
    const { rightHelper, leftHelper, label, placeholder, design } = props;

    const [width, setWidth] = useState(0);

    const outerRef = innerRef && 'current' in innerRef ? innerRef : createRef<HTMLTextAreaElement>();
    const hasHelper = Boolean(leftHelper || rightHelper);
    const placeLabel = (label || placeholder) as string | undefined;

    useResizeObserver(outerRef, (currentElement) => {
        const { width: elementWidth } = currentElement.getBoundingClientRect();
        setWidth(elementWidth / ROOT_FONT_SIZE);
    });

    const commonProps = { outerRef, hasHelper, placeLabel, width };

    const TextAreaView = useMemo(() => componentMap[design], [design]);

    return <TextAreaView {...commonProps} {...props} />;
});
