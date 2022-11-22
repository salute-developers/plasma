import styled from 'styled-components';
import { Container, H1, H3, TextL, TextS } from '@salutejs/plasma-b2c';
import { secondary } from '@salutejs/plasma-tokens-b2c';

import { MainMenu, MainProducts, MainCommunityMenu, IconGitHub, IconTelegram } from '../components';

const StyledContainer = styled(Container)`
    flex-direction: row;
    min-height: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
`;
const Main = styled.main``;
const Sidebar = styled.aside`
    width: 272px;
    display: flex;
    flex-direction: column;
`;
const SidebarFooter = styled.div`
    margin-top: auto;
`;
const SiteName = styled(H3)`
    white-space: pre-line;
`;
const Slogan = styled(TextL)`
    white-space: pre-line;
`;
const MainH1 = styled(H1)`
    margin-top: 5rem;
    white-space: pre-line;
`;
const StyledMainCommunityMenu = styled(MainCommunityMenu)`
    margin-bottom: 3rem;
`;
const CopyrightText = styled(TextS)`
    color: ${secondary};
`;

const basePath = (process.env.BASE_PATH || '').replace('/pr-', '/pr/pr-');

const menu = [
    { title: 'Архетипы', href: `${basePath}/archetypes/`, soon: true },
    { title: 'Палитра', href: `${basePath}/palette/`, soon: true },
    { title: 'Типографика', href: `${basePath}/typography/`, soon: true },
    { title: 'Иконки', href: `${basePath}/icons/` },
    { title: 'Иллюстрации', href: `${basePath}/illustrations/`, soon: true },
];
const community = [
    {
        title: 'GitHub',
        contentLeft: <IconGitHub color="inherit" />,
        href: 'https://github.com/salute-developers/plasma',
    },
    {
        title: 'Telegram',
        contentLeft: <IconTelegram color="inherit" />,
        href: 'https://t.me/smartmarket_community',
    },
];
const products = [
    {
        title: 'Web B2C',
        description: 'Для веб-сервисов B2C-сегмента',
        links: [
            { text: 'Документация', href: `${basePath}/web/` },
            { text: 'Сторибук', href: `${basePath}/b2c-storybook/` },
            { text: 'Фигма', href: '', soon: true },
        ],
    },
    {
        title: 'Web B2B/E',
        description: 'Для веб-сервисов B2B- и B2E-сегментов',
        links: [
            { text: 'Документация', href: `${basePath}/web/` },
            { text: 'Сторибук', href: `${basePath}/web-storybook/` },
            { text: 'Фигма', href: '', soon: true },
        ],
    },
    // { title: 'Communications', description: 'Для сайтов, лендингов и прочих рекламных форматов', soon: true },
    // {
    //     title: 'Mobile',
    //     description: 'Для нативных мобильных приложений',
    //     links: [{ text: 'Фигма', href: '' }],
    // },
    // {
    //     title: 'ASDK',
    //     description: 'Для голосовых ассистентов и чат-аппов',
    //     links: [
    //         { text: 'Фигма', href: '' },
    //         { text: 'Документация', href: '', soon: true },
    //     ],
    // },
    {
        title: 'Canvas Apps',
        description: 'Для канвас-аппов ассистента',
        links: [
            { text: 'Документация', href: `${basePath}/ui/` },
            { text: 'Сторибук', href: `${basePath}/ui-storybook/` },
            { text: 'Фигма', href: 'https://www.figma.com/community/file/964418717233814341' },
        ],
    },
    {
        title: 'Temple',
        description: 'Шаблоны для ускорения разработки канвасов',
        links: [
            { text: 'Документация', href: `${basePath}/temple/` },
            { text: 'Сторибук', href: `${basePath}/temple-storybook/` },
            { text: 'Фигма', href: '', soon: true },
        ],
    },
];

const siteName = `Дизайн-${'\n'}система${'\n'}Plasma`;
const slogan = `Помогаем поддерживать консистентность${'\n'}между продуктами экосистемы Salute`;
const purpose = `Для каких продуктов${'\n'}используется`;

export default function Home() {
    return (
        <StyledContainer>
            <Sidebar>
                <SiteName mb="16x">{siteName}</SiteName>
                <MainMenu items={menu} />
                <SidebarFooter>
                    <StyledMainCommunityMenu items={community} />
                    <CopyrightText>2022</CopyrightText>
                </SidebarFooter>
            </Sidebar>
            <Main>
                <Slogan>{slogan}</Slogan>
                <MainH1 as="h1" my="16x">
                    {purpose}
                </MainH1>
                <MainProducts items={products} />
            </Main>
        </StyledContainer>
    );
}
