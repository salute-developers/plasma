import React, { FC, MouseEvent, ReactNode, useState } from 'react';

import { ArrowRight } from '../../icons/ArrowRight';

import { constants } from './Product.tokens';
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
    onClickTitle?: () => void;
};

export const Product: FC<ProductProps> = ({
    title,
    href,
    alwaysShowIcon,
    iconRotation = 'right',
    additionalInfo,
    onClickTitle,
}) => {
    return (
        <ProductWrapper>
            <ProductMainInfo href={href} onClick={onClickTitle} alwaysShowIcon={alwaysShowIcon}>
                <Title bold={false}>{title}</Title>

                <Icon>
                    <ArrowRight style={{ rotate: constants.rotationVariants[iconRotation] }} />
                </Icon>
            </ProductMainInfo>
            {additionalInfo && <ProductAdditionalInfo>{additionalInfo}</ProductAdditionalInfo>}
        </ProductWrapper>
    );
};
