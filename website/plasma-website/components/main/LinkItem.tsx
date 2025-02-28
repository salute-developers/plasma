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
}

const Title = styled(TextS)`
    color: ${whitePrimary};
`;

const ContentRightWrapper = styled.div`
    display: flex;

    transition: color 0.3s;
`;

const LinkItemWrapper = styled.a`
    color: ${whitePrimary};
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.25rem;

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

export const LinkItem = ({ title, contentLeft, contentRight, href }: LinkItemProps) => {
    return (
        <LinkItemWrapper href={href}>
            {contentLeft}
            <Title>{title}</Title>
            {contentRight && <ContentRightWrapper>{contentRight}</ContentRightWrapper>}
        </LinkItemWrapper>
    );
};
