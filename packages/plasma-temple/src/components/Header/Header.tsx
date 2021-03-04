import styled, { css } from 'styled-components';
import { mediaQuery } from '@salutejs/ui/utils';
import { Header as UIKitHeader } from '@salutejs/ui/components/Header/Header';

export const headerPaddingYM = 1.125;

export const Header = styled(UIKitHeader)`
    ${mediaQuery('M')(css`
        padding-top: ${headerPaddingYM}rem;
        padding-bottom: ${headerPaddingYM}rem;
    `)}
`;
