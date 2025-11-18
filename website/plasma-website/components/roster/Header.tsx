import React from 'react';
import type { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { textSecondary } from '@salutejs/plasma-tokens/brands';
import { BodyXS, LineSkeleton, BodyM } from '@salutejs/plasma-b2c';

import { multipleMediaQuery } from '../../mixins';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    children?: never;
}

type PackagesInfo = {
    [k: string]: readonly [string, string];
};

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem var(--page-padding-y);
    background-color: transparent;
`;

const StyledHeading = styled(BodyM)`
    color: rgba(255, 255, 255, 0.96);

    ${multipleMediaQuery(['S'])(css`
        font-size: 0.875rem;
        padding-left: 1rem;
    `)}
`;

const MetaInfo = styled.div`
    display: flex;
    gap: 1rem;

    color: ${textSecondary};

    ${multipleMediaQuery(['S'])(css`
        margin-right: 2rem;
    `)}
`;

const StyledLineSkeleton = styled(LineSkeleton)`
    width: 6rem;
`;

export const Header: FC<HeaderProps> = () => {
    const PACKAGES_INFO: PackagesInfo = JSON.parse(process.env.PACKAGES_INFO || '{}') as PackagesInfo;
    const [latestVersion, releaseDate] = PACKAGES_INFO['@salutejs/plasma-icons'] || [];

    return (
        <StyledHeader>
            <StyledHeading bold>Пиктограммы</StyledHeading>
            <MetaInfo>
                <BodyXS>{latestVersion || <StyledLineSkeleton size="caption" />}</BodyXS>
                <BodyXS>{releaseDate || <StyledLineSkeleton size="caption" />}</BodyXS>
            </MetaInfo>
        </StyledHeader>
    );
};
