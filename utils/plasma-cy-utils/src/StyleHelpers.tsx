import type { FC } from 'react';
import styled from 'styled-components';

export const PadMe = styled.div`
    padding: 5px;
    box-sizing: content-box;
`;

export const SpaceMe = styled.span`
    padding: 5px;
    box-sizing: content-box;
`;

export const withNoAnimation = <P extends {}>(Comp: FC<P>) =>
    styled(Comp)`
        animation: none !important;
        /* stylelint-disable-next-line selector-max-universal */
        & * {
            animation: none !important;
        }
    ` as FC<P>;
