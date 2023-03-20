import React from 'react';
import styled from 'styled-components';
import { FieldRoot, FieldContent, FieldHelper, TextArea as BaseArea } from '@salutejs/plasma-core';

import type { TextAreaPropsCommon } from '../../types';

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
    width,
    ...rest
}: TextAreaPropsCommon) => {
    return (
        <FieldRoot
            $disabled={disabled}
            $isHelper={hasHelper || Boolean(helperText)}
            status={status}
            style={style}
            className={className}
        >
            {contentRight && (
                <StyledFieldContentWrapper width={width}>
                    <FieldContent pos="right">{contentRight}</FieldContent>
                </StyledFieldContentWrapper>
            )}
            <StyledTextArea
                ref={outerRef}
                id={id}
                placeholder={placeLabel}
                disabled={disabled}
                status={status}
                aria-describedby={id ? `${id}-helper` : undefined}
                {...rest}
            />
            {(hasHelper || helperText) && (
                <StyledFieldHelpers width={width} id={id ? `${id}-helper` : undefined}>
                    {(leftHelper || helperText) && <FieldHelper>{leftHelper || helperText}</FieldHelper>}
                    {rightHelper && <StyledFieldRightHelper>{rightHelper}</StyledFieldRightHelper>}
                </StyledFieldHelpers>
            )}
        </FieldRoot>
    );
};
