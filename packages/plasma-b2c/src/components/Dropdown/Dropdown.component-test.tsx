import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconLocation } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const sizes = ['xs', 's', 'm', 'l', 'xl'];

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

const itemsWithPlacement = [
    {
        value: 'europe',
        label: 'Европа',
        placement: 'bottom',
        items: [
            {
                value: 'france',
                label: 'Франция',
                placement: 'right',
                items: [
                    {
                        value: 'paris',
                        label: 'Париж',
                        placement: 'top',
                        items: [
                            {
                                value: 'antoni',
                                label: 'Антони',
                                placement: 'left',
                                items: [
                                    {
                                        value: 'bojole',
                                        label: 'Божоле',
                                    },
                                    {
                                        value: 'Cambona',
                                        label: 'Камбона',
                                    },
                                ],
                            },
                            {
                                value: 'banyo',
                                label: 'Баньё',
                            },
                            {
                                value: 'pontuaz',
                                label: 'Понтуаз',
                            },
                        ],
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
        ],
    },
];

describe('plasma-b2c: Dropdown', () => {
    const Dropdown = getComponent('Dropdown');
    const Button = getComponent('Button');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('default', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown items={items}>
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('[id$="south_america"]').click();
        cy.get('[id$="argentina"]').click();

        cy.matchImageSnapshot();
    });

    it('prop: size', () => {
        cy.viewport(1280, 1000);

        mount(
            <CypressTestDecoratorWithTypo>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '300px 400px 500px',
                        gridTemplateRows: '250px 600px',
                    }}
                >
                    {sizes.map((size) => (
                        <Dropdown items={items} size={size} closeOnOverlayClick={false}>
                            <Button id={size} text={`Список стран ${size}`} size={size} />
                        </Dropdown>
                    ))}
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#xs').click();
        cy.get('#s').click();
        cy.get('#m').click();
        cy.get('#l').click();
        cy.get('#xl').click();
        cy.matchImageSnapshot();
    });

    it('prop: size, variant', () => {
        cy.viewport(1280, 1000);

        mount(
            <CypressTestDecoratorWithTypo>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '300px 400px 500px',
                        gridTemplateRows: '250px 600px',
                    }}
                >
                    {sizes.map((size) => (
                        <Dropdown items={items} size={size} closeOnOverlayClick={false} variant="tight">
                            <Button id={size} text={`Список стран ${size}`} size={size} />
                        </Dropdown>
                    ))}
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#xs').click();
        cy.get('#s').click();
        cy.get('#m').click();
        cy.get('#l').click();
        cy.get('#xl').click();
        cy.matchImageSnapshot();
    });

    it('prop: onHover', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown
                    items={items}
                    onHover={(index) => {
                        expect(index).to.eq(0);
                    }}
                >
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('[id$="north_america"]').trigger('mouseover');
    });

    it('prop: onItemSelect', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown
                    items={items}
                    onItemSelect={(item, event) => {
                        expect(item).to.eq(items[0]);
                        expect(event.type).to.eq('click');
                    }}
                >
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('[id$="north_america"]').click();
    });

    // TODO: в cypress 15 снапшоты не работают с hover. Нужно переписывать тест.
    it.skip('prop: trigger', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown items={items} trigger="hover">
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').realHover();
        cy.get('[id$="asia"]').realHover();
        cy.get('[id$="india"]').realHover();
        cy.get('[id$="delhi"]').should('be.visible');

        cy.matchImageSnapshot();
    });

    it('prop: placement', () => {
        cy.viewport(500, 712);

        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown placement="right-start" items={items} closeOnOverlayClick={false}>
                    <Button id="top" text="Список стран" />
                </Dropdown>

                <div style={{ height: '600px' }} />

                <Dropdown placement="top-start" items={items} closeOnOverlayClick={false}>
                    <Button id="bottom" text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#top').click();
        cy.get('#bottom').click();
        cy.matchImageSnapshot();
    });

    it('prop: placement, alwaysOpened', () => {
        cy.viewport(500, 712);

        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown placement="right-start" items={items} closeOnOverlayClick={false} alwaysOpened>
                    <Button text="Список стран" />
                </Dropdown>

                <div style={{ height: '600px' }} />

                <Dropdown placement="top-start" items={items} closeOnOverlayClick={false} alwaysOpened>
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: nested dropdown placement', () => {
        cy.viewport(1280, 599);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ height: '400px' }} />
                <Dropdown placement="right-start" items={itemsWithPlacement} closeOnOverlayClick={false}>
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('[id$="europe"]').click();
        cy.get('[id$="france"]').click();
        cy.get('[id$="paris"]').click();
        cy.get('[id$="antoni"]').click();

        cy.matchImageSnapshot();
    });

    it('prop: offset', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown items={items} offset={[20, 20]}>
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('[id$="south_america"]').click();
        cy.get('[id$="argentina"]').click();

        cy.matchImageSnapshot();
    });

    it('prop: listWidth', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown items={items} listWidth="300px">
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('[id$="south_america"]').click();
        cy.get('[id$="argentina"]').click();

        cy.matchImageSnapshot();
    });

    it('prop: hasArrow', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown items={items} hasArrow={false}>
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('[id$="south_america"]').click();
        cy.get('[id$="argentina"]').click();

        cy.matchImageSnapshot();
    });

    it('prop: closeOnSelect', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown items={items} closeOnSelect={false}>
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('[id$="north_america"]').click();
        cy.get('[id$="north_america"]').should('be.visible');
    });

    it('prop: closeOnOverlayClick', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <span id="outer">outer text</span>

                <Dropdown items={items} closeOnOverlayClick={false}>
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('#outer').click();
        cy.get('[id$="north_america"]').should('be.visible');
    });

    it('prop: onToggle', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown
                    items={items}
                    onToggle={(isOpen, event) => {
                        expect(isOpen).to.be.oneOf([true, false]);
                        expect(event.type).to.eq('click');
                    }}
                >
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('button').click();
    });

    it('prop: onItemClick', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown
                    items={items}
                    onItemClick={(item, event) => {
                        expect(item).to.eq(items[0]);
                        expect(event.type).to.eq('click');
                    }}
                >
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('[id$="north_america"]').click();
    });

    it('prop: listHeight, listOverflow', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown items={items} listOverflow="scroll" listHeight={6}>
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('prop: item data-attrs', () => {
        cy.viewport(400, 100);

        mount(
            <div style={{ width: '300px' }}>
                <Dropdown id="#single" items={items}>
                    <Button text="Список стран" />
                </Dropdown>
            </div>,
        );

        cy.get('button').click();
        cy.get('[id$="tree_level_1"]').should('be.visible');

        cy.get('[id$="north_america"]').should('have.class', 'test-classname');
        cy.get('[id$="north_america"]').should('have.attr', 'data-name', 'test-data-name');
    });

    it('prop: zIndex', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown items={items} zIndex={10000}>
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.get('[data-floating-ui-portal] > div').should('have.css', 'z-index', '10000');
    });

    it('prop: beforeList in items', () => {
        cy.viewport(400, 400);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '300px' }}>
                    <Dropdown items={itemsWithBeforeList}>
                        <Button text="Список стран" />
                    </Dropdown>
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('[id$="south_america"]').click();

        cy.matchImageSnapshot();
    });

    it('prop: beforeList', () => {
        cy.viewport(400, 400);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '300px' }}>
                    <Dropdown items={items} beforeList="Content before list">
                        <Button text="Список стран" />
                    </Dropdown>
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('prop: afterList', () => {
        cy.viewport(400, 400);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '300px' }}>
                    <Dropdown items={items} afterList="Content after list">
                        <Button text="Список стран" />
                    </Dropdown>
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('prop: onToggle', () => {
        cy.viewport(400, 300);

        const onToggle = cy.stub().as('onToggle');

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '300px' }}>
                    <Dropdown items={items} onToggle={onToggle}>
                        <Button text="Список стран" />
                    </Dropdown>
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('@onToggle').should('have.been.calledOnce');
        cy.get('@onToggle').should('have.been.calledWith', true);

        cy.get('button').click();
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('@onToggle').should('have.been.calledTwice');
        cy.get('@onToggle').should('have.been.calledWith', false);

        cy.get('button').click();
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('@onToggle').should('have.been.calledThrice');
        cy.get('@onToggle').should('have.been.calledWith', true);

        cy.get('body').click();
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('@onToggle').its('callCount').should('equal', 4);
        cy.get('@onToggle').should('have.been.calledWith', false);

        cy.get('button').focus();
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('@onToggle').its('callCount').should('equal', 4);

        cy.pressKey('ArrowDown');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('@onToggle').its('callCount').should('equal', 5);
        cy.get('@onToggle').should('have.been.calledWith', true);

        cy.pressKey('ArrowLeft');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('@onToggle').its('callCount').should('equal', 6);
        cy.get('@onToggle').should('have.been.calledWith', false);

        cy.pressKey('ArrowLeft');
        cy.get('@onToggle').its('callCount').should('equal', 6);
        cy.pressKey('ArrowDown');
        cy.get('@onToggle').its('callCount').should('equal', 7);
        cy.get('@onToggle').should('have.been.calledWith', true);
        cy.pressKey('Escape');
        cy.get('@onToggle').its('callCount').should('equal', 8);
        cy.get('@onToggle').should('have.been.calledWith', false);
        cy.pressKey('Escape');
        cy.get('@onToggle').its('callCount').should('equal', 8);
        cy.get('@onToggle').should('have.been.calledWith', false);
    });

    it('behavior: nesting lists within scroll', { scrollBehavior: false }, () => {
        cy.viewport(1000, 300);

        const items = [
            {
                value: 'north_america',
                label: 'Северная Америка',
                className: 'test-classname',
            },
            {
                value: 'south_america',
                label: 'Южная Америка',
                listMaxHeight: '100px',
                items: [
                    {
                        value: 'brazil',
                        label: 'Бразилия',
                        listMaxHeight: '100px',
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
                    },
                    {
                        value: 'colombia',
                        label: 'Колумбия',
                    },
                ],
            },
            {
                value: 'europe',
                label: 'Европа',
            },
            {
                value: 'asia',
                label: 'Азия',
            },
            {
                value: 'africa',
                label: 'Африка',
                disabled: true,
            },
        ];

        const Component = () => (
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '300px' }}>
                    <Dropdown items={items} listMaxHeight="150px">
                        <Button text="Список стран" />
                    </Dropdown>
                </div>
            </CypressTestDecoratorWithTypo>
        );

        mount(<Component />);

        cy.get('button').click();
        cy.contains('div', 'Южная Америка').click();
        cy.contains('div', 'Бразилия').click();

        cy.matchImageSnapshot();
    });

    it('keyboard interactions', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown
                    items={items}
                    onItemSelect={(item, event) => {
                        expect(item).to.eq(items[0]);
                        expect(event.type).to.eq('keydown');
                    }}
                >
                    <Button text="Список стран" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').click();
        cy.get('button').focus();

        // Arrow Down
        cy.pressKey('ArrowDown');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('button').should('have.focus');
        cy.pressKey('ArrowDown')
            .pressKey('ArrowDown')
            .pressKey('ArrowDown')
            .pressKey('ArrowDown')
            .pressKey('ArrowDown')
            .pressKey('ArrowDown')
            .pressKey('ArrowDown');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.pressKey('Escape');

        // Arrow Up
        cy.pressKey('ArrowUp');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.pressKey('ArrowUp');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.pressKey('Escape');

        // Arrows Right and Left
        cy.pressKey('ArrowDown').pressKey('ArrowDown').pressKey('ArrowRight');
        cy.get('[id$="south_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('have.class', 'dropdown-item-is-active');
        cy.get('button').should('have.focus');
        cy.pressKey('ArrowRight');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-focused');
        cy.get('[id$="brazil"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('have.class', 'dropdown-item-is-active');
        cy.pressKey('ArrowLeft').pressKey('ArrowLeft');
        cy.get('[id$="south_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.pressKey('ArrowDown')
            .pressKey('ArrowDown')
            .pressKey('ArrowRight')
            .pressKey('ArrowRight')
            .pressKey('ArrowRight')
            .pressKey('ArrowRight');
        cy.get('[id$="beijing"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="asia"]').should('have.class', 'dropdown-item-is-active');
        cy.get('[id$="china"]').should('have.class', 'dropdown-item-is-active');
        cy.get('button').should('have.focus');
        cy.pressKey('ArrowLeft')
            .pressKey('ArrowLeft')
            .pressKey('ArrowLeft')
            .pressKey('ArrowLeft')
            .pressKey('ArrowLeft');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.get('[id$="tree_level_3"]').should('not.exist');
        cy.get('button').should('have.focus');
        cy.pressKey('ArrowDown').pressKey('ArrowDown').pressKey('ArrowRight');
        cy.pressKey('PageDown');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.pressKey('Escape');
        cy.get('button').should('have.focus');
        cy.pressKey('ArrowDown').pressKey('ArrowDown').pressKey('ArrowRight');
        cy.pressKey('PageUp');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.pressKey('Escape');
        cy.get('button').should('have.focus');
        cy.pressKey('ArrowDown').pressKey('ArrowDown').pressKey('ArrowRight');
        cy.pressKey('Home');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.pressKey('Escape');
        cy.get('button').should('have.focus');
        cy.pressKey('ArrowDown').pressKey('ArrowDown').pressKey('ArrowRight');
        cy.pressKey('End');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.pressKey('Escape');
        cy.get('button').should('have.focus');

        // Escape
        cy.pressKey('ArrowDown').pressKey('ArrowDown').pressKey('ArrowRight').pressKey('ArrowRight');
        cy.pressKey('Escape');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.get('[id$="tree_level_3"]').should('not.exist');
        cy.get('button').should('have.focus');

        // Home
        cy.pressKey('Home');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('button').should('have.focus');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.pressKey('Escape');

        // End
        cy.pressKey('End');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('button').should('have.focus');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.pressKey('Escape');

        // Page Down
        cy.pressKey('PageDown');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('button').should('have.focus');
        cy.pressKey('ArrowDown');
        cy.pressKey('PageDown');
        cy.get('button').should('have.focus');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.pressKey('Escape');

        // Page Up
        cy.pressKey('PageUp');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('button').should('have.focus');
        cy.pressKey('ArrowDown');
        cy.pressKey('ArrowDown');
        cy.pressKey('PageUp');
        cy.get('button').should('have.focus');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.pressKey('Escape');

        // Space
        cy.pressKey('ArrowDown')
            .pressKey('ArrowDown')
            .pressKey('Space')
            .pressKey('ArrowLeft')
            .pressKey('ArrowLeft')
            .pressKey('ArrowUp')
            .pressKey('Space');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('button').should('have.focus');

        // Enter
        cy.pressKey('Enter')
            .pressKey('ArrowDown')
            .pressKey('Enter')
            .pressKey('ArrowLeft')
            .pressKey('ArrowLeft')
            .pressKey('ArrowUp')
            .pressKey('Enter');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('button').should('have.focus');

        // Tab
        cy.pressKey('ArrowDown').pressKey('Tab');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        // cy.get('button').should('not.have.focus');
    });
});
