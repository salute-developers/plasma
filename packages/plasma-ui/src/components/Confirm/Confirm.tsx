import React, { useCallback, useRef } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { overlay, backgroundPrimary } from '@salutejs/plasma-tokens';
import { ButtonRoot } from '@salutejs/plasma-core';

import { mediaQuery } from '../../utils';
import { Button, ButtonProps } from '../Button';
import { TextBox } from '../TextBox';
import { Cell } from '../Cell';

import { useAutoFocus } from './Confirm.hooks';

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
    view?: Exclude<ButtonProps['view'], 'checked' | 'clear' | 'overlay'>;

    /**
     * Состояние подтверждения
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

// TODO: https://github.com/salute-developers/plasma/issues/232
const Wrapper = styled.div<{ visible: boolean }>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 1;
    transition: ${({ theme }) => (theme.lowPerformance ? 'unset' : 'all 0.5s 0.1s')};
    z-index: 1000;

    ${({ visible }) =>
        !visible &&
        css`
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

const tvLayout = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const StyledButton = styled(Button)``;

// TODO: https://github.com/salute-developers/plasma/issues/232
const ConfirmRoot = styled.div<{ visible: boolean }>`
    position: absolute;
    left: 0;
    right: 0;

    margin: 1rem;
    padding: 0.75rem;
    border-radius: 1.25rem;

    background-color: ${backgroundPrimary};

    ${({ theme }) => css`
        ${mediaQuery('M', theme.deviceScale)(tvLayout)}
        ${mediaQuery('L', theme.deviceScale)(tvLayout)}
        ${mediaQuery('XL', theme.deviceScale)(tvLayout)}
    `}

    transition: ${({ theme }) => (theme.lowPerformance ? 'unset' : 'transform 0.5s')};
    ${({ visible }) =>
        !visible && {
            transform: 'translateY(-100%)',
        }};
`;

const BtnWrap = styled.div<{ reverse: boolean }>`
    flex: 1;
    display: flex;

    ${StyledButton}:not(:last-child) {
        ${({ reverse }) => (reverse ? { marginLeft: '0.75rem' } : { marginRight: '0.75rem' })}
    }

    ${({ reverse }) =>
        reverse && {
            flexDirection: 'row-reverse',
        }};

    /* https://css-tricks.com/flexbox-truncated-text */
    ${ButtonRoot} {
        min-width: 0;
    }
`;

// TODO: https://github.com/salute-developers/plasma/issues/232
const StyledCell = styled(Cell)`
    flex: 1;

    ${({ theme }) =>
        mediaQuery(
            'S',
            theme.deviceScale,
        )(css`
            margin-bottom: 0.75rem;
        `)}

    & > div {
        padding: 0;
    }
`;

/**
 * Сообщение подтверждения действия пользователя.
 */
export const Confirm = (props: ConfirmProps) => {
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
        ...rest
    } = props;

    const onApproveClick = useCallback(() => {
        onApprove();
    }, [onApprove]);
    const onDismissClick = useCallback(() => {
        onDismiss && onDismiss();
    }, [onDismiss]);

    const btnRef = useRef<HTMLButtonElement>(null);
    useAutoFocus(btnRef, { trigger: visible });

    const approve = (
        <StyledButton
            size="s"
            ref={btnRef}
            tabIndex={0}
            stretch
            view={view}
            text={approveText}
            onClick={onApproveClick}
        />
    );
    const dismiss = dismissText ? (
        <StyledButton size="s" stretch view="secondary" text={dismissText} onClick={onDismissClick} />
    ) : null;
    const buttons = (
        <BtnWrap reverse={reverseButtons}>
            {dismiss}
            {approve}
        </BtnWrap>
    );

    return (
        <Wrapper visible={visible} {...rest}>
            <Overlay onClick={onDismissClick} />
            {visible && <NoScroll />}
            <ConfirmRoot visible={visible}>
                <StyledCell content={<TextBox title={title} subTitle={subtitle} />} />
                {buttons}
            </ConfirmRoot>
        </Wrapper>
    );
};
