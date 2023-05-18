import React from 'react';
import styled, { css } from 'styled-components';

import { Body1, Footnote1 } from '../Typography';
import { applyEllipsis, applyNoSelect } from '../../mixins';
import { secondary } from '../../tokens';
import type { InputHTMLAttributes } from '../../types';

export type ControlProps = {
    /**
     * Уникальный идентификатор контрола
     */
    id?: string;
    /**
     * Метка-подпись к элементу
     */
    label?: React.ReactNode;
    /**
     * Описание элемента
     */
    description?: React.ReactNode;
};
export interface BaseboxProps extends ControlProps, InputHTMLAttributes<HTMLInputElement> {
    children?: never;
    /**
     * Title и description в одну строку или с переносом строк
     */
    singleLine?: boolean;
}

export const StyledRoot = styled.div`
    ${applyNoSelect}

    position: relative;
    align-items: flex-start;
    display: flex;
    cursor: pointer;
`;

export const StyledContentWrapper = styled.label`
    position: relative;
    align-items: flex-start;
    display: flex;
    width: 100%;
    cursor: inherit;
`;

export const StyledInput = styled.input`
    position: absolute;

    &:focus {
        outline: 0 none;
    }
`;
export const StyledTrigger = styled.div`
    box-sizing: border-box;
    position: relative;
    transition: ${({ theme }) => (theme.lowPerformance ? 'unset' : 'all 0.1s ease-in-out')};
`;
export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.75rem;
`;
export const StyledLabel = styled(Body1)<{ singleLine?: boolean }>`
    ${({ singleLine }) =>
        singleLine &&
        css`
            ${applyEllipsis}
        `}
`;
export const StyledDescription = styled(Footnote1)<{ singleLine?: boolean }>`
    color: ${secondary};
    ${({ singleLine }) =>
        singleLine &&
        css`
            ${applyEllipsis}
        `}
`;
