import React from 'react';
import styled from 'styled-components';
import { CardContent as BaseCardContent, CardContentProps as BaseCardContentProps } from '@salutejs/plasma-core';

export type CardContentProps = Omit<BaseCardContentProps, 'cover' | 'coverGradient' | 'compact'>;

/**
 * Компонент для отображения как текстового, так и любого другого контента.
 */
export const CardContent = styled<React.FC<CardContentProps>>(BaseCardContent)`
    padding: 1.25rem;
    padding-top: 1rem;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    justify-content: flex-end;
`;
