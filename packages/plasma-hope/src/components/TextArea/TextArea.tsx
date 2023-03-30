import React, { createRef, forwardRef, useState } from 'react';

import { useResizeObserver } from '../../hooks';

import { TextAreaWeb } from './views/web/TextAreaWeb';
import { TextAreaB2C } from './views/b2c/TextAreaB2C';
import type { TextAreaProps, Design } from './types';

const componentMap = {
    web: TextAreaWeb,
    b2c: TextAreaB2C,
};

const ROOT_FONT_SIZE = 16;

export const TextArea = ({ design }: Design) => {
    const TextAreaView = componentMap[design];

    return forwardRef<HTMLTextAreaElement, TextAreaProps>((props, innerRef) => {
        const { rightHelper, leftHelper, label, placeholder } = props;

        const [width, setWidth] = useState(0);

        const outerRef = innerRef && 'current' in innerRef ? innerRef : createRef<HTMLTextAreaElement>();
        const hasHelper = Boolean(leftHelper || rightHelper);
        const placeLabel = (label || placeholder) as string | undefined;

        useResizeObserver(outerRef, (currentElement) => {
            const { width: elementWidth } = currentElement.getBoundingClientRect();
            setWidth(elementWidth / ROOT_FONT_SIZE);
        });

        const commonProps = { outerRef, hasHelper, placeLabel, width };

        return <TextAreaView {...commonProps} {...props} />;
    });
};
