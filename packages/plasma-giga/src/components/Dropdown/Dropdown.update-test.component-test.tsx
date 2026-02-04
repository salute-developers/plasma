import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { IconLocation } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

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

const itemsWithBeforeList = [
    {
        value: 'south_america',
        label: 'Южная Америка',
        beforeList: 'Content before list',
        items: [
            {
                value: 'brazil',
                label: 'Бразилия',
            },
            {
                value: 'argentina',
                label: 'Аргентина',
            },
            {
                value: 'colombia',
                label: 'Колумбия',
            },
        ],
    },
];

describe('plasma-giga: Dropdown', () => {
    beforeEach(() => {
        cy.get('body').realMouseMove(0, 0);
    });

    const Dropdown = getComponent('Dropdown');
    const Button = getComponent('Button');

    it('[PLASMA-T1629] Dropdown: size=l, variant=normal, placement=top, trigger=click, hasArrow', () => {
        cy.viewport(1000, 400);

        mount(
            <CypressTestDecorator>
                <div style={{ height: '300px' }} />

                <Dropdown items={items} size="l" variant="normal" placement="top" trigger="click" hasArrow>
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('[id$="south_america"]').click();
        cy.get('[id$="argentina"]').click();

        cy.matchImageSnapshot();
    });

    // TODO: в cypress 15 снапшоты не работают с hover. Нужно переписывать тест.
    it.skip('[PLASMA-T1630] Dropdown: size=m, variant=tight, placement=bottom, trigger=hover, without Arrow, closeOnOverlayClick', () => {
        cy.viewport(1000, 400);

        mount(
            <CypressTestDecorator>
                <span id="outer">outer text</span>

                <Dropdown
                    items={items}
                    size="m"
                    variant="tight"
                    placement="bottom"
                    trigger="hover"
                    hasArrow={false}
                    closeOnOverlayClick
                >
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecorator>,
        );

        cy.get('button').realHover();
        cy.get('[id$="south_america"]').realHover();
        cy.get('[id$="argentina"]').realHover();

        cy.matchImageSnapshot();

        cy.get('#outer').click();
        cy.get('[id$="north_america"]').should('not.exist');
    });

    it('[PLASMA-T1631] Dropdown: size=s, placement=right, closeOnSelect, without closeOnOverlayClick', () => {
        cy.viewport(400, 400);

        mount(
            <CypressTestDecorator>
                <span id="outer">outer text</span>

                <Dropdown items={items} size="s" placement="right" closeOnSelect closeOnOverlayClick={false}>
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#outer').click();
        cy.get('[id$="north_america"]').should('be.visible');

        cy.matchImageSnapshot();

        cy.get('[id$="north_america"]').click();
        cy.get('[id$="north_america"]').should('not.exist');
    });

    it('[PLASMA-T1632] Dropdown: size=xs, placement=left', () => {
        cy.viewport(600, 400);

        mount(
            <CypressTestDecorator>
                <span style={{ marginLeft: '200px' }} />

                <Dropdown items={items} size="xs" placement="left">
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('[id$="south_america"]').click();
        cy.get('[id$="argentina"]').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1990] Dropdown: size=xl, offset, listWidth', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecorator>
                <Dropdown items={items} size="xl" offset={[20, 20]} listWidth="300px">
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('[id$="south_america"]').click();
        cy.get('[id$="argentina"]').click();

        cy.matchImageSnapshot();
    });

    it('prop: beforeList in items', () => {
        cy.viewport(400, 400);

        mount(
            <CypressTestDecorator>
                <div style={{ width: '300px' }}>
                    <Dropdown items={itemsWithBeforeList}>
                        <Button text="Список стран" />
                    </Dropdown>
                </div>
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('[id$="south_america"]').click();

        cy.matchImageSnapshot();
    });
});
