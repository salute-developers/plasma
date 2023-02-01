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
    surfaceLiquid01,
    surfaceLiquid02,
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

const StyledTextArea = styled(BaseArea)<{ $isHelper: boolean }>`
    ${applyInputStyles};

    --computed-height: calc(9.375rem - var(--field-helpers-padding-top) - var(--padding-bottom) - 14px);

    padding: var(--padding-top) var(--padding-right-default) 0 var(--padding-left-default);
    padding-bottom: ${({ $isHelper }) => ($isHelper ? null : 'var(--padding-bottom)')};

    min-height: var(--min-height);

    /* INFO: Высчитываем высоты с учетом высоты блока с подсказками */
    height: ${({ $isHelper }) => ($isHelper ? 'var(--computed-height)' : null)};

    border: none;
    border-radius: ${({ $isHelper }) =>
        $isHelper ? 'var(--border-radius) var(--border-radius) 0 0' : 'var(--border-radius)'};

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

const StyledFieldHelpers = styled(FieldHelpers)<{ width: number }>`
    position: initial;

    padding: var(--field-helpers-padding-top) var(--padding-right-default) var(--padding-bottom)
        var(--padding-left-default);

    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);

    background-color: ${surfaceLiquid01};

    width: ${({ width }) => width}px;

    transition: background-color 0.1s ease-in-out;
`;

const TextAreaWrapper = styled(TextFieldRoot)<{ $properties: ReadonlyArray<SimpleInterpolation> }>`
    ${({ $properties }) => $properties};

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

    textarea[data-focus-visible-added] + ${StyledFieldHelpers} {
        background-color: ${surfaceLiquid02};
    }
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

        const hasHelper = Boolean(leftHelper || rightHelper);

        return (
            <TextAreaWrapper
                status={status}
                $isContentRight={Boolean(contentRight)}
                $isHelper={hasHelper}
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
                        $isHelper={hasHelper}
                        {...rest}
                    />
                    {hasHelper && (
                        <StyledFieldHelpers width={width} id={id ? `${id}-helper` : undefined}>
                            {leftHelper && <FieldHelper as={TextFieldHelper}>{leftHelper}</FieldHelper>}
                            {rightHelper && <StyledFieldRightHelper>{rightHelper}</StyledFieldRightHelper>}
                        </StyledFieldHelpers>
                    )}
                </FieldWrapper>
            </TextAreaWrapper>
        );
    },
);
