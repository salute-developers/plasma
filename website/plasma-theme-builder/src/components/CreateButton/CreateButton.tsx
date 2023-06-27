import React from 'react';
import styled from 'styled-components';
import { BodyS, TextL } from '@salutejs/plasma-b2c';
import { primary } from '@salutejs/plasma-tokens-b2c';

import { SBSansTextMono, addGradient } from '../mixins';

const Root = styled(BodyS)`
    box-sizing: border-box;
    display: inline-flex;

    border: 0.063rem solid ${primary};
    border-radius: 5rem;
    border-top-right-radius: 0;

    cursor: pointer;

    transition: opacity 0.2s ease-in;
`;

const Content = styled(TextL)`
    ${SBSansTextMono};

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${primary};
    text-decoration: none;

    &:hover {
        ${addGradient};
    }
`;

interface CreateButtonProps {
    onClick?: () => void;
}

export const CreateButton = ({ onClick, ...props }: CreateButtonProps) => (
    <Root onClick={onClick} {...props}>
        <Content>— Хочу свою</Content>
    </Root>
);
