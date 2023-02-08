import React, { forwardRef, useState, useMemo, createRef } from 'react';
import styled from 'styled-components';
import {
    FieldRoot,
    FieldContent,
    FieldHelper,
    TextArea as BaseArea,
    TextFieldHelper,
    useResizeObserver,
} from '@salutejs/plasma-core';
import type { TextAreaProps as BaseProps } from '@salutejs/plasma-core';

import { applyInputStyles } from '../Field';

export interface TextAreaProps extends BaseProps {
    /**
     * @deprecated не используется в компоненте.
     */
    helperBlock?: React.ReactElement;
    /**
     * @deprecated свойство устарело, необходимо использовать `leftHelper`.
     */
    helperText?: string;
    /**
     * Вспомогательный текст снизу слева для поля ввода.
     */
    leftHelper?: string;
    /**
     * Вспомогательный текст снизу справа для поля ввода.
     */
    rightHelper?: string;
}

const StyledTextArea = styled(BaseArea)`
    -webkit-appearance: none; /* для отображение рамок на iOS */

    ${applyInputStyles}
`;

const StyledFieldHelpers = styled.div<{ width: number }>`
    display: flex;
    justify-content: space-between;

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
// eslint-disable-next-line prefer-arrow-callback
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
    {
        id,
        disabled,
        status,
        label,
        placeholder,
        contentRight,
        helperText,
        style,
        className,
        leftHelper,
        rightHelper,
        ...rest
    },
    outerRef,
) {
    const [width, setWidth] = useState(0);
    const ref = useMemo(() => (outerRef && 'current' in outerRef ? outerRef : createRef<HTMLTextAreaElement>()), [
        outerRef,
    ]);

    useResizeObserver(ref, (currentElement) => {
        const { width: elementWidth } = currentElement.getBoundingClientRect();

        setWidth(elementWidth);
    });

    const placeLabel = (label || placeholder) as string | undefined;

    return (
        <FieldRoot
            $disabled={disabled}
            $isContentRight={Boolean(contentRight)}
            $isHelper={Boolean(leftHelper || helperText)}
            status={status}
            style={style}
            className={className}
        >
            <StyledFieldContentWrapper width={width}>
                {contentRight && <FieldContent pos="right">{contentRight}</FieldContent>}
            </StyledFieldContentWrapper>
            <StyledTextArea
                ref={ref}
                id={id}
                placeholder={placeLabel}
                disabled={disabled}
                status={status}
                aria-describedby={id ? `${id}-helper` : undefined}
                {...rest}
            />
            <StyledFieldHelpers width={width} id={id ? `${id}-helper` : undefined}>
                {(leftHelper || helperText) && (
                    <FieldHelper as={TextFieldHelper}>{leftHelper || helperText}</FieldHelper>
                )}
                {rightHelper && <StyledFieldRightHelper>{rightHelper}</StyledFieldRightHelper>}
            </StyledFieldHelpers>
        </FieldRoot>
    );
});
