import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { addFocus } from '../../mixins';

import { tokens } from './Modal.tokens';

export const base = css`
    height: 100%;
`;

export const ModalBody = styled.div`
    height: 100%;
    box-sizing: border-box;
    border-radius: var(${tokens.modalBodyBorderRadius});
    padding: var(${tokens.modalBodyPadding});
    background: var(${tokens.modalBodyBackground});
    box-shadow: var(--shadow-down-soft-l);
`;

export const ModalContent = styled.div`
    position: relative;
    padding: var(${tokens.modalContentPadding});
`;

export const CloseButton = styled.button`
    top: 0;
    right: 0;

    width: 1.5rem;
    height: 1.5rem;

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

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '-0.125rem',
        outlineColor: `var(${tokens.modalOutlineFocusColor})`,
        outlineRadius: `calc(var(${tokens.modalCloseButtonRadius}) + 0.063rem)`,
    })};

    color: var(${tokens.modalCloseButtonColor});

    &:hover {
        color: var(${tokens.modalCloseButtonHoverColor});
    }

    &:active {
        color: var(${tokens.modalCloseButtonActiveColor});
    }

    position: absolute;
`;
