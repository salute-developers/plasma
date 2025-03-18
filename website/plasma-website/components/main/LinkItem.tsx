import { ReactNode } from 'react';
import styled from 'styled-components';
import { TextS } from '@salutejs/plasma-b2c';
import { accent, whitePrimary } from '@salutejs/plasma-tokens-b2c';

import { addGradient } from '../../mixins';

interface LinkItemProps {
    href?: string;
    title?: string;
    contentLeft?: ReactNode;
    contentRight?: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Title = styled(TextS)`
    white-space: nowrap;
`;

const ContentRightWrapper = styled.div`
    width: auto;
    height: 100%;
    display: flex;

    transition: color 0.3s;
`;

const LinkItemWrapper = styled.a`
    height: 1rem;
    width: fit-content;
    color: ${whitePrimary};
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;

    cursor: pointer;

    &:hover {
        text-decoration: none;

        & ${Title} {
            ${addGradient};
        }

        & ${ContentRightWrapper} {
            color: ${accent};
        }
    }
`;

export const LinkItem = ({ title, contentLeft, contentRight, href, onClick, className }: LinkItemProps) => {
    return (
        <LinkItemWrapper onClick={onClick} href={href} className={className}>
            {contentLeft}
            <Title>{title}</Title>
            {contentRight && <ContentRightWrapper>{contentRight}</ContentRightWrapper>}
        </LinkItemWrapper>
    );
};
