import type { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { BodyS } from '@salutejs/plasma-b2c';
import { primary, accent } from '@salutejs/plasma-tokens-b2c';

import { Badge } from '../Badge';
import { Link as BaseLink } from '../Link';
import { multipleMediaQuery } from '../../mixins';

export type MenuItem = {
    title: string;
    href: string;
    state?: string;
    external?: boolean;
};

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
export const Item = styled(BodyS)`
    display: flex;
    align-items: center;

    margin-right: 2rem;
    padding-bottom: 1.625rem;

    ${multipleMediaQuery(['M', 'S'])(
        css`
            padding-bottom: 0;
        `,
    )}
`;

export const Link = styled(BaseLink)<{ $disabled?: boolean }>`
    color: ${primary};
    text-decoration: none;

    &:hover {
        color: ${accent};
        text-decoration: none;
    }
`;

const LinkTitle = styled.a`
    color: ${primary};
    text-decoration: none;

    &:hover {
        color: ${accent};
        text-decoration: none;
    }
`;

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
    items: Array<MenuItem>;
    children?: never;
}

export const Menu = ({ items, style, className }: MenuProps) => (
    <List style={style} className={className}>
        {items.map((item, i) => (
            <Item key={`item:${i}`}>
                <LinkTitle href={item.href}>{item.title}</LinkTitle>
                {item.state && <Badge text={item.state} />}
            </Item>
        ))}
    </List>
);
