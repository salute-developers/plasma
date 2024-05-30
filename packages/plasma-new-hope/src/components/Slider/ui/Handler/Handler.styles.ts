import { styled } from '@linaria/react';

import { tokens } from '../../Slider.tokens';

export const HandlerStyled = styled.div`
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
`;

export const StyledValue = styled.span`
    position: absolute;
    z-index: 1;
    top: var(${tokens.currentValueTopOffset});
    text-align: center;
    width: 100%;
    margin-left: -0.125rem;
    display: flex;
    justify-content: center;
    font-family: var(${tokens.currentValueFontFamily});
    font-size: var(${tokens.currentValueFontSize});
    font-style: var(${tokens.currentValueFontStyle});
    font-weight: var(${tokens.currentValueFontWeight});
    letter-spacing: var(${tokens.currentValueLetterSpacing});
    line-height: var(${tokens.currentValueLineHeight});
`;
