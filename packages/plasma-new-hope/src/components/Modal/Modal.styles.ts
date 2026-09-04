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
    overflow: hidden;
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
