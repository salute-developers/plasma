import { ReactNode } from 'react';
import styled from 'styled-components';
import { TextS } from '@salutejs/plasma-b2c';
import { accent, whitePrimary } from '@salutejs/plasma-tokens-b2c';

import { addGradient } from '../../mixins';

interface HeaderProps {
    title?: string;
    contentLeft?: ReactNode;
    contentRight?: ReactNode;
    expanded?: boolean;
    onClick?: () => void;
}

const Title = styled(TextS)`
    color: ${whitePrimary};
`;

const ContentRightWrapper = styled.div<{ expanded?: boolean }>`
    display: flex;

    transition: color 0.3s, transform 0.2s;
    transform: ${({ expanded }) => (expanded ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

const HeaderWrapper = styled.button`
    color: ${whitePrimary};
    background-color: transparent;
    padding: 0;
    border: none;

    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    &:hover {
        & ${Title} {
            ${addGradient};
        }

        & ${ContentRightWrapper} {
            color: ${accent};
        }
    }
`;

export const Header = ({ title, contentLeft, contentRight, expanded, onClick }: HeaderProps) => {
    return (
        <HeaderWrapper onClick={onClick}>
            {contentLeft}
            <Title>{title}</Title>
            {contentRight && <ContentRightWrapper expanded={expanded}>{contentRight}</ContentRightWrapper>}
        </HeaderWrapper>
    );
};
