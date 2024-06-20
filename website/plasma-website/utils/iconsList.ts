import { FC } from 'react';
import { iconSectionsSet } from '@salutejs/plasma-icons';
import type { IconProps } from '@salutejs/plasma-icons';
import { iconSectionsSet as iconSectionsSetNew } from '@salutejs/plasma-icons/scalable';

import type { IconGroups, Item, IconGroup } from '../types';

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

type IconSectionsSet = Record<string, Record<string, FC<IconProps>>>;

const iconsGroupListLegacy = Object.keys(iconSectionsSet);

const transformIconsSet = (iconSet: IconSectionsSet) => {
    return Object.entries(iconSet)
        .sort()
        .reduce((acc, [groupName, group]) => {
            const iconGroup = getIconGroupTitles(groupName);
            const key = groupName.toLowerCase();
            const IconsLegacyList: Item[] = [];

            if (iconsGroupListLegacy.includes(key)) {
                Object.entries((iconSectionsSet as IconSectionsSet)[key])
                    .sort()
                    .reduce((a, [iconName, component]) => {
                        a.push({ name: iconName, component, groupName: iconGroup.subtitle, version: 'legacy' });

                        return a;
                    }, IconsLegacyList);
            }

            const icons = Object.entries(group)
                .sort()
                .reduce((a, [iconName, component]) => {
                    a.push({ name: iconName, component, groupName: iconGroup.subtitle, version: 'new' });

                    return a;
                }, [] as Item[]);

            const item = {
                iconGroup,
                items: [...icons, ...IconsLegacyList],
            };

            acc.push(item);

            return acc;
        }, [] as IconGroups);
};

const iconsListNew = transformIconsSet(iconSectionsSetNew);

export const iconsList = iconsListNew;
