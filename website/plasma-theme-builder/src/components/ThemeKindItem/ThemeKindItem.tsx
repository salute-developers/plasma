import React from 'react';
import styled, { css } from 'styled-components';
import { H2, BodyS, BodyXS } from '@salutejs/plasma-b2c';
import { primary } from '@salutejs/plasma-tokens-b2c';

import { CreateButton } from '../CreateButton/CreateButton';

import { multipleMediaQuery } from '../mixins';

const StyledCreateButton = styled(CreateButton)`
    min-width: 42rem;

    ${multipleMediaQuery(['M', 'S'])(
        css`
            min-width: 35rem;
        `,
    )}

    height: 5rem;
`;

const Root = styled.div`
    margin-bottom: 4.5rem;
`;

const Name = styled(H2)`
    white-space: pre-line;

    width: 14.5rem;
    margin-right: 2rem;

    position: relative;
`;

const Description = styled(BodyS)`
    width: 25rem;
    line-height: 1.25rem;
    opacity: 0.75;
`;

const Supported = styled(BodyXS)`
    display: flex;
    align-items: center;

    width: 16.5rem;
`;

const Pointer = styled.div`
    &::after {
        content: '';
        display: block;

        width: 8.375rem;
        height: 0.063rem;

        ${multipleMediaQuery(['M', 'S'])(
            css`
                width: 5.625rem;
            `,
        )}

        position: relative;
        left: 7rem;
        top: -0.5rem;

        background-color: ${primary};
    }
`;

const Platforms = styled.div`
    width: 25rem;
    display: flex;
    gap: 1.25rem;
    position: relative;
    top: 0.6rem;
`;

const Header = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    position: relative;
`;

const Content = styled.div`
    display: flex;
    margin-bottom: 2.5rem;
`;

const Platform = styled.div``;

const PlatformName = styled(BodyXS)`
    margin-bottom: 0.25rem;
`;

const PlatformLanguage = styled(BodyS)`
    opacity: 0.56;
`;

interface SupportedPlatform {
    name: string;
    languages: string;
}

export interface ThemeKindItemProps {
    name: string;
    description: string;
    supportedPlatforms: Array<SupportedPlatform>;
    index?: number;
    onClick?: () => void;
}

export const ThemeKindItem = ({ name, description, supportedPlatforms, index, onClick }: ThemeKindItemProps) => {
    return (
        <Root>
            <Header>
                <Name bold={false}>{name}</Name>
                <Description>{description}</Description>
            </Header>
            <Content>
                <Supported>
                    <Pointer>Поддерживаем</Pointer>
                </Supported>
                <Platforms>
                    {supportedPlatforms.map(({ name, languages }, index) => (
                        <Platform key={index}>
                            <PlatformName bold>{name}</PlatformName>
                            <PlatformLanguage>{languages}</PlatformLanguage>
                        </Platform>
                    ))}
                </Platforms>
            </Content>
            {index === 0 && <StyledCreateButton onClick={onClick} />}
        </Root>
    );
};
