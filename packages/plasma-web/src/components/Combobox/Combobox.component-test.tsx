import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconDone as IconDoneBase, IconTrash as IconTrashBase } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';

const IconDone = () => <IconDoneBase color="blue" />;
const IconTrash = () => <IconTrashBase color="red" />;
const StandardTypoStyle = createGlobalStyle(standardTypo);

const getSelectItems = (slug: string, elemCount: number) =>
    [...Array(elemCount).keys()].map((num) => ({
        value: `${slug}_${num}`,
        child: `${slug} ${num}`,
    }));

describe('plasma-web: Combobox', () => {
    const Combobox = getComponent('Combobox');
    const Checkbox = getComponent('Checkbox');
    const ComboboxItem = getComponent('ComboboxItem');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('single', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Combobox valueType="single" placeholder="Placeholder" />
                <SpaceMe />
                <Combobox valueType="single" label="Label" />
                <SpaceMe />
                <Combobox valueType="single" value="item_0" label="Label">
                    {getSelectItems('item', 4).map((item) => (
                        <ComboboxItem value={item.value} text={item.child} />
                    ))}
                </Combobox>
                <SpaceMe />
                <Combobox valueType="single" value="item_0" label="Label" opened>
                    <ComboboxItem value={undefined} text="Clear" />
                    {getSelectItems('item', 3).map((item) => (
                        <ComboboxItem
                            value={item.value}
                            text={item.child}
                            contentLeft={item.value === 'item_0' ? <IconDone size="s" color="inherit" /> : undefined}
                        />
                    ))}
                </Combobox>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('multiple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Combobox valueType="multiple" placeholder="Placeholder" />
                <SpaceMe />
                <Combobox valueType="multiple" label="Label" />
                <SpaceMe />
                <Combobox valueType="multiple" value={['item_0', 'item_2']} label="Label">
                    {getSelectItems('item', 4).map((item) => (
                        <ComboboxItem value={item.value} text={item.child} contentLeft={<Checkbox size="m" />} />
                    ))}
                </Combobox>
                <SpaceMe />
                <Combobox valueType="multiple" value={['item_0', 'item_2']} label="Label" opened>
                    <ComboboxItem value={undefined} text="Clear" />
                    {getSelectItems('item', 3).map((item) => (
                        <ComboboxItem value={item.value} text={item.child} contentLeft={<Checkbox size="m" />} />
                    ))}
                </Combobox>
                <PadMe style={{ height: '210px' }} />
                <Combobox
                    valueType="multiple"
                    enumerationType="chip"
                    value={['item_0', 'item_1', 'item_2']}
                    label="Label"
                >
                    {getSelectItems('item', 4).map((item) => (
                        <ComboboxItem value={item.value} text={item.child} contentLeft={<Checkbox size="m" />} />
                    ))}
                </Combobox>
                <SpaceMe />
                <Combobox valueType="multiple" enumerationType="chip" value={['item_0', 'item_2']} label="Label" opened>
                    <ComboboxItem value={undefined} text="Clear" />
                    {getSelectItems('item', 3).map((item) => (
                        <ComboboxItem value={item.value} text={item.child} contentLeft={<Checkbox size="m" />} />
                    ))}
                </Combobox>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('sizes', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Combobox valueType="single" opened value="item_0" label="Size" size="xs">
                    <ComboboxItem value="item_0" text="Single xs" />
                </Combobox>
                <PadMe style={{ height: '50px' }} />
                <Combobox valueType="multiple" enumerationType="chip" opened value={['item_0']} label="Size" size="xs">
                    <ComboboxItem value="item_0" text="iMultiple xs" />
                </Combobox>
                <PadMe style={{ height: '50px' }} />
                <Combobox valueType="single" opened value="item_0" label="Size" size="s">
                    <ComboboxItem value="item_0" text="Single s" />
                </Combobox>
                <PadMe style={{ height: '60px' }} />
                <Combobox valueType="multiple" enumerationType="chip" opened value={['item_0']} label="Size" size="s">
                    <ComboboxItem value="item_0" text="Multiple s" />
                </Combobox>
                <PadMe style={{ height: '60px' }} />
                <Combobox valueType="single" opened value="item_0" label="Size" size="m">
                    <ComboboxItem value="item_0" text="Single m" />
                </Combobox>
                <PadMe style={{ height: '70px' }} />
                <Combobox valueType="multiple" enumerationType="chip" opened value={['item_0']} label="Size" size="m">
                    <ComboboxItem value="item_0" text="Multiple m" />
                </Combobox>
                <PadMe style={{ height: '70px' }} />
                <Combobox valueType="single" opened value="item_0" label="Size" size="l">
                    <ComboboxItem value="item_0" text="Single l" />
                </Combobox>
                <PadMe style={{ height: '80px' }} />
                <Combobox valueType="multiple" enumerationType="chip" opened value={['item_0']} label="Size" size="l">
                    <ComboboxItem value="item_0" text="Multiple l" />
                </Combobox>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('views', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Combobox valueType="single" placeholder="Placeholder" disabled />
                <SpaceMe />
                <Combobox valueType="single" label="Label" readOnly />
                <SpaceMe />
                <Combobox valueType="multiple" value={['item_0', 'item_1', 'item_2']} label="Label" disabled>
                    {getSelectItems('item', 4).map((item) => (
                        <ComboboxItem value={item.value} text={item.child} />
                    ))}
                </Combobox>
                <SpaceMe />
                <Combobox
                    valueType="multiple"
                    enumerationType="chip"
                    value={['item_0', 'item_1', 'item_2']}
                    label="Label"
                    readOnly
                >
                    {getSelectItems('item', 4).map((item) => (
                        <ComboboxItem value={item.value} text={item.child} />
                    ))}
                </Combobox>
                <SpaceMe />
                <Combobox valueType="single" placeholder="Placeholder" opened>
                    <ComboboxItem value="item_0" text="item 0" />
                    <ComboboxItem disabled value="item_1" text="item 1" />
                    <ComboboxItem value="item_2" text="item 2" contentRight={IconTrash} />
                </Combobox>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });
});

describe('plasma-web: Combobox keyboard navigation', () => {
    const Combobox = getComponent('Combobox');
    const Checkbox = getComponent('Checkbox');
    const ComboboxItem = getComponent('ComboboxItem');
    const Button = getComponent('Button');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('single', () => {
        function Demo() {
            const [value, setValue] = React.useState(undefined);
            const handleOnChange = React.useCallback((newValue) => {
                setValue(newValue);
            }, []);

            return (
                <>
                    <Combobox value={value} onChangeValue={handleOnChange} placeholder="Placeholder">
                        <ComboboxItem value={undefined} text="Clear" />
                        {getSelectItems('item', 2).map((item) => (
                            <ComboboxItem
                                value={item.value}
                                text={item.child}
                                contentLeft={item.value === value ? <IconDone size="s" color="inherit" /> : undefined}
                            />
                        ))}
                        {getSelectItems('extra item', 3).map((item) => (
                            <ComboboxItem
                                value={item.value}
                                text={item.child}
                                contentLeft={item.value === value ? <IconDone size="s" color="inherit" /> : undefined}
                            />
                        ))}
                    </Combobox>
                    <Button id="button-focus">For focus</Button>
                </>
            );
        }

        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').tab();

        // открытие по ArrowDown
        cy.focused().trigger('keydown', { code: 'ArrowDown' });
        cy.get('.popover-root').should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(0);

        // закрытие по Escape
        cy.focused().trigger('keydown', { code: 'Escape' });
        cy.get('.combobox-target-input').should('be.focused');
        cy.get('.popover-root').should('not.be.visible');

        // открытие по ArrowUp
        cy.focused().trigger('keydown', { code: 'ArrowUp' });
        cy.get('.popover-root').should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(0);

        // навигация по выпадающему меню ArrowDown / ArrowUp
        cy.focused()
            .trigger('keydown', { code: 'ArrowDown' })
            .trigger('keydown', { code: 'ArrowDown' })
            .trigger('keydown', { code: 'ArrowDown' })
            .trigger('keydown', { code: 'ArrowUp' })
            .trigger('keydown', { code: 'ArrowUp' });
        cy.get('[data-value="item_0"]').should('be.focused');

        // зацикливание через верх
        cy.focused()
            .trigger('keydown', { code: 'ArrowUp' })
            .trigger('keydown', { code: 'ArrowUp' })
            .trigger('keydown', { code: 'ArrowUp' });
        cy.get('[data-value="extra item_1"]').should('be.focused');

        // зацикливание через низ
        cy.focused()
            .trigger('keydown', { code: 'ArrowDown' })
            .trigger('keydown', { code: 'ArrowDown' })
            .trigger('keydown', { code: 'ArrowDown' });
        cy.get('[data-value="item_0"]').should('be.focused');

        // выбор элемента по Enter
        cy.focused().trigger('keydown', { code: 'Enter' });
        cy.get('.combobox-target-input').should('be.focused');
        cy.get('.combobox-target-input').should('have.attr', 'value', 'item 0');
        cy.get('.popover-root').should('not.be.visible');

        // проверка чекбокса у выбранного значения
        cy.focused().trigger('keydown', { code: 'ArrowDown' });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(0);
        cy.get('[data-value="item_0"]').find('div').first().should('not.be.empty');

        // очистка выбранного значения
        cy.focused().trigger('keydown', { code: 'Enter' });
        cy.get('.combobox-target-input').should('be.focused');
        cy.get('.combobox-target-input').should('have.attr', 'value', '');
        cy.get('.popover-root').should('not.be.visible');

        // элементы не найдены
        cy.focused().trigger('keydown', { code: 'ArrowDown' });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(0);
        cy.focused().type('not item');
        cy.get('.popover-root').contains('Элементы не найдены');

        // сработал фильтр и отобразил значения
        cy.focused().clear();
        cy.focused().type('extra');
        cy.focused().trigger('keydown', { code: 'ArrowDown' });
        cy.get('[data-value="item_0"]').should('not.exist');
        cy.get('[data-value="item_1"]').should('not.exist');
        cy.get('[data-value="extra item_0"]').should('be.visible');
        cy.get('[data-value="extra item_1"]').should('be.visible');
        cy.get('[data-value="extra item_2"]').should('be.visible');

        // закрытие по Tab и фокус на следующий элемент
        cy.focused().trigger('keydown', { code: 'Tab' });
        cy.get('#button-focus').should('be.focused');
        cy.get('.popover-root').should('not.be.visible');

        cy.matchImageSnapshot();
    });

    it('multiple', () => {
        function Demo() {
            const [value, setValue] = React.useState(['item_0']);
            const handleOnChange = React.useCallback((newValue) => {
                setValue(newValue);
            }, []);

            return (
                <>
                    <Combobox
                        valueType="multiple"
                        enumerationType="chip"
                        value={value}
                        onChangeValue={handleOnChange}
                        label="Label"
                    >
                        <ComboboxItem value={undefined} text="Clear" />
                        {getSelectItems('item', 2).map((item) => (
                            <ComboboxItem value={item.value} text={item.child} contentLeft={<Checkbox size="m" />} />
                        ))}
                        {getSelectItems('extra item', 3).map((item) => (
                            <ComboboxItem value={item.value} text={item.child} contentLeft={<Checkbox size="m" />} />
                        ))}
                    </Combobox>
                    <Button id="button-focus">For focus</Button>
                </>
            );
        }

        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').tab();

        // открытие по стрелке ArrowDown
        cy.focused().trigger('keydown', { code: 'ArrowDown' });
        cy.get('.popover-root').should('be.visible');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(0);

        // выбор нескольких элементов по ArrowDown и Enter
        cy.focused().trigger('keydown', { code: 'ArrowDown' }).trigger('keydown', { code: 'Enter' });
        cy.focused().trigger('keydown', { code: 'ArrowDown' }).trigger('keydown', { code: 'Enter' });
        cy.focused().trigger('keydown', { code: 'ArrowDown' }).trigger('keydown', { code: 'Enter' });
        cy.focused().trigger('keydown', { code: 'ArrowDown' }).trigger('keydown', { code: 'Enter' });
        cy.get('.popover-target').find('button').should('have.length', 3);
        cy.get('[data-value="item_1"]').find('input').should('be.checked');
        cy.get('[data-value="extra item_0"]').find('input').should('be.checked');
        cy.get('[data-value="extra item_1"]').find('input').should('be.checked');
        cy.get('.popover-root').should('be.visible');

        // фокус на последний чип по ArrowLeft
        cy.focused().trigger('keydown', { code: 'ArrowLeft' });
        cy.get('.popover-target').find('button').eq(2).should('be.focused');

        // фокус на первый чип по ArrowLeft до конца
        cy.focused()
            .trigger('keydown', { code: 'ArrowLeft' })
            .trigger('keydown', { code: 'ArrowLeft' })
            .trigger('keydown', { code: 'ArrowLeft' })
            .trigger('keydown', { code: 'ArrowLeft' });
        cy.get('.popover-target').find('button').eq(0).should('be.focused');

        // фокус на инпуте по ArrowRight до конца
        cy.focused()
            .trigger('keydown', { code: 'ArrowRight' })
            .trigger('keydown', { code: 'ArrowRight' })
            .trigger('keydown', { code: 'ArrowRight' })
            .trigger('keydown', { code: 'ArrowRight' });
        cy.get('.combobox-target-input').should('be.focused');

        // удалён последний чип по Backspace из фокуса на инпуте
        cy.focused().trigger('keydown', { code: 'Backspace' });
        cy.get('.popover-target').find('button').should('have.length', 2);
        cy.get('[data-value="item_1"]').find('input').should('be.checked');
        cy.get('[data-value="extra item_0"]').find('input').should('be.checked');
        cy.get('[data-value="extra item_1"]').find('input').should('not.be.checked');
        cy.get('.popover-root').should('be.visible');

        // фокус на первый чип по ArrowLeft
        cy.focused().trigger('keydown', { code: 'ArrowLeft' }).trigger('keydown', { code: 'ArrowLeft' });
        cy.get('.popover-target').find('button').eq(0).should('be.focused');

        // удалён первый чип по Backspace
        cy.focused().trigger('keydown', { code: 'Backspace' });
        cy.get('.popover-target').find('button').should('have.length', 1);
        cy.get('[data-value="item_1"]').find('input').should('not.be.checked');
        cy.get('[data-value="extra item_0"]').find('input').should('be.checked');
        cy.get('[data-value="extra item_1"]').find('input').should('not.be.checked');
        cy.get('.popover-root').should('be.visible');

        // удалён оставшийся по Backspace и фокус на инпут
        cy.focused().trigger('keydown', { code: 'Backspace' });
        cy.get('.popover-target').find('button').should('have.length', 0);
        cy.get('[data-value="item_1"]').find('input').should('not.be.checked');
        cy.get('[data-value="extra item_0"]').find('input').should('not.be.checked');
        cy.get('[data-value="extra item_1"]').find('input').should('not.be.checked');
        cy.get('.combobox-target-input').should('be.focused');
        cy.get('.popover-root').should('be.visible');

        // введено значение инпут и выбраны отфильтрованные элементы
        cy.focused().type('item 1');
        cy.focused().trigger('keydown', { code: 'ArrowDown' });
        cy.focused().trigger('keydown', { code: 'Enter' });
        cy.focused().trigger('keydown', { code: 'ArrowDown' }).trigger('keydown', { code: 'Enter' });
        cy.get('.popover-target').find('button').should('have.length', 2);
        cy.get('[data-value="item_1"]').find('input').should('be.checked');
        cy.get('[data-value="extra item_1"]').find('input').should('be.checked');

        // очистка выбранного значения
        cy.focused().type(' ');
        cy.focused().clear();
        cy.focused().trigger('keydown', { code: 'ArrowDown' });
        cy.focused().trigger('keydown', { code: 'Enter' });
        cy.get('.popover-target').find('button').should('have.length', 0);

        // закрытие по Tab и фокус на следующий элемент
        cy.focused().trigger('keydown', { code: 'Tab' });
        cy.get('#button-focus').should('be.focused');
        cy.get('.popover-root').should('not.be.visible');

        cy.matchImageSnapshot();
    });
});
