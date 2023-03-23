import type { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { linkHover } from '@salutejs/plasma-tokens-b2c';

import { List, Item, Link } from './Menu';
import type { MenuProps, MenuItem } from './Menu';

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;

    &:hover {
        color: ${linkHover};
    }
`;
const StyledContent = styled.span`
    display: flex;
    margin-left: 0.5rem;
`;

export interface CommunityMenuProps extends MenuProps {
    items: Array<MenuItem & { contentLeft?: ReactNode }>;
}

export const CommunityMenu: FC<CommunityMenuProps> = ({ items, style, className }) => (
    <nav style={style} className={className}>
        <List>
            {items.map((item, i) => (
                <Item key={`item:${i}`}>
                    <StyledLink href={item.href}>
                        {item.title}
                        {item.contentLeft && <StyledContent>{item.contentLeft}</StyledContent>}
                    </StyledLink>
                </Item>
            ))}
        </List>
    </nav>
);
