import React, { createRef, useMemo, useState } from 'react';
import styled, { SimpleInterpolation } from 'styled-components';
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

import { FieldWrapper, FieldHelper, FieldHelpers, applyInputStyles } from '../Field';

import { textAreaProps } from './TextArea.props';

export interface TextAreaProps extends Omit<BaseProps, 'size'> {
    /**
     * Вспомогательные тексты снизу для поля ввода.
     */
    leftHelper?: string;
    rightHelper?: string;

    /**
     * Возможные размеры компонента
     */
    size?: 'l' | 'm' | 's' | 'xs';
}

const StyledTextArea = styled(BaseArea)`
    ${applyInputStyles};

    padding: var(--padding);
    min-height: var(--min-height);

    border: 0 none;
    border-radius: var(--border-radius);

    font-size: var(--font-size);
    line-height: var(--line-height);

    /* TODO: Replace local value with typography token when resolving issue PLASMA-1838 */
    letter-spacing: -0.02em;

    color: ${secondary};

    &:disabled {
        color: ${tertiary};
    }

    &:focus:not(:disabled) {
        color: ${primary};
    }
`;

const TextAreaWrapper = styled(TextFieldRoot)<{ $properties: ReadonlyArray<SimpleInterpolation> }>`
    ${({ $properties }) => $properties};

    --padding-bottom: ${({ $isHelper }) => ($isHelper ? 'var(--padding-bottom-override)' : null)};

    ${FieldContent} {
        top: var(--top);
        right: var(--right);

        height: 1.25rem;
    }

    ${StyledTextArea} {
        padding-right: ${({ $isContentRight }) => ($isContentRight ? 'var(--padding-right)' : null)};
    }

    ${FieldHelper} {
        font-size: 0.75rem;
        line-height: 0.875rem;

        /* TODO: Replace local value with typography token when resolving issue PLASMA-1838 */
        letter-spacing: -0.02em;
    }
`;

const StyledFieldHelpers = styled(FieldHelpers)<{ width: number }>`
    bottom: 0.75rem;

    padding-left: var(--padding-x);
    padding-right: var(--padding-x);

    width: ${({ width }) => width}px;
`;

const StyledFieldContentWrapper = styled.div<{ width: number }>`
    position: absolute;

    width: ${({ width }) => width}px;
`;

const StyledFieldRightHelper = styled(FieldHelper)`
    margin-left: auto;
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
            size = 'm',
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
            <TextAreaWrapper
                status={status}
                $isContentRight={Boolean(contentRight)}
                $isHelper={Boolean(leftHelper || rightHelper)}
                $properties={textAreaProps[size]}
                className={className}
                style={style}
            >
                <FieldWrapper status={status}>
                    <StyledFieldContentWrapper width={width}>
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
                        {leftHelper && <FieldHelper as={TextFieldHelper}>{leftHelper}</FieldHelper>}
                        {rightHelper && <StyledFieldRightHelper>{rightHelper}</StyledFieldRightHelper>}
                    </StyledFieldHelpers>
                </FieldWrapper>
            </TextAreaWrapper>
        );
    },
);
