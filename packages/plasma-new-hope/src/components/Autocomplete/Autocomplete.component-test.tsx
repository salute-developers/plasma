import React, { useRef } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';

import type { AutocompleteProps, SuggestionItemType } from './Autocomplete.types';

const componentExists = hasComponent('Autocomplete');
const describeFn = getDescribeFN('Autocomplete');

const suggestions = [
    { label: 'Алексей Смирнов' },
    { label: 'Екатерина Иванова' },
    { label: 'Дмитрий Петров' },
    { label: 'Ольга Васильева' },
    { label: 'Сергей Сидоров' },
    { label: 'Мария Кузнецова' },
    { label: 'Андрей Попов' },
    { label: 'Анна Николаева' },
    { label: 'Иван Федоров' },
    { label: 'Наталья Морозова' },
    { label: 'Михаил Павлов' },
    { label: 'Елена Романова' },
    { label: 'Владимир Киселев' },
    { label: 'Татьяна Захарова' },
    { label: 'Николай Семенов' },
    { label: 'Юлия Белова' },
    { label: 'Александр Гусев' },
    { label: 'Оксана Яковлева' },
    { label: 'Игорь Егорова' },
    { label: 'Вера Тихомирова' },
    { label: 'Артем Григорьев' },
    { label: 'Евгения Козлова' },
    { label: 'Максим Лебедев' },
    { label: 'Виктория Калашникова' },
    { label: 'Константин Абрамов' },
    { label: 'Светлана Новикова' },
    { label: 'Юрий Волков' },
    { label: 'Валентина Воробьева' },
    { label: 'Павел Сергеев' },
    { label: 'Людмила Виноградова' },
    { label: 'Антон Соловьев' },
    { label: 'Маргарита Цветкова' },
    { label: 'Роман Трофимов' },
    { label: 'Лариса Зайцева' },
    { label: 'Евгений Никитин' },
    { label: 'Галина Михайлова' },
    { label: 'Владислав Антонов' },
    { label: 'Дарья Филатова' },
    { label: 'Олег Буров' },
    { label: 'Инна Медведева' },
    { label: 'Вячеслав Крылов' },
    { label: 'Тамара Беляева' },
    { label: 'Кирилл Марков' },
    { label: 'Марина Пономарева' },
    { label: 'Борис Захаров' },
    { label: 'Жанна Савельева' },
    { label: 'Федор Жуков' },
    { label: 'Елизавета Логинова' },
    { label: 'Виктор Рыбаков' },
    { label: 'Лилия Макарова' },
];

const autocompleteProps = {
    label: 'Label',
    leftHelper: 'Helper Text',
    value: 'Алексей',
    suggestions,
};

