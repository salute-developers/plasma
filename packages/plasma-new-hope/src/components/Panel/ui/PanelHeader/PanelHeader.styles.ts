import { styled } from '@linaria/react';

import { mergeConfig, component } from '../../../../engines';
import { buttonConfig } from '../../../Button';
import { tokens as buttonTokens } from '../../../Button/Button.tokens';
import { privateTokens, tokens } from '../../Panel.tokens';

import { ClosePlacementType, placements } from './PanelHeader.types';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const ButtonWrapper = styled.div<{ placement?: ClosePlacementType }>`
    background: var(${privateTokens.backgroundColor}, var(${tokens.background}));

    order: ${({ placement }) => (placement === placements.left ? -1 : 0)};
    padding-left: ${({ placement }) => (!placement || placement === placements.right ? '0.5rem' : '')};
    padding-right: ${({ placement }) => (placement === placements.left ? '0.5rem' : '')};
`;

export const StyledHeader = styled.div`
    height: fit-content;
    flex-grow: 1;
`;

export const CloseIconWrapper = styled(Button)`
    position: relative;
    width: 1.5rem;
    min-height: 1.5rem;
    ${buttonTokens.buttonColor}: var(${tokens.closeColor});
    ${buttonTokens.buttonColorHover}: var(${tokens.closeColor});
    ${buttonTokens.buttonColorActive}: var(${tokens.closeColor});
`;
