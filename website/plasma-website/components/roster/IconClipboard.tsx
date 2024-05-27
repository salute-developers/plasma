import React from 'react';
import styled from 'styled-components';
import { IconCopyOutline } from '@salutejs/plasma-icons';

const StyledIconClipboard = styled.div`
    margin-left: -1.375rem;
    margin-right: 0.313rem;
    color: rgba(255, 255, 255, 0.28);
`;

export const IconClipboard = ({ source }: { source: string }) => {
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(source);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.warn('Ошибка при копировании текста');
        }
    };

    return (
        <StyledIconClipboard onClick={copyToClipboard}>
            <IconCopyOutline size="xs" color="inherit" />
        </StyledIconClipboard>
    );
};
