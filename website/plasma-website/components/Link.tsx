import type { FC, AnchorHTMLAttributes } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
}

const StyledLink = styled(NextLink)`
    text-decoration: none;
`;

const StyledAnchor = styled.a`
    text-decoration: none;
`;

export const Link: FC<LinkProps> = ({ href, external, children, ...rest }) => {
    if (!href) {
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        return <StyledAnchor {...rest}>{children}</StyledAnchor>;
    }

    if (external) {
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        return (
            <StyledAnchor href={href} target="_blank" rel="noopener noreferrer" {...rest}>
                {children}
            </StyledAnchor>
        );
    }

    return (
        <StyledLink href={href} {...rest}>
            {children}
        </StyledLink>
    );
};
