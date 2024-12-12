import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../../../engines';
import { spinnerConfig } from '../../../Spinner';

const mergedConfig = mergeConfig(spinnerConfig);
const Spinner = component(mergedConfig);

export const InputWrapper = styled.div<{ isManualInput: boolean }>`
    overflow-x: auto;
    overflow-y: hidden;
    flex: 1;
    cursor: ${({ isManualInput }) => (isManualInput ? 'text' : 'default')};

    ::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;

    overscroll-behavior: contain;
`;

export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const AdditionalText = styled.span``;

export const Loader = styled.div``;

export const StyledSpinner = styled(Spinner)``;

export const DynamicInput = styled.div`
    position: relative;
`;

export const Input = styled.input<{ dynamicWidth: string; isManualInput: boolean }>`
    box-sizing: border-box;
    appearance: none;
    border: 0;
    padding: 0;
    background-color: transparent;
    outline: none;
    width: ${({ dynamicWidth }) => dynamicWidth};
    cursor: ${({ isManualInput }) => (isManualInput ? 'text' : 'default')};
    pointer-events: ${({ isManualInput }) => (isManualInput ? 'initial' : 'none')};
    transition: width 0.1s;
`;

export const InputWidthHelper = styled.span`
    position: absolute;
    z-index: -999;
    visibility: hidden;
    top: 0;
    left: 0;
    opacity: 0;
    height: 0;
    white-space: pre;
`;
