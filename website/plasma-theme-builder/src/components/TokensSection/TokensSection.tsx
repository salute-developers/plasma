import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { H4 } from '@salutejs/plasma-b2c';
import { tertiary } from '@salutejs/plasma-tokens-b2c';

import { SBSansTextMono } from '../mixins';
import type { TokenValueProps } from '../types';
import { TokensSubsection } from '../TokensSubsection/TokensSubsection';

const StyledTokensSection = styled.div`
    ${SBSansTextMono};

    margin: 1rem 0;
`;

const TokensSectionName = styled(H4)`
    cursor: pointer;

    color: ${tertiary};

    margin: 0.5rem 0;
    font-family: inherit;
`;

interface TokensSectionProps {
    name: string;
    items: Record<string, Record<string, TokenValueProps>>;
}

export const TokensSection = ({ name, items }: TokensSectionProps) => {
    const [visible, setVisible] = useState(true);

    const tokens = Object.entries(items);

    const onClick = useCallback(() => setVisible(!visible), [visible]);

    return (
        <StyledTokensSection>
            <TokensSectionName onClick={onClick} bold={false}>
                {name}
            </TokensSectionName>
            {visible &&
                tokens.map(([tokenName, tokenItems], index) => (
                    <TokensSubsection key={`${index}_${tokenName}`} name={name} items={tokenItems} />
                ))}
        </StyledTokensSection>
    );
};
