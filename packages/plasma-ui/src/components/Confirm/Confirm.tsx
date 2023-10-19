import React, { useCallback, useRef, ReactNode } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { overlay, backgroundPrimary } from '@salutejs/plasma-tokens';
import { ButtonRoot } from '@salutejs/plasma-core';
import { FlexDirectionProperty } from 'csstype';

import { mediaQuery } from '../../utils';
import { Button, ButtonProps } from '../Button';
import { TextBox, TextBoxTitle, TextBoxSubTitle } from '../TextBox';
import { ModalBase, modalBaseOverlayClass } from '../ModalBase';
import { PopupBasePlacement, PopupBaseProvider, popupBaseRootClass, usePopupAnimation } from '../PopupBase';
import { Cell } from '../Cell';

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
     * Направление для группы кнопок
     */
    buttonsDirection?: Direction;

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
     * Расположения окна. По умолчанию top
     */
    placement?: PopupBasePlacement;

    /* Смещение относительно текущей позиции.
     * (x, y) - [number, number], [string, string].
     * При передаче number расчёт в rem.
     */
    offset?: [number, number] | [string, string];

    /**
     * Расятнуто ли окно на весь экран. По умолчанию true
     */
    stretch?: boolean;
}

const ModalOverlayVariables = createGlobalStyle`
    body {
        --plasma-modal-overlay-color: ${overlay};
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
const ConfirmRoot = styled.div<{ visible: boolean; stretch?: boolean }>`
    ${({ stretch }) =>
        stretch && {
            width: '100vw',
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

const StyledModal = styled(ModalBase)`
    & > .${popupBaseRootClass}, .${modalBaseOverlayClass} {
        ${({ animationInfo }) =>
            animationInfo?.endTransition
                ? css`
                      opacity: 0;
                  `
                : css`
                      opacity: 1;
                  `}
        transition: ${({ theme }) => (theme.lowPerformance ? 'unset' : 'opacity 0.5s 0.1s')};
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
        stretch = true,
        approveText,
        dismissText,
        view = 'secondary',
        reverseButtons = false,
        extraContent,
        onApprove,
        onDismiss,
        buttonsDirection = 'horizontal',
        placement = 'top',
        offset = [0, 0],
    } = props;

    const onApproveClick = useCallback(() => {
        onApprove();
    }, [onApprove]);
    const onDismissClick = useCallback(() => {
        onDismiss && onDismiss();
    }, [onDismiss]);

    const btnRef = useRef<HTMLButtonElement>(null);

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

    const animationInfo = usePopupAnimation();

    return (
        <PopupBaseProvider>
            <ModalOverlayVariables />
            <StyledModal
                isOpen={visible}
                animationInfo={animationInfo}
                onOverlayClick={onDismissClick}
                zIndex="1000"
                initialFocusRef={btnRef}
                placement={placement}
                offset={offset}
            >
                <ConfirmRoot visible stretch={stretch}>
                    <ConfirmContainer>
                        <ConfirmMain>
                            <StyledCell content={<TextBox title={title} subTitle={subtitle} />} />
                            {buttons}
                        </ConfirmMain>
                    </ConfirmContainer>
                    <ConfirmFooter>{extraContent}</ConfirmFooter>
                </ConfirmRoot>
            </StyledModal>
        </PopupBaseProvider>
    );
};
