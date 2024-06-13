import React from 'react';
import styled from 'styled-components';
import { IconCopyOutline } from '@salutejs/plasma-icons';
import { useToast } from '@salutejs/plasma-b2c';
import type { ShowToastArgs } from '@salutejs/plasma-b2c';

const StyledClipboardIcon = styled(IconCopyOutline)`
    margin-left: -1.375rem;
    margin-right: 0.313rem;
    color: rgba(255, 255, 255, 0.28);
    visibility: hidden;
    opacity: 0;

    transition: visibility 120ms ease-in, opacity 120ms ease-in;
`;

const StyledClipboard = styled.div`
    display: inline-flex;
    flex-direction: column;
    row-gap: 0.5rem;

    cursor: pointer;

    &:hover {
        ${StyledClipboardIcon} {
            visibility: visible;
            opacity: 1;
        }
    }

    &:last-child {
        margin-top: 1.25rem;
    }
`;

const StyledHeading = styled.span`
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: rgba(255, 255, 255, 0.8);
`;

const StyledTitle = styled(StyledHeading)`
    color: rgba(255, 255, 255, 0.28);
`;

const StyledSource = styled.div`
    display: inline-flex;
`;

const toastData: ShowToastArgs = {
    text: '',
    position: 'bottom',
    role: 'status',
    size: 'm',
    view: 'dark',
    timeout: 250,
};

export const IconClipboard = ({ source, title }: { source: string; title: string }) => {
    const { showToast } = useToast();

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(source);

            showToast({
                ...toastData,
                text: 'Скопировано',
            });
        } catch (err) {
            showToast({
                ...toastData,
                text: 'Ошибка при копировании текста',
            });
        }
    };

    return (
        <StyledClipboard onClick={copyToClipboard}>
            <StyledTitle>{title}</StyledTitle>
            <StyledSource>
                <StyledClipboardIcon size="xs" color="inherit" />
                <StyledHeading>{source}</StyledHeading>
            </StyledSource>
        </StyledClipboard>
    );
};
