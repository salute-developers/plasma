import React from 'react';

import { ArrowTopRight } from '../components/icons/ArrowTopRight';
import { CardstackOutline } from '../components/icons/CardstackOutline';
import { ArrowRight } from '../components/icons/ArrowRight';

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
        title: 'SD Service',
        package: '@salutejs/plasma-b2c',
        group: 'Плазма',
        href: '/b2c-storybook/',
        items: [
            { text: 'Сторибук', href: '/b2c-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/b2c/', contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/plasma-b2c'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
    {
        title: 'SD Mid',
        package: '@salutejs/plasma-web',
        group: 'Плазма',
        href: '/web-storybook/',
        items: [
            { text: 'Сторибук', href: '/web-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/web/', contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/plasma-web'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
    {
        title: 'Giga',
        package: '@salutejs/plasma-giga',
        group: 'Плазма',
        href: '/giga-storybook/',
        items: [
            { text: 'Сторибук', href: '/giga-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/giga/', contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/plasma-giga'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
    {
        title: 'SDDS Service',
        package: '@salutejs/sdds-serv',
        group: 'SDDS Masterbrand',
        href: '/sdds-serv-storybook/',
        items: [
            { text: 'Сторибук', href: '/sdds-serv-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-serv/', contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/sdds-serv'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
    {
        title: 'SDDS Finportal',
        package: '@salutejs/sdds-finportal',
        group: 'SDDS Masterbrand',
        href: '/sdds-finportal-storybook/',
        items: [
            { text: 'Сторибук', href: '/sdds-finportal-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-finportal/', contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/sdds-finportal'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
    {
        title: 'SDDS DFA',
        package: '@salutejs/sdds-dfa',
        group: 'SDDS Masterbrand',
        href: '/sdds-dfa-storybook/',
        items: [
            { text: 'Сторибук', href: '/sdds-dfa-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-dfa/', contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/sdds-dfa'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
    {
        title: 'SDDS CS',
        package: '@salutejs/sdds-cs',
        group: 'SDDS Masterbrand',
        href: '/sdds-cs/',
        items: [
            { text: 'Сторибук', href: '/sdds-cs-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-cs/', contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/sdds-cs'][0], contentLeft: <CardstackOutline />, isMeta: true },
        ],
    },
    {
        title: 'SDDS Insol',
        package: '@salutejs/sdds-insol',
        group: 'Отдельные сборки',
        href: '/sdds-insol-storybook/',
        items: [
            { text: 'Сторибук', href: '/sdds-insol-storybook/', contentRight: <ArrowTopRight /> },
            { text: 'Документация', href: '/sdds-insol/', contentRight: <ArrowTopRight /> },
            { text: PACKAGES_INFO['@salutejs/sdds-insol'][0], contentLeft: <CardstackOutline />, isMeta: true },
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
            text: groupName,
            href: '/icons/',
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
