import styled, { css } from 'styled-components';
import { DsplS, LineSkeleton, BodyS, BodyXS, mediaQuery } from '@salutejs/plasma-b2c';
import { whitePrimary, whiteTertiary, accent, secondary } from '@salutejs/plasma-tokens-b2c';

import { addGradient, multipleMediaQuery } from '../../mixins';

import { SupportTooltip } from './SupportTooltip';

const MetaInfo = styled.div`
    color: ${secondary};
    display: flex;
`;
const Content = styled(BodyXS)`
    margin-right: 2rem;
`;
const Title = styled(DsplS)`
    display: inline-flex;

    margin-top: 0.5rem;
    margin-bottom: 1.75rem;

    ${multipleMediaQuery(['M', 'S'])(css`
        margin-bottom: 1.25rem;
    `)}

    color: ${whitePrimary};

    &:hover {
        ${addGradient};
    }
`;
const LinkList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
const LinkItem = styled(BodyS)`
    display: inline-flex;
    align-items: center;

    margin-right: 1.25rem;

    color: ${whiteTertiary};

    &:hover {
        ${addGradient};
    }
`;
const LinkTitle = styled.a`
    color: ${whitePrimary};
    text-decoration: none;

    &:hover {
        color: ${accent};
        text-decoration: none;
    }
`;
const StyledSupportTooltip = styled(SupportTooltip)`
    position: absolute;
    top: 2.25rem;
    right: 0;

    margin-bottom: 1.5rem;
    margin-left: 4rem;

    ${multipleMediaQuery(['L', 'M', 'S'])(css`
        top: auto;
        margin: -1rem 0;
        position: relative;

        border: none;
    `)}

    ${mediaQuery('XL')(css`
        top: auto;
        margin: -1rem 0;
        position: relative;
    `)}
`;
const Item = styled.div`
    position: relative;

    margin-top: 4rem;

    ${multipleMediaQuery(['L', 'M', 'S'])(css`
        margin-top: 3rem;
    `)}

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${StyledSupportTooltip} {
        opacity: 0;
    }

    /* INFO: Сработает только для устройств с тач интерфейсом */
    @media (hover: none) {
        ${StyledSupportTooltip} {
            opacity: 1;
        }
    }

    /* INFO: Сработает только для устройств, у которых есть мышь или другой манипулятор */
    @media (hover: hover) {
        &:hover {
            ${StyledSupportTooltip} {
                opacity: 1;
            }
        }
    }
`;
const Card = styled.div`
    position: relative;
    width: 100%;
`;
const StyledLineSkeleton = styled(LineSkeleton)`
    width: 6rem;
`;

type PackagesInfo = {
    [k: string]: readonly [string, string];
};

export interface ProductProps {
    name: string;
    title: string;
    support?: string;
    links?: Array<{ text: string; href?: string }>;
}

export const Product = ({ name, title, support, links }: ProductProps) => {
    const PACKAGES_INFO: PackagesInfo = (process.env.PACKAGES_INFO as unknown) as PackagesInfo;
    const [latestVersion, releaseDate] = PACKAGES_INFO[name];

    return (
        <Item>
            <Card>
                <MetaInfo>
                    <Content>{latestVersion || <StyledLineSkeleton size="caption" />}</Content>
                    <Content>{releaseDate || <StyledLineSkeleton size="caption" />}</Content>
                </MetaInfo>
                <Title bold={false}>
                    <LinkTitle href={links?.[1].href}>{title}</LinkTitle>
                </Title>
                {links?.length && (
                    <LinkList>
                        {links.map((link, j) => (
                            <LinkItem key={`link:${name}_${j}`}>
                                <LinkTitle href={link.href}>{link.text}</LinkTitle>
                            </LinkItem>
                        ))}
                        <StyledSupportTooltip href={support} />
                    </LinkList>
                )}
            </Card>
        </Item>
    );
};
