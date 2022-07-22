import React, { createRef, useMemo, useState } from 'react';
import styled from 'styled-components';
import {
    TextFieldRoot,
    TextArea as BaseArea,
    TextFieldHelper,
    primary,
    secondary,
    tertiary,
    useResizeObserver,
    FieldContent,
} from '@salutejs/plasma-core';
import type { TextAreaProps as BaseProps } from '@salutejs/plasma-core';

import { FieldWrapper, FieldHelper, FieldHelpers, applyInputStyles } from '../Field/Field';

export interface TextAreaProps extends BaseProps {
    /**
     * Вспомогательные тексты снизу для поля ввода.
     */
    leftHelper?: string;
    rightHelper?: string;
}

const StyledTextArea = styled(BaseArea)`
    ${applyInputStyles}

    border: 0 none;
    border-radius: 0.75rem;
    color: ${secondary};

    padding: 1.25rem 1.5rem;
    padding-bottom: 3.5rem;

    /* Design has a wrong token value: TextL FS 20px when actually TextL has FS 24px */
    font-size: 1.25rem;
    line-height: 1.75rem;
    letter-spacing: -1.9%;

    &:disabled {
        color: ${tertiary};
    }

    &:focus:not(:disabled) {
        color: ${primary};
    }
`;

const StyledFieldHelpers = styled(FieldHelpers)<{ width: number }>`
    width: ${({ width }) => width}px;
`;

const StyledFieldContentWrapper = styled.div<{ width: number }>`
    position: absolute;

    width: ${({ width }) => width}px;
`;

/**
 * Поле ввода многострочного текста.
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
        {
            placeholder,
            label,
            leftHelper,
            rightHelper,
            disabled,
            contentRight,
            status,
            resize,
            onChange,
            onFocus,
            onBlur,
            style,
            id,
            className,
            ...rest
        },
        outerRef,
    ) => {
        const [width, setWidth] = useState(0);
        const ref = useMemo(() => (outerRef && 'current' in outerRef ? outerRef : createRef<HTMLTextAreaElement>()), [
            outerRef,
        ]);

        const placeLabel = (label || placeholder) as string | undefined;

        useResizeObserver(ref, (currentElement) => {
            const { width: elementWidth } = currentElement.getBoundingClientRect();

            setWidth(elementWidth);
        });

        return (
            <TextFieldRoot
                status={status}
                $isContentRight={Boolean(contentRight)}
                $isHelper={Boolean(leftHelper || rightHelper)}
                className={className}
                style={style}
            >
                <FieldWrapper status={status}>
                    <StyledFieldContentWrapper width={width} id={id ? `${id}-helper` : undefined}>
                        {contentRight && <FieldContent pos="right">{contentRight}</FieldContent>}
                    </StyledFieldContentWrapper>
                    <StyledTextArea
                        ref={ref}
                        id={id}
                        placeholder={placeLabel}
                        disabled={disabled}
                        status={status}
                        resize={resize}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        aria-describedby={id ? `${id}-helper` : undefined}
                        {...rest}
                    />
                    <StyledFieldHelpers width={width} id={id ? `${id}-helper` : undefined}>
                        <FieldHelper as={TextFieldHelper}>{leftHelper}</FieldHelper>
                        <FieldHelper>{rightHelper}</FieldHelper>
                    </StyledFieldHelpers>
                </FieldWrapper>
            </TextFieldRoot>
        );
    },
);
