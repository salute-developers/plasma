import React, { useRef } from 'react';
import styled from 'styled-components';
import { FieldRoot, FieldContent, FieldHelper, TextArea as BaseArea } from '@salutejs/plasma-core';

import type { TextAreaPropsCommon } from '../../types';
import { useForkRef } from '../../../../hooks';
import { useAutoResize } from '../../useAutoResize';

import { applyInputStyles } from './mixins';

const StyledTextArea = styled(BaseArea)`
    -webkit-appearance: none; /* для отображение рамок на iOS */

    ${applyInputStyles}
`;

const StyledFieldHelpers = styled.div<{ width: number }>`
    display: flex;
    justify-content: space-between;

    width: ${({ width }) => width}rem;
`;

const StyledFieldContentWrapper = styled.div<{ width: number }>`
    position: absolute;

    width: ${({ width }) => width}rem;
`;

const StyledFieldRightHelper = styled(FieldHelper)`
    margin-left: auto;
`;

// eslint-disable-next-line prefer-arrow-callback
export const TextAreaWeb = ({
    id,
    disabled,
    status,
    contentRight,
    helperText,
    style,
    className,
    leftHelper,
    rightHelper,
    hasHelper,
    placeLabel,
    outerRef,
    helperWidth,
    height,
    width,
    value,
    autoResize = false,
    minAuto = 0,
    maxAuto,
    ...rest
}: TextAreaPropsCommon) => {
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    const forkRef = useForkRef(inputRef, outerRef);

    useAutoResize(autoResize, inputRef, value, minAuto, maxAuto);

    return (
        <FieldRoot
            $disabled={disabled}
            $isHelper={hasHelper || Boolean(helperText)}
            status={status}
            style={style}
            className={className}
        >
            {contentRight && (
                <StyledFieldContentWrapper width={helperWidth}>
                    <FieldContent pos="right">{contentRight}</FieldContent>
                </StyledFieldContentWrapper>
            )}
            <StyledTextArea
                ref={forkRef}
                id={id}
                placeholder={placeLabel}
                disabled={disabled}
                status={status}
                height={autoResize ? minAuto : height}
                width={width}
                aria-describedby={id ? `${id}-helper` : undefined}
                value={value}
                {...rest}
            />
            {(hasHelper || helperText) && (
                <StyledFieldHelpers width={helperWidth} id={id ? `${id}-helper` : undefined}>
                    {(leftHelper || helperText) && <FieldHelper>{leftHelper || helperText}</FieldHelper>}
                    {rightHelper && <StyledFieldRightHelper>{rightHelper}</StyledFieldRightHelper>}
                </StyledFieldHelpers>
            )}
        </FieldRoot>
    );
};
