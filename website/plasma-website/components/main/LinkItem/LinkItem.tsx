import React, { FC, ReactNode, MouseEvent } from 'react';

import { ContentLeftWrapper, ContentRightWrapper, LinkItemWrapper, Title } from './LinkItem.styles';

export type LinkItemProps = {
    href?: string;
    isMeta?: boolean;
    title?: string;
    contentLeft?: ReactNode;
    contentRight?: ReactNode;
    className?: string;
    onClick?: () => void;
};

export const LinkItem: FC<LinkItemProps> = ({ isMeta, title, contentLeft, contentRight, href, onClick, className }) => {
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
        <LinkItemWrapper href={href} className={className} isMeta={isMeta} onClick={handleClick}>
            {contentLeft && <ContentLeftWrapper>{contentLeft}</ContentLeftWrapper>}
            <Title>{title}</Title>
            {contentRight && <ContentRightWrapper>{contentRight}</ContentRightWrapper>}
        </LinkItemWrapper>
    );
};
