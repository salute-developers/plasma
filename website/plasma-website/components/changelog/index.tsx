import React from 'react';
import { TextXS, H1, H4, DsplM } from '@salutejs/plasma-b2c';
import styled, { css } from 'styled-components';

import { multipleMediaQuery } from '../../mixins';

export const ChangelogH1 = styled(DsplM).attrs({ bold: false })`
    padding-bottom: 20px;

    ${multipleMediaQuery(['L'])(css`
        padding-bottom: 18px;
    `)}

    ${multipleMediaQuery(['S', 'M'])(css`
        padding-bottom: 1rem;

        font-size: 56px;
        line-height: 60px;
    `)}
`;

export const StyledTextXS = styled(TextXS)`
    color: rgba(255, 255, 255, 0.56);
    line-height: 14px;
`;

export const StyledSectionHeader = styled.header`
    padding-bottom: 48px;

    ${multipleMediaQuery(['S', 'M', 'L'])(css`
        padding-bottom: 40px;
    `)}
`;

export const ChangelogList = styled.ul`
    padding: 0;
    margin: 0;

    &:not(:last-child) {
        margin-bottom: 48px;
    }

    list-style-type: none;

    ${multipleMediaQuery(['S', 'M'])(css`
        &:not(:last-child) {
            margin-bottom: 40px;
        }
    `)}
`;

export const ChangelogItem = styled.li`
    padding: 0;
    margin: 0;
`;

export const ChangelogEntry = styled.article`
    margin-bottom: 28px;
`;

export const ChangelogH2 = styled(H1).attrs({ bold: false })`
    padding-bottom: 32px;

    ${multipleMediaQuery(['S', 'M', 'L'])(css`
        padding-bottom: 24px;
    `)}

    ${multipleMediaQuery(['S', 'M'])(css`
        font-size: 32px;
        line-height: 36px;
    `)}
`;

export const StyledH4 = styled(H4)`
    padding-bottom: 1rem;
`;

export const ChangelogComponentName = ({ component }: { component: string }) => {
    return <StyledH4>{component}</StyledH4>;
};

export const ChangelogContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:has(+ div) {
        padding-bottom: 1rem;
    }
`;

export * from './ChangelogHeader.styles';
export * from './ChangelogPullRequestLink.styles';
export * from './ChangelogDescription.styles';
export * from './ChangelogVersionsList.styles';
export * from './HistoryNavigation';
export * from './Page.styles';
export * from './ButtonToggle';
export * from './404';
