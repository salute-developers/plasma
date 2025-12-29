import React from 'react';

import { ArrowTopRight } from '../components/icons/ArrowTopRight';
import { ArrowRight } from '../components/icons/ArrowRight';
import { History } from '../components/icons/History';

import { iconListGroupNames } from './iconsList';
import { formattedPaletteColors } from './getColors';

type PackagesInfo = {
    [k: string]: readonly [string, string];
};

type ChangelogLink = {
    vertical: string;
    version: string;
    platform: string;
};

export type ChangelogItem = {
    links: {
        documentation: { href: string };
        changelog: { href: string };
        storybook?: { href: string };
        changelogData?: { href: string };
    };
    title: string;
    version: string;
    package?: string;
};

export const createChangelogLink = ({ vertical, version, platform = 'react' }: ChangelogLink) => {
    return `/changelog/?vertical=${vertical}&platform=${platform}&version=${version}`;
};

export const baseColorCode = '600';
export const PACKAGES_INFO = JSON.parse(process.env.PACKAGES_INFO || '{}') as PackagesInfo;
export const basePath = process.env.BASE_PATH || '';
export const rootFontSize = 16;
export const topOffsetAfterScroll = 35;
export const sectionOffsetAccuracy = 5;
export const stickyNavItemMargin = 0.75;

export const stickyNavSnapVariant = {
    topOfSection: 'top-of-section',
    topOfViewport: 'top-of-viewport',
    bottomOfViewport: 'bottom-of-viewport',
};

export const verticalsMap = [
    {
        key: 'plasmaSDService',
        title: 'Plasma SD Service',
        package: '@salutejs/plasma-b2c',
        group: 'Плазма',
        items: [
            { text: 'Сторибук', href: '/b2c-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/b2c/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/plasma-b2c'][0],
                href: `/changelog/?lib=plasma-b2c&version=${PACKAGES_INFO['@salutejs/plasma-b2c'][0]}`,
                contentLeft: <History />,
                isMeta: false,
            },
        ],
    },
    {
        key: 'plasmaSDMid',
        title: 'Plasma SD Mid',
        package: '@salutejs/plasma-web',
        group: 'Плазма',
    },
    {
        key: 'plasmaGigaApp',
        title: 'Plasma Giga',
        package: '@salutejs/plasma-giga',
        group: 'Плазма',
        items: [
            { text: 'Сторибук', href: '/giga-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/giga/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/plasma-giga'][0],
                href: `/changelog/?lib=plasma-giga&version=${PACKAGES_INFO['@salutejs/plasma-giga'][0]}`,
                contentLeft: <History />,
                isMeta: false,
            },
        ],
    },
    {
        key: 'plasmaStarDS',
        title: 'Plasma StarDS',
        package: '',
        group: 'Плазма',
        href: '',
        items: [],
    },
    {
        key: 'plasmaHomeDS',
        title: 'Plasma HomeDS',
        package: '',
        group: 'Плазма',
        href: '',
        items: [],
    },
    {
        key: 'SDDSService',
        title: 'SDDS Service',
        package: '@salutejs/sdds-serv',
        group: 'СДДС',
        items: [
            { text: 'Сторибук', href: '/sdds-serv-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-serv/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/sdds-serv'][0],
                href: `/changelog/?lib=sdds-serv&version=${PACKAGES_INFO['@salutejs/sdds-serv'][0]}`,
                contentLeft: <History />,
                isMeta: false,
            },
        ],
    },
    {
        key: 'SDDSFinAI',
        title: 'SDDS FinAI',
        package: '@salutejs/sdds-finai',
        group: 'СДДС',
        items: [
            { text: 'Сторибук', href: '/sdds-finai-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-finai/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/sdds-finai'][0],
                href: `/changelog/?lib=sdds-finai&version=${PACKAGES_INFO['@salutejs/sdds-finai'][0]}`,
                contentLeft: <History />,
                isMeta: false,
            },
        ],
    },
    {
        key: 'SDDSPlatformAI',
        title: 'SDDS Platform-AI',
        package: '@salutejs/sdds-platform-ai',
        group: 'СДДС',
        items: [
            { text: 'Сторибук', href: '/sdds-platform-ai-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-platform-ai/', contentRight: <ArrowTopRight /> },
        ],
    },
    {
        key: 'SDDSDFA',
        title: 'SDDS DFA',
        package: '@salutejs/sdds-dfa',
        group: 'СДДС',
        items: [
            { text: 'Сторибук', href: '/sdds-dfa-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-dfa/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/sdds-dfa'][0],
                href: `/changelog/?lib=sdds-dfa&version=${PACKAGES_INFO['@salutejs/sdds-dfa'][0]}`,
                contentLeft: <History />,
                isMeta: false,
            },
        ],
    },
    {
        key: 'SDDSCS',
        title: 'SDDS CS',
        package: '@salutejs/sdds-cs',
        group: 'СДДС',
        items: [
            { text: 'Сторибук', href: '/sdds-cs-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-cs/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/sdds-cs'][0],
                href: `/changelog/?lib=sdds-cs&version=${PACKAGES_INFO['@salutejs/sdds-cs'][0]}`,
                contentLeft: <History />,
                isMeta: false,
            },
        ],
    },
    {
        key: 'SDDSCRM',
        title: 'SDDS CRM',
        package: '@salutejs/sdds-crm',
        group: 'СДДС',
        items: [
            { text: 'Сторибук', href: '/sdds-crm-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-crm/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/sdds-crm'][0],
                href: `/changelog/?lib=sdds-crm&version=${PACKAGES_INFO['@salutejs/sdds-crm'][0]}`,
                contentLeft: <History />,
                isMeta: false,
            },
        ],
    },
    {
        key: 'SDDSScan',
        title: 'SDDS Scan',
        package: '@salutejs/sdds-scan',
        group: 'СДДС',
        items: [
            { text: 'Сторибук', href: '/sdds-scan-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-scan/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/sdds-scan'][0],
                href: `/changelog/?lib=sdds-scan&version=${PACKAGES_INFO['@salutejs/sdds-scan'][0]}`,
                contentLeft: <History />,
                isMeta: false,
            },
        ],
    },
    {
        key: 'SDDSBizcom',
        title: 'SDDS Bizcom',
        package: '@salutejs/sdds-bizcom',
        group: 'СДДС',
        items: [
            { text: 'Сторибук', href: '/sdds-bizcom-storybook/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/sdds-bizcom'][0],
                href: `/changelog/?lib=sdds-bizcom&version=${PACKAGES_INFO['@salutejs/sdds-bizcom'][0]}`,
                contentLeft: <History />,
                isMeta: false,
            },
        ],
    },
    {
        key: 'SDDSSberOS',
        title: 'SDDS Sber OS',
        package: '@salutejs/sdds-sber-os',
        group: 'СДДС',
        items: [
            { text: 'Сторибук', href: '/sdds-sber-os-storybook/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/sdds-sber-os'][0],
                href: `/changelog/?lib=sdds-sber-os&version=${PACKAGES_INFO['@salutejs/sdds-sber-os'][0]}`,
                contentLeft: <History />,
                isMeta: false,
            },
        ],
    },
    {
        key: 'SDDSNetology',
        title: 'SDDS Netology',
        package: '@salutejs/sdds-netology',
        group: 'ДЗО 1',
        items: [
            { text: 'Сторибук', href: '/sdds-netology-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-netology/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/sdds-netology'][0],
                contentLeft: <History />,
                href: `/changelog/?lib=sdds-netology&version=${PACKAGES_INFO['@salutejs/sdds-netology'][0]}`,
                isMeta: false,
            },
        ],
    },
    {
        key: 'SDDSInsol',
        title: 'SDDS Insol',
        package: '@salutejs/sdds-insol',
        group: 'ДЗО 1',
        items: [
            { text: 'Сторибук', href: '/sdds-insol-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-insol/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/sdds-insol'][0],
                href: `/changelog/?lib=sdds-insol&version=${PACKAGES_INFO['@salutejs/sdds-insol'][0]}`,
                contentLeft: <History />,
                isMeta: false,
            },
        ],
    },
];

