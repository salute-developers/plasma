import styled, { css } from 'styled-components';
import { component, mergeConfig } from 'src/engines';
import { addFocus } from 'src/mixins';

import { modalConfig } from '../../Modal';

import { tokens } from './Modal.tokens';

const mergedModalConfig = mergeConfig(modalConfig);
export const ModalBase = component(mergedModalConfig);

export const base = css`
    box-sizing: border-box;
`;

export const ModalSurface = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    max-width: calc(100vw - 2rem);
`;

export const ModalCloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    cursor: pointer;

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '0.125rem',
        outlineColor: `var(${tokens.dialogModalCloseButtonFocusColor})`,
        outlineRadius: `calc(var(${tokens.dialogModalCloseButtonRadius}) + 0.063rem)`,
    })};

    position: absolute;
`;

export const ModalImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ModalTitle = styled.div``;

export const ModalActions = styled.div``;
