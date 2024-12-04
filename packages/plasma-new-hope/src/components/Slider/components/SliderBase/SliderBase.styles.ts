import { styled } from '@linaria/react';

import { applyHidden } from '../../../../mixins';
import { classes, tokens } from '../../Slider.tokens';

export const Rail = styled.div`
    position: relative;
    top: 50%;

    height: var(${tokens.railThickness});

    border-radius: var(${tokens.railBorderRadius});
    background-color: var(${tokens.railBackgroundColor});

    overflow: hidden;
    transform: translateY(-50%);
`;

export const Slider = styled.div`
    flex: 1;
    position: relative;
    user-select: none;
    height: var(${tokens.size});

    &.${classes.verticalOrientation} {
        width: var(${tokens.size});
        height: auto;

        ${Rail} {
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: var(${tokens.railThickness});
            height: 100%;
        }
    }
`;

export const RailWrap = styled.div`
    height: 100%;
`;

export const Fill = styled.div`
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: var(${tokens.railBorderRadius});
    background: var(${tokens.fillColor});
`;

export const InputHidden = styled.input`
    ${applyHidden()};
`;
