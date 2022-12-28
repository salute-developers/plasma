import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, H5 } from '@salutejs/plasma-b2c';
import { secondary } from '@salutejs/plasma-tokens-b2c';
import { IconPlus, IconEye } from '@salutejs/plasma-icons';

import { Token } from '../Token/Token';
import { emptyInputData, TokenContext } from '../utils';
import { iconButtonFade } from '../mixins';
import type { TokenValue } from '../types';

const StyledTokensSubsection = styled.div`
    margin-left: 1rem;
`;

const IconButtons = styled.div`
    display: flex;
`;

const IconButton = styled(Button)`
    opacity: 0.1;
    height: 1.5rem;

    ${iconButtonFade};
`;

const TokensSubsectionName = styled(H5)`
    cursor: pointer;

    color: ${secondary};

    margin: 1rem 0;
    font-family: inherit;

    display: flex;

    &:hover {
        ${IconButton} {
            opacity: 0.5;
        }
    }
`;

const Name = styled.div`
    width: 100%;
`;

interface TokensSubsectionProps {
    section: string;
    name: string;
    items: Record<string, TokenValue>;
    subsectionEnabled: boolean;
}

export const TokensSubsection = ({ section, name, items, subsectionEnabled }: TokensSubsectionProps) => {
    const { onOpenTokenForm, onTokensSubsectionEnabled } = useContext(TokenContext);
    const [visible, setVisible] = useState(true);
    const [enabled, setEnabled] = useState(subsectionEnabled);

    const tokens = Object.entries(items);

    const onClick = useCallback(() => setVisible(!visible), [visible]);

    const onEnabledTokens = useCallback(() => {
        setEnabled((prevValue) => !prevValue);

        onTokensSubsectionEnabled({
            ...emptyInputData,
            section: {
                value: section,
            },
            subsection: {
                value: name,
            },
            enabled: {
                value: enabled,
            },
        });
    }, [onTokensSubsectionEnabled, section, name, enabled]);

    const onAddToken = useCallback(() => {
        onOpenTokenForm({
            ...emptyInputData,
            section: {
                value: section,
            },
            subsection: {
                value: name,
            },
        });
    }, [onOpenTokenForm, name, section]);

    useEffect(() => {
        setEnabled(subsectionEnabled);
    }, [subsectionEnabled]);

    return (
        <StyledTokensSubsection>
            <TokensSubsectionName bold={false}>
                <Name onClick={onClick}>{name}</Name>
                <IconButtons>
                    <IconButton view="clear" onClick={onAddToken} contentLeft={<IconPlus />} />
                    <IconButton view="clear" onClick={onEnabledTokens} contentLeft={<IconEye />} />
                </IconButtons>
            </TokensSubsectionName>
            {visible &&
                tokens.map(([tokenName, value], index) => (
                    <Token
                        key={`${index}_${tokenName}`}
                        section={section}
                        subsection={name}
                        name={tokenName}
                        data={value}
                    />
                ))}
        </StyledTokensSubsection>
    );
};
