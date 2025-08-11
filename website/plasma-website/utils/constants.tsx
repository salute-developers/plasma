import React from 'react';

import { ArrowTopRight } from '../components/icons/ArrowTopRight';
import { ArrowRight } from '../components/icons/ArrowRight';
import { History } from '../components/icons/History';

import { iconListGroupNames } from './iconsList';
import { formattedPaletteColors } from './getColors';

type PackagesInfo = {
    [k: string]: readonly [string, string];
};

export const baseColorCode = '600';
export const PACKAGES_INFO = (process.env.PACKAGES_INFO as unknown) as PackagesInfo;
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
        title: 'Plasma SD Service',
        package: '@salutejs/plasma-b2c',
        group: 'Плазма',
        href: '/b2c-storybook/',
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
        title: 'Plasma SD Mid',
        package: '@salutejs/plasma-web',
        group: 'Плазма',
        href: '/web-storybook/',
        items: [
            { text: 'Сторибук', href: '/web-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/web/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/plasma-web'][0],
                href: `/changelog/?lib=plasma-web&version=${PACKAGES_INFO['@salutejs/plasma-web'][0]}`,
                contentLeft: <History />,
                isMeta: false,
            },
        ],
    },
    {
        title: 'Plasma Giga',
        package: '@salutejs/plasma-giga',
        group: 'Плазма',
        href: '/giga-storybook/',
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
        title: 'SDDS Service',
        package: '@salutejs/sdds-serv',
        group: 'СДДС',
        href: '/sdds-serv-storybook/',
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
        title: 'SDDS Finportal',
        package: '@salutejs/sdds-finportal',
        group: 'СДДС',
        href: '/sdds-finportal-storybook/',
        items: [
            { text: 'Сторибук', href: '/sdds-finportal-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-finportal/', contentRight: <ArrowTopRight /> },
            {
                text: PACKAGES_INFO['@salutejs/sdds-finportal'][0],
                href: `/changelog/?lib=sdds-finportal&version=${PACKAGES_INFO['@salutejs/sdds-finportal'][0]}`,
                contentLeft: <History />,
                isMeta: false,
            },
        ],
    },
    {
        title: 'SDDS DFA',
        package: '@salutejs/sdds-dfa',
        group: 'СДДС',
        href: '/sdds-dfa-storybook/',
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
        title: 'SDDS CS',
        package: '@salutejs/sdds-cs',
        group: 'СДДС',
        href: '/sdds-cs/',
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
        title: 'SDDS CRM',
        package: '@salutejs/sdds-crm',
        group: 'СДДС',
        href: '/sdds-crm-storybook/',
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
        title: 'SDDS Scan',
        package: '@salutejs/sdds-scan',
        group: 'СДДС',
        href: '/sdds-scan-storybook/',
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
        title: 'SDDS Bizcom',
        package: '@salutejs/sdds-bizcom',
        group: 'СДДС',
        href: '/sdds-bizcom-storybook/',
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
        title: 'SDDS Netology',
        package: '@salutejs/sdds-netology',
        group: 'ДЗО 1',
        href: '/sdds-netology-storybook/',
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
        title: 'SDDS Insol',
        package: '@salutejs/sdds-insol',
        group: 'ДЗО 1',
        href: '/sdds-insol-storybook/',
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
    'plasma-b2c': 'Plasma B2C',
    'plasma-web': 'Plasma Web',
    'plasma-giga': 'Giga',
    'sdds-serv': 'SDDS Serv',
    'sdds-finportal': 'SDDS Finportal',
    'sdds-dfa': 'SDDS DFA',
    'sdds-cs': 'SDDS CS',
    'sdds-crm': 'SDDS CRM',
    'sdds-scan': 'SDDS Scan',
    'sdds-netology': 'SDDS Netology',
    'sdds-insol': 'SDDS Insol',
    'sdds-bizcom': 'SDDS Bizcom',
};
