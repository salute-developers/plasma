import styled, { css } from 'styled-components';
import { Container as Grid, Row, Col, BodyM, TextS, mediaQuery } from '@salutejs/plasma-b2c';
import { secondary } from '@salutejs/plasma-tokens-b2c';
import { useState } from 'react';

import { MainMenu, MainProducts, MainCommunityMenu, IconGitHub, Heading } from '../components';
import { multipleMediaQuery } from '../mixins';
import { ArrowRight } from '../components/icons/ArrowRight';
import { LinkItem } from '../components/main/LinkItem';
import { ArrowTopRight } from '../components/icons/ArrowTopRight';
import { Header } from '../components/main/Header';

const StyledGrid = styled(Grid)`
    min-height: 100%;
    min-width: 35rem;

    padding: 0 4rem;

    overflow: hidden;
    height: 100vh;

    ${multipleMediaQuery(['M', 'S'])(css`
        padding: 0 3.5rem;
        overflow: visible;
        height: auto;
    `)}
`;
const StyledRow = styled(Row)`
    position: relative;

    display: flex;
    height: 100%;
`;
const StyledCol = styled(Col)`
    overflow-y: auto;
    height: 100%;

    ${multipleMediaQuery(['M', 'S'])(css`
        overflow-y: visible;
        height: auto;
    `)}
`;
const StyledMainMenu = styled(MainMenu)`
    ${multipleMediaQuery(['M', 'S'])(css`
        display: flex;
    `)}
`;
const SiteName = styled(BodyM)`
    white-space: pre-line;

    margin-top: 2rem;
    margin-bottom: 3.5rem;

    ${mediaQuery('L')(
        css`
            margin-bottom: 2.5rem;
        `,
    )}

    ${multipleMediaQuery(['M', 'S'])(css`
        margin-bottom: 1.5rem;
    `)}
`;
const Footer = styled.footer`
    position: absolute;
    bottom: 2rem;
    left: 0.5rem;

    ${multipleMediaQuery(['M', 'S'])(css`
        position: relative;
    `)}
`;
const StyledMainCommunityMenu = styled(MainCommunityMenu)`
    margin-bottom: 2rem;
    margin-top: 5rem;
`;
const CopyrightText = styled(TextS)`
    color: ${secondary};
`;

const prPath = process.env.BASE_PATH ? '/pr' : '';
const prName = (process.env.BASE_PATH || '').replace('/pr/pr', '-pr');
const basePath = process.env.BASE_PATH || '';

const menu = [
    { title: 'Темы', href: `${prPath}/plasma-theme-builder${prName}/`, state: 'альфа' },
    { title: 'Иконки', href: `${basePath}/icons/` },
    { title: 'Палитра', href: `${basePath}/palette/` },
];

const community = [
    {
        title: 'GitHub',
        contentLeft: <IconGitHub />,
        href: 'https://github.com/salute-developers/plasma',
    },
];

const products = [
    {
        title: 'Web B2C',
        name: '@salutejs/plasma-b2c',
        support: 'https://t.me/+mAruh4Kpwq9kNDVi',
        links: [
            { text: 'Документация', href: `${basePath}/b2c/` },
            { text: 'Сторибук', href: `${basePath}/b2c-storybook/` },
        ],
    },
    {
        title: 'Web B2E',
        name: '@salutejs/plasma-web',
        support: 'https://t.me/+mAruh4Kpwq9kNDVi',
        links: [
            { text: 'Документация', href: `${basePath}/web/` },
            { text: 'Сторибук', href: `${basePath}/web-storybook/` },
        ],
    },
    {
        title: 'Canvas Apps',
        name: '@salutejs/plasma-ui',
        support: 'https://t.me/+cd3wk0JEA90zMzI6',
        links: [
            { text: 'Документация', href: `${basePath}/ui/` },
            { text: 'Сторибук', href: `${basePath}/ui-storybook/` },
        ],
    },
];

const siteName = 'Плазма';

const currentYear = new Date().getFullYear();

export default function Home() {
    const [openHeading, setOpenHeading] = useState(false);

    const [selectedHeader, setSelectedHeader] = useState(false);

    return (
        <StyledGrid>
            <StyledRow>
                <Col sizeXXL={4} sizeXL={3} sizeL={2} sizeM={6} sizeS={6}>
                    <SiteName bold>{siteName}</SiteName>
                    <StyledMainMenu items={menu} />
                </Col>
                <StyledCol sizeXXL={12} sizeXL={9} sizeL={6} sizeM={6} sizeS={6}>
                    {/* <MainProducts items={products} /> */}
                    <Header
                        title="Header1"
                        expanded={selectedHeader}
                        onClick={() => setSelectedHeader(!selectedHeader)}
                        contentRight={<ArrowRight style={{ width: '1rem', height: '1rem' }} />}
                    />

                    <Header
                        title="Header2"
                        expanded={selectedHeader}
                        onClick={() => setSelectedHeader(!selectedHeader)}
                        contentRight={<ArrowRight style={{ width: '1rem', height: '1rem' }} />}
                    />

                    <Header
                        title="Header3"
                        expanded={selectedHeader}
                        onClick={() => setSelectedHeader(!selectedHeader)}
                        contentRight={<ArrowRight style={{ width: '1rem', height: '1rem' }} />}
                    />

                    <Heading
                        title="Heading"
                        titleContentRight={<ArrowRight />}
                        href="#"
                        contentTopRight={
                            <LinkItem
                                href="#"
                                title="item"
                                contentLeft={
                                    <ArrowRight style={{ width: '1rem', height: '1rem', transform: 'rotate(90deg)' }} />
                                }
                                contentRight={
                                    <ArrowRight style={{ width: '1rem', height: '1rem', transform: 'rotate(90deg)' }} />
                                }
                            />
                        }
                        contentBottom={Array.from(Array(20).keys()).map((i) => (
                            <LinkItem
                                href="#"
                                title={`scrollableItem${i}`}
                                contentLeft={<ArrowTopRight style={{ width: '1rem', height: '1rem' }} />}
                                contentRight={<ArrowTopRight style={{ width: '1rem', height: '1rem' }} />}
                            />
                        ))}
                    />

                    <Heading
                        title="Expandable"
                        titleContentRight={<ArrowRight />}
                        expanded={openHeading}
                        onClick={() => setOpenHeading(!openHeading)}
                        contentTopRight={
                            <LinkItem
                                href="#"
                                title="item"
                                contentLeft={
                                    <ArrowRight style={{ width: '1rem', height: '1rem', transform: 'rotate(90deg)' }} />
                                }
                                contentRight={
                                    <ArrowRight style={{ width: '1rem', height: '1rem', transform: 'rotate(90deg)' }} />
                                }
                            />
                        }
                        contentBottom={Array.from(Array(20).keys()).map((i) => (
                            <LinkItem
                                href="#"
                                title={`scrollableItem${i}`}
                                contentLeft={<ArrowTopRight style={{ width: '1rem', height: '1rem' }} />}
                                contentRight={<ArrowTopRight style={{ width: '1rem', height: '1rem' }} />}
                            />
                        ))}
                    >
                        <Heading title="Heading 1" />
                        <Heading title="Heading 2" />
                        <Heading title="Heading 3" />
                        <Heading title="Heading 4" />
                        <Heading title="Heading 5" />
                    </Heading>
                </StyledCol>
                {/* <Footer>
                    <StyledMainCommunityMenu items={community} />
                    <CopyrightText>{`©${currentYear} СалютДевайсы`}</CopyrightText>
                </Footer> */}
            </StyledRow>
        </StyledGrid>
    );
}
