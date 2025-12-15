import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { IconLocation } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

const items = [
    {
        value: 'north_america',
        label: 'Северная Америка',
        contentLeft: <IconLocation color="inherit" />,
        contentRight: <IconLocation color="inherit" />,
        className: 'test-classname',
        'data-name': 'test-data-name',
    },
    {
        value: 'south_america',
        label: 'Южная Америка',
        items: [
            {
                value: 'brazil',
                label: 'Бразилия',
                items: [
                    {
                        value: 'rio_de_janeiro',
                        label: 'Рио-де-Жанейро',
                    },
                    {
                        value: 'sao_paulo',
                        label: 'Сан-Паулу',
                    },
                ],
            },
            {
                value: 'argentina',
                label: 'Аргентина',
                items: [
                    {
                        value: 'buenos_aires',
                        label: 'Буэнос-Айрес',
                    },
                    {
                        value: 'cordoba',
                        label: 'Кордова',
                    },
                ],
            },
            {
                value: 'colombia',
                label: 'Колумбия',
                items: [
                    {
                        value: 'bogota',
                        label: 'Богота',
                    },
                    {
                        value: 'medellin',
                        label: 'Медельин',
                    },
                ],
            },
        ],
    },
    {
        value: 'europe',
        label: 'Европа',
        items: [
            {
                value: 'france',
                label: 'Франция',
                items: [
                    {
                        value: 'paris',
                        label: 'Париж',
                    },
                    {
                        value: 'lyon',
                        label: 'Лион',
                    },
                ],
            },
            {
                value: 'germany',
                label: 'Германия',
                items: [
                    {
                        value: 'berlin',
                        label: 'Берлин',
                    },
                    {
                        value: 'munich',
                        label: 'Мюнхен',
                    },
                ],
            },
            {
                value: 'italy',
                label: 'Италия',
                items: [
                    {
                        value: 'rome',
                        label: 'Рим',
                    },
                    {
                        value: 'milan',
                        label: 'Милан',
                    },
                ],
            },
            {
                value: 'spain',
                label: 'Испания',
                items: [
                    {
                        value: 'madrid',
                        label: 'Мадрид',
                    },
                    {
                        value: 'barcelona',
                        label: 'Барселона',
                    },
                ],
            },
            {
                value: 'united_kingdom',
                label: 'Великобритания',
                items: [
                    {
                        value: 'london',
                        label: 'Лондон',
                    },
                    {
                        value: 'manchester',
                        label: 'Манчестер',
                    },
                ],
            },
        ],
    },
    {
        value: 'asia',
        label: 'Азия',
        items: [
            {
                value: 'china',
                label: 'Китай',
                items: [
                    {
                        value: 'beijing',
                        label: 'Пекин',
                    },
                    {
                        value: 'shanghai',
                        label: 'Шанхай',
                    },
                ],
            },
            {
                value: 'japan',
                label: 'Япония',
                items: [
                    {
                        value: 'tokyo',
                        label: 'Токио',
                    },
                    {
                        value: 'osaka',
                        label: 'Осака',
                    },
                ],
            },
            {
                value: 'india',
                label: 'Индия',
                items: [
                    {
                        value: 'delhi',
                        label: 'Дели',
                    },
                    {
                        value: 'mumbai',
                        label: 'Мумбаи',
                    },
                ],
            },
            {
                value: 'south_korea',
                label: 'Южная Корея',
                items: [
                    {
                        value: 'seoul',
                        label: 'Сеул',
                    },
                    {
                        value: 'busan',
                        label: 'Пусан',
                    },
                ],
            },
            {
                value: 'thailand',
                label: 'Таиланд',
                items: [
                    {
                        value: 'bangkok',
                        label: 'Бангкок',
                    },
                    {
                        value: 'phuket',
                        label: 'Пхукет',
                    },
                ],
            },
        ],
    },
    {
        value: 'africa',
        label: 'Африка',
        disabled: true,
    },
];

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Select', () => {
    const Select = getComponent('Select');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T2328] Select: treeView, arrowPlacement=left', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Select id="select" label="Label" items={items} placeholder="Placeholder" treeView />
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('#select').click();
        cy.contains('div', 'Южная Америка').click();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2329] Select: treeView, arrowPlacement=right', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Select
                    id="select"
                    label="Label"
                    items={items}
                    placeholder="Placeholder"
                    treeView
                    arrowPlacement="right"
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('#select').click();
        cy.contains('div', 'Южная Америка').click();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2330] Multiselect: treeView, arrowPlacement=left', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Select id="select" label="Label" items={items} multiselect placeholder="Placeholder" treeView />
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('#select').click();
        cy.contains('div', 'Южная Америка').click();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2331] Multiselect: treeView, multiSelect arrowPlacement=right', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Select
                    id="select"
                    label="Label"
                    items={items}
                    multiselect
                    placeholder="Placeholder"
                    treeView
                    arrowPlacement="right"
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('#select').click();
        cy.contains('div', 'Южная Америка').click();
        cy.matchImageSnapshot();
    });
});
