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
        cy.get('#single #europe').realClick();
        cy.get('#single #france').realClick();

        cy.get('#single #paris').realClick();

        cy.get('#single').realClick();

        cy.get('#multiple').realClick();
        cy.get('#multiple #europe').realClick();
        cy.get('#multiple #france').realClick();

        cy.get('#multiple #lyon .select-item-checkbox').realClick();

        cy.get('#multiple #germany .select-item-checkbox').realClick();
        cy.get('#multiple #germany').realClick();

        cy.matchImageSnapshot();
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
        cy.get('#tree_level_1').should('be.visible');
        cy.get('#north_america').should('have.class', 'dropdown-item-is-focused');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowDown');
        cy.get('#africa').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // Arrow Up
        cy.realPress('ArrowUp');
        cy.get('#north_america').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('ArrowUp');
        cy.get('#north_america').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // Arrows Right and Left
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.get('#south_america').should('have.class', 'dropdown-item-is-focused');
        cy.get('#south_america').should('have.class', 'dropdown-item-is-active');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowRight');
        cy.get('#south_america').should('not.have.class', 'dropdown-item-is-focused');
        cy.get('#brazil').should('have.class', 'dropdown-item-is-focused');
        cy.get('#south_america').should('have.class', 'dropdown-item-is-active');
        cy.realPress('ArrowLeft');
        cy.realPress('ArrowLeft');
        cy.get('#south_america').should('have.class', 'dropdown-item-is-focused');
        cy.get('#south_america').should('not.have.class', 'dropdown-item-is-active');
        cy.realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowRight')
            .realPress('ArrowRight')
            .realPress('ArrowRight')
            .realPress('ArrowRight');
        cy.get('#beijing').should('have.class', 'dropdown-item-is-focused');
        cy.get('#asia').should('have.class', 'dropdown-item-is-active');
        cy.get('#china').should('have.class', 'dropdown-item-is-active');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowLeft')
            .realPress('ArrowLeft')
            .realPress('ArrowLeft')
            .realPress('ArrowLeft')
            .realPress('ArrowLeft');
        cy.get('#tree_level_1').should('not.be.visible');
        cy.get('#tree_level_2').should('not.be.visible');
        cy.get('#tree_level_3').should('not.be.visible');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.realPress('PageDown');
        cy.get('#africa').should('have.class', 'dropdown-item-is-focused');
        cy.get('#south_america').should('not.have.class', 'dropdown-item-is-active');
        cy.get('#tree_level_2').should('not.be.visible');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.realPress('PageUp');
        cy.get('#north_america').should('have.class', 'dropdown-item-is-focused');
        cy.get('#south_america').should('not.have.class', 'dropdown-item-is-active');
        cy.get('#tree_level_2').should('not.be.visible');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.realPress('Home');
        cy.get('#north_america').should('have.class', 'dropdown-item-is-focused');
        cy.get('#south_america').should('not.have.class', 'dropdown-item-is-active');
        cy.get('#tree_level_2').should('not.be.visible');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.realPress('End');
        cy.get('#africa').should('have.class', 'dropdown-item-is-focused');
        cy.get('#south_america').should('not.have.class', 'dropdown-item-is-active');
        cy.get('#tree_level_2').should('not.be.visible');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // Escape
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight').realPress('ArrowRight');
        cy.realPress('Escape');
        cy.get('#tree_level_1').should('not.be.visible');
        cy.get('#tree_level_2').should('not.be.visible');
        cy.get('#tree_level_3').should('not.be.visible');
        cy.get('button').should('have.focus');

        // Home
        cy.realPress('Home');
        cy.get('#tree_level_1').should('be.visible');
        cy.get('button').should('have.focus');
        cy.get('#north_america').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // End
        cy.realPress('End');
        cy.get('#tree_level_1').should('be.visible');
        cy.get('button').should('have.focus');
        cy.get('#africa').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // Page Down
        cy.realPress('PageDown');
        cy.get('#tree_level_1').should('not.be.visible');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown');
        cy.realPress('PageDown');
        cy.get('button').should('have.focus');
        cy.get('#africa').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // Page Up
        cy.realPress('PageUp');
        cy.get('#tree_level_1').should('not.be.visible');
        cy.get('button').should('have.focus');
        cy.realPress('ArrowDown');
        cy.realPress('ArrowDown');
        cy.realPress('PageUp');
        cy.get('button').should('have.focus');
        cy.get('#north_america').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('button').should('have.focus');

        // Space;
        cy.realPress('Space');
        cy.get('button').should('have.class', 'select-without-box-shadow');
        cy.realPress('Space');
        cy.get('button').should('include.text', 'Северная Америка');
        cy.get('#north_america').should('have.class', 'dropdown-item-is-focused');
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
        cy.get('#south_america').should('have.class', 'dropdown-item-is-focused');
        cy.get('#south_america').should('have.class', 'dropdown-item-is-active');
        cy.realPress('Enter');
        cy.realPress('Enter');
        cy.realPress('Enter');
        cy.get('#rio_de_janeiro').should('have.class', 'dropdown-item-is-focused');
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
        cy.get('#tree_level_1').should('not.be.visible');
        cy.get('button').should('not.have.focus');
    });
});
