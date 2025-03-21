import styled, { css } from 'styled-components';
import { Container as Grid, Row, Col, BodyM, TextS, mediaQuery } from '@salutejs/plasma-b2c';
import { background, tertiary } from '@salutejs/plasma-tokens-b2c';
import { useEffect, useMemo, useRef } from 'react';

import { MainMenu, ProductList, MainCommunityMenu, IconGitHub, Heading } from '../components';
import { multipleMediaQuery } from '../mixins';
import { formattedPaletteColors, iconsList } from '../utils';
import { iconListGroupNames } from '../utils/iconsList';
import { ArrowTopRight } from '../components/icons/ArrowTopRight';
import { ProductProps } from '../components/main/Product';
import { ArrowRight } from '../components/icons/ArrowRight';
import { CardstackOutline } from '../components/icons/CardstackOutline';
import { useVisibility } from '../hooks/useVisibility';
import { LinkItem } from '../components/main/LinkItem';

type PackagesInfo = {
    [k: string]: readonly [string, string];
};

type GroupData = {
    group: string;
    index: number;
};

const StyledWrapper = styled.div`
    min-height: 100%;
    min-width: 35rem;
    position: relative;

    padding: 0 4rem;
    height: 100vh;

    ${multipleMediaQuery(['M', 'S'])(css`
        padding: 0 3.5rem;
        overflow: visible;
        height: auto;
    `)}
`;

// const StyledGrid = styled(Grid)`
//     min-height: 100%;
//     min-width: 35rem;

//     padding: 0 4rem;
//     overflow: hidden;
//     height: 100vh;

//     ${multipleMediaQuery(['M', 'S'])(css`
//         padding: 0 3.5rem;
//         overflow: visible;
//         height: auto;
//     `)}
// `;
// const StyledRow = styled(Row)`
//     position: relative;

//     display: flex;
//     height: 100%;
// `;

const HeaderWrapper = styled.div`
    padding: 1.5rem 0;
`;

const ProductNav = styled.div`
    padding: 1.5rem 4rem;
    position: fixed;
    top: 0;
    left: 0;
    background: ${background};
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    z-index: 1;
`;

const TopDisclosedGroupNav = styled.div`
    position: fixed;
    background: ${background};

    top: 4rem;
    right: 4rem;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    z-index: 100;
`;

const BottomDisclosedGroupNav = styled.div`
    position: fixed;
    background: ${background};

    bottom: 4rem;
    right: 4rem;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    z-index: 100;
`;

// const StyledCol = styled(Col)`
//     overflow-y: auto;
//     height: 100%;

//     ${multipleMediaQuery(['M', 'S'])(css`
//         overflow-y: visible;
//         height: auto;
//     `)}
// `;
// const StyledMainMenu = styled(MainMenu)`
//     ${multipleMediaQuery(['M', 'S'])(css`
//         display: flex;
//     `)}
// `;
// const SiteName = styled(BodyM)`
//     white-space: pre-line;

//     margin-top: 2rem;
//     margin-bottom: 3.5rem;

//     ${mediaQuery('L')(
//         css`
//             margin-bottom: 2.5rem;
//         `,
//     )}

//     ${multipleMediaQuery(['M', 'S'])(css`
//         margin-bottom: 1.5rem;
//     `)}
// `;
// const Footer = styled.footer`
//     position: absolute;
//     bottom: 2rem;
//     left: 0.5rem;

//     ${multipleMediaQuery(['M', 'S'])(css`
//         position: relative;
//     `)}
// `;
// const StyledMainCommunityMenu = styled(MainCommunityMenu)`
//     margin-bottom: 2rem;
//     margin-top: 5rem;
// `;
const CopyrightText = styled(TextS)`
    position: fixed;
    bottom: 4rem;
    right: -3rem;
    rotate: -90deg;
    color: ${tertiary};
`;

