import styled, { css } from 'styled-components';
import { Button, ButtonProps } from '@salutejs/plasma-b2c';
import { secondary, tertiary } from '@salutejs/plasma-tokens-b2c';
import { link, linkHover, linkActive } from '@salutejs/plasma-b2c/tokens';

type FlatButtonProps = ButtonProps & {
    $disabled?: boolean;
    isActive?: boolean;
};

export const FlatButton = styled(Button).attrs(() => ({ view: 'clear', forwardedAs: 'a' }))<FlatButtonProps>`
    color: ${secondary};
    text-decoration: none;

    &:hover {
        color: ${linkHover};
    }

    &:active {
        color: ${linkActive};
    }

    ${({ isActive }) =>
        isActive &&
        css`
            color: ${link};
        `}

    ${({ $disabled }) =>
        $disabled &&
        css`
            &,
            &:hover,
            &:active {
                color: ${tertiary};
                cursor: default;
            }
        `}
`;
