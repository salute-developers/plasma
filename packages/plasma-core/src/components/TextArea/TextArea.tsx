import styled, { css } from 'styled-components';

import type { TextareaHTMLAttributes, TextareaResize } from '../../types';
import type { FieldProps } from '../Field';
import { applyInputStyles } from '../Input/Input.mixins';

export interface TextAreaProps extends Omit<FieldProps, 'contentLeft'>, TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * Изменение размера текстового поля.
     */
    resize?: TextareaResize;
    /**
     * Высота текстового поля.
     */
    height?: string;
    /**
     * Ширина текстового поля.
     */
    width?: string;
}

/**
 * Base textarea.
 */
export const TextArea = styled.textarea<
    Pick<TextAreaProps, 'resize' | 'status' | 'height' | 'width' | 'rows' | 'cols'>
>`
    ${applyInputStyles}

    display: block;
    min-height: 3.5rem; /* 56px */

    height: ${({ height, rows }) => (rows ? 'unset' : height || '9.375rem')};
    width: ${({ width, cols }) => (cols ? 'unset' : width || '100%')};

    ${({ resize, width, cols }) =>
        css`
            ${resize && `resize: ${resize};`}
            ${resize !== 'both' &&
            resize !== 'horizontal' &&
            !cols &&
            `min-width: ${width || '100%'}; max-width: ${width || '100%'}`}
        `}
`;
