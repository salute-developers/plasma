import React, { FC, ReactNode } from 'react';

import { ContentLeftWrapper, ContentRightWrapper, LinkItemWrapper, Title } from './LinkItem.styles';

export type LinkItemProps = {
    isMeta?: boolean;
    href?: string;
    title?: string;
    contentLeft?: ReactNode;
    contentRight?: ReactNode;
    className?: string;
    onClick?: () => void;
};

export const LinkItem: FC<LinkItemProps> = ({ isMeta, title, contentLeft, contentRight, href, onClick, className }) => {
    return (
        <LinkItemWrapper className={className} isMeta={isMeta} onClick={onClick} href={href}>
            {contentLeft && <ContentLeftWrapper>{contentLeft}</ContentLeftWrapper>}
            <Title>{title}</Title>
            {contentRight && <ContentRightWrapper>{contentRight}</ContentRightWrapper>}
        </LinkItemWrapper>
    );
};
