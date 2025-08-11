import React, { FC, ReactNode } from 'react';

// TODO: забирать иконки из plasma-icons
import { ArrowRight } from '../../icons/ArrowRight';
import { Link } from '../../Link';

import { constants } from './Product.constants';
import { Title, Icon, ProductMainInfo, ProductWrapper, ProductAdditionalInfo } from './Product.styles';

export type LinkItem = {
    text: string;
    href?: string;
    contentRight?: ReactNode;
    contentLeft?: ReactNode;
    isMeta?: boolean;
};

export type ProductProps = {
    title: string;
    href?: string;
    iconRotation?: 'right' | 'bottom' | 'topRightCorner';
    alwaysShowIcon?: boolean;
    items?: Array<LinkItem>;
    additionalInfo?: ReactNode;
    isDraggable?: boolean;
    onClickTitle?: () => void;
};

export const Product: FC<ProductProps> = ({
    title,
    href,
    alwaysShowIcon,
    iconRotation = 'right',
    additionalInfo,
    isDraggable,
    onClickTitle,
}) => {
    return (
        <ProductWrapper>
            <Link href={href}>
                <ProductMainInfo onClick={onClickTitle} alwaysShowIcon={alwaysShowIcon}>
                    <Title bold={false}>{title}</Title>

                    <Icon>
                        <ArrowRight style={{ rotate: constants.rotationVariants[iconRotation] }} />
                    </Icon>
                </ProductMainInfo>
            </Link>
            {additionalInfo && (
                <ProductAdditionalInfo isDraggable={isDraggable}>{additionalInfo}</ProductAdditionalInfo>
            )}
        </ProductWrapper>
    );
};
