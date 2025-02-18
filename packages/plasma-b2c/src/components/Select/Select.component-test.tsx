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

describe('plasma-b2c: Select', () => {
    const Select = getComponent('Select');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const CommonComponent = (props: any) => {
        const [singleValue, setSingleValue] = React.useState(props.initialSingleValue || '');
        const [valueMultiple, setValueMultiple] = React.useState<Array<string>>(props.initialMultipleValue || []);

        return (
            <CypressTestDecoratorWithTypo>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '30px' }}>
                    <Select
                        target="button-like"
                        view="default"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        {...props}
                    />
                    <Select
                        target="button-like"
                        view="default"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        {...props}
                    />
                    <Select
                        view="default"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />
                    <Select
                        view="default"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <Select
                        target="button-like"
                        view="accent"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        {...props}
                    />
                    <Select
                        target="button-like"
                        view="accent"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        {...props}
                    />
                    <div />
                    <div />

                    <Select
                        target="button-like"
                        view="secondary"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        {...props}
                    />
                    <Select
                        target="button-like"
                        view="secondary"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        {...props}
                    />
                    <div />
                    <div />

                    <Select
                        target="button-like"
                        view="clear"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        {...props}
                    />
                    <Select
                        target="button-like"
                        view="clear"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        {...props}
                    />
                    <div />
                    <div />

                    <Select
                        target="button-like"
                        view="positive"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        {...props}
                    />
                    <Select
                        target="button-like"
                        view="positive"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        {...props}
                    />
                    <Select
                        view="positive"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />
                    <Select
                        view="positive"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <Select
                        target="button-like"
                        view="warning"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        {...props}
                    />
                    <Select
                        target="button-like"
                        view="warning"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        {...props}
                    />
                    <Select
                        view="warning"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />
                    <Select
                        view="warning"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <Select
                        target="button-like"
                        view="negative"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        {...props}
                    />
                    <Select
                        target="button-like"
                        view="negative"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        {...props}
                    />
                    <Select
                        view="negative"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />
                    <Select
                        view="negative"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <Select
                        target="button-like"
                        view="dark"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        {...props}
                    />
                    <Select
                        target="button-like"
                        view="dark"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        {...props}
                    />
                    <div />
                    <div />

                    <Select
                        target="button-like"
                        view="black"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        {...props}
                    />
                    <Select
                        target="button-like"
                        view="black"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        {...props}
                    />
                    <div />
                    <div />

                    <Select
                        target="button-like"
                        view="white"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        {...props}
                    />
                    <Select
                        target="button-like"
                        view="white"
                        items={items}
                        multiselect
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        {...props}
                    />
                    <div />
                    <div />
                </div>
            </CypressTestDecoratorWithTypo>
        );
    };

    it('default', () => {
        cy.viewport(1000, 1000);

        mount(<CommonComponent />);

        cy.matchImageSnapshot();
    });

    it('prop: size l', () => {
        cy.viewport(1000, 1200);

        mount(<CommonComponent size="l" />);

        cy.matchImageSnapshot();
    });

    it('prop: size m', () => {
        cy.viewport(1000, 1000);

        mount(<CommonComponent size="m" />);

        cy.matchImageSnapshot();
    });

    it('prop: size s', () => {
        cy.viewport(1000, 1000);

        mount(<CommonComponent size="s" />);

        cy.matchImageSnapshot();
    });

    it('prop: size xs', () => {
        cy.viewport(1000, 1000);

        mount(<CommonComponent size="xs" />);

        cy.matchImageSnapshot();
    });

    it('prop: size xs', () => {
        cy.viewport(1000, 1000);

        mount(<CommonComponent size="xs" />);

        cy.matchImageSnapshot();
    });

    it('prop: labelPlacement', () => {
        cy.viewport(1000, 1000);

        mount(
            <CommonComponent
                labelPlacement="inner"
                initialSingleValue="paris"
                initialMultipleValue={['paris', 'rome']}
            />,
        );

        cy.matchImageSnapshot();
    });

    it('prop: chipView secondary', () => {
        cy.viewport(1000, 1000);

        mount(
            <CommonComponent
                labelPlacement="inner"
                initialSingleValue="paris"
                initialMultipleValue={['paris', 'rome']}
                chipView="secondary"
            />,
        );

        cy.matchImageSnapshot();
    });

    it('prop: chipView accent', () => {
        cy.viewport(1000, 1000);

        mount(
            <CommonComponent
                labelPlacement="inner"
                initialSingleValue="paris"
                initialMultipleValue={['paris', 'rome']}
                chipView="accent"
            />,
        );

        cy.matchImageSnapshot();
    });

    it('prop: chipType', () => {
        cy.viewport(400, 100);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '100%' }}>
                    <Select
                        chipType="text"
                        multiselect
                        value={['berlin', 'rome', 'madrid']}
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                    />
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: contentLeft', () => {
        cy.viewport(1000, 1000);

        mount(
            <CommonComponent
                initialSingleValue="paris"
                initialMultipleValue={['paris', 'rome']}
                contentLeft={<IconLocation size="s" />}
            />,
        );

        cy.matchImageSnapshot();
    });

    it('prop: isTargetAmount', () => {
        cy.viewport(1000, 1000);

        mount(<CommonComponent initialSingleValue="paris" initialMultipleValue={['paris', 'rome']} isTargetAmount />);

        cy.matchImageSnapshot();
    });

    it('prop: required, requiredPlacement', () => {
        cy.viewport(500, 100);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div style={{ width: '200px' }}>
                        <Select required items={items} label="Label" placeholder="Placeholder" />
                    </div>

                    <div style={{ width: '200px' }}>
                        <Select
                            required
                            requiredPlacement="left"
                            items={items}
                            label="Label"
                            placeholder="Placeholder"
                        />
                    </div>
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: optional', () => {
        cy.viewport(400, 100);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div style={{ width: '300px' }}>
                        <Select optional items={items} label="Label" placeholder="Placeholder" />
                    </div>
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: beforeList', () => {
        cy.viewport(400, 400);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div style={{ width: '300px' }}>
                        <Select
                            id="single"
                            items={items}
                            label="Label"
                            placeholder="Placeholder"
                            beforeList="Content before list"
                        />
                    </div>
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#single').realClick();

        cy.matchImageSnapshot();
    });

    it('prop: afterList', () => {
        cy.viewport(400, 400);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div style={{ width: '300px' }}>
                        <Select
                            id="single"
                            items={items}
                            label="Label"
                            placeholder="Placeholder"
                            afterList="Content after list"
                        />
                    </div>
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#single').realClick();

        cy.matchImageSnapshot();
    });

    it('prop: item data-attrs', () => {
        cy.viewport(400, 100);

        mount(
            <div style={{ width: '300px' }}>
                <Select id="single" items={items} label="Label" placeholder="Placeholder" />
            </div>,
        );

        cy.get('#single').realClick();
        cy.get('[id$="tree_level_1"]').should('be.visible');

        cy.get('[id$="north_america"]').should('have.class', 'test-classname');
        cy.get('[id$="north_america"]').should('have.attr', 'data-name', 'test-data-name');
    });

    it('prop: zIndex', () => {
        mount(
            <div style={{ width: '300px' }}>
                <Select id="single" items={items} label="Label" placeholder="Placeholder" zIndex={10000} />
            </div>,
        );

        cy.get('#single').realClick();

        cy.get('[data-floating-ui-portal] > div').should('have.css', 'z-index', '10000');
    });

    it('prop: renderValue', () => {
        cy.viewport(400, 800);

        const Component = () => {
            const [valueSingle, setValueSingle] = React.useState('paris');
            const [valueMultiple, setValueMultiple] = React.useState(['paris', 'lyon']);

            return (
                <CypressTestDecoratorWithTypo>
                    <div style={{ width: '300px' }}>
                        <Select
                            items={items}
                            value={valueSingle}
                            onChange={setValueSingle}
                            renderValue={(item) => item.label.toUpperCase()}
                        />
                    </div>

                    <br />

                    <div style={{ width: '300px' }}>
                        <Select
                            items={items}
                            multiselect
                            value={valueMultiple}
                            onChange={setValueMultiple}
                            renderValue={(item) => item.label.toUpperCase()}
                        />
                    </div>

                    <br />

                    <div style={{ width: '300px' }}>
                        <Select
                            target="button-like"
                            items={items}
                            value={valueSingle}
                            onChange={setValueSingle}
                            renderValue={(item) => item.label.toUpperCase()}
                        />
                    </div>

                    <br />

                    <div style={{ width: '300px' }}>
                        <Select
                            target="button-like"
                            items={items}
                            multiselect
                            value={valueMultiple}
                            onChange={setValueMultiple}
                            renderValue={(item) => item.label.toUpperCase()}
                        />
                    </div>
                </CypressTestDecoratorWithTypo>
            );
        };

        mount(<Component />);

        cy.matchImageSnapshot();
    });

    it('basic logic', () => {
        cy.viewport(1000, 500);

        const Component = () => {
            const [valueSingle, setValueSingle] = React.useState('paris');
            const [valueMultiple, setValueMultiple] = React.useState(['paris', 'lyon']);

            return (
                <CypressTestDecoratorWithTypo>
                    <div style={{ width: '300px' }}>
                        <Select
                            id="single"
                            target="button-like"
                            label="Список стран single"
                            items={items}
                            value={valueSingle}
                            onChange={setValueSingle}
                        />
                    </div>

                    <br />

                    <div style={{ width: '300px' }}>
                        <Select
                            id="multiple"
                            target="button-like"
                            label="Список стран multiple"
                            items={items}
                            multiselect
                            value={valueMultiple}
                            onChange={setValueMultiple}
                        />
                    </div>
                </CypressTestDecoratorWithTypo>
            );
        };

        mount(<Component />);

        cy.get('#single').should('include.text', 'Париж');
        cy.get('#multiple').should('include.text', 'Париж').should('include.text', 'Лион');

        cy.get('#single').realClick();
        cy.get('#single [id$="europe"]').realClick();
        cy.get('#single [id$="france"]').realClick();

        cy.get('#single [id$="paris"]').realClick();

        cy.get('#multiple').realClick();
        cy.get('#multiple [id$="europe"]').realClick();
        cy.get('#multiple [id$="france"]').realClick();

        cy.get('#multiple [id$="lyon"]').realClick();

        cy.get('#multiple [id$="germany"] .checkbox-trigger').realClick();
        cy.get('#multiple [id$="germany"]').realClick();

        cy.matchImageSnapshot();
    });

    it('disabled item behavior', () => {
        const items = [
            {
                value: 'brazil',
                label: 'Бразилия',
                items: [
                    {
                        value: 'rio_de_janeiro',
                        label: 'Рио-де-Жанейро',
                        disabled: true,
                    },
                    {
                        value: 'sao_paulo',
                        label: 'Сан-Паулу',
                    },
                ],
            },
        ];

        const Component = () => (
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '300px' }}>
                    <Select id="multiple" multiselect label="Список стран" items={items} />
                </div>
            </CypressTestDecoratorWithTypo>
        );

        mount(<Component />);

        cy.get('#multiple').click();
        cy.get('[id$="brazil"]').click();
        cy.get('[id$="brazil"] .checkbox-trigger').click();

        cy.get('[id$="rio_de_janeiro"]').should('have.attr', 'aria-selected', 'false');
        cy.get('[id$="brazil"]').should('have.attr', 'aria-selected', 'true');
        cy.get('[id$="sao_paulo"]').should('have.attr', 'aria-selected', 'true');

        cy.get('[id$="brazil"] .checkbox-trigger').click();

        cy.get('[id$="rio_de_janeiro"]').should('have.attr', 'aria-selected', 'false');
        cy.get('[id$="brazil"]').should('have.attr', 'aria-selected', 'false');
        cy.get('[id$="sao_paulo"]').should('have.attr', 'aria-selected', 'false');
    });

    it('keyboard interactions', () => {
        cy.viewport(1000, 500);

        const Component = () => {
            const [valueMultiple, setValueMultiple] = React.useState([]);

            return (
                <CypressTestDecoratorWithTypo>
                    <div style={{ width: '200px' }}>
                        <Select
                            target="button-like"
                            label="Список стран"
                            items={items}
                            multiselect
                            value={valueMultiple}
                            onChange={setValueMultiple}
                        />
                    </div>
                </CypressTestDecoratorWithTypo>
            );
        };

        mount(<Component />);

        cy.get('body').realClick();
        cy.realPress('Tab');
        cy.get('button').should('have.focus');

        // Arrow Down
        cy.realPress('ArrowDown');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowDown');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // Arrow Up
        cy.realPress('ArrowUp');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('ArrowUp');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // Arrows Right and Left
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.get('[id$="south_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('have.class', 'dropdown-item-is-active');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowRight');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-focused');
        cy.get('[id$="brazil"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('have.class', 'dropdown-item-is-active');
        cy.realPress('ArrowLeft');
        cy.realPress('ArrowLeft');
        cy.get('[id$="south_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowRight')
            .realPress('ArrowRight')
            .realPress('ArrowRight')
            .realPress('ArrowRight');
        cy.get('[id$="beijing"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="asia"]').should('have.class', 'dropdown-item-is-active');
        cy.get('[id$="china"]').should('have.class', 'dropdown-item-is-active');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowLeft')
            .realPress('ArrowLeft')
            .realPress('ArrowLeft')
            .realPress('ArrowLeft')
            .realPress('ArrowLeft');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.get('[id$="tree_level_3"]').should('not.exist');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.realPress('PageDown');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.realPress('PageUp');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.realPress('Home');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.realPress('End');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // Escape
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight').realPress('ArrowRight');
        cy.realPress('Escape');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.get('[id$="tree_level_3"]').should('not.exist');
        cy.get('button').should('have.focus');

        // Home
        cy.realPress('Home');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('button').should('have.focus');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // End
        cy.realPress('End');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('button').should('have.focus');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // Page Down
        cy.realPress('PageDown');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown');
        cy.realPress('PageDown');
        cy.get('button').should('have.focus');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // Page Up
        cy.realPress('PageUp');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown');
        cy.realPress('ArrowDown');
        cy.realPress('PageUp');
        cy.get('button').should('have.focus');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // Space;
        cy.realPress('Space');
        cy.get('button').should('have.class', 'select-without-box-shadow');
        cy.realPress('Space');
        cy.get('button').should('include.text', 'Северная Америка');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('button').should('have.class', 'select-without-box-shadow');
        cy.realPress('Space');
        cy.get('button').should('not.include.text', 'Северная Америка');
        cy.realPress('ArrowDown');
        cy.realPress('Space');
        cy.get('button')
            .should('include.text', 'Рио-де-Жанейро')
            .should('include.text', 'Кордова')
            .should('include.text', 'Медельин');
        cy.realPress('ArrowRight');
        cy.realPress('ArrowRight');
        cy.realPress('ArrowDown');
        cy.realPress('Space');
        cy.get('button').should('not.include.text', 'Буэнос-Айрес').should('not.include.text', 'Кордова');
        cy.realPress('ArrowLeft').realPress('ArrowLeft');
        cy.realPress('Space');
        cy.get('button').should('include.text', 'Список стран');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');
        cy.get('button').should('not.have.class', 'select-without-box-shadow');

        // Enter
        cy.realPress('Enter');
        cy.get('button').should('have.class', 'select-without-box-shadow');
        cy.realPress('Enter');
        cy.get('button').should('include.text', 'Северная Америка');
        cy.realPress('Enter');
        cy.get('button').should('include.text', 'Список стран');
        cy.realPress('ArrowDown');
        cy.realPress('Enter');
        cy.get('button').should('include.text', 'Список стран');
        cy.get('[id$="south_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('have.class', 'dropdown-item-is-active');
        cy.realPress('Enter');
        cy.realPress('Enter');
        cy.realPress('Enter');
        cy.get('[id$="brazil"]').should('have.class', 'dropdown-item-is-active');
        cy.get('[id$="rio_de_janeiro"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Enter');
        cy.get('button').should('include.text', 'Рио-де-Жанейро');
        cy.get('button').should('not.include.text', 'Сан-Паулу');
        cy.realPress('Enter');
        cy.get('button').should('include.text', 'Список стран');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');
        cy.get('button').should('not.have.class', 'select-without-box-shadow');

        // Tab
        cy.realPress('ArrowDown').realPress('Tab');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('button').should('not.have.focus');
    });

    it('flow: opening', () => {
        cy.viewport(1300, 500);

        const Component = () => {
            const [valueSingle, setValueSingle] = React.useState('paris');
            const [valueMultiple, setValueMultiple] = React.useState(['paris', 'lyon']);

            return (
                <CypressTestDecoratorWithTypo>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '300px' }}>
                            <Select
                                id="button-single"
                                target="button-like"
                                label="Список стран single"
                                items={items}
                                value={valueSingle}
                                onChange={setValueSingle}
                            />
                        </div>

                        <div style={{ width: '300px' }}>
                            <Select
                                id="button-multiple"
                                multiselect
                                target="button-like"
                                label="Список стран single"
                                items={items}
                                value={valueMultiple}
                                onChange={setValueMultiple}
                            />
                        </div>

                        <div style={{ width: '300px' }}>
                            <Select
                                id="textfield-single"
                                target="textfield-like"
                                items={items}
                                value={valueSingle}
                                onChange={setValueSingle}
                            />
                        </div>

                        <div style={{ width: '300px' }}>
                            <Select
                                id="textfield-multiple"
                                multiselect
                                target="textfield-like"
                                items={items}
                                value={valueMultiple}
                                onChange={setValueMultiple}
                            />
                        </div>
                    </div>
                </CypressTestDecoratorWithTypo>
            );
        };

        mount(<Component />);

        cy.get('#button-single').click();
        cy.get('ul[role="tree"]').should('be.visible');
        cy.get('#button-single').click();
        cy.get('ul[role="tree"]').should('not.exist');
        cy.get('#button-single .select-target-arrow').click({ force: true });
        cy.get('ul[role="tree"]').should('be.visible');
        cy.get('#button-single .select-target-arrow').click({ force: true });
        cy.get('ul[role="tree"]').should('not.exist');

        cy.get('#button-multiple').click();
        cy.get('ul[role="tree"]').should('be.visible');
        cy.get('#button-multiple').click();
        cy.get('ul[role="tree"]').should('not.exist');
        cy.get('#button-multiple .select-target-arrow').click({ force: true });
        cy.get('ul[role="tree"]').should('be.visible');
        cy.get('#button-multiple .select-target-arrow').click({ force: true });
        cy.get('ul[role="tree"]').should('not.exist');

        cy.get('#textfield-single').click();
        cy.get('ul[role="tree"]').should('be.visible');
        cy.get('#textfield-single').click();
        cy.get('ul[role="tree"]').should('not.exist');

        cy.get('#textfield-multiple').realClick({ position: 'topLeft' });
        cy.get('ul[role="tree"]').should('be.visible');
        cy.get('#textfield-multiple').realClick({ position: 'topLeft' });
        cy.get('ul[role="tree"]').should('not.exist');
        cy.get('#textfield-multiple').realClick({ position: 'center' });
        cy.get('ul[role="tree"]').should('not.exist');
    });
});
