import { iconSectionsSet } from '@salutejs/plasma-icons';

import type { IconGroups, Item, IconGroup } from '../types';

import { capitalize } from './capitalize';

const IconGroupDict: Record<string, string> = {
    navigation: 'Навигация',
    universal: 'Универсальные',
    action: 'Действие',
    alert: 'Alert',
    av: 'AV',
    connection: 'Связь',
    hardware: 'Аппаратное обеспечение',
    communication: 'Коммуникация',
    files: 'Файлы',
    map: 'Карта',
    player: 'Проигрыватель',
    other: 'Другое',
    logo: 'Логотип',
};

const getIconGroupTitles = (group: string): IconGroup => {
    const title = IconGroupDict[group] || '';
    const subtitle = capitalize(group);

    return { title, subtitle };
};

export const iconsList = Object.entries(iconSectionsSet)
    .sort()
    .reduce((acc, [groupName, group]) => {
        const iconGroup = getIconGroupTitles(groupName);

        acc.push({
            iconGroup,
            items: Object.entries(group)
                .sort()
                .reduce((a, [iconName, component]) => {
                    a.push({ name: iconName, component, groupName: iconGroup.subtitle });

                    return a;
                }, [] as Item[]),
        });

        return acc;
    }, [] as IconGroups);
