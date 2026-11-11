import styled, { css } from 'styled-components';
import { addFocus } from 'src/mixins';

import { classes, tokens } from './Modal.tokens';

export const base = css`
    height: 100%;

    &.${classes.resizable} {
        width: 100%;
        height: 100%;
    }
`;

export const ModalBody = styled.div`
    width: var(${tokens.modalWidth}, auto);
    height: 100%;
    box-sizing: border-box;
    border-radius: var(${tokens.modalBodyBorderRadius});
    padding: var(${tokens.modalBodyPadding});
    background: var(${tokens.modalBodyBackground});
    box-shadow: var(--shadow-down-soft-l);

    &.${classes.resizable} {
        width: 100%;
        min-width: 0;
    }
`;

export const ModalContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: var(${tokens.modalContentPadding});

    &.${classes.hasClose} .${classes.header} {
        padding-right: calc(var(${tokens.modalCloseButtonRight}, 0px) + var(${tokens.modalCloseButtonSize}, 1.5rem));
    }

    .${classes.headerAbsolute} {
        background: var(${tokens.modalBodyBackground});
        /*
         * Фон шапки совпадает с карточкой и лежит поверх её скругления.
         * Радиус нужен самой шапке: ModalBody больше не обрезает содержимое.
         */
        border-top-left-radius: var(${tokens.modalBodyBorderRadius});
        border-top-right-radius: var(${tokens.modalBodyBorderRadius});
    }

    &:has(.${classes.image}) .${classes.headerAbsolute} {
        background: transparent;
    }

    /*
     * Картинка непрозрачная и рисуется поверх скругления ModalBody, поэтому радиус
     * карточки задан ей самой. Скругляется только тот край, до которого она реально
     * доходит. Сосед в потоке занимает свой край: любой предыдущий — верх, любой
     * следующий — низ. Крестик и AbsoluteHeader вне потока и край не занимают.
     * Правила живут здесь, а не на картинке: селектор с :not() в начале stylis
     * приклеивает к компоненту, и предыдущий сосед перестаёт находиться.
     */
    & > :not(.${classes.headerAbsolute}):not(.${classes.close}) ~ .${classes.image} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    & > .${classes.image}:has(~ :not(.${classes.headerAbsolute}):not(.${classes.close})) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
`;

export const CloseButton = styled.button`
    top: var(${tokens.modalCloseButtonTop}, 0);
    right: var(${tokens.modalCloseButtonRight}, 0);
    width: var(${tokens.modalCloseButtonSize}, 1.5rem);
    height: var(${tokens.modalCloseButtonSize}, 1.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: var(${tokens.modalCloseButtonRadius});
    padding: 0;
    margin: 0;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: var(${tokens.modalCloseButtonColor});

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '0.188rem',
        outlineColor: `var(${tokens.modalOutlineFocusColor})`,
        outlineRadius: `calc(var(${tokens.modalCloseButtonRadius}) - 0.063rem)`,
    })};

    &:hover {
        color: var(${tokens.modalCloseButtonHoverColor});
    }

    &:active {
        color: var(${tokens.modalCloseButtonActiveColor});
    }

    position: absolute;
    z-index: 2;
`;
