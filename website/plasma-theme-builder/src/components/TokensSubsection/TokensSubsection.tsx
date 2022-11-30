import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { H5 } from '@salutejs/plasma-b2c';
import { secondary } from '@salutejs/plasma-tokens-b2c';

import type { TokenValueProps } from '../types';
import { Token } from '../Token/Token';

const StyledTokensSubsection = styled.div`
    margin-left: 1rem;
`;

const TokensSubsectionName = styled(H5)`
    cursor: pointer;

    color: ${secondary};

    margin: 1rem 0;
    font-family: inherit;
`;

interface TokensSubsectionProps {
    name: string;
    items: Record<string, TokenValueProps>;
}

export const TokensSubsection = ({ name, items }: TokensSubsectionProps) => {
    const [visible, setVisible] = useState(true);

    const tokens = Object.entries(items);

    const onClick = useCallback(() => setVisible(!visible), [visible]);

    return (
        <StyledTokensSubsection>
            <TokensSubsectionName onClick={onClick} bold={false}>
                {name}
            </TokensSubsectionName>
            {visible &&
                tokens.map(([tokenName, value], index) => (
                    <Token key={`${index}_${tokenName}`} name={name} value={value} />
                ))}
        </StyledTokensSubsection>
    );
};