getBaseVisualTests({
    component: 'Autocomplete',
    componentProps: autocompleteProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Autocomplete', () => {
    const Autocomplete = componentExists ? getComponent<AutocompleteProps>('Autocomplete') : () => null;

    function DemoWithPortal() {
        const portalRef = useRef(null);

        return (
            <div id="parentId" ref={portalRef}>
                <Autocomplete label="Label" leftHelper="Helper Text" suggestions={suggestions} portal={portalRef} />
            </div>
        );
    }

    it('disabled', () => {
        cy.viewport(1000, 300);

        mount(
            <>
                <div style={{ display: 'flex', gap: '50px' }}>
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="default"
                        disabled
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="positive"
                        disabled
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="warning"
                        disabled
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="negative"
                        disabled
                    />
                </div>
                <div style={{ display: 'flex', gap: '50px' }}>
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="default"
                        labelPlacement="inner"
                        disabled
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="positive"
                        labelPlacement="inner"
                        disabled
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="warning"
                        labelPlacement="inner"
                        disabled
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="negative"
                        labelPlacement="inner"
                        disabled
                    />
                </div>
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('readOnly', () => {
        cy.viewport(1000, 300);

        mount(
            <>
                <div style={{ display: 'flex', gap: '50px' }}>
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="default"
                        readOnly
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="positive"
                        readOnly
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="warning"
                        readOnly
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="negative"
                        readOnly
                    />
                </div>
                <div style={{ display: 'flex', gap: '50px' }}>
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="default"
                        labelPlacement="inner"
                        readOnly
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="positive"
                        labelPlacement="inner"
                        readOnly
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="warning"
                        labelPlacement="inner"
                        readOnly
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="negative"
                        labelPlacement="inner"
                        readOnly
                    />
                </div>
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('listMaxHeight', () => {
        cy.viewport(1000, 500);

        mount(<Autocomplete label="Label" leftHelper="Helper Text" suggestions={suggestions} listMaxHeight="200px" />);

        cy.get('input').click();
        cy.focused().type('ал');
        cy.matchImageSnapshot();
    });

    it('listWidth', () => {
        cy.viewport(1000, 500);

        mount(<Autocomplete label="Label" leftHelper="Helper Text" suggestions={suggestions} listWidth="400px" />);

        cy.get('input').click();
        cy.focused().type('ал');
        cy.matchImageSnapshot();
    });

    it('threshold', () => {
        cy.viewport(1000, 500);

        mount(<Autocomplete label="Label" leftHelper="Helper Text" suggestions={suggestions} threshold={3} />);

        cy.get('input').click();
        cy.focused().type('ал');
        cy.get('ul[role="listbox"]').should('not.exist');
        cy.realPress('Tab');
        cy.get('input').click();
        cy.focused().type('е');
        cy.get('ul[role="listbox"]').should('be.visible');
    });

    it('portal', () => {
        mount(<DemoWithPortal />);

        cy.get('input').click();
        cy.focused().type('алек');

        cy.get('[id=parentId] > div').eq(1).and('have.attr', 'data-floating-ui-portal');
    });

    it('required, requiredPlacement', () => {
        cy.viewport(500, 106);

        mount(
            <div style={{ display: 'flex', gap: '30px' }}>
                <div style={{ width: '200px' }}>
                    <Autocomplete
                        required
                        hasRequiredIndicator
                        label="Label"
                        placeholder="Placeholder"
                        suggestions={suggestions}
                    />
                </div>
                <div style={{ width: '200px' }}>
                    <Autocomplete
                        required
                        hasRequiredIndicator
                        requiredPlacement="left"
                        label="Label"
                        placeholder="Placeholder"
                        suggestions={suggestions}
                    />
                </div>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('optional', () => {
        cy.viewport(400, 106);

        mount(
            <div style={{ display: 'flex', gap: '30px' }}>
                <div style={{ width: '300px' }}>
                    <Autocomplete optional label="Label" placeholder="Placeholder" suggestions={suggestions} />
                </div>
            </div>,
        );

        cy.matchImageSnapshot();
    });

    it('beforeList', () => {
        cy.viewport(400, 400);

        mount(
            <div style={{ width: '300px' }}>
                <Autocomplete
                    label="Label"
                    placeholder="Placeholder"
                    suggestions={suggestions}
                    beforeList="Content before list"
                />
            </div>,
        );

        cy.get('input').click();
        cy.focused().type('алексей');
        cy.matchImageSnapshot();
    });

    it('afterList', () => {
        cy.viewport(400, 400);

        mount(
            <div style={{ width: '300px' }}>
                <Autocomplete
                    label="Label"
                    placeholder="Placeholder"
                    suggestions={suggestions}
                    afterList="Content after list"
                />
            </div>,
        );

        cy.get('input').click();
        cy.focused().type('алексей');
        cy.matchImageSnapshot();
    });

    it('renderItem', () => {
        cy.viewport(400, 400);

        mount(
            <div style={{ width: '300px' }}>
                <Autocomplete
                    label="Label"
                    placeholder="Placeholder"
                    suggestions={suggestions}
                    renderItem={(item: SuggestionItemType) => <div>{item.label} render item</div>}
                />
            </div>,
        );

        cy.get('input').click();
        cy.focused().type('алексей');
        cy.matchImageSnapshot();
    });

    it('virtual', () => {
        cy.viewport(400, 600);

        mount(
            <div style={{ width: '300px' }}>
                <Autocomplete label="Label" placeholder="Placeholder" suggestions={suggestions} threshold={0} virtual />
            </div>,
        );

        cy.get('input').click();
        cy.matchImageSnapshot();
    });

    it('virtual dynamic height', () => {
        cy.viewport(400, 600);

        mount(
            <div style={{ width: '300px' }}>
                <Autocomplete label="Label" placeholder="Placeholder" suggestions={suggestions} threshold={0} virtual />
            </div>,
        );

        cy.get('input').click();
        cy.focused().type('алек');
        cy.matchImageSnapshot();
    });

    it('flip', () => {
        cy.viewport(400, 600);

        mount(
            <div style={{ width: '300px' }}>
                <div style={{ height: '400px' }} />
                <Autocomplete label="Label" placeholder="Placeholder" suggestions={suggestions} threshold={0} flip />
            </div>,
        );

        cy.get('input').click();
        cy.matchImageSnapshot();
    });

    it('keyboard interactions', () => {
        cy.viewport(1000, 500);

        mount(<Autocomplete label="Label" leftHelper="Helper Text" suggestions={suggestions} listMaxHeight="300px" />);

        cy.get('input').click();
        cy.focused().type('ал');

        // Arrow Down & End
        cy.realPress('ArrowDown');
        cy.get('ul').should('be.visible');
        cy.get('ul li').first().should('have.class', 'suggestion-item-is-focused');
        cy.realPress('ArrowDown');
        cy.get('ul li').first().should('not.have.class', 'suggestion-item-is-focused');
        cy.get('ul li').first().next().should('have.class', 'suggestion-item-is-focused');
        cy.realPress('End');
        cy.get('ul li').last().should('have.class', 'suggestion-item-is-focused');
        cy.realPress('ArrowDown');
        cy.get('ul li').last().should('have.class', 'suggestion-item-is-focused');
        cy.realPress('Tab');

        // Arrow Up & Home
        cy.get('input').click();
        cy.realPress('ArrowUp');
        cy.get('ul').should('be.visible');
        cy.get('ul li').last().should('have.class', 'suggestion-item-is-focused');
        cy.realPress('ArrowUp');
        cy.get('ul li').last().prev().should('have.class', 'suggestion-item-is-focused');
        cy.realPress('Home');
        cy.get('ul li').first().should('have.class', 'suggestion-item-is-focused');
        cy.realPress('ArrowUp');
        cy.get('ul li').first().should('have.class', 'suggestion-item-is-focused');
        cy.realPress('Tab');

        // Enter
        cy.get('input').click();
        cy.realPress('ArrowDown');
        cy.realPress('Enter');
        cy.get('ul').should('not.exist');
        cy.get('input').should('have.value', 'Алексей Смирнов');

        // Tab
        cy.realPress('Tab');
        cy.get('input').should('not.have.focus');
    });
});
