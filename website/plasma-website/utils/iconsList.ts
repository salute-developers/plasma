import { iconSectionsSet } from '@salutejs/plasma-icons';
import { iconSectionsSet as iconSectionsSetNew } from '@salutejs/plasma-icons/scalable';

import type { IconGroups, Item, IconGroup } from '../types';
import { Group } from '../types';

import { capitalize } from './capitalize';

const IconGroupDict: Record<string, string> = {
    animal: 'Животные',
    arrows: 'Стрелки',
    commerce: 'Commerce',
    data: 'Данные',
    file: 'Файл',
    devices: 'Устройства',
    design: 'Дизайн',
    media: 'Медиа',
    senses: 'Чувства',
    status: 'Статус',
    technology: 'Технологии',
    operation: 'Операции',
    instruments: 'Инструменты',
    navigation: 'Навигация',
    time: 'Время',
    user: 'Пользователь',
    weather: 'Погода',
    toggle: 'Переключатель',
    travel: 'Путешествие',
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

const iconsListOld = Object.entries(iconSectionsSet)
    .sort()
    .reduce((acc, [groupName, group]) => {
        const iconGroup = getIconGroupTitles(groupName);

        acc[iconGroup.subtitle] = {
            iconGroup,
            items: Object.entries(group)
                .sort()
                .reduce((a, [iconName, component]) => {
                    a.push({ name: iconName, component, groupName: iconGroup.subtitle, isDeprecated: true });

                    return a;
                }, [] as Item[]),
        };

        return acc;
    }, {} as Record<string, Group>);

const iconsListNew = Object.entries(iconSectionsSetNew)
    .sort()
    .reduce((acc, [groupName, group]) => {
        const iconGroup = getIconGroupTitles(groupName.toLowerCase());

        acc[iconGroup.subtitle] = {
            iconGroup,
            items: Object.entries(group)
                .sort()
                .reduce((a, [iconName, component]) => {
                    a.push({ name: iconName, component, groupName: iconGroup.subtitle, isDeprecated: false });

                    return a;
                }, [] as Item[]),
        };

        return acc;
    }, {} as Record<string, Group>);

const oldIconsKeys = Object.keys(iconsListOld);
const newIconsKeys = Object.keys(iconsListNew);

const keys = Array.from(new Set([...oldIconsKeys, ...newIconsKeys]));

const data = keys.reduce((acc, key) => {
    if (newIconsKeys.includes(key) && oldIconsKeys.includes(key)) {
        const list = [...iconsListNew[key].items, ...iconsListOld[key].items];

        acc.push({ ...iconsListNew[key], items: list });

        return acc;
    }

    if (oldIconsKeys.includes(key) && !newIconsKeys.includes(key)) {
        acc.push(iconsListOld[key]);

        return acc;
    }

    if (newIconsKeys.includes(key) && !oldIconsKeys.includes(key)) {
        acc.push(iconsListNew[key]);

        return acc;
    }

    return acc;
}, [] as IconGroups);

export const iconsList = data;
export const iconListGroupNames = keys;
