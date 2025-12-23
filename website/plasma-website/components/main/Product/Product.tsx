import React, { FC, ReactNode, PropsWithChildren } from 'react';

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

export type ProductDescription = {
    title?: string;
    package?: string;
    version?: string;
    links?: Partial<Record<'storybook' | 'documentation' | 'changelog', { href?: string }>>;
};

export type ProductProps = {
    key: string;
    title: string;
    iconRotation?: 'right' | 'bottom' | 'topRightCorner';
    alwaysShowIcon?: boolean;
    items?: Array<LinkItem>;
    additionalInfo?: ReactNode;
    isDraggable?: boolean;
    onClickTitle?: () => void;
    href?: string;
    web?: ProductDescription;
    className?: string;
};

export const Product: FC<ProductProps & PropsWithChildren> = ({
    title,
    href,
    alwaysShowIcon,
    iconRotation = 'right',
    additionalInfo,
    isDraggable,
    onClickTitle,
    children,
    className,
}) => {
    return (
        <ProductWrapper className="override-gap">
            {href ? (
                <Link href={href}>
                    <ProductMainInfo className={className} onClick={onClickTitle} alwaysShowIcon={alwaysShowIcon}>
                        <Title bold={false}>{title}</Title>

                        <Icon>
                            <ArrowRight style={{ rotate: constants.rotationVariants[iconRotation] }} />
                        </Icon>
                    </ProductMainInfo>
                </Link>
            ) : (
                <ProductMainInfo className={className} onClick={onClickTitle} alwaysShowIcon={alwaysShowIcon}>
                    <Title bold={false}>{title}</Title>

                    <Icon>
                        <ArrowRight style={{ rotate: constants.rotationVariants[iconRotation] }} />
                    </Icon>
                </ProductMainInfo>
            )}
            {additionalInfo && (
                <ProductAdditionalInfo isDraggable={isDraggable}>{additionalInfo}</ProductAdditionalInfo>
            )}
            {children}
        </ProductWrapper>
    );
};
