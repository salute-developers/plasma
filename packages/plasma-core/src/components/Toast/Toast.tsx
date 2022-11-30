import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { applyNoSelect } from '../../mixins';
import { dark02, white } from '../../tokens';
import { Footnote1 } from '../Typography';

import type { ToastRole } from './Toast.types';

export type ToastProps = {
    role?: ToastRole;
    text: string;
    contentLeft?: ReactNode;
};

export const StyledRoot = styled(Footnote1)`
    display: inline-flex;
    align-items: center;
    /* stylelint-disable-next-line number-max-precision */
    padding: 0.6875rem 1.25rem;
    border-radius: 1.5rem;

    background: ${dark02};
    color: ${white};

    ${applyNoSelect};
`;
const StyledContent = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`;

/**
 * Короткие текстовые подсказки.
 * Вызываются только в текущем запущенном приложении как реакция на выполнение действия пользователем.
 */
export const Toast: React.FC<ToastProps> = ({ role = 'status', text, contentLeft }) => {
    let ariaLive: 'assertive' | 'polite' = 'polite';
    let ariaAtomic = false;

    if (role === 'alert') {
        ariaLive = 'assertive';
    } else if (role === 'status') {
        ariaAtomic = true;
    }

    return (
        <StyledRoot role={role} aria-live={ariaLive} aria-atomic={ariaAtomic}>
            {contentLeft && <StyledContent>{contentLeft}</StyledContent>}
            {text}
        </StyledRoot>
    );
};
