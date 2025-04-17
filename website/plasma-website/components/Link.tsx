import type { FC, AnchorHTMLAttributes } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
}

const StyledLink = styled.a`
    text-decoration: none;
`;

export const Link: FC<LinkProps> = ({ href, external, ...rest }) => {
    if (!href) {
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        return <StyledLink {...rest} />;
    }

    if (external) {
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        return <StyledLink href={href} target="__blank" {...rest} />;
    }

    return (
        <NextLink href={href} passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <StyledLink {...rest} />
        </NextLink>
    );
};
