import React, { FC, ReactNode, MouseEvent } from 'react';

import {
    ContentLeftWrapper,
    ContentRightWrapper,
    Description,
    LinkItemWrapper,
    StyledBadge,
    Title,
} from './LinkItem.styles';

export type LinkItemProps = {
    href?: string;
    isMeta?: boolean;
    title?: string;
    badge?: string;
    description?: string;
    contentLeft?: ReactNode;
    contentRight?: ReactNode;
    className?: string;
    onClick?: () => void;
    external?: boolean;
};

export const LinkItem: FC<LinkItemProps> = ({
    isMeta,
    title,
    badge,
    description,
    contentLeft,
    contentRight,
    href,
    onClick,
    className,
    external = false,
}) => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (isMeta) {
            e.preventDefault();
            return;
        }
        if (onClick) {
            onClick();
        }
    };

    return (
        <LinkItemWrapper
            href={href}
            className={className}
            draggable="false"
            isMeta={isMeta}
            onClick={handleClick}
            external={external}
        >
            {contentLeft && <ContentLeftWrapper>{contentLeft}</ContentLeftWrapper>}
            <Title>{title}</Title>
            {badge && <StyledBadge text={badge} />}
            {description && <Description>{description}</Description>}
            {contentRight && <ContentRightWrapper>{contentRight}</ContentRightWrapper>}
        </LinkItemWrapper>
    );
};
