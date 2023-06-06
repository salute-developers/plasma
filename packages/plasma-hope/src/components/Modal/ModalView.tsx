import React from 'react';
import styled from 'styled-components';
import { backgroundPrimary } from '@salutejs/plasma-core';
import { IconClose } from '@salutejs/plasma-icons';

import { Button } from '../Button';

export interface ModalViewProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Содержимое модального окна.
     */
    children?: React.ReactNode;
    /**
     * Обработчик клика по кнопке "закрыть".
     */
    onClose?: () => void;
    /**
     * WAI-ARIA атрибут кнопки "закрыть".
     */
    closeButtonAriaLabel?: string;
}

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const StyledBody = styled.div`
    position: relative;

    width: 25rem;
    max-width: 100%;

    border-radius: 1.25rem;
    background-color: ${backgroundPrimary};

    pointer-events: all;
`;
const StyledContent = styled.div`
    padding: 2rem;
`;
const StyledButtonClose = styled(Button({ design: 'web' })).attrs(() => ({ view: 'clear' }))`
    position: absolute;
    top: 0;
    right: 0;
    margin: 2rem;
    width: auto;
    height: auto;
    padding: 0;
`;

/**
 * Визуальная часть модального окна.
 */
export const ModalView = React.forwardRef<HTMLDivElement, ModalViewProps>(
    ({ role = 'dialog', closeButtonAriaLabel, children, onClose, ...rest }, ref) => {
        return (
            <StyledWrapper>
                <StyledBody {...rest} ref={ref} role={role} aria-modal="true">
                    <StyledContent>{children}</StyledContent>
                    <StyledButtonClose
                        aria-label={closeButtonAriaLabel}
                        onClick={onClose}
                        contentLeft={<IconClose size="s" color="inherit" />}
                    />
                </StyledBody>
            </StyledWrapper>
        );
    },
);
