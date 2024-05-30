import { styled } from '@linaria/react';

import { tokens } from '../../Slider.tokens';

export const Slider = styled.div`
    flex: 1;
    position: relative;
    user-select: none;
    height: var(${tokens.height});
`;

export const RailWrap = styled.div`
    height: 100%;
`;

export const Rail = styled.div`
    position: relative;
    top: 50%;

    height: var(${tokens.railHeight});

    border-radius: var(${tokens.railBorderRadius});
    background-color: var(${tokens.railBackgroundColor});

    overflow: hidden;
    transform: translateY(-50%);
`;

export const Fill = styled.div`
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background: var(${tokens.fillColor});
    width: 0;
`;
