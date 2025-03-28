import React, { FC } from 'react';
import cls from 'classnames';

import { ArrowRight } from '../../icons/ArrowRight';

import { Icon, Item, List, MenuWrapper, Title } from './Menu.styles';
import { classes } from './Menu.tokens';

type Product = {
    title: string;
    href: string;
};

type MenuProps = {
    products: Array<Product>;
    expanded: boolean;
    handleScrollToTop: () => void;
};

export const Menu: FC<MenuProps> = ({ products, expanded, handleScrollToTop }) => {
    return (
        <MenuWrapper>
            <List>
                <Item className={cls({ [classes.removeItemHover]: !expanded })} onClick={handleScrollToTop}>
                    <Title bold>ЕДС</Title>
                    {expanded && (
                        <Icon>
                            <ArrowRight style={{ rotate: '-90deg' }} />
                        </Icon>
                    )}
                </Item>
                {expanded &&
                    products.map((product) => (
                        <Item key={product.href} href={product.href}>
                            <Title bold>{product.title}</Title>
                            <Icon>
                                <ArrowRight />
                            </Icon>
                        </Item>
                    ))}
            </List>
        </MenuWrapper>
    );
};
