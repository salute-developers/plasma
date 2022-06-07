import React, { useEffect, useRef } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';

import { overlay, backgroundPrimary } from '@salutejs/plasma-tokens';

import { Button, ButtonProps } from '../Button';
import { TextBox } from '../TextBox';
import { Cell } from '../Cell';

export interface ConfirmProps {
    /**
     * Заголовок подтверждения
     */
    title: string;
    /**
     * Подзаголовок подтверждения
     */
    subtitle?: string;

    /**
     * Текст кнопки согласия
     */
    approveText: string;

    /**
     * Текст кнопки отказа
     */
    dismissText?: string;

    /**
     * Очередность кнопок
     */
    reverseButtons?: boolean;

    /**
     * Вид подтверждения
     */
    view?: Exclude<ButtonProps['view'], 'checked' | 'clear'>;

    /**
     * Соостояние подтверждения
     */
    visible: boolean;

    /**
     * Обработчик согласия
     */
    onApprove: () => void;

    /**
     * Обработчик отказа
     */
    onDismiss?: () => void;
}

const Wrapper = styled.div<{ visible: boolean }>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 1;
    transition: ${({ theme }) => (theme.lowPerformance ? 'unset' : 'all 0.5s 0.1s')};
    z-index: 1000;

    ${({ visible }) => !visible && css`
        opacity: 0;
        visibility: hidden;
    `}
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: ${overlay};
`;

const NoScroll = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

const ConfirmRoot = styled.div<{ visible: boolean }>`
    position: absolute;
    left: 0;
    right: 0;

    margin: 1rem;
    padding: 0.75rem;
    border-radius: 1.25rem;

    background-color: ${backgroundPrimary};

    transition: ${({ theme }) => theme.lowPerformance ? 'unset' : 'transform 0.5s'};
    ${({ visible }) => !visible && ({
        transform: 'translateY(-100%)',
    })};
`;

const BtnWrap = styled.div<{ reverse: boolean }>`
    display: flex;
    gap: 0.75rem;

    ${({ reverse }) => reverse && ({
        flexDirection: 'row-reverse',
    })};

    /* https://css-tricks.com/flexbox-truncated-text */
    button {
        min-width: 0;
    }
`;

/**
 * Сообщение подтверждения действия пользователя.
 */
export const Confirm: React.FC<ConfirmProps> = (props) => {
    const {
        title,
        subtitle,
        visible,
        approveText,
        dismissText,
        view = 'secondary',
        reverseButtons = false,
        onApprove,
        onDismiss,
    } = props;

    const onApproveClick = () => {
        onApprove();
    };
    const onDismissClick = () => {
        onDismiss && onDismiss();
    };

    const btnRef = useRef<HTMLButtonElement>(null);
    useAutoFocus(btnRef, { trigger: visible });

    const approve = <Button ref={btnRef} tabIndex={0} stretch view={view} text={approveText} onClick={onApproveClick} />;
    const dismiss = dismissText ? <Button stretch view="secondary" text={dismissText} onClick={onDismissClick} /> : null;
    const buttons = <BtnWrap reverse={reverseButtons}>{dismiss}{approve}</BtnWrap>;

    return (
        <Wrapper visible={visible}>
            <Overlay onClick={onDismissClick}/>
            { visible && <NoScroll /> }
            <ConfirmRoot visible={visible}>
                <Cell content={<TextBox title={title} subTitle={subtitle} />} />
                { buttons }
            </ConfirmRoot>
        </Wrapper>
    );
};

export interface UseFocusParams {
    preventScroll?: boolean;
    trigger?: boolean;
}

// TODO: it should be actual WithAutoFocus
export function useAutoFocus<T extends HTMLElement>(ref: React.RefObject<T>, params: UseFocusParams = {}) {
    const { preventScroll, trigger = true } = params;

    const setFocus = React.useCallback(() => {
        ref.current?.focus({ preventScroll });
        if (ref.current !== document.activeElement) {
            document.addEventListener('transitionend', setFocus, { once: true });
        } else {
            document.removeEventListener('transitionend', setFocus);
        }
    }, [preventScroll]);

    useEffect(() => {
        trigger && setFocus();
        return () => document.removeEventListener('transitionend', setFocus);
    }, [trigger]);

    return setFocus;
}
