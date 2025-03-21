import React from 'react';
import styled from 'styled-components';
import { IconClose } from '@salutejs/plasma-icons';

import { Button } from '../Button';

export interface ModalViewProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Содержимое модального окна.
     */
    children?: React.ReactNode;
    /**
     * Общий обработчик клика по кнопке "закрыть".
     */
    onClose?: () => void;
    /**
     * WAI-ARIA атрибут кнопки "закрыть".
     */
    closeButtonAriaLabel?: string;
    /**
     * Отображать кнопку "закрыть"(по умолчанию true).
     */
    showCloseButton?: boolean;
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
    background-color: var(--surface-solid-card);

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
    ({ role = 'dialog', closeButtonAriaLabel, children, onClose, showCloseButton = true, ...rest }, ref) => {
        return (
            <StyledWrapper>
                <StyledBody {...rest} ref={ref} role={role} aria-modal="true">
                    <StyledContent>{children}</StyledContent>
                    {showCloseButton && (
                        <StyledButtonClose
                            aria-label={closeButtonAriaLabel}
                            onClick={onClose}
                            contentLeft={<IconClose size="s" color="inherit" />}
                        />
                    )}
                </StyledBody>
            </StyledWrapper>
        );
    },
);