export const products = [
    {
        title: 'Палитра',
        href: '/palette/',
        items: formattedPaletteColors.map(({ name }) => ({
            text: name,
            href: `/palette/?color=${name}&code=${baseColorCode}`,
        })),
    },
    {
        title: 'Пиктограммы',
        href: '/icons/',
        items: iconListGroupNames.map((groupName) => ({
            text: groupName.toLowerCase(),
            href: `/icons/?group=${groupName}`,
        })),
    },
    {
        title: 'Билдер',
        href: '/plasma-theme-builder/',
    },
];

export const verticals = [
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

export const currentYear = new Date().getFullYear();

export const packageNameMap = {
    'plasma-b2c': 'Plasma SD Service',
    'plasma-web': 'Plasma SD Mid',
    'plasma-giga': 'Plasma Giga',
    'sdds-serv': 'SDDS Serv',
    'sdds-finai': 'SDDS FinAI',
    'sdds-dfa': 'SDDS DFA',
    'sdds-cs': 'SDDS CS',
    'sdds-crm': 'SDDS CRM',
    'sdds-scan': 'SDDS Scan',
    'sdds-netology': 'SDDS Netology',
    'sdds-insol': 'SDDS Insol',
    'sdds-bizcom': 'SDDS Bizcom',
    'sddssber-os': 'SDDS Sber OS',
    plasmaStarDS: 'Plasma StarDS',
    plasmaHomeDS: 'Plasma HomeDS',
};

export const verticalToNpmPackageMap = {
    plasmaSDService: 'plasma-b2c',
    plasmaSDMid: 'plasma-web',
    plasmaGigaApp: 'plasma-giga',
    plasmaStarDS: 'plasmaStarDS',
    plasmaHomeDS: 'plasmaHomeDS',
    SDDSService: 'sdds-serv',
    SDDSFinAI: 'sdds-finai',
    SDDSDFA: 'sdds-dfa',
    SDDSCS: 'sdds-cs',
    SDDSCRM: 'sdds-crm',
    SDDSScan: 'sdds-scan',
    SDDSNetology: 'sdds-netology',
    SDDSInsol: 'sdds-insol',
    SDDSBizcom: 'sdds-bizcom',
    SDDSSberOS: 'sdds-sber-os',
};