const ProductListWrapper = styled.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`;

// const prPath = process.env.BASE_PATH ? '/pr' : '';
// const prName = (process.env.BASE_PATH || '').replace('/pr/pr', '-pr');
const PACKAGES_INFO = (process.env.PACKAGES_INFO as unknown) as PackagesInfo;
const basePath = process.env.BASE_PATH || '';
const baseColorCode = '600';

// const menu = [
//     { title: 'Темы', href: `${prPath}/plasma-theme-builder${prName}/`, state: 'альфа' },
//     { title: 'Иконки', href: `${basePath}/icons/` },
//     { title: 'Палитра', href: `${basePath}/palette/` },
// ];

// const community = [
//     {
//         title: 'GitHub',
//         contentLeft: <IconGitHub />,
//         href: 'https://github.com/salute-developers/plasma',
//     },
// ];

const verticalsMap = [
    {
        title: 'SD Service',
        package: '@salutejs/plasma-b2c',
        group: 'Плазма',
        href: `${basePath}/b2c/`,
        items: [
            { text: 'Сторибук', href: `${basePath}/b2c-storybook/`, contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: `${basePath}/b2c/`, contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/plasma-b2c'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
    {
        title: 'SD Mid',
        package: '@salutejs/plasma-web',
        group: 'Плазма',
        href: `${basePath}/web/`,
        items: [
            { text: 'Сторибук', href: `${basePath}/web-storybook/`, contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: `${basePath}/web/`, contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/plasma-web'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
    {
        title: 'SDDS Service',
        package: '@salutejs/sdds-serv',
        group: 'SDDS Masterbrand',
        href: `${basePath}/sdds-serv/`,
        items: [
            { text: 'Сторибук', href: `${basePath}/sdds-serv-storybook/`, contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: `${basePath}/sdds-serv/`, contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/sdds-serv'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
    {
        title: 'SDDS Finportal',
        package: '@salutejs/sdds-finportal',
        group: 'SDDS Masterbrand',
        href: `${basePath}/sdds-finportal/`,
        items: [
            { text: 'Сторибук', href: `${basePath}/sdds-finportal-storybook/`, contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: `${basePath}/sdds-finportal/`, contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/sdds-finportal'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
    {
        title: 'SDDS DFA',
        package: '@salutejs/sdds-dfa',
        group: 'SDDS Masterbrand',
        href: `${basePath}/sdds-dfa/`,
        items: [
            { text: 'Сторибук', href: `${basePath}/sdds-dfa-storybook/`, contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: `${basePath}/sdds-dfa/`, contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/sdds-dfa'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
    {
        title: 'SDDS CS',
        package: '@salutejs/sdds-cs',
        group: 'SDDS Masterbrand',
        href: `${basePath}/sdds-cs/`,
        items: [
            { text: 'Сторибук', href: `${basePath}/sdds-cs-storybook/`, contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: `${basePath}/sdds-cs/`, contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/sdds-cs'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
    {
        title: 'SDDS Insol',
        package: '@salutejs/sdds-insol',
        group: 'Отдельные сборки',
        href: `${basePath}/sdds-insol/`,
        items: [
            { text: 'Сторибук', href: `${basePath}/sdds-insol-storybook/`, contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: `${basePath}/sdds-insol/`, contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/sdds-insol'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
];

const products = [
    // {
    //     title: 'Web B2C',
    //     name: '@salutejs/plasma-b2c',
    //     support: 'https://t.me/+mAruh4Kpwq9kNDVi',
    //     items: [
    //         { text: 'Документация', href: `${basePath}/b2c/` },
    //         { text: 'Сторибук', href: `${basePath}/b2c-storybook/` },
    //     ],
    // },
    // {
    //     title: 'Web B2E',
    //     name: '@salutejs/plasma-web',
    //     support: 'https://t.me/+mAruh4Kpwq9kNDVi',
    //     items: [
    //         { text: 'Документация', href: `${basePath}/web/` },
    //         { text: 'Сторибук', href: `${basePath}/web-storybook/` },
    //     ],
    // },
    // {
    //     title: 'Canvas Apps',
    //     name: '@salutejs/plasma-ui',
    //     support: 'https://t.me/+cd3wk0JEA90zMzI6',
    //     items: [
    //         { text: 'Документация', href: `${basePath}/ui/` },
    //         { text: 'Сторибук', href: `${basePath}/ui-storybook/` },
    //     ],
    // },
    {
        title: 'Палитра',
        titleContentRight: <ArrowRight />,
        href: `${basePath}/palette/`,
        items: formattedPaletteColors.map(({ name }) => ({
            text: name,
            href: `${basePath}/palette/color/${name}/code/${baseColorCode}`,
        })),
    },
    {
        title: 'Пиктограммы',
        titleContentRight: <ArrowRight />,
        href: `${basePath}/icons/`,
        items: iconListGroupNames.map((groupName) => ({
            text: groupName,
            href: `${basePath}/icons/`,
        })),
    },
    {
        title: 'Билдер',
        titleContentRight: <ArrowRight />,
        href: `${basePath}/plasma-theme-builder/`,
    },
];

const verticals = [
    {
        title: 'Вертикали',
        titleContentRight: <ArrowRight style={{ rotate: '90deg' }} />,
        items: verticalsMap.map(({ title, href }) => ({
            text: title,
            href,
            contentRight: <ArrowTopRight />,
        })),
    },
];

// const siteName = 'Плазма';

const currentYear = new Date().getFullYear();

const scrollToElement = (el: HTMLElement | null, offset = 0) => {
    if (!el) {
        return;
    }

    window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth',
    });
};

export default function Home() {
    const groupRefs = useRef<(HTMLDivElement | null)[]>([]);
    const productsRef = useRef<(HTMLDivElement | null)[]>([]);
    const productNavRef = useRef<HTMLDivElement | null>(null);
    const verticalsRef = useRef<HTMLDivElement | null>(null);

    const productsVisibility = useVisibility(productsRef.current);
    const groupsVisibility = useVisibility(groupRefs.current, productNavRef.current?.offsetHeight);

    const areProductsVisible = productsVisibility.every((isVisible) => isVisible);

    const groups = verticalsMap.reduce((acc, vertical) => {
        const { group } = vertical;
        if (!(group in acc)) {
            acc[group] = [];
        }

        acc[group].push(vertical);
        return acc;
    }, {} as { [key: string]: Array<ProductProps> });

    const topDisclosedGroupData: GroupData[] = [];
    const bottomDisclosedGroupData: GroupData[] = [];
    groupsVisibility.forEach((isVisible, i) => {
        if (isVisible) {
            return;
        }

        const group = groupRefs.current[i];
        if (!group) {
            return;
        }

        const rect = group.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top >= viewportHeight) {
            bottomDisclosedGroupData.push({ group: Object.keys(groups)[i], index: i });
        } else {
            topDisclosedGroupData.push({ group: Object.keys(groups)[i], index: i });
        }
    });

    const handleScrollIntoView = ({ index }: GroupData) => {
        scrollToElement(groupRefs.current[index], productNavRef.current?.offsetHeight);
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScrollToVertical = () => {
        scrollToElement(verticalsRef.current, productNavRef.current?.offsetHeight);
    };

    return (
        <StyledWrapper>
            {/* <StyledRow> */}
            {/* <Col sizeXXL={4} sizeXL={3} sizeL={2} sizeM={6} sizeS={6}>
                    <SiteName bold>{siteName}</SiteName>
                    <StyledMainMenu items={menu} />
                </Col> */}
            {/* <StyledCol sizeXXL={12} sizeXL={9} sizeL={6} sizeM={6} sizeS={6}> */}
            <ProductNav style={{ visibility: areProductsVisible ? 'hidden' : 'visible' }} ref={productNavRef}>
                <LinkItem
                    title="ЕДС"
                    onClick={handleScrollToTop}
                    contentRight={<ArrowRight style={{ rotate: '-90deg' }} />}
                />
                {products.map((product) => (
                    <LinkItem href={product.href} title={product.title} contentRight={<ArrowRight />} />
                ))}
            </ProductNav>

            <ProductListWrapper style={{ minHeight: '100vh', justifyContent: 'space-between' }}>
                <div>
                    <HeaderWrapper>
                        <LinkItem title="ЕДС" />
                    </HeaderWrapper>
                    <ProductList
                        items={products}
                        ref={(el) => {
                            productsRef.current[0] = el;
                        }}
                    />
                </div>
                <ProductList
                    onClick={handleScrollToVertical}
                    items={verticals}
                    ref={verticalsRef}
                    style={{ marginBottom: '4rem' }}
                />
            </ProductListWrapper>

            <ProductListWrapper style={{ gap: '5rem' }}>
                <TopDisclosedGroupNav>
                    {topDisclosedGroupData.map((groupData) => (
                        <LinkItem
                            onClick={() => handleScrollIntoView(groupData)}
                            title={groupData.group}
                            contentLeft={<ArrowRight style={{ rotate: '-90deg' }} />}
                        />
                    ))}
                </TopDisclosedGroupNav>
                {Object.entries(groups).map(([group, products], i) => (
                    <ProductList
                        key={group}
                        items={products}
                        group={group}
                        ref={(el) => {
                            groupRefs.current[i] = el;
                        }}
                    />
                ))}
                <BottomDisclosedGroupNav>
                    {bottomDisclosedGroupData.map((groupData) => (
                        <LinkItem
                            onClick={() => handleScrollIntoView(groupData)}
                            title={groupData.group}
                            contentLeft={<ArrowRight style={{ rotate: '90deg' }} />}
                        />
                    ))}
                </BottomDisclosedGroupNav>
            </ProductListWrapper>

            <CopyrightText>{`©${currentYear} Девайсы`}</CopyrightText>
            {/* </StyledCol> */}
            {/* <Footer>
                    <StyledMainCommunityMenu items={community} />
                    <CopyrightText>{`©${currentYear} СалютДевайсы`}</CopyrightText>
                </Footer> */}
            {/* </StyledRow> */}
        </StyledWrapper>
    );
}
