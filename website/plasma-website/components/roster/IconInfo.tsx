import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { IconClose } from '@salutejs/plasma-icons';

import { Context } from '../../store';
import { capitalize } from '../../utils';

import { IconClipboard } from './IconClipboard';

type IconInfoProps = {
    isActive?: boolean;
};

const StyledIconSource = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

const StyledIconOptions = styled.div`
    height: 1.5rem;
    margin-bottom: 2rem;

    & + ${StyledIconSource} {
        margin-bottom: 1.25rem;
    }
`;

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    padding-bottom: 1.5rem;
`;

const StyledIconInfo = styled.div<{ isActive?: boolean }>`
    display: none;
    width: 724px;
    height: 314px;
    margin-left: -3rem;
    box-sizing: border-box;

    ${({ isActive }) =>
        isActive &&
        css`
            display: block;
            padding-top: 3rem;
            padding-left: 3rem;
            padding-bottom: 4rem;
        `}
`;

const StyledHeading = styled.span`
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: rgba(255, 255, 255, 0.8);
`;

const StyledSubtitle = styled(StyledHeading)`
    color: rgba(255, 255, 255, 0.28);
`;

const StyledIconClose = styled(IconClose)`
    margin-right: 1.5rem;
    margin-left: -3px;
    color: rgba(255, 255, 255, 0.28);
`;

export const IconInfo = ({ isActive }: IconInfoProps) => {
    const { state } = useContext(Context);

    if (!state.wizardItemName) {
        return null;
    }

    const iconComponent = `Icon${capitalize(state.wizardItemName)}`;
    const importCode = `import { ${iconComponent} } from '@salutejs/plasma-icons';`;
    const codeSnippet = `<${iconComponent} size="xs" color="inherit" />`;

    return (
        <StyledIconInfo isActive={isActive}>
            <StyledHeader>
                <StyledIconClose size="s" color="inherit" />
                <span>{state.wizardItemName}</span>
            </StyledHeader>
            <StyledIconOptions>inherit</StyledIconOptions>
            <StyledIconSource>
                <StyledSubtitle>Импорт</StyledSubtitle>
                <div>
                    <IconClipboard source={importCode} />
                    <StyledHeading>{importCode}</StyledHeading>
                </div>
            </StyledIconSource>
            <StyledIconSource>
                <StyledSubtitle>React</StyledSubtitle>
                <StyledHeading>{codeSnippet}</StyledHeading>
            </StyledIconSource>
        </StyledIconInfo>
    );
};
