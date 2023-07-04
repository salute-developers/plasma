import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { FieldRoot, FieldContent, TextArea as BaseArea } from '@salutejs/plasma-core';
import type { TextAreaProps as BaseProps } from '@salutejs/plasma-core';

import { FieldHelper, applyInputStyles } from '../Field';
import { spatnavClassNameAttrs } from '../../utils';

export interface TextAreaProps extends BaseProps {}

const StyledTextArea = styled(BaseArea).attrs(spatnavClassNameAttrs)`
    ${applyInputStyles}

    border-radius: 1rem;
`;

const StyledFieldContentWrapper = styled.div<{ width?: string }>`
    position: absolute;
    top: 0;

    width: ${({ width }) => width || '100%'};
`;
/**
 * Поле ввода многострочного текста.
 */
// eslint-disable-next-line prefer-arrow-callback
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
    { id, disabled, status, label, placeholder, contentRight, helperText, style, className, width, ...rest },
    ref,
) {
    const placeLabel = (label || placeholder) as string | undefined;

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
                ref={ref}
                id={id}
                placeholder={placeLabel}
                disabled={disabled}
                status={status}
                width={width}
                {...rest}
            />
            {contentRight && (
                <StyledFieldContentWrapper width={width}>
                    <FieldContent pos="right">{contentRight}</FieldContent>
                </StyledFieldContentWrapper>
            )}
            {helperText && <FieldHelper id={id ? `${id}-helpertext` : undefined}>{helperText}</FieldHelper>}
        </FieldRoot>
    );
});
