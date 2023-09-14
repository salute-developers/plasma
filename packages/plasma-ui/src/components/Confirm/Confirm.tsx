import React, { useCallback, useRef, ReactNode } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { overlay, backgroundPrimary } from '@salutejs/plasma-tokens';
import { ButtonRoot } from '@salutejs/plasma-core';
import { FlexDirectionProperty } from 'csstype';

import { mediaQuery } from '../../utils';
import { Button, ButtonProps } from '../Button';
import { TextBox, TextBoxTitle, TextBoxSubTitle } from '../TextBox';
import { Cell } from '../Cell';

import { useAutoFocus } from './Confirm.hooks';

const flexDirection: Record<Direction, FlexDirectionProperty> = {
    horizontal: 'row',
    'horizontal-reverse': 'row-reverse',
    vertical: 'column',
    'vertical-reverse': 'column-reverse',
};

const marginByDirection: Record<Direction, MarginSide> = {
    horizontal: 'margin-right',
    'horizontal-reverse': 'margin-left',
    vertical: 'margin-bottom',
    'vertical-reverse': 'margin-top',
};

export type Direction = 'horizontal' | 'vertical' | 'horizontal-reverse' | 'vertical-reverse';

type MarginSide = 'margin-right' | 'margin-left' | 'margin-bottom' | 'margin-top';

type HandleDirection = { reverse: boolean; direction: Direction };

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
     * Очередность кнопок. Вместо этого свойства лучше использовать `buttonsDirection`
     * @deprecated
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

    /**
     * Компонент снизу
     */
    extraContent?: ReactNode;

    /**
     * Направление для группы кнопок
     */
    buttonsDirection?: Direction;
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

    transition: ${({ theme }) => (theme.lowPerformance ? 'unset' : 'transform 0.5s')};

    ${({ visible }) =>
        !visible && {
            transform: 'translateY(-100%)',
        }};
`;

const ConfirmContainer = styled.div`
    margin: 1rem 1rem 0;
    padding: 0.75rem;
    border-radius: 1.25rem;

    background-color: ${backgroundPrimary};
`;

const ConfirmMain = styled.div`
    ${({ theme }) => css`
        ${mediaQuery('M', theme.deviceScale)(tvLayout)}
        ${mediaQuery('L', theme.deviceScale)(tvLayout)}
        ${mediaQuery('XL', theme.deviceScale)(tvLayout)}
    `}

    ${TextBoxTitle} {
        white-space: pre-line;
    }

    ${TextBoxSubTitle} {
        white-space: pre-line;
    }
`;

const ConfirmFooter = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    max-width: 100%;
`;

const handleFlexDirection = ({ reverse, direction }: HandleDirection) => {
    if (reverse) {
        return flexDirection['horizontal-reverse'];
    }

    return flexDirection[direction];
};

const handleMarginByDirection = ({ direction, reverse }: HandleDirection) => {
    const margin = reverse ? marginByDirection['horizontal-reverse'] : marginByDirection[direction];

    return css`
        ${margin}: 0.5rem;
    `;
};

const BtnWrap = styled.div<{ reverse: boolean; direction: Direction }>`
    flex: 1;
    display: flex;
    flex-direction: ${handleFlexDirection};

    ${StyledButton}:not(:last-child) {
        ${handleMarginByDirection}
    }

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
        extraContent,
        onApprove,
        onDismiss,
        buttonsDirection = 'horizontal',
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
        <BtnWrap reverse={reverseButtons} direction={buttonsDirection}>
            {dismiss}
            {approve}
        </BtnWrap>
    );

    return (
        <Wrapper visible={visible} {...rest}>
            <Overlay onClick={onDismissClick} />
            {visible && <NoScroll />}
            <ConfirmRoot visible>
                <ConfirmContainer>
                    <ConfirmMain>
                        <StyledCell content={<TextBox title={title} subTitle={subtitle} />} />
                        {buttons}
                    </ConfirmMain>
                </ConfirmContainer>
                <ConfirmFooter>{extraContent}</ConfirmFooter>
            </ConfirmRoot>
        </Wrapper>
    );
};
