import React, { useRef } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

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

describe('sdds-cs: Autocomplete', () => {
    const Autocomplete = getComponent('Autocomplete');

    function DemoWithPortal() {
        const portalRef = useRef(null);

        return (
            <div id="parentId" ref={portalRef}>
                <Autocomplete label="Label" leftHelper="Helper Text" suggestions={suggestions} portal={portalRef} />
            </div>
        );
    }

    it('default', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecorator>
                <Autocomplete label="Label" leftHelper="Helper Text" suggestions={suggestions} />
            </CypressTestDecorator>,
        );

        cy.get('input').click();
        cy.focused().type('ал');
        cy.matchImageSnapshot();
    });

    it('prop: size', () => {
        cy.viewport(1000, 300);

        mount(
            <CypressTestDecorator>
                <div style={{ display: 'flex', gap: '50px' }}>
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        size="s"
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        size="s"
                        labelPlacement="inner"
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: view', () => {
        cy.viewport(1000, 300);

        mount(
            <CypressTestDecorator>
                <div style={{ display: 'flex', gap: '50px' }}>
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="default"
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="positive"
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="warning"
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="negative"
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
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="positive"
                        labelPlacement="inner"
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="warning"
                        labelPlacement="inner"
                    />
                    <Autocomplete
                        value="Алексей"
                        label="Label"
                        leftHelper="Helper Text"
                        suggestions={suggestions}
                        view="negative"
                        labelPlacement="inner"
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: disabled', () => {
        cy.viewport(1000, 300);

        mount(
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: readOnly', () => {
        cy.viewport(1000, 300);

        mount(
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: listMaxHeight', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecorator>
                <Autocomplete label="Label" leftHelper="Helper Text" suggestions={suggestions} listMaxHeight="200px" />
            </CypressTestDecorator>,
        );

        cy.get('input').click();
        cy.focused().type('ал');
        cy.matchImageSnapshot();
    });

    it('prop: listWidth', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecorator>
                <Autocomplete label="Label" leftHelper="Helper Text" suggestions={suggestions} listWidth="400px" />
            </CypressTestDecorator>,
        );

        cy.get('input').click();
        cy.focused().type('ал');
        cy.matchImageSnapshot();
    });

    it('prop: threshold', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecorator>
                <Autocomplete label="Label" leftHelper="Helper Text" suggestions={suggestions} threshold={3} />
            </CypressTestDecorator>,
        );

        cy.get('input').click();
        cy.focused().type('ал');
        cy.get('ul[role="listbox"]').should('not.exist');
        cy.realPress('Tab');
        cy.get('input').click();
        cy.focused().type('е');
        cy.get('ul[role="listbox"]').should('be.visible');
    });

    it('prop: portal', () => {
        mount(
            <CypressTestDecorator>
                <DemoWithPortal />
            </CypressTestDecorator>,
        );

        cy.get('input').click();
        cy.focused().type('алек');

        // Проверяем, что Popover лежит выше в DOM, чем без portal
        cy.get('[id=parentId] > div').eq(1).and('have.attr', 'data-floating-ui-portal');
    });

    it('prop: required, requiredPlacement', () => {
        cy.viewport(500, 100);

        mount(
            <CypressTestDecorator>
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div style={{ width: '200px' }}>
                        <Autocomplete required label="Label" placeholder="Placeholder" suggestions={suggestions} />
                    </div>

                    <div style={{ width: '200px' }}>
                        <Autocomplete
                            required
                            requiredPlacement="left"
                            label="Label"
                            placeholder="Placeholder"
                            suggestions={suggestions}
                        />
                    </div>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: optional', () => {
        cy.viewport(400, 100);

        mount(
            <CypressTestDecorator>
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div style={{ width: '300px' }}>
                        <Autocomplete optional label="Label" placeholder="Placeholder" suggestions={suggestions} />
                    </div>
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('prop: beforeList', () => {
        cy.viewport(400, 400);

        mount(
            <CypressTestDecorator>
                <div style={{ width: '300px' }}>
                    <Autocomplete
                        label="Label"
                        placeholder="Placeholder"
                        suggestions={suggestions}
                        beforeList="Content before list"
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.get('input').click();
        cy.focused().type('алексей');

        cy.matchImageSnapshot();
    });

    it('prop: afterList', () => {
        cy.viewport(400, 400);

        mount(
            <CypressTestDecorator>
                <div style={{ width: '300px' }}>
                    <Autocomplete
                        label="Label"
                        placeholder="Placeholder"
                        suggestions={suggestions}
                        afterList="Content after list"
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.get('input').click();
        cy.focused().type('алексей');

        cy.matchImageSnapshot();
    });

    it('prop: renderItem', () => {
        cy.viewport(400, 400);

        mount(
            <CypressTestDecorator>
                <div style={{ width: '300px' }}>
                    <Autocomplete
                        label="Label"
                        placeholder="Placeholder"
                        suggestions={suggestions}
                        renderItem={(item) => <div>{item.label} render item</div>}
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.get('input').click();
        cy.focused().type('алексей');

        cy.matchImageSnapshot();
    });

    it('prop: virtual', () => {
        cy.viewport(400, 600);

        mount(
            <CypressTestDecorator>
                <div style={{ width: '300px' }}>
                    <Autocomplete
                        label="Label"
                        placeholder="Placeholder"
                        suggestions={suggestions}
                        threshold={0}
                        virtual
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.get('input').click();

        cy.matchImageSnapshot();
    });

    it('prop: virtual dynamic height', () => {
        cy.viewport(400, 600);

        mount(
            <CypressTestDecorator>
                <div style={{ width: '300px' }}>
                    <Autocomplete
                        label="Label"
                        placeholder="Placeholder"
                        suggestions={suggestions}
                        threshold={0}
                        virtual
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.get('input').click();
        cy.focused().type('алек');

        cy.matchImageSnapshot();
    });

    it('keyboard interactions', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecorator>
                <Autocomplete label="Label" leftHelper="Helper Text" suggestions={suggestions} listMaxHeight="300px" />
            </CypressTestDecorator>,
        );

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
