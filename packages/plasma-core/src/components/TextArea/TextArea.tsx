import styled, { css, InterpolationFunction } from 'styled-components';
import { CSSProperties } from 'react';

import type { TextareaHTMLAttributes, TextareaResize } from '../../types';
import type { FieldProps } from '../Field';
import { applyInputStyles } from '../Input/Input.mixins';

export interface TextAreaProps extends Omit<FieldProps, 'contentLeft'>, TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * Изменение размера текстового поля.
     */
    resize?: TextareaResize;
    /**
     * Высота текстового поля, значения в rem
     * @example height="10", height={10}
     */
    height?: number | CSSProperties['height'];
    /**
     * Ширина текстового поля, значения в rem
     * @example width="10", width={10}
     */
    width?: number | CSSProperties['width'];
}

export const applyTextAreaCssProperties: InterpolationFunction<Pick<TextAreaProps, 'height' | 'width'>> = ({
    height,
    width,
}) => {
    const computedHeight = !Number.isNaN(Number(height)) ? `${height}rem` : height;
    const computedWidth = !Number.isNaN(Number(width)) ? `${width}rem` : width;

    return css`
        --plasma-textarea-height: ${computedHeight};
        --plasma-textarea-width: ${computedWidth};
    `;
};
/**
 * Base textarea.
 */
export const TextArea = styled.textarea<
    Pick<TextAreaProps, 'resize' | 'status' | 'height' | 'width' | 'rows' | 'cols'>
>`
    ${applyInputStyles}
    ${applyTextAreaCssProperties}

    display: block;
    min-height: 3.5rem; /* 56px */

    height: ${({ rows }) => (rows ? 'unset' : 'var(--plasma-textarea-height, 9.375rem)')};
    width: ${({ cols }) => (cols ? 'unset' : 'var(--plasma-textarea-width, 100%)')};

    ${({ resize, cols }) =>
        css`
            ${resize && `resize: ${resize};`}
            ${resize !== 'both' &&
            resize !== 'horizontal' &&
            !cols &&
            'min-width: var(--plasma-textarea-width, 100%); max-width: var(--plasma-textarea-width, 100%)'}
        `}
`;
