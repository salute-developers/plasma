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
export const TextArea = styled.textarea<Pick<TextAreaProps, 'resize' | 'status' | 'height' | 'width'>>`
    ${applyInputStyles}

    display: block;
    min-height: 3.5rem; /* 56px */

    height: ${({ height }) => height || '9.375rem'};
    width: ${({ width }) => width || '100%'};

    ${({ resize, width }) =>
        css`
            ${resize && `resize: ${resize};`}
            ${resize !== 'both' &&
            resize !== 'horizontal' &&
            `min-width: ${width || '100%'}; max-width: ${width || '100%'}`}
        `}
`;
