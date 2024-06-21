import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { IconClose } from '@salutejs/plasma-icons';
import { H2 } from '@salutejs/plasma-b2c';

import { Context } from '../../store';
import { capitalize } from '../../utils';
import { multipleMediaQuery } from '../../mixins';

import { IconClipboard } from './IconClipboard';
import { IconOptionsSize } from './IconOptionsSize';
import { IconOptionsColors } from './IconOptionsColors';

type IconInfoProps = {
    onClose: () => void;
    offset: number;
};

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    padding-bottom: 1.5rem;
`;

const StyledExtendInfo = styled.div<{ offset?: number }>`
    position: relative;
    z-index: 1;
    left: ${({ offset = 1 }) => {
        // INFO: Смещение для cell grid (60px размер cell)
        const cellOffset = 60 * (offset - 1);
        // INFO: Смещение для gap grid (4px размер gap cell)
        const gapOffset = 4 * (offset - 2);

        return -(cellOffset + gapOffset);
    }}px;
    display: block;
    padding-top: 3rem;
    margin-bottom: 1.5rem;
    width: calc(100vw - var(--plasma-grid-largeM-margin) * 2);
    max-width: 60rem;
    box-sizing: border-box;

    ${multipleMediaQuery(['M', 'S'])(css`
        padding-top: 2rem;
    `)}

    ${multipleMediaQuery(['S'])(css`
        width: calc(100vw - 16px * 2);
    `)}
`;

const StyledIconOptions = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1.875rem;
    margin-bottom: 2rem;
`;

const StyledIconClose = styled.span`
    height: 2.25rem;
    margin-right: 1.5rem;
    color: rgba(255, 255, 255, 0.28);
    transition: color 120ms ease-in;

    cursor: pointer;

    &:hover {
        color: rgba(255, 255, 255, 1);
    }

    ${multipleMediaQuery(['S'])(css`
        margin-right: 0.5rem;
    `)}
`;

const StyledContent = styled.div`
    padding-left: 3.75rem;

    ${multipleMediaQuery(['S'])(css`
        padding-left: 0;
    `)}
`;

const StyledClipboardWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
`;

export const IconExtendedInfo = ({ offset, onClose }: IconInfoProps) => {
    const { state } = useContext(Context);

    if (!state.wizardItemName) {
        return null;
    }

    const iconComponent = `Icon${capitalize(state.wizardItemName)}`;
    const importCode = `import { ${iconComponent} } from '@salutejs/plasma-icons';`;
    const codeSnippet = `<${iconComponent} size="${state.size?.value}" color="${state.color?.value}" />`;

    return (
        <StyledExtendInfo offset={offset}>
            <StyledHeader>
                <StyledIconClose onClick={onClose}>
                    <IconClose size="m" color="inherit" />
                </StyledIconClose>
                <H2 bold={false}>{state.wizardItemName}</H2>
            </StyledHeader>
            <StyledContent>
                <StyledIconOptions>
                    <IconOptionsColors />
                    <IconOptionsSize />
                </StyledIconOptions>
                <StyledClipboardWrapper>
                    <IconClipboard source={importCode} title="Импорт" />
                    <IconClipboard source={codeSnippet} title="React" />
                </StyledClipboardWrapper>
            </StyledContent>
        </StyledExtendInfo>
    );
};
