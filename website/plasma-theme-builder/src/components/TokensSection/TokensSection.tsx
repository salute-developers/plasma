import React, { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import { Button, H4 } from '@salutejs/plasma-b2c';
import { tertiary } from '@salutejs/plasma-tokens-b2c';
import { IconEye } from '@salutejs/plasma-icons';

import { TokensSubsection } from '../TokensSubsection/TokensSubsection';

import { iconButtonFade } from '../mixins';
import { TokenContext } from '../../utils';
import { emptyInputData } from '../../types';
import type { TokenValue } from '../../types';

const StyledTokensSection = styled.div`
    margin: 1rem 0;
`;

const IconButtons = styled.div`
    display: flex;
`;

const IconButton = styled(Button)`
    opacity: 0.1;
    height: 1.5rem;

    ${iconButtonFade};
`;

const TokensSectionName = styled(H4)`
    cursor: pointer;
    display: flex;

    color: ${tertiary};

    margin: 0.5rem 0;
    font-family: inherit;

    &:hover {
        ${IconButton} {
            opacity: 0.5;
        }
    }
`;

const Name = styled.div`
    width: 100%;
`;

interface TokensSectionProps {
    name: string;
    items: Record<string, Record<string, TokenValue>>;
}

export const TokensSection = ({ name, items }: TokensSectionProps) => {
    const { onTokensSectionEnabled } = useContext(TokenContext);
    const [visible, setVisible] = useState(true);
    const [enabled, setEnabled] = useState(false);

    const subsections = Object.entries(items);

    const onClick = useCallback(() => setVisible(!visible), [visible]);

    const onEnabledTokens = useCallback(() => {
        setEnabled((prevValue) => !prevValue);

        onTokensSectionEnabled({
            ...emptyInputData,
            section: {
                value: name,
            },
            enabled: {
                value: enabled,
            },
        });
    }, [onTokensSectionEnabled, name, enabled]);

    return (
        <StyledTokensSection>
            <TokensSectionName bold={false}>
                <Name onClick={onClick}>{name}</Name>
                <IconButtons>
                    <IconButton view="clear" onClick={onEnabledTokens} contentLeft={<IconEye />} />
                </IconButtons>
            </TokensSectionName>
            {visible &&
                subsections.map(([subsectionName, subsectionItems], index) => (
                    <TokensSubsection
                        key={`${index}_${subsectionName}`}
                        section={name}
                        name={subsectionName}
                        items={subsectionItems}
                        subsectionEnabled={enabled}
                    />
                ))}
        </StyledTokensSection>
    );
};
