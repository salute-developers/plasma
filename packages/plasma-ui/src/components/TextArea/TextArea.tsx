import React, { forwardRef, useRef, useState } from 'react';
import styled from 'styled-components';
import { FieldRoot, FieldContent, TextArea as BaseArea } from '@salutejs/plasma-core';
import type { TextAreaProps as BaseProps } from '@salutejs/plasma-core';

import { FieldHelper, applyInputStyles } from '../Field';
import { spatnavClassNameAttrs } from '../../utils';
import { useForkRef, useResizeObserver } from '../../hooks';

export interface TextAreaProps extends BaseProps {}

const StyledTextArea = styled(BaseArea).attrs(spatnavClassNameAttrs)`
    ${applyInputStyles}

    border-radius: 1rem;
`;

const StyledFieldHelperWrapper = styled.div<{ width: number }>`
    width: ${({ width }) => width}px;
`;

const StyledFieldContentWrapper = styled.div<{ width: number }>`
    position: absolute;
    top: 0;

    width: ${({ width }) => width}px;
`;
/**
 * Поле ввода многострочного текста.
 */
// eslint-disable-next-line prefer-arrow-callback
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
    { id, disabled, status, label, placeholder, contentRight, helperText, style, className, ...rest },
    ref,
) {
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    const forkRef = useForkRef(inputRef, ref);

    const placeLabel = (label || placeholder) as string | undefined;

    const [helperWidth, setHelperWidth] = useState(0);

    useResizeObserver(inputRef, (currentElement: HTMLTextAreaElement) => {
        const { width: elementWidth } = currentElement.getBoundingClientRect();
        setHelperWidth(elementWidth);
    });

    return (
        <FieldRoot
            $disabled={disabled}
            $isContentRight={Boolean(contentRight)}
            $isHelper={Boolean(helperText)}
            status={status}
            style={style}
            className={className}
            aria-describedby={id ? `${id}-helpertext` : undefined}
        >
            <StyledTextArea
                ref={forkRef}
                id={id}
                placeholder={placeLabel}
                disabled={disabled}
                status={status}
                {...rest}
            />
            {contentRight && (
                <StyledFieldContentWrapper width={helperWidth}>
                    <FieldContent pos="right">{contentRight}</FieldContent>
                </StyledFieldContentWrapper>
            )}
            {helperText && (
                <StyledFieldHelperWrapper width={helperWidth}>
                    <FieldHelper id={id ? `${id}-helpertext` : undefined}>{helperText}</FieldHelper>
                </StyledFieldHelperWrapper>
            )}
        </FieldRoot>
    );
});
