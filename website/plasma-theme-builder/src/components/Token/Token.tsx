import React, { useCallback, useContext, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button, TextM, Tooltip } from '@salutejs/plasma-b2c';
import { IconTrashFilled, IconEye, IconEdit } from '@salutejs/plasma-icons';

import { getHEXA, getRGBA, TokenContext } from '../utils';
import { iconButtonFade } from '../mixins';
import type { TokenValue } from '../types';

const IconButtons = styled.div`
    display: flex;
`;

const IconButton = styled(Button)`
    opacity: 0;
    height: 1.5rem;

    ${iconButtonFade};
`;

const StyledToken = styled(TextM)<{ enabled?: boolean }>`
    font-family: inherit;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 67rem;

    margin: 1rem 0;
    margin-left: 2rem;

    ${({ enabled }) =>
        enabled === false &&
        css`
            opacity: 0.28;
        `}

    &:hover {
        ${IconButton} {
            opacity: 0.5;
        }
    }
`;

const TokenName = styled.span<{ disable?: boolean }>`
    width: 18rem;

    cursor: default;

    ${({ disable }) =>
        disable &&
        css`
            text-decoration: line-through;
        `}
`;

const TokenColorPreview = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
`;

const TokenHEXAValue = styled.div`
    width: 7rem;
`;

const TokenRGBAValue = styled.div`
    width: 20rem;
`;

const hasOrigin = (values: string | Record<string, any>): values is Record<string, any> =>
    typeof values === 'object' && 'origin' in values;

const isGradient = (value: string) => value.includes('gradient');

interface TokenProps {
    section: string;
    subsection: string;
    name: string;
    data: TokenValue;
}

export const Token = ({ section, subsection, name, data }: TokenProps) => {
    const { onOpenTokenForm, onTokenDelete, onTokenEnabled } = useContext(TokenContext);
    const [visible, setVisible] = useState(false);

    const { value, comment = '', enabled } = data;

    const normalizeValue = useMemo(() => {
        const defaultColor = '#FFFFFFFF';

        if (hasOrigin(value)) {
            return defaultColor;
        }

        if (isGradient(value)) {
            return defaultColor;
        }

        return value;
    }, [value]);

    const colorPreview = useMemo(() => (hasOrigin(value) ? value.origin : value), [value]);

    const tokenInfo = useMemo(
        () => ({
            section: {
                value: section,
            },
            subsection: {
                value: subsection,
            },
            name: {
                value: name,
            },
            value: {
                value: getHEXA(normalizeValue),
            },
            comment: {
                value: comment,
            },
            enabled: {
                value: enabled,
            },
        }),
        [comment, enabled, name, normalizeValue, section, subsection],
    );

    const onMouseEnter = () => setVisible(true);

    const onMouseLeave = () => setVisible(false);

    const onTokenEditClick = useCallback(() => {
        onOpenTokenForm(tokenInfo);
    }, [onOpenTokenForm, tokenInfo]);

    const onTokenDeleteClick = useCallback(() => {
        onTokenDelete(tokenInfo);
    }, [onTokenDelete, tokenInfo]);

    const onTokenEnabledClick = useCallback(() => {
        onTokenEnabled({
            ...tokenInfo,
            enabled: {
                value: !(enabled === undefined || enabled === true),
            },
        });
    }, [onTokenEnabled, tokenInfo, enabled]);

    return (
        <StyledToken enabled={enabled}>
            <Tooltip
                placement="top-start"
                isVisible={Boolean(comment) && visible}
                arrow={false}
                text={comment}
                animated
            >
                <TokenName
                    disable={enabled === false}
                    onClick={onTokenEditClick}
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter}
                >
                    {name}
                </TokenName>
            </Tooltip>
            <TokenColorPreview style={{ background: colorPreview }} />
            <TokenHEXAValue>{getHEXA(normalizeValue)}</TokenHEXAValue>
            <TokenRGBAValue>{getRGBA(normalizeValue)}</TokenRGBAValue>
            <IconButtons>
                <IconButton view="clear" onClick={onTokenEditClick} contentLeft={<IconEdit />} />
                <IconButton view="clear" onClick={onTokenDeleteClick} contentLeft={<IconTrashFilled />} />
                <IconButton view="clear" onClick={onTokenEnabledClick} contentLeft={<IconEye />} />
            </IconButtons>
        </StyledToken>
    );
};
