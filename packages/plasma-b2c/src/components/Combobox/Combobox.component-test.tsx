import React, { useState, useRef } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

const items = [
    {
        value: 'north_america',
        label: 'Северная Америка',
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
const flatItems = [
    { value: 'rio_de_janeiro', label: 'Рио-де-Жанейро' },
    { value: 'sao_paulo', label: 'Сан-Паулу' },
    { value: 'buenos_aires', label: 'Буэнос-Айрес' },
    { value: 'cordoba', label: 'Кордова' },
    { value: 'bogota', label: 'Богота' },
    { value: 'medellin', label: 'Медельин' },
    { value: 'paris', label: 'Париж' },
    { value: 'lyon', label: 'Лион' },
    { value: 'berlin', label: 'Берлин' },
    { value: 'munich', label: 'Мюнхен' },
    { value: 'rome', label: 'Рим' },
    { value: 'milan', label: 'Милан' },
    { value: 'madrid', label: 'Мадрид' },
    { value: 'barcelona', label: 'Барселона' },
    { value: 'london', label: 'Лондон' },
    { value: 'manchester', label: 'Манчестер' },
    { value: 'beijing', label: 'Пекин' },
    { value: 'shanghai', label: 'Шанхай' },
    { value: 'tokyo', label: 'Токио' },
    { value: 'osaka', label: 'Осака' },
    { value: 'delhi', label: 'Дели' },
    { value: 'mumbai', label: 'Мумбаи' },
    { value: 'seoul', label: 'Сеул' },
    { value: 'busan', label: 'Пусан' },
    { value: 'bangkok', label: 'Бангкок' },
    { value: 'phuket', label: 'Пхукет' },
];

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: Combobox', () => {
    const ComboboxComponent = getComponent('Combobox');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const ComboboxGroup = (props: any) => {
        const [singleValue, setSingleValue] = useState('paris');
        const [valueMultiple, setValueMultiple] = useState<Array<string>>(['london', 'madrid']);

        return (
            <CypressTestDecoratorWithTypo>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 2fr', gap: '30px' }}>
                    <ComboboxComponent
                        view="default"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="default"
                        multiple
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="default"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="default"
                        multiple
                        items={items}
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="positive"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="positive"
                        multiple
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="positive"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="positive"
                        multiple
                        items={items}
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="warning"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="warning"
                        multiple
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="warning"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="warning"
                        multiple
                        items={items}
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="negative"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="negative"
                        multiple
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="negative"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        view="negative"
                        multiple
                        items={items}
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="default"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="default"
                        multiple
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="default"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="default"
                        multiple
                        items={items}
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="positive"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="positive"
                        multiple
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="positive"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="positive"
                        multiple
                        items={items}
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="warning"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="warning"
                        multiple
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="warning"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="warning"
                        multiple
                        items={items}
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="negative"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="negative"
                        multiple
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="negative"
                        items={items}
                        value={singleValue}
                        onChange={setSingleValue}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />

                    <ComboboxComponent
                        labelPlacement="inner"
                        view="negative"
                        multiple
                        items={items}
                        value={valueMultiple}
                        onChange={setValueMultiple}
                        label="Label"
                        placeholder="Placeholder"
                        helperText="Helper text"
                        {...props}
                    />
                </div>
            </CypressTestDecoratorWithTypo>
        );
    };

    const Combobox = (props: any) => {
        return (
            <CypressTestDecoratorWithTypo>
                <ComboboxComponent {...props} />
            </CypressTestDecoratorWithTypo>
        );
    };

    it('common: size l', () => {
        cy.viewport(1500, 1200);

        mount(<ComboboxGroup size="l" />);

        cy.matchImageSnapshot();
    });

    it('common: size m', () => {
        cy.viewport(1500, 1200);

        mount(<ComboboxGroup size="m" />);

        cy.matchImageSnapshot();
    });

    it('common: size s', () => {
        cy.viewport(1500, 1200);

        mount(<ComboboxGroup size="s" iconSize="xs" />);

        cy.matchImageSnapshot();
    });

    it('common: size xs', () => {
        cy.viewport(1500, 1200);

        mount(<ComboboxGroup size="xs" iconSize="xs" />);

        cy.matchImageSnapshot();
    });

    it('common: disabled', () => {
        cy.viewport(1500, 1200);

        mount(<ComboboxGroup size="m" disabled />);

        cy.matchImageSnapshot();
    });

    it('common: readOnly', () => {
        cy.viewport(1500, 1200);

        mount(<ComboboxGroup size="m" readOnly />);

        cy.matchImageSnapshot();
    });

    it('prop: variant', () => {
        cy.viewport(1500, 800);

        mount(
            <div style={{ display: 'grid', gridTemplateColumns: '300px 300px 300px 300px', gap: '300px 30px' }}>
                <Combobox size="l" variant="tight" items={items} label="Label" placeholder="Placeholder" alwaysOpened />

                <Combobox size="m" variant="tight" items={items} label="Label" placeholder="Placeholder" alwaysOpened />

                <Combobox size="s" variant="tight" items={items} label="Label" placeholder="Placeholder" alwaysOpened />

                <Combobox
                    size="xs"
                    variant="tight"
                    items={items}
                    label="Label"
                    placeholder="Placeholder"
                    alwaysOpened
                />

                <Combobox
                    size="l"
                    variant="tight"
                    multiple
                    items={items}
                    label="Label"
                    placeholder="Placeholder"
                    alwaysOpened
                />

                <Combobox
                    size="m"
                    variant="tight"
                    multiple
                    items={items}
                    label="Label"
                    placeholder="Placeholder"
                    alwaysOpened
                />

                <Combobox
                    size="s"
                    variant="tight"
                    multiple
                    items={items}
                    label="Label"
                    placeholder="Placeholder"
                    alwaysOpened
                />

                <Combobox
                    size="xs"
                    variant="tight"
                    multiple
                    items={items}
                    label="Label"
                    placeholder="Placeholder"
                    alwaysOpened
                />
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: placement', () => {
        cy.viewport(600, 1600);

        const items = [{ value: 'item', label: 'Item' }];

        mount(
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                }}
            >
                <div
                    style={{
                        width: '200px',
                        padding: '60px 60px 0 60px',
                    }}
                >
                    <Combobox
                        placement="top"
                        size="xs"
                        alwaysOpened
                        items={items}
                        label="Label"
                        placeholder="Top"
                        listWidth="150px"
                    />
                </div>

                <div
                    style={{
                        width: '200px',
                        padding: '60px 60px 0 60px',
                    }}
                >
                    <Combobox
                        placement="top-start"
                        size="xs"
                        alwaysOpened
                        items={items}
                        label="Label"
                        placeholder="Top-start"
                        listWidth="150px"
                    />
                </div>

                <div
                    style={{
                        width: '200px',
                        padding: '60px 60px 0 60px',
                    }}
                >
                    <Combobox
                        placement="top-end"
                        size="xs"
                        alwaysOpened
                        items={items}
                        label="Label"
                        placeholder="Top-end"
                        listWidth="150px"
                    />
                </div>

                <div
                    style={{
                        width: '200px',
                        padding: '20px 300px 20px 0',
                    }}
                >
                    <Combobox
                        placement="right"
                        size="xs"
                        alwaysOpened
                        items={items}
                        label="Label"
                        placeholder="Right"
                    />
                </div>

                <div
                    style={{
                        width: '200px',
                        padding: '20px 300px 20px 0',
                    }}
                >
                    <Combobox
                        placement="right-start"
                        size="xs"
                        alwaysOpened
                        items={items}
                        label="Label"
                        placeholder="Right-start"
                    />
                </div>

                <div
                    style={{
                        width: '200px',
                        padding: '20px 300px 20px 0',
                    }}
                >
                    <Combobox
                        placement="right-end"
                        size="xs"
                        alwaysOpened
                        items={items}
                        label="Label"
                        placeholder="Right-end"
                    />
                </div>

                <div
                    style={{
                        width: '200px',
                        padding: '0 60px 60px 60px',
                    }}
                >
                    <Combobox
                        placement="bottom"
                        size="xs"
                        alwaysOpened
                        items={items}
                        label="Label"
                        placeholder="Bottom"
                        listWidth="150px"
                    />
                </div>

                <div
                    style={{
                        width: '200px',
                        padding: '0 60px 60px 60px',
                    }}
                >
                    <Combobox
                        placement="bottom-start"
                        size="xs"
                        alwaysOpened
                        items={items}
                        label="Label"
                        placeholder="Bottom-start"
                        listWidth="150px"
                    />
                </div>

                <div
                    style={{
                        width: '200px',
                        padding: '0 60px 60px 60px',
                    }}
                >
                    <Combobox
                        placement="bottom-end"
                        size="xs"
                        alwaysOpened
                        items={items}
                        label="Label"
                        placeholder="Bottom-end"
                        listWidth="150px"
                    />
                </div>

                <div
                    style={{
                        width: '200px',
                        padding: '20px 0 20px 300px',
                    }}
                >
                    <Combobox placement="left" size="xs" alwaysOpened items={items} label="Label" placeholder="Left" />
                </div>

                <div
                    style={{
                        width: '200px',
                        padding: '20px 0 20px 300px',
                    }}
                >
                    <Combobox
                        placement="left-start"
                        size="xs"
                        alwaysOpened
                        items={items}
                        label="Label"
                        placeholder="Left-start"
                    />
                </div>

                <div
                    style={{
                        width: '200px',
                        padding: '20px 0 20px 300px',
                    }}
                >
                    <Combobox
                        placement="left-end"
                        size="xs"
                        alwaysOpened
                        items={items}
                        label="Label"
                        placeholder="Left-end"
                    />
                </div>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: listWidth', () => {
        cy.viewport(500, 500);

        mount(<Combobox listWidth="400px" items={items} label="Label" placeholder="Placeholder" alwaysOpened />);

        cy.matchImageSnapshot();
    });

    it('prop: listMaxHeight', () => {
        cy.viewport(1000, 500);

        mount(
            <div
                style={{
                    display: 'grid',
                    gap: '20px',
                    gridTemplateColumns: 'repeat(2, 400px)',
                }}
            >
                <Combobox listMaxHeight="400px" items={items} label="Label" placeholder="Placeholder" alwaysOpened />
                <Combobox listMaxHeight="20rem" items={items} label="Label" placeholder="Placeholder" alwaysOpened />
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: listMaxHeight with long list', () => {
        cy.viewport(1000, 500);

        const itemsHuge = Array(100)
            .fill(1)
            .map((_, i) => ({ value: i.toString(), label: i.toString() }));

        mount(
            <div
                style={{
                    display: 'grid',
                    gap: '20px',
                    gridTemplateColumns: 'repeat(2, 400px)',
                }}
            >
                <Combobox
                    listMaxHeight="400px"
                    listOverflow="scroll"
                    items={itemsHuge}
                    label="Label"
                    placeholder="Placeholder"
                    alwaysOpened
                />
                <Combobox
                    listMaxHeight="20rem"
                    listOverflow="scroll"
                    items={itemsHuge}
                    label="Label"
                    placeholder="Placeholder"
                    alwaysOpened
                />
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: virtual', () => {
        cy.viewport(1500, 600);

        const itemsHuge = Array(100)
            .fill(1)
            .map((_, i) => ({ value: i.toString(), label: i.toString() }));

        mount(
            <div
                style={{
                    display: 'grid',
                    gap: '20px',
                    gridTemplateColumns: 'repeat(3, 400px)',
                }}
            >
                <Combobox items={itemsHuge} label="Label" placeholder="Placeholder" alwaysOpened virtual />
                <Combobox
                    listMaxHeight="400px"
                    items={itemsHuge}
                    label="Label"
                    placeholder="Placeholder"
                    alwaysOpened
                    virtual
                />
                <Combobox
                    listMaxHeight="20rem"
                    items={itemsHuge}
                    label="Label"
                    placeholder="Placeholder"
                    alwaysOpened
                    virtual
                />
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: portal ref', () => {
        cy.viewport(1000, 400);

        const Component = () => {
            const ref = useRef(null);

            return (
                <>
                    <div id="combobox-wrapper">
                        <Combobox
                            portal={ref}
                            id="combobox"
                            items={items}
                            label="Label"
                            placeholder="Placeholder"
                            listWidth="300px"
                        />
                    </div>

                    <div id="portal-root" ref={ref} />
                </>
            );
        };

        mount(<Component />);

        cy.get('#combobox').realClick();
        cy.get('#combobox-wrapper [data-floating-ui-portal]').should('not.exist');
        cy.get('#portal-root [data-floating-ui-portal]').should('exist');

        cy.get('[id$="south_america"]').realClick();
        cy.get('[id$="tree_level_2"]').should('be.visible');

        cy.get('[id$="brazil"]').realClick();
        cy.get('[id$="tree_level_3"]').should('be.visible');
    });

    it('prop: renderItem', () => {
        cy.viewport(500, 200);

        mount(
            <Combobox
                renderItem={(item) => <div>{item.name}</div>}
                id="combobox"
                items={[
                    { value: 'item1', label: 'Item 1', name: 'Ivan' },
                    { value: 'item2', label: 'Item 2', name: 'Alexey' },
                ]}
                label="Label"
                placeholder="Placeholder"
            />,
        );

        cy.get('#combobox').realClick();

        cy.matchImageSnapshot();
    });

    it('prop: isTargetAmount', () => {
        cy.viewport(500, 300);

        const Component = () => {
            const [value, setValue] = useState(['africa', 'north_america']);

            return (
                <>
                    <Combobox
                        isTargetAmount
                        multiple
                        id="combobox1"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        closeAfterSelect
                    />

                    <br />

                    <Combobox
                        isTargetAmount
                        targetAmount="999"
                        multiple
                        id="combobox2"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        closeAfterSelect
                    />

                    <br />

                    <Combobox
                        isTargetAmount
                        multiple
                        id="combobox3"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        value={value}
                        onChange={setValue}
                    />
                </>
            );
        };

        mount(<Component />);

        cy.get('#combobox1').realClick();
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('Enter');

        cy.get('#combobox2').realClick();
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('Enter');

        cy.get('.chip-item div svg').last().realClick();

        cy.matchImageSnapshot();
    });

    it('prop: renderValue', () => {
        cy.viewport(500, 500);

        mount(
            <>
                <div id="combobox1">
                    <Combobox
                        renderValue={(item) => item.value}
                        id="single"
                        items={items}
                        label="Single"
                        placeholder="Placeholder"
                    />
                </div>

                <br />

                <div id="combobox2">
                    <Combobox
                        renderValue={(item) => item.value}
                        id="multiple"
                        multiple
                        items={items}
                        label="Multiple"
                        placeholder="Placeholder"
                        closeAfterSelect
                    />
                </div>
            </>,
        );

        cy.get('#single').realClick();
        cy.get('#combobox1 [id$="north_america"]').realClick();
        cy.get('#multiple').realClick();
        cy.get('#combobox2 [id$="north_america"]').realClick();

        cy.matchImageSnapshot();
    });

    it('prop: closeAfterSelect, single', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ display: 'flex', gap: '30px' }}>
                <div id="combobox1" style={{ width: '300px' }}>
                    <Combobox id="single1" items={items} label="Label" placeholder="Placeholder" />
                </div>

                <div id="combobox2" style={{ width: '300px' }}>
                    <Combobox
                        id="single2"
                        closeAfterSelect={false}
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                    />
                </div>
            </div>,
        );

        cy.get('#single1').realClick();
        cy.get('#single1').should('be.focused');
        cy.get('#combobox1 [id$="tree_level_1"]').should('be.visible');
        cy.get('#combobox1 [id$="north_america"]').realClick();
        cy.get('#combobox1 [id$="tree_level_1"]').should('not.exist');
        cy.get('#single1').should('not.be.focused');

        cy.get('#single2').realClick();
        cy.get('#single2').should('be.focused');
        cy.get('#combobox2 [id$="tree_level_1"]').should('be.visible');
        cy.get('#combobox2 [id$="north_america"]').realClick();
        cy.get('#combobox2 [id$="tree_level_1"]').should('be.visible');
        cy.get('#single1').should('not.be.focused');
    });

    it('prop: closeAfterSelect, multiple', () => {
        cy.viewport(700, 500);

        mount(
            <div style={{ display: 'flex', gap: '30px' }}>
                <div id="combobox1" style={{ width: '300px' }}>
                    <Combobox id="multiple1" multiple items={items} label="Label" placeholder="Placeholder" />
                </div>

                <div id="combobox2" style={{ width: '300px' }}>
                    <Combobox
                        id="multiple2"
                        closeAfterSelect
                        multiple
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                    />
                </div>
            </div>,
        );

        cy.get('#multiple1').realClick();
        cy.get('#multiple1').should('be.focused');
        cy.get('#combobox1 [id$="tree_level_1"]').should('be.visible');
        cy.get('#combobox1 [id$="north_america"]').realClick();
        cy.get('#combobox1 [id$="tree_level_1"]').should('be.visible');
        cy.get('#multiple1').should('not.be.focused');

        cy.get('#multiple2').realClick();
        cy.get('#multiple2').should('be.focused');
        cy.get('#combobox2 [id$="tree_level_1"]').should('be.visible');
        cy.get('#combobox2 [id$="north_america"]').realClick();
        cy.get('#combobox2 [id$="tree_level_1"]').should('not.exist');
        cy.get('#multiple2').should('not.be.focused');
    });

    it('prop: required, requiredPlacement', () => {
        cy.viewport(500, 100);

        mount(
            <div style={{ display: 'flex', gap: '30px' }}>
                <div style={{ width: '200px' }}>
                    <Combobox required items={items} label="Label" placeholder="Placeholder" />
                </div>

                <div style={{ width: '200px' }}>
                    <Combobox required requiredPlacement="left" items={items} label="Label" placeholder="Placeholder" />
                </div>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: optional', () => {
        cy.viewport(400, 100);

        mount(
            <div style={{ display: 'flex', gap: '30px' }}>
                <div style={{ width: '300px' }}>
                    <Combobox optional items={items} label="Label" placeholder="Placeholder" />
                </div>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: item data-attrs', () => {
        cy.viewport(400, 100);

        mount(
            <div style={{ width: '300px' }}>
                <Combobox id="single" items={items} label="Label" placeholder="Placeholder" />
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
                <Combobox id="single" items={items} label="Label" placeholder="Placeholder" zIndex={10000} />
            </div>,
        );

        cy.get('#single').realClick();

        cy.get('[data-floating-ui-portal] > div').should('have.css', 'z-index', '10000');
    });

    it('prop: beforeList', () => {
        cy.viewport(400, 400);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '300px' }}>
                    <Combobox
                        id="single"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        beforeList="Content before list"
                    />
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#single').click();

        cy.matchImageSnapshot();
    });

    it('prop: afterList', () => {
        cy.viewport(400, 400);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '300px' }}>
                    <Combobox
                        id="single"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        afterList="Content after list"
                    />
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#single').click();

        cy.matchImageSnapshot();
    });

    it('prop: selectAll button', () => {
        cy.viewport(400, 300);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '300px' }}>
                    <Combobox
                        id="combobox"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        multiple
                        selectAllOptions={{
                            label: 'Выбрать не совсем все',
                        }}
                        listOverflow="scroll"
                        listHeight="150px"
                    />
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#combobox').click();

        cy.matchImageSnapshot();
    });

    it('prop: item disabled', () => {
        cy.viewport(400, 100);

        const Component = () => {
            const [value, setValue] = useState(['africa']);

            return (
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div style={{ width: '300px' }}>
                        <Combobox
                            multiple
                            value={value}
                            onChange={setValue}
                            items={items}
                            label="Label"
                            placeholder="Placeholder"
                        />
                    </div>
                </div>
            );
        };

        mount(<Component />);

        cy.matchImageSnapshot();
    });

    it('prop: mode', () => {
        cy.viewport(1000, 400);

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '300px' }}>
                    <Combobox id="single" items={items} label="Label" placeholder="Placeholder" mode="radio" />
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#single').click();
        cy.contains('Северная Америка').click();
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('#single').should('have.value', 'Северная Америка');

        cy.get('#single').click();
        cy.contains('Северная Америка').click();
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('#single').should('have.value', 'Северная Америка');

        cy.get('body').realClick({ position: 'bottomRight' });
        cy.realPress('Tab');
        cy.get('#single').should('be.focused');
        cy.realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowRight')
            .realPress('ArrowRight')
            .realPress('ArrowRight')
            .realPress('ArrowRight')
            .realPress('Enter');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('#single').should('have.value', 'Рио-де-Жанейро');

        cy.get('#single').should('be.focused');
        cy.realPress('ArrowDown')
            .realPress('ArrowDown')
            .realPress('ArrowRight')
            .realPress('ArrowRight')
            .realPress('ArrowRight')
            .realPress('ArrowRight')
            .realPress('Enter');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('#single').should('have.value', 'Рио-де-Жанейро');
    });

    it('prop: onToggle', () => {
        cy.viewport(400, 300);

        const onToggle = cy.stub().as('onToggle');

        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '300px' }}>
                    <Combobox id="combobox" items={items} label="Label" placeholder="Placeholder" onToggle={onToggle} />
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#combobox').click();
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('@onToggle').should('have.been.calledOnce');
        cy.get('@onToggle').should('have.been.calledWith', true);

        cy.get('#combobox').click();
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('@onToggle').should('have.been.calledOnce');

        cy.get('body').click('bottomRight');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('@onToggle').should('have.been.calledTwice');
        cy.get('@onToggle').should('have.been.calledWith', false);

        cy.get('.combobox-target-arrow').click();
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('input#combobox').should('not.be.focused');
        cy.get('@onToggle').should('have.been.calledThrice');
        cy.get('@onToggle').should('have.been.calledWith', true);

        cy.get('.combobox-target-arrow').click();
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('input#combobox').should('not.be.focused');
        cy.get('@onToggle').its('callCount').should('equal', 4);
        cy.get('@onToggle').should('have.been.calledWith', false);

        cy.get('body').click('bottomRight');
        cy.realPress('Tab');
        cy.get('input#combobox').should('be.focused');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('@onToggle').its('callCount').should('equal', 4);

        cy.realPress('ArrowDown');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('input#combobox').should('be.focused');
        cy.get('@onToggle').its('callCount').should('equal', 5);
        cy.get('@onToggle').should('have.been.calledWith', true);

        cy.realPress('ArrowLeft');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('input#combobox').should('be.focused');
        cy.get('@onToggle').its('callCount').should('equal', 6);
        cy.get('@onToggle').should('have.been.calledWith', false);

        cy.realPress('ArrowLeft');
        cy.get('@onToggle').its('callCount').should('equal', 6);
        cy.realPress('ArrowDown');
        cy.get('@onToggle').its('callCount').should('equal', 7);
        cy.get('@onToggle').should('have.been.calledWith', true);
        cy.realPress('Escape');
        cy.get('@onToggle').its('callCount').should('equal', 8);
        cy.get('@onToggle').should('have.been.calledWith', false);
        cy.realPress('Escape');
        cy.get('@onToggle').its('callCount').should('equal', 8);
        cy.get('@onToggle').should('have.been.calledWith', false);
    });

    it('behavior: disabled unselected item', () => {
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
                    <Combobox id="multiple" multiple label="Список стран" items={items} />
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
        cy.get('[id$="brazil"]').should('have.attr', 'aria-selected', 'true');
        cy.get('[id$="sao_paulo"]').should('have.attr', 'aria-selected', 'true');
    });

    it('behavior: disabled selected item', () => {
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

        const Component = () => {
            const [value, setValue] = useState(['rio_de_janeiro']);

            return (
                <CypressTestDecoratorWithTypo>
                    <div style={{ width: '300px' }}>
                        <Combobox
                            id="multiple"
                            multiple
                            label="Список стран"
                            items={items}
                            value={value}
                            onChange={setValue}
                        />
                    </div>
                </CypressTestDecoratorWithTypo>
            );
        };

        mount(<Component />);

        cy.get('#multiple').click();
        cy.get('[id$="brazil"]').should('have.attr', 'aria-selected', 'true');

        cy.get('[id$="brazil"]').click();
        cy.get('[id$="brazil"] .checkbox-trigger').click();
        cy.get('[id$="rio_de_janeiro"]').should('have.attr', 'aria-selected', 'true');
        cy.get('[id$="brazil"]').should('have.attr', 'aria-selected', 'true');
        cy.get('[id$="sao_paulo"]').should('have.attr', 'aria-selected', 'true');

        cy.get('[id$="brazil"] .checkbox-trigger').click();
        cy.get('[id$="rio_de_janeiro"]').should('have.attr', 'aria-selected', 'true');
        cy.get('[id$="brazil"]').should('have.attr', 'aria-selected', 'true');
        cy.get('[id$="sao_paulo"]').should('have.attr', 'aria-selected', 'false');
    });

    it('behavior: repeated click on target', () => {
        const Component = () => (
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '300px' }}>
                    <Combobox id="single" label="Список стран" items={items} />
                </div>
            </CypressTestDecoratorWithTypo>
        );

        mount(<Component />);

        cy.get('#single').click();
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('input').click();
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('body').click('bottomRight');
        cy.get('[id$="tree_level_1"]').should('not.exist');
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
                    <Combobox
                        id="single"
                        placeholder="Placeholder"
                        label="Список стран"
                        items={items}
                        listMaxHeight="150px"
                    />
                </div>
            </CypressTestDecoratorWithTypo>
        );

        mount(<Component />);

        cy.get('#single').click();
        cy.contains('div', 'Южная Америка').click();
        cy.contains('div', 'Бразилия').click();

        cy.matchImageSnapshot();
    });

    it('flow: single uncontrolled', () => {
        cy.viewport(1000, 500);

        const Component = () => {
            return (
                <div style={{ width: '300px' }}>
                    <Combobox id="single" label="Label" placeholder="Placeholder" items={items} />
                </div>
            );
        };

        mount(<Component />);

        cy.get('#single').realClick();
        cy.get('#single').should('be.focused');
        cy.get('[id$="tree_level_1"]').should('be.visible');

        cy.get('[id$="north_america"]').realClick();
        cy.get('#single').should('not.be.focused');
        cy.get('[id$="tree_level_1"]').should('not.exist');

        cy.get('.label-placement-outer').realClick();
        cy.get('#single').should('be.focused');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('[id$="north_america"] > div:first-child svg').should('exist');
        cy.get('[id$="north_america"]').realClick();
        cy.get('#single').should('not.be.focused');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('[id$="north_america"] > div:first-child svg').should('not.exist');

        cy.get('#single').realClick();
        cy.get('#single').should('be.focused');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('#single').type('Париж');
        cy.get('#single').should('have.value', 'Париж');
        cy.get('[id$="tree_level_1"]').find('li').should('have.length', 1);
        cy.get('[id$="europe"] > div:first-child svg').should('not.exist');
        cy.get('[id$="europe"] > div:nth-child(3) svg').should('exist');
        cy.get('[id$="europe"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('[id$="europe"]').realClick();
        cy.get('#single').should('not.be.focused');
        cy.get('[id$="europe"]').should('have.class', 'dropdown-item-is-active');
        cy.get('[id$="tree_level_2"]').should('be.visible');
        cy.get('[id$="tree_level_2"]').find('li').should('have.length', 1);
        cy.get('[id$="europe"] > div:first-child svg').should('not.exist');
        cy.get('[id$="europe"] > div:nth-child(3) svg').should('exist');
        cy.get('[id$="france"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('[id$="france"]').realClick();
        cy.get('[id$="france"]').should('have.class', 'dropdown-item-is-active');
        cy.get('[id$="tree_level_3"]').should('be.visible');
        cy.get('[id$="tree_level_3"]').find('li').should('have.length', 1);
        cy.get('[id$="europe"] > div:first-child svg').should('not.exist');
        cy.get('[id$="paris"]').realClick();
        cy.get('#single').should('not.be.focused');
        cy.get('#single').should('have.value', 'Париж');
        cy.get('[id$="tree_level_1"]').should('not.exist');
    });

    it('flow: single controlled', () => {
        cy.viewport(1000, 500);

        const Component = () => {
            const [value, setValue] = useState('');

            return (
                <div style={{ width: '300px' }}>
                    <Combobox
                        id="single"
                        value={value}
                        onChange={setValue}
                        label="Label"
                        placeholder="Placeholder"
                        items={items}
                    />
                </div>
            );
        };

        mount(<Component />);

        cy.get('#single').realClick();
        cy.get('#single').should('be.focused');
        cy.get('[id$="tree_level_1"]').should('be.visible');

        cy.get('[id$="north_america"]').realClick();
        cy.get('#single').should('not.be.focused');
        cy.get('[id$="tree_level_1"]').should('not.exist');

        cy.get('.label-placement-outer').realClick();
        cy.get('#single').should('be.focused');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('[id$="north_america"] > div:first-child svg').should('exist');
        cy.get('[id$="north_america"]').realClick();
        cy.get('#single').should('not.be.focused');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('[id$="north_america"] > div:first-child svg').should('not.exist');

        cy.get('#single').realClick();
        cy.get('#single').should('be.focused');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('#single').type('Париж');
        cy.get('#single').should('have.value', 'Париж');
        cy.get('[id$="tree_level_1"]').find('li').should('have.length', 1);
        cy.get('[id$="europe"] > div:first-child svg').should('not.exist');
        cy.get('[id$="europe"] > div:nth-child(3) svg').should('exist');
        cy.get('[id$="europe"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('[id$="europe"]').realClick();
        cy.get('#single').should('not.be.focused');
        cy.get('[id$="europe"]').should('have.class', 'dropdown-item-is-active');
        cy.get('[id$="tree_level_2"]').should('be.visible');
        cy.get('[id$="tree_level_2"]').find('li').should('have.length', 1);
        cy.get('[id$="europe"] > div:first-child svg').should('not.exist');
        cy.get('[id$="europe"] > div:nth-child(3) svg').should('exist');
        cy.get('[id$="france"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('[id$="france"]').realClick();
        cy.get('[id$="france"]').should('have.class', 'dropdown-item-is-active');
        cy.get('[id$="tree_level_3"]').should('be.visible');
        cy.get('[id$="tree_level_3"]').find('li').should('have.length', 1);
        cy.get('[id$="europe"] > div:first-child svg').should('not.exist');
        cy.get('[id$="paris"]').realClick();
        cy.get('#single').should('not.be.focused');
        cy.get('#single').should('have.value', 'Париж');
        cy.get('[id$="tree_level_1"]').should('not.exist');
    });

    it('flow: multiple uncontrolled', () => {
        cy.viewport(1000, 500);

        const Component = () => {
            return (
                <div style={{ width: '300px' }}>
                    <Combobox id="multiple" multiple label="Label" placeholder="Placeholder" items={items} />
                </div>
            );
        };

        mount(<Component />);

        cy.get('#multiple').realClick();
        cy.get('#multiple').should('be.focused');
        cy.get('[id$="tree_level_1"]').should('be.visible');

        cy.get('[id$="north_america"]').realClick();
        cy.get('#multiple').should('not.be.focused');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('.has-chips').should('exist');
        cy.get('.has-chips button').should('have.length', 1);

        cy.get('.has-chips button svg').realClick();
        cy.get('#multiple').should('not.be.focused');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('.has-chips').should('not.exist');

        cy.get('[id$="south_america"] > div:first-child').realClick();
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('.has-chips').should('exist');
        cy.get('.has-chips button').should('have.length', 6);

        cy.get('[id$="south_america"] > div:first-child').realClick();
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('.has-chips').should('not.exist');
    });

    it('flow: multiple controlled', () => {
        cy.viewport(1000, 500);

        const Component = () => {
            const [value, setValue] = useState([]);

            return (
                <div style={{ width: '300px' }}>
                    <Combobox
                        id="multiple"
                        value={value}
                        onChange={setValue}
                        multiple
                        label="Label"
                        placeholder="Placeholder"
                        items={items}
                    />
                </div>
            );
        };

        mount(<Component />);

        cy.get('#multiple').realClick();
        cy.get('#multiple').should('be.focused');
        cy.get('[id$="tree_level_1"]').should('be.visible');

        cy.get('[id$="north_america"]').realClick();
        cy.get('#multiple').should('not.be.focused');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('.has-chips').should('exist');
        cy.get('.has-chips button').should('have.length', 1);

        cy.get('.has-chips button svg').realClick();
        cy.get('#multiple').should('not.be.focused');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('.has-chips').should('not.exist');

        cy.get('[id$="south_america"] > div:first-child').realClick();
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('.has-chips').should('exist');
        cy.get('.has-chips button').should('have.length', 6);

        cy.get('[id$="south_america"] > div:first-child').realClick();
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('.has-chips').should('not.exist');
    });

    it('flow: async items loading', () => {
        cy.viewport(500, 500);

        const Component = () => {
            const [options, setOptions] = useState([]);

            setTimeout(() => {
                setOptions(items);
            }, 100);

            return <Combobox id="combobox" items={options} label="Label" placeholder="Placeholder" />;
        };

        mount(<Component />);

        cy.get('#combobox').realClick();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100);

        cy.matchImageSnapshot();
    });

    it('keyboard interactions: single', () => {
        cy.viewport(1000, 500);

        const Component = () => {
            return (
                <div style={{ width: '300px' }}>
                    <Combobox id="single" label="Label" placeholder="Placeholder" items={items} />
                </div>
            );
        };

        mount(<Component />);

        cy.get('body').realClick();
        cy.realPress('Tab');
        cy.get('#single').should('be.focused');

        // Escape
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight').realPress('ArrowRight');
        cy.realPress('Escape');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.get('[id$="tree_level_3"]').should('not.exist');
        cy.get('#single').should('be.focused');
        cy.realPress('ArrowDown').realPress('Enter').realPress('Escape');
        cy.get('#single').should('be.focused');
        cy.get('#single').should('have.value', 'Северная Америка');
        cy.get('[id$="tree_level_1"]').should('not.exist');

        // Tab
        cy.realPress('Tab');
        cy.get('#single').should('not.be.focused');
        cy.get('#single').should('have.value', 'Северная Америка');
        cy.get('[id$="tree_level_1"]').should('not.exist');
    });

    it('keyboard interactions: multiple', () => {
        cy.viewport(1000, 500);

        const Component = () => {
            return (
                <div style={{ width: '300px' }}>
                    <Combobox id="multiple" multiple label="Label" placeholder="Placeholder" items={items} />
                </div>
            );
        };

        mount(<Component />);

        cy.get('body').realClick();
        cy.realPress('Tab');
        cy.get('#multiple').should('be.focused');

        // Arrow Down
        cy.realPress('ArrowDown');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('#multiple').should('be.focused');
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowDown');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('#multiple').should('be.focused');

        // Arrow Up
        cy.realPress('ArrowUp');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('#multiple').should('be.focused');
        cy.realPress('ArrowUp');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('#multiple').should('be.focused');

        // Arrows Right and Left
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.get('[id$="south_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('have.class', 'dropdown-item-is-active');
        cy.get('#multiple').should('be.focused');
        cy.get('[id$="tree_level_2"]').should('be.visible');
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
        cy.get('[id$="tree_level_3"]').should('be.visible');
        cy.get('[id$="beijing"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="asia"]').should('have.class', 'dropdown-item-is-active');
        cy.get('[id$="china"]').should('have.class', 'dropdown-item-is-active');
        cy.get('#multiple').should('be.focused');
        cy.realPress('ArrowLeft')
            .realPress('ArrowLeft')
            .realPress('ArrowLeft')
            .realPress('ArrowLeft')
            .realPress('ArrowLeft');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.get('[id$="tree_level_3"]').should('not.exist');
        cy.get('#multiple').should('be.focused');
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.realPress('PageDown');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.realPress('Escape');
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.realPress('PageUp');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('#tree_level_2').should('not.exist');
        cy.realPress('Escape');
        cy.get('#multiple').should('be.focused');
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.realPress('Home');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('#tree_level_2').should('not.exist');
        cy.realPress('Escape');
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight');
        cy.realPress('End');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.get('[id$="south_america"]').should('not.have.class', 'dropdown-item-is-active');
        cy.get('#tree_level_2').should('not.exist');
        cy.realPress('Escape');
        cy.get('#multiple').should('be.focused');

        // Escape
        cy.realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowRight').realPress('ArrowRight');
        cy.realPress('Escape');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('[id$="tree_level_2"]').should('not.exist');
        cy.get('[id$="tree_level_3"]').should('not.exist');
        cy.get('#multiple').should('be.focused');

        // Home
        cy.realPress('Home');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('#multiple').should('be.focused');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('#multiple').should('be.focused');

        // End
        cy.realPress('End');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('#multiple').should('be.focused');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('#multiple').should('be.focused');

        // Page Down
        cy.realPress('PageDown');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('#multiple').should('be.focused');
        cy.realPress('ArrowDown');
        cy.realPress('PageDown');
        cy.get('#multiple').should('be.focused');
        cy.get('[id$="africa"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('#multiple').should('be.focused');

        // Page Up
        cy.realPress('PageUp');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('#multiple').should('be.focused');
        cy.realPress('ArrowDown');
        cy.realPress('ArrowDown');
        cy.realPress('PageUp');
        cy.get('#multiple').should('be.focused');
        cy.get('[id$="north_america"]').should('have.class', 'dropdown-item-is-focused');
        cy.realPress('Escape');
        cy.get('#multiple').should('be.focused');

        // Enter
        cy.realPress('Enter');
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.realPress('Enter');
        cy.get('.has-chips').should('exist');
        cy.get('.has-chips button').should('have.length', 1);
        cy.realPress('Enter');
        cy.get('.has-chips').should('not.exist');
        cy.realPress('ArrowDown');
        cy.realPress('Enter');
        cy.get('.has-chips').should('exist');
        cy.get('.has-chips button').should('have.length', 6);
        cy.realPress('Enter');
        cy.realPress('Escape');
        cy.get('#multiple').should('be.focused');

        // Chips
        cy.realPress('Enter');
        cy.realPress('ArrowDown');
        cy.realPress('Enter');
        cy.realPress('ArrowLeft');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('#multiple').should('be.focused');
        cy.get('.has-chips').should('exist');
        cy.get('.has-chips button').should('have.length', 6);
        cy.realPress('ArrowLeft');
        cy.get('.has-chips .chips-wrapper button:last-child').should('have.attr', 'data-focus-visible-added');
        cy.realPress('Backspace');
        cy.get('.has-chips button').should('have.length', 5);
        cy.get('.has-chips .chips-wrapper button:last-child').should('have.attr', 'data-focus-visible-added');
        cy.get('#multiple').should('not.be.focused');
        cy.realPress('Backspace');
        cy.realPress('Backspace');
        cy.realPress('Backspace');
        cy.realPress('Backspace');
        cy.realPress('Backspace');
        cy.realPress('Tab');

        // Tab
        cy.realPress('ArrowDown').realPress('Tab');
        cy.get('[id$="tree_level_1"]').should('not.exist');
        cy.get('#multiple').should('not.be.focused');
    });

    it('snapshot: missing value in items', () => {
        cy.viewport(1000, 200);

        const Component = () => {
            const [valueSingle, setValueSingle] = React.useState('minsk');
            const [valueMultiple, setValueMultiple] = React.useState(['minsk', 'lyon']);

            const renderValue = (item) => {
                if (item.value === 'minsk') {
                    return 'Минск';
                }

                return item.label;
            };

            return (
                <CypressTestDecoratorWithTypo>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '400px' }}>
                                <Combobox label="Label" items={items} value={valueSingle} />
                            </div>

                            <div style={{ width: '400px' }}>
                                <Combobox label="Label" multiple items={items} value={valueMultiple} />
                            </div>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '400px' }}>
                                <Combobox label="Label" items={items} value={valueSingle} renderValue={renderValue} />
                            </div>

                            <div style={{ width: '400px' }}>
                                <Combobox
                                    label="Label"
                                    multiple
                                    items={items}
                                    value={valueMultiple}
                                    renderValue={renderValue}
                                />
                            </div>
                        </div>
                    </div>
                </CypressTestDecoratorWithTypo>
            );
        };

        mount(<Component />);

        cy.matchImageSnapshot();
    });

    it('flow, single: missing value in items', () => {
        cy.viewport(500, 500);

        const Component = () => {
            const [valueSingle, setValueSingle] = React.useState('');

            const handleClick = () => {
                setValueSingle('minsk');
            };

            return (
                <CypressTestDecoratorWithTypo>
                    <button id="btn" type="button" onClick={handleClick}>
                        add missing value
                    </button>

                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '300px' }}>
                            <Combobox
                                label="Label"
                                placeholder="Placeholder"
                                items={items}
                                value={valueSingle}
                                onChange={setValueSingle}
                            />
                        </div>
                    </div>
                </CypressTestDecoratorWithTypo>
            );
        };

        mount(<Component />);

        cy.get('#btn').click();

        cy.matchImageSnapshot();

        cy.get('.input-wrapper')
            .click()
            .type('{backspace}')
            .type('{backspace}')
            .type('{backspace}')
            .type('{backspace}')
            .type('{backspace}');
        cy.get('[id$="north_america"]').click();
        cy.get('.input-wrapper input').should('have.value', 'Северная Америка');
    });

    it('flow, multiple: missing value in items', () => {
        cy.viewport(500, 500);

        const Component = () => {
            const [valueMultiple, setValueMultiple] = React.useState('');

            const handleClick = () => {
                setValueMultiple([...valueMultiple, 'minsk']);
            };

            return (
                <CypressTestDecoratorWithTypo>
                    <button id="btn" type="button" onClick={handleClick}>
                        add missing value
                    </button>

                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '400px' }}>
                            <Combobox
                                multiple
                                label="Label"
                                placeholder="Placeholder"
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

        cy.get('#btn').click();
        cy.get('.input-wrapper').click();
        cy.get('[id$="north_america"]').click();

        cy.matchImageSnapshot();

        cy.get('[id$="north_america"]').click();
        cy.get('.chips-wrapper').should('not.include.text', 'Северная Америка');
        cy.get('.chips-wrapper').should('include.text', 'minsk');
        cy.get('.chips-wrapper').get('.chip-item div svg').click();
        cy.get('.chips-wrapper').should('not.exist');
    });

    it('flow, single: update label after getting new items', () => {
        cy.viewport(500, 500);

        let isUpdated = false;

        const Component = () => {
            const [valueSingle, setValueSingle] = React.useState('random_value');
            const [data, setData] = React.useState(items);

            const handleToggle = () => {
                if (!isUpdated) {
                    setData([...data, { value: 'random_value', label: 'Random value' }]);
                }

                isUpdated = true;
            };

            return (
                <CypressTestDecoratorWithTypo>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '300px' }}>
                            <Combobox
                                id="combobox"
                                label="Label"
                                placeholder="Placeholder"
                                items={data}
                                value={valueSingle}
                                onChange={setValueSingle}
                                onToggle={handleToggle}
                            />
                        </div>
                    </div>
                </CypressTestDecoratorWithTypo>
            );
        };

        mount(<Component />);

        cy.get('#combobox').click();
        cy.get('body').click('bottomRight');
        cy.get('#combobox').click();

        cy.matchImageSnapshot();
    });

    it('flow, multiple: update label after getting new items', () => {
        cy.viewport(500, 500);

        const Component = () => {
            const [valueSingle, setValueSingle] = React.useState(['random_value']);
            const [data, setData] = React.useState(items);

            const handleToggle = () => {
                setData([...data, { value: 'random_value', label: 'Random value' }]);
            };

            return (
                <CypressTestDecoratorWithTypo>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '300px' }}>
                            <Combobox
                                multiple
                                id="combobox"
                                label="Label"
                                placeholder="Placeholder"
                                items={data}
                                value={valueSingle}
                                onChange={setValueSingle}
                                onToggle={handleToggle}
                            />
                        </div>
                    </div>
                </CypressTestDecoratorWithTypo>
            );
        };

        mount(<Component />);

        cy.get('#combobox').click();

        cy.matchImageSnapshot();
    });

    it('flow: text input + custom filter', () => {
        cy.viewport(500, 500);

        const Component = () => {
            const [data, setData] = React.useState(flatItems);

            const handleChangeValue = (text: string) => {
                const newItems = flatItems.filter(({ _, label }) => label.toLowerCase().includes(text.toLowerCase()));
                setData(newItems);
            };

            return (
                <CypressTestDecoratorWithTypo>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '300px' }}>
                            <Combobox
                                id="combobox"
                                label="Label"
                                placeholder="Placeholder"
                                items={data}
                                filter={() => true}
                                onChangeValue={handleChangeValue}
                                listMaxHeight="300px"
                                listOverflow="auto"
                            />
                        </div>
                    </div>
                </CypressTestDecoratorWithTypo>
            );
        };

        mount(<Component />);

        cy.get('#combobox').click();
        cy.focused().type('ри');

        cy.get('#combobox').should('have.value', 'ри');
        cy.get('ul').should('be.visible');
        cy.get('ul').find('li').should('have.length', 4);
    });

    it('flow: single mode, async items loading', () => {
        const Component = () => {
            const [value, setValue] = useState('');
            const [items, setItems] = useState([]);

            React.useEffect(() => {
                const t = setTimeout(() => {
                    setItems([
                        { value: 'A', label: 'A' },
                        { value: 'B', label: 'B' },
                        { value: 'C', label: 'C' },
                    ]);
                }, 10);

                return () => clearTimeout(t);
            }, []);

            return (
                <div style={{ width: '300px' }}>
                    <Combobox
                        id="single"
                        value={value}
                        onChange={setValue}
                        label="Label"
                        placeholder="Placeholder"
                        items={items}
                    />
                </div>
            );
        };

        mount(<Component />);

        cy.get('#single').click();
        cy.get('[id$="tree_level_1"]').should('be.visible');

        cy.get('[id$="A"]').click();
        cy.get('[id$="tree_level_1"]').should('not.exist');

        cy.get('#single').should('have.value', 'A');

        cy.get('#single').click();
        cy.get('[id$="A"]').should('have.attr', 'aria-selected', 'true');
        cy.get('[id$="B"]').should('have.attr', 'aria-selected', 'false');
        cy.get('[id$="C"]').should('have.attr', 'aria-selected', 'false');
    });

    it('flow: multiple mode, async items loading', () => {
        const Component = () => {
            const [value, setValue] = useState([]);
            const [items, setItems] = useState([]);

            React.useEffect(() => {
                const t = setTimeout(() => {
                    setItems([
                        { value: 'A', label: 'A' },
                        { value: 'B', label: 'B' },
                        { value: 'C', label: 'C' },
                    ]);
                }, 10);

                return () => clearTimeout(t);
            }, []);

            return (
                <div style={{ width: '300px' }}>
                    <Combobox
                        id="multiple"
                        value={value}
                        onChange={setValue}
                        multiple
                        label="Label"
                        placeholder="Placeholder"
                        items={items}
                    />
                </div>
            );
        };

        mount(<Component />);

        cy.get('#multiple').click();
        cy.get('[id$="tree_level_1"]').should('be.visible');

        cy.get('[id$="A"]').click();
        cy.get('[id$="tree_level_1"]').should('be.visible');
        cy.get('.has-chips').should('exist');
        cy.get('.has-chips button').should('have.length', 1);
        cy.get('.has-chips button').should('include.text', 'A');
        cy.get('[id$="A"]').should('have.attr', 'aria-selected', 'true');
        cy.get('[id$="B"]').should('have.attr', 'aria-selected', 'false');
        cy.get('[id$="C"]').should('have.attr', 'aria-selected', 'false');
    });
});
