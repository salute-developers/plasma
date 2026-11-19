import React, { createRef, useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';

import type { WheelProps, WheelValue, WheelAlignment } from './Wheel.types';

const componentExists = hasComponent('Wheel');
const describeFn = getDescribeFN('Wheel');

const items = Array.from({ length: 9 }, (_, value) => ({ value, label: String(value) }));
const columns: WheelProps['columns'] = [
    { name: 'first', label: 'Первый', items, description: 'Часы', textAfter: 'ч' },
    { name: 'second', label: 'Второй', items },
];
const componentProps: WheelProps = {
    value: { first: 4, second: 3 },
    columns,
    animated: false,
};

const selectedOption = (column = 0) => cy.get('[role="listbox"]').eq(column).find('[aria-selected="true"]');
const getContent = (row: Element) => row.querySelector<HTMLElement>('.plasma-wheel-item-content');
const getDescription = (element: Element) =>
    element.closest('[role="listbox"]')?.querySelector<HTMLElement>('.plasma-wheel-description');
const checkFixedContent = (description: HTMLElement, position: DOMRect) => {
    const current = description.getBoundingClientRect();
    expect(current.top).to.be.closeTo(position.top, 0.5);
    expect(current.left).to.be.closeTo(position.left, 0.5);
    expect(current.height).to.be.closeTo(position.height, 0.5);
    expect(current.width).to.be.closeTo(position.width, 0.5);
    expect(getComputedStyle(description).opacity).to.equal('1');
    expect(getComputedStyle(description).transform).to.equal('none');
    expect(description.getAnimations({ subtree: true })).to.have.length(0);
};
const getAnchor = (rect: DOMRect, align: Exclude<WheelAlignment, 'mixed'>) => {
    if (align === 'left') {
        return rect.left;
    }
    return align === 'right' ? rect.right : rect.left + rect.width / 2;
};
const expectedAlignment = (align: WheelAlignment, index: number, count: number) => {
    if (align !== 'mixed' || count === 1) {
        return align === 'mixed' ? 'center' : align;
    }
    if (index === 0) {
        return 'right';
    }
    return index === count - 1 ? 'left' : 'center';
};
const checkAlignment = (viewport: HTMLElement, align: Exclude<WheelAlignment, 'mixed'>) => {
    const style = getComputedStyle(viewport);
    const padding = { left: parseFloat(style.paddingLeft), right: -parseFloat(style.paddingRight), center: 0 }[align];
    const expected = getAnchor(viewport.getBoundingClientRect(), align) + padding;
    const elements = [
        ...Array.from(viewport.querySelectorAll<HTMLElement>('[role="option"] > .plasma-wheel-item-content')),
        ...Array.from(viewport.closest('.plasma-wheel-column')?.querySelectorAll('button') ?? []),
    ];
    const description = viewport.querySelector<HTMLElement>('[id$="-description"]');
    if (description) {
        elements.push(description);
    }
    elements.forEach((element) => expect(getAnchor(element.getBoundingClientRect(), align)).to.be.closeTo(expected, 1));
};
const pauseAnimations = (viewport: HTMLElement, progress: number) => {
    const animations = viewport.getAnimations({ subtree: true });
    expect(animations.length).to.be.greaterThan(0);
    animations.forEach((animation) => {
        animation.pause();
        animation.currentTime = Number(animation.effect?.getTiming().duration) * progress;
    });
    return animations;
};

getBaseVisualTests({
    component: 'Wheel',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
    actionBeforeSnapshot: () => cy.viewport(1400, 1000),
});

describeFn('plasma-new-hope: Wheel', () => {
    const Wheel = componentExists
        ? getComponent<WheelProps & React.RefAttributes<HTMLDivElement>>('Wheel')
        : () => null;

    const Demo = ({
        initialValue = componentProps.value,
        columns: demoColumns = columns,
        onChange,
        ...rest
    }: Omit<Partial<WheelProps>, 'value'> & { initialValue?: WheelValue }) => {
        const [value, setValue] = useState(initialValue);
        return (
            <Wheel
                {...componentProps}
                {...rest}
                columns={demoColumns}
                value={value}
                onChange={(next, column) => {
                    setValue(next);
                    onChange?.(next, column);
                }}
            />
        );
    };

    const pauseNewAnimations = () => {
        cy.window().then((win) => {
            const { animate } = win.Element.prototype;
            // Проверяем реальные кадры без зависимости от скорости выполнения Cypress.
            cy.stub(win.Element.prototype, 'animate').callsFake(function (
                this: Element,
                ...args: Parameters<typeof animate>
            ) {
                const animation = animate.apply(this, args);
                animation.pause();
                return animation;
            });
        });
    };

    beforeEach(() => cy.viewport(1400, 1000));

    it('exposes accessible listboxes, descriptions and the root ref', () => {
        const ref = createRef<HTMLDivElement>();
        mount(<Wheel {...componentProps} ref={ref} aria-label="Время" />);

        cy.get('[role="group"]').should('have.attr', 'aria-label', 'Время');
        cy.get('[role="group"]').then(($root) => expect(ref.current).to.equal($root[0]));
        cy.get('[role="listbox"]').should('have.length', 2);
        cy.get('[role="listbox"]').first().focus().should('have.focus');
        cy.get('[role="listbox"]').first().should('have.attr', 'aria-label', 'Первый');
        cy.get('[role="listbox"]').each(($column) => {
            const activeId = $column.attr('aria-activedescendant');
            expect($column.find('[aria-selected="true"]').attr('id')).to.equal(activeId);
            expect($column).to.have.attr('tabindex', '0');
        });
        selectedOption().should('have.attr', 'aria-posinset', '5').and('have.attr', 'aria-setsize', '9');
        cy.get('[role="listbox"]')
            .first()
            .then(($column) => {
                const description = getDescription($column.find('[aria-selected="true"]')[0]);
                expect(description?.id).to.equal($column.attr('aria-describedby'));
                expect(description?.textContent).to.equal('Часы');
            });
        cy.get('button').each(($button) => expect($button).to.have.attr('tabindex', '-1'));
    });

    it('emits the full controlled value and waits for a parent update', () => {
        const onChange = cy.stub().as('onChange');
        const Controlled = () => {
            const [value, setValue] = useState(componentProps.value);
            return (
                <>
                    <button type="button" data-cy="update" onClick={() => setValue({ first: 5, second: 6 })}>
                        Обновить
                    </button>
                    <Wheel {...componentProps} value={value} onChange={onChange} />
                </>
            );
        };
        mount(<Controlled />);

        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        cy.get('@onChange').should('have.been.calledOnceWithExactly', { first: 5, second: 3 }, 'first');
        selectedOption().should('have.attr', 'aria-label', '4');
        cy.get('[data-cy="update"]').click();
        selectedOption().should('have.attr', 'aria-label', '5');
        selectedOption(1).should('have.attr', 'aria-label', '6');
        cy.get('@onChange').should('have.been.calledOnce');
    });

    it('selects values with controls and row clicks independently', () => {
        const onChange = cy.stub().as('onChange');
        mount(<Demo onChange={onChange} />);

        cy.get('[role="option"], [role="option"] *, button, button *').each(($element) => {
            expect($element).to.have.css('-webkit-tap-highlight-color', 'rgba(0, 0, 0, 0)');
        });
        cy.get('button[aria-label="Первый: следующее значение"]').click();
        selectedOption().should('have.attr', 'aria-label', '5');
        cy.get('button[aria-label="Первый: предыдущее значение"]').click();
        selectedOption().should('have.attr', 'aria-label', '4');
        cy.get('[role="listbox"]').last().find('[data-offset="2"]').click();
        selectedOption(1).should('have.attr', 'aria-label', '5');
        cy.get('@onChange').should('have.been.calledWithExactly', { first: 4, second: 5 }, 'second');
        cy.get('@onChange').should('have.been.calledThrice');
    });

    it('skips disabled options with arrows and Home/End and respects boundaries', () => {
        const onChange = cy.stub().as('onChange');
        mount(
            <Demo
                onChange={onChange}
                columns={[
                    { ...columns[0], items: items.map((item) => ({ ...item, disabled: [0, 5].includes(item.value) })) },
                    columns[1],
                ]}
            />,
        );

        cy.get('[role="listbox"]')
            .first()
            .find('[data-offset="1"]')
            .should('have.css', 'cursor', 'not-allowed')
            .click();
        selectedOption().should('have.css', 'cursor', 'pointer');
        cy.get('@onChange').should('not.have.been.called');
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        selectedOption().should('have.attr', 'aria-label', '6');
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowUp' });
        selectedOption().should('have.attr', 'aria-label', '4');
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'End' }).trigger('keydown', { key: 'ArrowDown' });
        selectedOption().should('have.attr', 'aria-label', '8');
        cy.get('button[aria-label="Первый: следующее значение"]')
            .should('be.disabled')
            .and('have.css', 'cursor', 'not-allowed');
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'Home' }).trigger('keydown', { key: 'ArrowUp' });
        selectedOption().should('have.attr', 'aria-label', '1');
        cy.get('button[aria-label="Первый: предыдущее значение"]').should('be.disabled');
        selectedOption(1).should('have.attr', 'aria-label', '3');
        cy.get('@onChange').should('have.callCount', 4);
    });

    it('loops only the configured column', () => {
        mount(<Demo initialValue={{ first: 8, second: 8 }} columns={[{ ...columns[0], loop: true }, columns[1]]} />);

        cy.get('button[aria-label="Первый: следующее значение"]').should('not.be.disabled');
        cy.get('button[aria-label="Второй: следующее значение"]').should('be.disabled');
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        cy.get('[role="listbox"]').last().trigger('keydown', { key: 'ArrowDown' });
        selectedOption().should('have.attr', 'aria-label', '0');
        selectedOption(1).should('have.attr', 'aria-label', '8');
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowUp' });
        selectedOption().should('have.attr', 'aria-label', '8');
    });

    it('does not search indefinitely when a looping column has only one enabled option', () => {
        const onChange = cy.stub().as('onChange');
        mount(
            <Demo
                onChange={onChange}
                columns={[
                    {
                        ...columns[0],
                        loop: true,
                        items: items.map((item) => ({ ...item, disabled: item.value !== 4 })),
                    },
                ]}
            />,
        );

        cy.get('button').each(($button) => expect($button).to.be.disabled);
        cy.get('[role="listbox"]').trigger('keydown', { key: 'ArrowDown' }).trigger('keydown', { key: 'ArrowUp' });
        selectedOption().should('have.attr', 'aria-label', '4');
        cy.get('@onChange').should('not.have.been.called');
    });

    it('disables every input method for the entire Wheel', () => {
        const onChange = cy.stub().as('onChange');
        mount(<Demo disabled onChange={onChange} />);

        cy.get('[role="group"]').should('have.attr', 'aria-disabled', 'true').and('have.css', 'cursor', 'not-allowed');
        cy.get('[role="listbox"]').each(($column) => {
            expect($column).to.have.attr('aria-disabled', 'true');
            expect($column).to.have.attr('tabindex', '-1');
            expect($column).to.have.css('cursor', 'not-allowed');
        });
        cy.get('[role="option"], button, .plasma-wheel-description').each(($element) => {
            expect($element).to.have.css('cursor', 'not-allowed');
        });
        cy.get('button').each(($button) => expect($button).to.be.disabled);
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' }).trigger('wheel', { deltaY: 80 });
        cy.get('[role="listbox"]')
            .first()
            .trigger('pointerdown', { pointerId: 1, isPrimary: true, button: 0, clientY: 500 })
            .trigger('pointermove', { pointerId: 1, clientY: 0 })
            .trigger('pointerup', { pointerId: 1 });
        cy.get('[role="listbox"]').first().find('[data-offset="1"]').click({ force: true });
        selectedOption().should('have.attr', 'aria-label', '4');
        cy.get('@onChange').should('not.have.been.called');

        cy.matchImageSnapshot();
    });

    [
        { name: 'a disabled column', column: { ...columns[0], disabled: true } },
        { name: 'an empty list', column: { ...columns[0], items: [] } },
        {
            name: 'an all-disabled list',
            column: { ...columns[0], loop: true, items: items.map((item) => ({ ...item, disabled: true })) },
        },
    ].forEach(({ name, column }) => {
        it(`keeps the adjacent column active with ${name}`, () => {
            const onChange = cy.stub().as('onChange');
            mount(<Demo columns={[column, columns[1]]} onChange={onChange} />);

            cy.get('[role="listbox"]')
                .first()
                .should('have.attr', 'aria-disabled', 'true')
                .and('have.attr', 'tabindex', '-1')
                .and('have.css', 'cursor', 'not-allowed');
            cy.get('[role="listbox"]')
                .first()
                .find('[data-offset]')
                .each(($item) => expect($item).to.have.css('cursor', 'not-allowed'));
            cy.get('[role="listbox"]').last().should('not.have.css', 'cursor', 'not-allowed');
            selectedOption(1).should('have.css', 'cursor', 'pointer');
            cy.get('[role="listbox"]')
                .first()
                .trigger('keydown', { key: 'ArrowDown' })
                .trigger('wheel', { deltaY: 80 });
            cy.get('@onChange').should('not.have.been.called');
            if (name === 'an empty list') {
                cy.get('[role="listbox"]').first().should('not.have.attr', 'aria-activedescendant');
                cy.get('[role="listbox"]').first().find('[role="option"]').should('not.exist');
            }
            cy.get('[role="listbox"]').last().trigger('keydown', { key: 'ArrowDown' });
            selectedOption(1).should('have.attr', 'aria-label', '4');
            cy.get('@onChange').should('have.been.calledOnceWithExactly', { first: 4, second: 4 }, 'second');
        });
    });

    it('uses an enabled fallback for a missing value without changing controlled state', () => {
        const onChange = cy.stub().as('onChange');
        mount(
            <Wheel
                {...componentProps}
                value={{ first: 99, second: 3 }}
                columns={[
                    { ...columns[0], items: items.map((item) => ({ ...item, disabled: item.value === 0 })) },
                    columns[1],
                ]}
                onChange={onChange}
            />,
        );

        selectedOption().should('have.attr', 'aria-label', '1');
        cy.get('@onChange').should('not.have.been.called');
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        cy.get('@onChange').should('have.been.calledOnceWithExactly', { first: 2, second: 3 }, 'first');
    });

    it('distinguishes numeric and string option values', () => {
        const onChange = cy.stub().as('onChange');
        mount(
            <Demo
                initialValue={{ first: 1, second: 3 }}
                onChange={onChange}
                columns={[
                    {
                        ...columns[0],
                        items: [
                            { value: 1, label: 'Число' },
                            { value: '1', label: 'Строка' },
                        ],
                    },
                    columns[1],
                ]}
            />,
        );

        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        selectedOption().should('have.attr', 'aria-label', 'Строка');
        cy.get('@onChange').should('have.been.calledWithExactly', { first: '1', second: 3 }, 'first');
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowUp' });
        selectedOption().should('have.attr', 'aria-label', 'Число');
        cy.get('@onChange').should('have.been.calledWithExactly', { first: 1, second: 3 }, 'first');
    });

    it('accumulates wheel deltas and ignores zoom and horizontal scrolling', () => {
        const onChange = cy.stub().as('onChange');
        cy.clock(Date.now(), ['Date']);
        mount(<Demo onChange={onChange} />);

        cy.get('[role="listbox"]').first().trigger('wheel', { deltaY: 10 });
        selectedOption().should('have.attr', 'aria-label', '4');
        cy.get('[role="listbox"]').first().trigger('wheel', { deltaY: 30 });
        selectedOption().should('have.attr', 'aria-label', '5');
        cy.get('[role="listbox"]').first().trigger('wheel', { deltaY: 100, ctrlKey: true });
        cy.get('[role="listbox"]').first().trigger('wheel', { deltaY: 10, deltaX: 80 });
        selectedOption().should('have.attr', 'aria-label', '5');
        cy.get('[role="listbox"]').first().trigger('wheel', { deltaY: 20 }).trigger('wheel', { deltaY: -20 });
        selectedOption().should('have.attr', 'aria-label', '5');
        cy.get('[role="listbox"]').first().trigger('wheel', { deltaY: -20 });
        selectedOption().should('have.attr', 'aria-label', '4');
        cy.get('@onChange').should('have.been.calledTwice');

        cy.get('[role="listbox"]').first().trigger('wheel', { deltaY: 20 });
        cy.tick(201);
        cy.get('[role="listbox"]').first().trigger('wheel', { deltaY: 20 });
        selectedOption().should('have.attr', 'aria-label', '4');
        cy.get('[role="listbox"]').first().trigger('wheel', { deltaY: 20 });
        selectedOption().should('have.attr', 'aria-label', '5');
        cy.get('@onChange').should('have.been.calledThrice');
    });

    it('supports wheel deltas measured in lines and pages', () => {
        mount(<Demo />);
        cy.get('[role="listbox"]')
            .first()
            .trigger('wheel', { eventConstructor: 'WheelEvent', deltaMode: 1, deltaY: 3 });
        selectedOption().should('have.attr', 'aria-label', '5');
        cy.get('[role="listbox"]')
            .first()
            .trigger('wheel', { eventConstructor: 'WheelEvent', deltaMode: 2, deltaY: 1 });
        selectedOption().should('have.attr', 'aria-label', '6');
    });

    ([3, 5] as const).forEach((visibleItemsCount) => {
        it(`renders ${visibleItemsCount} accessible rows and hides animation buffers`, () => {
            mount(<Demo visibleItemsCount={visibleItemsCount} />);
            cy.get('[role="listbox"]').each(($column) => {
                expect($column.find('[role="option"]')).to.have.length(visibleItemsCount);
                expect($column.find('[data-offset]')).to.have.length(visibleItemsCount + 2);
                expect($column.find('[aria-selected="true"]')).to.have.length(1);
                $column.find('[data-buffer]').each((_, buffer) => {
                    expect(buffer).to.have.attr('aria-hidden', 'true');
                    expect(buffer.hasAttribute('role')).to.equal(false);
                });
            });

            cy.matchImageSnapshot();
        });

        it(`drags with ${visibleItemsCount} rows and suppresses only the synthetic click`, () => {
            const onChange = cy.stub().as('onChange');
            mount(<Demo visibleItemsCount={visibleItemsCount} onChange={onChange} />);
            cy.get('[role="listbox"]')
                .first()
                .then(($column) => {
                    cy.stub($column[0], 'setPointerCapture').as('capture');
                    const threshold = Math.max(16, $column[0].clientHeight / visibleItemsCount);
                    cy.wrap($column)
                        .trigger('pointerdown', { pointerId: 1, isPrimary: true, button: 0, clientY: 800 })
                        .trigger('pointermove', { pointerId: 1, clientY: 800 - threshold + 1 });
                    selectedOption().should('have.attr', 'aria-label', '4');
                    cy.wrap($column)
                        .trigger('pointermove', { pointerId: 1, clientY: 800 - threshold - 1 })
                        .trigger('pointerup', { pointerId: 1, clientY: 800 - threshold - 1 })
                        .trigger('pointermove', { pointerId: 1, clientY: 0 });
                });
            selectedOption().should('have.attr', 'aria-label', '5');
            cy.get('@capture').should('have.been.calledOnceWithExactly', 1);
            cy.get('[role="listbox"]').first().find('[data-offset="1"]').trigger('click');
            selectedOption().should('have.attr', 'aria-label', '5');
            cy.get('[role="listbox"]').first().find('[data-offset="1"]').trigger('click');
            selectedOption().should('have.attr', 'aria-label', '6');
            cy.get('@onChange').should('have.been.calledTwice');
        });

        it(`animates values while keeping one fixed column description with ${visibleItemsCount} rows`, () => {
            pauseNewAnimations();
            mount(<Demo animated visibleItemsCount={visibleItemsCount} />);
            let incoming: HTMLElement;
            let caption: HTMLElement;
            let position: DOMRect;
            cy.get('[role="listbox"]')
                .first()
                .then(($column) => {
                    [incoming] = $column.find('[data-offset="1"]');
                    expect($column.find('.plasma-wheel-description')).to.have.length(1);
                    expect($column.find('[role="option"] .plasma-wheel-description')).to.have.length(0);
                    caption = getDescription($column[0])!;
                    position = caption.getBoundingClientRect();
                });
            cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
            cy.get('[role="listbox"]')
                .first()
                .then(($column) => {
                    expect($column.find('[aria-selected="true"]')[0]).to.equal(incoming);
                    expect(getDescription($column[0])).to.equal(caption);
                    const label = getContent(incoming)!;
                    const animations = pauseAnimations($column[0], 0);
                    const start = label.getBoundingClientRect();
                    const startOpacity = Number(getComputedStyle(label).opacity);
                    checkFixedContent(caption, position);

                    pauseAnimations($column[0], 0.5);
                    const middle = label.getBoundingClientRect();
                    expect(middle.height).to.be.greaterThan(start.height);
                    expect(middle.top).to.be.lessThan(start.top);
                    expect(Number(getComputedStyle(label).opacity)).to.be.greaterThan(startOpacity);
                    checkFixedContent(caption, position);

                    animations.forEach((animation) => animation.finish());
                    const end = label.getBoundingClientRect();
                    expect(end.height).to.be.greaterThan(middle.height);
                    expect(end.top).to.be.lessThan(middle.top);
                    checkFixedContent(caption, position);
                });
            cy.get('[role="listbox"]').first().should('not.have.attr', 'data-animating');
        });
    });

    it('preserves selection when switching between three and five rows', () => {
        const onChange = cy.stub().as('onChange');
        const Dynamic = () => {
            const [count, setCount] = useState<3 | 5>(5);
            return (
                <>
                    <button type="button" data-cy="count" onClick={() => setCount(count === 5 ? 3 : 5)}>
                        Переключить
                    </button>
                    <Demo visibleItemsCount={count} onChange={onChange} />
                </>
            );
        };
        mount(<Dynamic />);
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        cy.get('[data-cy="count"]').click();
        cy.get('[role="listbox"]').first().find('[role="option"]').should('have.length', 3);
        selectedOption().should('have.attr', 'aria-label', '5');
        cy.get('[data-cy="count"]').click();
        cy.get('[role="listbox"]').first().find('[role="option"]').should('have.length', 5);
        selectedOption().should('have.attr', 'aria-label', '5');
        cy.get('@onChange').should('have.been.calledOnce');
    });

    ([3, 5] as const).forEach((visibleItemsCount) => {
        it(`keeps the width of the widest item outside the ${visibleItemsCount} visible rows`, () => {
            mount(
                <Demo
                    visibleItemsCount={visibleItemsCount}
                    initialValue={{ first: 0 }}
                    columns={[
                        {
                            name: 'first',
                            label: 'Первый',
                            items: items.map((item) => ({ ...item, label: item.value === 8 ? 'WWWWWWWW' : 'I' })),
                        },
                    ]}
                />,
            );
            let width: number;
            cy.get('[role="listbox"]').then(($column) => {
                width = $column[0].getBoundingClientRect().width;
                expect(width).to.be.greaterThan(
                    getContent($column.find('[aria-selected="true"]')[0])!.getBoundingClientRect().width,
                );
            });
            cy.get('[role="listbox"]').find('[aria-label="WWWWWWWW"]').should('not.exist');
            cy.get('[role="listbox"]').trigger('keydown', { key: 'End' });
            selectedOption().should('have.attr', 'aria-label', 'WWWWWWWW');
            selectedOption().then(($row) => {
                expect(getContent($row[0])!.getBoundingClientRect().width).to.be.closeTo(width, 0.5);
            });
            cy.get('[role="group"]').then(($root) =>
                expect($root[0].getBoundingClientRect().width).to.be.closeTo(width, 0.5),
            );
            cy.get('[role="listbox"]').trigger('keydown', { key: 'Home' });
            cy.get('[role="listbox"]').then(($column) =>
                expect($column[0].getBoundingClientRect().width).to.be.closeTo(width, 0.5),
            );
        });
    });

    it('keeps intrinsic column width even when content is wider than the viewport', () => {
        mount(
            <Demo
                initialValue={{ first: 0 }}
                columns={[
                    {
                        name: 'first',
                        label: 'Первый',
                        items: items.map((item) => ({
                            ...item,
                            label: (
                                <span style={{ display: 'inline-block', width: item.value === 8 ? 1800 : 24 }}>
                                    {item.label}
                                </span>
                            ),
                            textValue: String(item.value),
                        })),
                    },
                ]}
            />,
        );
        cy.get('[role="listbox"]').then(($column) => expect($column[0].getBoundingClientRect().width).to.equal(1800));
        cy.get('[role="group"]').then(($root) => expect($root[0].getBoundingClientRect().width).to.equal(1800));
    });

    it('includes custom selected content and textAfter in the intrinsic column width', () => {
        mount(
            <Demo
                initialValue={{ first: 0 }}
                columns={[
                    {
                        name: 'first',
                        label: 'Первый',
                        items,
                        renderItem: (item, { selected }) => (
                            <span
                                style={{ display: 'inline-block', width: selected ? 40 + Number(item.value) * 20 : 10 }}
                            >
                                {item.label}
                            </span>
                        ),
                        textAfter: <span style={{ display: 'inline-block', width: 20 }}>ч</span>,
                    },
                ]}
            />,
        );
        let width: number;
        cy.get('[role="listbox"]').then(($column) => {
            width = $column[0].getBoundingClientRect().width;
            expect(width).to.be.greaterThan(220);
        });
        cy.get('[role="listbox"]').trigger('keydown', { key: 'End' });
        selectedOption().then(($row) =>
            expect(getContent($row[0])!.getBoundingClientRect().width).to.be.closeTo(width, 0.5),
        );
        cy.get('[role="listbox"]').then(($column) =>
            expect($column[0].getBoundingClientRect().width).to.be.closeTo(width, 0.5),
        );
        cy.get('[inert]').should('have.length', 1).and('have.attr', 'aria-hidden', 'true');
        cy.get('[inert]').should('not.be.visible');
        cy.get('[role="option"]').should('have.length', 3);
    });

    it('reserves the width of a description wider than the options', () => {
        mount(
            <Demo
                columns={[
                    {
                        ...columns[1],
                        description: <span style={{ display: 'inline-block', width: 320 }}>Описание</span>,
                    },
                ]}
            />,
        );
        cy.get('[role="listbox"]').then(($column) => expect($column[0].getBoundingClientRect().width).to.equal(320));
        cy.get('[role="group"]').then(($root) => expect($root[0].getBoundingClientRect().width).to.equal(320));
    });

    it('stretches to a 348px example container', () => {
        mount(
            <div style={{ width: 348 }}>
                <Demo width="100%" separator="dots" />
            </div>,
        );
        cy.get('[role="group"]').then(($root) => expect($root[0].getBoundingClientRect().width).to.equal(348));
        cy.get('[role="listbox"]').each(($column) => checkAlignment($column[0], 'center'));
    });

    ([3, 5] as const).forEach((visibleItemsCount) => {
        it(`keeps one static textAfter anchored to the widest item with ${visibleItemsCount} rows`, () => {
            pauseNewAnimations();
            mount(
                <Demo
                    animated
                    visibleItemsCount={visibleItemsCount}
                    textAfterMode="static"
                    columns={[
                        {
                            ...columns[0],
                            loop: true,
                            items: items.map((item) => ({
                                ...item,
                                label: (
                                    <span style={{ display: 'inline-block', width: item.value === 8 ? 180 : 20 }}>
                                        {item.label}
                                    </span>
                                ),
                                textValue: String(item.value),
                            })),
                            textAfter: <span style={{ display: 'inline-block', width: 80 }}>ч</span>,
                        },
                    ]}
                />,
            );
            let caption: HTMLElement;
            let position: DOMRect;
            let width: number;
            cy.get('[role="listbox"]').then(($column) => {
                expect($column.find('.plasma-wheel-text-after')).to.have.length(1);
                expect($column.find('[role="option"] .plasma-wheel-text-after')).to.have.length(0);
                [caption] = $column.find('.plasma-wheel-text-after');
                position = caption.getBoundingClientRect();
                const content = getContent($column.find('[aria-selected="true"]')[0])!;
                const gap = parseFloat(getComputedStyle(content).columnGap);
                width = $column[0].getBoundingClientRect().width;
                expect(width).to.equal(180 + 2 * (80 + gap));
                expect(position.left).to.be.closeTo(
                    $column[0].getBoundingClientRect().left + width / 2 + 90 + gap,
                    0.5,
                );
                expect($column.attr('aria-describedby')?.split(' ')).to.include(caption.id);
                expect($column.attr('aria-describedby')?.split(' ')).to.include(getDescription($column[0])!.id);
                checkAlignment($column[0], 'center');
            });
            cy.get('[role="group"]').should('not.have.attr', 'textAfterMode');
            cy.get('[role="listbox"]').find('[aria-label="8"]').should('not.exist');
            cy.get('[role="listbox"]').trigger('keydown', { key: 'ArrowDown' });
            cy.get('[role="listbox"]').then(($column) => {
                expect($column.find('.plasma-wheel-text-after')[0]).to.equal(caption);
                const animations = pauseAnimations($column[0], 0.5);
                checkFixedContent(caption, position);
                animations.forEach((animation) => animation.finish());
                expect($column[0].getBoundingClientRect().width).to.equal(width);
            });
            cy.get('[role="listbox"]').trigger('keydown', { key: 'End' });
            cy.get('[role="listbox"]').then(($column) => {
                pauseAnimations($column[0], 1).forEach((animation) => animation.finish());
                checkFixedContent(caption, position);
                expect($column[0].getBoundingClientRect().width).to.equal(width);
                checkAlignment($column[0], 'center');
            });
            cy.matchImageSnapshot();
        });
    });

    it('switches between dynamic and static textAfter without changing the value', () => {
        const onChange = cy.stub().as('onChange');
        const Dynamic = () => {
            const [mode, setMode] = useState<'dynamic' | 'static'>('dynamic');
            return (
                <>
                    <button
                        type="button"
                        data-cy="mode"
                        onClick={() => setMode(mode === 'dynamic' ? 'static' : 'dynamic')}
                    >
                        Изменить режим
                    </button>
                    <Demo textAfterMode={mode} onChange={onChange} columns={[columns[0]]} />
                </>
            );
        };
        mount(<Dynamic />);
        let width: number;
        cy.get('[role="group"]').then(($root) => {
            width = $root[0].getBoundingClientRect().width;
        });
        cy.get('[role="listbox"]').find('[role="option"] .plasma-wheel-text-after').should('have.length', 5);
        cy.get('[data-cy="mode"]').click();
        cy.get('[role="listbox"]').find('.plasma-wheel-text-after').should('have.length', 1);
        cy.get('[role="group"]').should(($root) =>
            expect($root[0].getBoundingClientRect().width).to.be.greaterThan(width),
        );
        cy.get('[data-cy="mode"]').click();
        cy.get('[role="listbox"]').find('[role="option"] .plasma-wheel-text-after').should('have.length', 5);
        cy.get('[role="group"]').should(($root) => expect($root[0].getBoundingClientRect().width).to.equal(width));
        selectedOption().should('have.attr', 'aria-label', '4');
        cy.get('@onChange').should('not.have.been.called');
    });

    it('updates static textAfter placement when hidden items or the caption resize', () => {
        mount(
            <Demo
                textAfterMode="static"
                columns={[
                    {
                        ...columns[0],
                        items: items.map((item) => ({
                            ...item,
                            label: (
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: item.value === 8 ? 'var(--test-value-width, 120px)' : 20,
                                    }}
                                >
                                    {item.label}
                                </span>
                            ),
                            textValue: String(item.value),
                        })),
                        textAfter: (
                            <span style={{ display: 'inline-block', width: 'var(--test-caption-width, 20px)' }}>ч</span>
                        ),
                    },
                ]}
            />,
        );
        const checkWidths = (valueWidth: number, captionWidth: number) =>
            cy.get('[role="listbox"]').should(($column) => {
                const content = getContent($column.find('[aria-selected="true"]')[0])!;
                const gap = parseFloat(getComputedStyle(content).columnGap);
                const rect = $column[0].getBoundingClientRect();
                const caption = $column.find('.plasma-wheel-text-after')[0].getBoundingClientRect();
                expect(rect.width).to.equal(valueWidth + 2 * (captionWidth + gap));
                expect(caption.left).to.be.closeTo(rect.left + rect.width / 2 + valueWidth / 2 + gap, 0.5);
            });
        checkWidths(120, 20);
        cy.get('[role="group"]').invoke('css', '--test-value-width', '200px');
        checkWidths(200, 20);
        cy.get('[role="group"]').invoke('css', '--test-caption-width', '40px');
        checkWidths(200, 40);
        cy.get('[role="group"]').invoke('css', '--test-value-width', '80px');
        checkWidths(80, 40);
    });

    it('does not reserve static caption space for columns without textAfter', () => {
        mount(<Demo columns={[columns[1]]} />);
        let width: number;
        cy.get('[role="group"]').then(($root) => {
            width = $root[0].getBoundingClientRect().width;
        });
        mount(<Demo columns={[columns[1]]} textAfterMode="static" />);
        cy.get('.plasma-wheel-text-after').should('not.exist');
        cy.get('[role="group"]').then(($root) => expect($root[0].getBoundingClientRect().width).to.equal(width));
    });

    (['left', 'center', 'right', 'mixed'] as const).forEach((align) => {
        it(`preserves fixed widths and aligns static captions, values and controls with align=${align}`, () => {
            const names = ['first', 'second', 'third', 'fourth'];
            mount(
                <Demo
                    size="h4"
                    width={800}
                    align={align}
                    textAfterMode="static"
                    initialValue={Object.fromEntries(names.map((name) => [name, 4]))}
                    columns={names.map((name, index) => ({
                        ...columns[0],
                        name,
                        width: index === 0 ? 180 : undefined,
                    }))}
                />,
            );
            cy.get('[role="group"]').then(($root) => expect($root[0].getBoundingClientRect().width).to.equal(800));
            cy.get('[role="listbox"]').each(($column, index) => {
                if (index === 0) expect($column[0].getBoundingClientRect().width).to.equal(180);
                checkAlignment($column[0], expectedAlignment(align, index, names.length));
                expect($column.find('.plasma-wheel-text-after')).to.have.length(1);
            });
        });
    });

    if (Cypress.env('package') === 'plasma-homeds') {
        ([3, 5] as const).forEach((visibleItemsCount) => {
            it(`scales h4 typography and keeps row heights with ${visibleItemsCount} visible rows`, () => {
                const names = ['first', 'second', 'third'];
                mount(
                    <Demo
                        size="h4"
                        view="highlighted"
                        hasControls={false}
                        width={344}
                        visibleItemsCount={visibleItemsCount}
                        initialValue={Object.fromEntries(names.map((name) => [name, 4]))}
                        columns={names.map((name) => ({
                            name,
                            label: name,
                            items: items.map((item) => ({ ...item, label: 'Label' })),
                        }))}
                    />,
                );
                const height = visibleItemsCount === 5 ? 242 : 182;
                cy.get('[role="group"]').then(($root) => {
                    expect($root[0].getBoundingClientRect().height).to.equal(height);
                    expect(getComputedStyle($root[0]).columnGap).to.equal('8px');
                    const selection = getComputedStyle($root[0], '::before');
                    expect(selection.height).to.equal('56px');
                    expect(selection.borderRadius).to.equal('20px');
                    expect(parseFloat(selection.top)).to.equal(height / 2);
                });
                cy.get('[role="listbox"]').each(($column, columnIndex) => {
                    expect($column[0].getBoundingClientRect().height).to.equal(height);
                    expect($column[0].getBoundingClientRect().width).to.be.closeTo((344 - 16) / 3, 0.5);
                    expect(getComputedStyle($column[0]).rowGap).to.equal('4px');
                    let previous: DOMRect | undefined;
                    $column.find('[role="option"]').each((_, row) => {
                        const distance = Number(row.getAttribute('data-distance'));
                        const style = getComputedStyle(row);
                        const metric = [
                            { font: 20, line: 26, padding: 16, height: 58, spacing: 0 },
                            { font: 18, line: 23.4, padding: 17.3, height: 58, spacing: 0 },
                            { font: 16, line: 20.8, padding: 2.6, height: 26, spacing: 0 },
                        ][distance];
                        // WebKit может возвращать дробные CSS-метрики с небольшой погрешностью.
                        expect(parseFloat(style.fontSize)).to.be.closeTo(metric.font, 0.01);
                        expect(parseFloat(style.lineHeight)).to.be.closeTo(metric.line, 0.01);
                        expect(parseFloat(style.paddingTop)).to.be.closeTo(metric.padding, 0.01);
                        expect(parseFloat(style.paddingBottom)).to.be.closeTo(metric.padding, 0.01);
                        expect(parseFloat(style.letterSpacing) || 0).to.be.closeTo(metric.spacing, 0.01);
                        const rect = row.getBoundingClientRect();
                        expect(rect.height).to.equal(metric.height);
                        if (previous) {
                            expect(rect.top - previous.bottom).to.equal(4);
                        }
                        previous = rect;
                    });
                    if (columnIndex > 0) {
                        const previousColumn = $column[0]
                            .closest('.plasma-wheel-column')!
                            .previousElementSibling!.querySelector('[role="listbox"]')!;
                        expect(
                            $column[0].getBoundingClientRect().left - previousColumn.getBoundingClientRect().right,
                        ).to.be.closeTo(8, 0.5);
                    }
                });
                cy.get('.plasma-wheel-description').should('not.exist');
                cy.matchImageSnapshot();
            });
        });

        it('matches HomeOS h4 separator padding and the column gap', () => {
            const names = ['first', 'second', 'third'];
            mount(
                <Demo
                    size="h4"
                    view="highlighted"
                    hasControls={false}
                    width={344}
                    separator="dots"
                    initialValue={Object.fromEntries(names.map((name) => [name, 4]))}
                    columns={names.map((name, index) => ({
                        name,
                        label: name,
                        width: index === 1 ? 'max-content' : undefined,
                        items: items.map((item) => ({ ...item, label: 'Label' })),
                    }))}
                />,
            );
            cy.get('.plasma-wheel-separator')
                .should('have.length', 2)
                .each(($separator) => {
                    const style = getComputedStyle($separator[0]);
                    expect(style.paddingLeft).to.equal('16px');
                    expect(style.paddingRight).to.equal('16px');
                    expect(style.fontSize).to.equal('20px');
                    expect(style.lineHeight).to.equal('26px');
                    expect($separator[0].getBoundingClientRect().width).to.equal(39);
                    expect(style.rowGap).to.equal('6px');
                    expect(getComputedStyle($separator[0], '::before').height).to.equal('2px');
                    expect(getComputedStyle($separator[0], '::after').height).to.equal('2px');
                });
            cy.get('[role="group"]').then(($root) => {
                expect($root[0].getBoundingClientRect().height).to.equal(242);
                const children = Array.from($root[0].children);
                children.forEach((child, index) => {
                    if (index > 0) {
                        expect(
                            child.getBoundingClientRect().left - children[index - 1].getBoundingClientRect().right,
                        ).to.be.closeTo(8, 0.5);
                    }
                });
            });
            cy.matchImageSnapshot();
        });

        it('keeps static h4 textAfter aligned with the padded selected row during animation', () => {
            pauseNewAnimations();
            mount(
                <Demo
                    size="h4"
                    view="highlighted"
                    hasControls={false}
                    width={348}
                    animated
                    textAfterMode="static"
                    columns={[{ ...columns[0], description: undefined }]}
                />,
            );
            let caption: HTMLElement;
            let position: DOMRect;
            cy.get('[role="listbox"]').then(($column) => {
                [caption] = $column.find('.plasma-wheel-text-after');
                position = caption.getBoundingClientRect();
                expect(position.top).to.equal(
                    getContent($column.find('[aria-selected="true"]')[0])!.getBoundingClientRect().top,
                );
                expect(getComputedStyle(caption).fontSize).to.equal('20px');
            });
            cy.get('[role="listbox"]').trigger('keydown', { key: 'ArrowDown' });
            cy.get('[role="listbox"]').then(($column) => {
                const animations = pauseAnimations($column[0], 0.5);
                checkFixedContent(caption, position);
                animations.forEach((animation) => animation.finish());
                expect(position.top).to.equal(
                    getContent($column.find('[aria-selected="true"]')[0])!.getBoundingClientRect().top,
                );
            });
        });

        it('centers h4 values independently of textAfter and includes it in intrinsic width', () => {
            mount(
                <Demo
                    size="h4"
                    columns={[
                        {
                            name: 'first',
                            label: 'Первый',
                            items: items.map((item) => ({
                                ...item,
                                label: <span style={{ display: 'inline-block', width: 40 }}>{item.label}</span>,
                                textValue: String(item.value),
                            })),
                            textAfter: <span style={{ display: 'inline-block', width: 20 }}>ч</span>,
                        },
                    ]}
                />,
            );
            cy.get('[role="listbox"]').then(($column) => {
                const viewport = $column[0].getBoundingClientRect();
                const content = getContent($column.find('[aria-selected="true"]')[0])!;
                const gap = parseFloat(getComputedStyle(content).columnGap);
                expect(viewport.width).to.equal(40 + 2 * (20 + gap));
                $column.find('[role="option"] > .plasma-wheel-item-content').each((_, element) => {
                    const label = element.firstElementChild!.getBoundingClientRect();
                    const suffix = element.lastElementChild!.getBoundingClientRect();
                    expect(getAnchor(label, 'center')).to.be.closeTo(getAnchor(viewport, 'center'), 0.5);
                    expect(suffix.left - label.right).to.be.closeTo(gap, 0.5);
                    expect(suffix.right).to.be.at.most(viewport.right + 0.5);
                });
                expect($column).not.to.have.attr('aria-describedby');
            });
            cy.get('.plasma-wheel-description').should('not.exist');
            cy.get('[role="group"]').should('not.have.class', 'plasma-wheel-has-description');

            cy.matchImageSnapshot();
        });

        it('preserves descriptions when switching between h1 and h4', () => {
            const Dynamic = () => {
                const [size, setSize] = useState('h1');
                return (
                    <>
                        <button type="button" data-cy="size" onClick={() => setSize(size === 'h1' ? 'h4' : 'h1')}>
                            Изменить размер
                        </button>
                        <Demo size={size} />
                    </>
                );
            };
            mount(<Dynamic />);
            let height: number;
            cy.get('[role="listbox"]')
                .first()
                .then(($column) => {
                    height = $column[0].getBoundingClientRect().height;
                    expect($column.find('.plasma-wheel-description')).to.have.length(1);
                    checkAlignment($column[0], 'center');
                });
            cy.get('[data-cy="size"]').click();
            cy.get('[role="listbox"]')
                .first()
                .then(($column) => {
                    const description = getDescription($column[0]);
                    expect(description?.id).to.equal($column.attr('aria-describedby'));
                    expect(description?.textContent).to.equal('Часы');
                    cy.wrap(description).should('be.visible');
                });
            cy.get('[data-cy="size"]').click();
            cy.get('[role="listbox"]')
                .first()
                .then(($column) => {
                    expect($column[0].getBoundingClientRect().height).to.equal(height);
                    expect(getDescription($column[0])?.id).to.equal($column.attr('aria-describedby'));
                    checkAlignment($column[0], 'center');
                });
        });

        (['left', 'right', 'mixed'] as const).forEach((align) => {
            it(`preserves h4 edge alignment with textAfter for align=${align}`, () => {
                const names = ['first', 'second', 'third', 'fourth'];
                mount(
                    <Demo
                        size="h4"
                        align={align}
                        width={348}
                        initialValue={Object.fromEntries(names.map((name) => [name, 4]))}
                        columns={names.map((name) => ({ ...columns[0], name }))}
                    />,
                );
                cy.get('[role="listbox"]').each(($column, index) => {
                    const alignment = expectedAlignment(align, index, names.length);
                    if (alignment === 'center') {
                        const content = getContent($column.find('[aria-selected="true"]')[0])!;
                        expect(getAnchor(content.firstElementChild!.getBoundingClientRect(), 'center')).to.be.closeTo(
                            getAnchor($column[0].getBoundingClientRect(), 'center'),
                            0.5,
                        );
                    } else {
                        checkAlignment($column[0], alignment);
                    }
                });
            });
        });
    }

    it('preserves explicit column widths and gives the remaining container space to automatic columns', () => {
        mount(
            <Demo
                width={960}
                align="mixed"
                separator="divider"
                initialValue={{ first: 4, second: 3, third: 2 }}
                columns={[
                    { ...columns[0], width: 160 },
                    { ...columns[1], width: '12rem' },
                    { ...columns[1], name: 'third' },
                ]}
            />,
        );
        cy.get('[role="group"]').then(($root) => {
            expect($root[0].getBoundingClientRect().width).to.equal(960);
            const gap = parseFloat(getComputedStyle($root[0]).columnGap);
            cy.get('[role="listbox"]').each(($column, index) => {
                const widths = [160, 192, 960 - 160 - 192 - gap * 4 - 2];
                expect($column[0].getBoundingClientRect().width).to.be.closeTo(widths[index], 0.5);
                checkAlignment($column[0], expectedAlignment('mixed', index, 3));
            });
        });
        cy.get('[role="group"]').should('not.have.attr', 'width');

        cy.matchImageSnapshot();
    });

    it('resolves percentage and calc widths against their containers', () => {
        mount(
            <div style={{ width: 800 }}>
                <Demo width="calc(100% - 80px)" columns={[{ ...columns[0], width: '25%' }, columns[1]]} />
            </div>,
        );
        cy.get('[role="group"]').then(($root) => {
            expect($root[0].getBoundingClientRect().width).to.equal(720);
            const gap = parseFloat(getComputedStyle($root[0]).columnGap);
            cy.get('[role="listbox"]')
                .first()
                .then(($column) => expect($column[0].getBoundingClientRect().width).to.equal(180));
            cy.get('[role="listbox"]')
                .last()
                .then(($column) =>
                    expect($column[0].getBoundingClientRect().width).to.be.closeTo(720 - 180 - gap, 0.5),
                );
        });
    });

    it('allows columns narrower than their contents and accepts zero width', () => {
        mount(
            <Demo
                columns={[
                    { ...columns[0], width: 40 },
                    { ...columns[1], width: 0 },
                ]}
            />,
        );
        cy.get('[role="listbox"]').each(($column, index) => {
            expect($column[0].getBoundingClientRect().width).to.equal(index === 0 ? 40 : 0);
            expect($column[0].scrollWidth).to.be.greaterThan($column[0].clientWidth);
        });
        mount(<Demo width={0} columns={[]} />);
        cy.get('[role="group"]').then(($root) => expect($root[0].getBoundingClientRect().width).to.equal(0));
    });

    it('recalculates intrinsic width after data changes and after clearing a column width', () => {
        const onChange = cy.stub().as('onChange');
        const Dynamic = () => {
            const [lastWidth, setLastWidth] = useState(120);
            const [fixed, setFixed] = useState(false);
            return (
                <>
                    <button
                        type="button"
                        data-cy="items-width"
                        onClick={() => setLastWidth(lastWidth === 120 ? 240 : 60)}
                    >
                        Изменить данные
                    </button>
                    <button type="button" data-cy="fixed-width" onClick={() => setFixed(!fixed)}>
                        Задать ширину
                    </button>
                    <Demo
                        hasControls={false}
                        initialValue={{ first: 0 }}
                        onChange={onChange}
                        columns={[
                            {
                                name: 'first',
                                label: 'Первый',
                                width: fixed ? 160 : undefined,
                                items: items.map((item) => ({
                                    ...item,
                                    label: (
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                width: item.value === 8 ? lastWidth : 24,
                                            }}
                                        >
                                            {item.label}
                                        </span>
                                    ),
                                    textValue: String(item.value),
                                })),
                            },
                        ]}
                    />
                </>
            );
        };
        mount(<Dynamic />);
        const expectWidth = (width: number) =>
            cy
                .get('[role="listbox"]')
                .should(($column) => expect($column[0].getBoundingClientRect().width).to.equal(width));
        expectWidth(120);
        cy.get('[data-cy="items-width"]').click();
        expectWidth(240);
        cy.get('[data-cy="items-width"]').click();
        expectWidth(60);
        cy.get('[data-cy="fixed-width"]').click();
        expectWidth(160);
        cy.get('[data-cy="fixed-width"]').click();
        expectWidth(60);
        selectedOption().should('have.attr', 'aria-label', '0');
        cy.get('@onChange').should('not.have.been.called');
    });

    it('updates intrinsic width when custom content changes size without a React render', () => {
        mount(
            <Demo
                hasControls={false}
                initialValue={{ first: 0 }}
                columns={[
                    {
                        name: 'first',
                        label: 'Первый',
                        items: items.map((item) => ({
                            ...item,
                            label: (
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: item.value === 8 ? 'var(--custom-width, 120px)' : 24,
                                    }}
                                >
                                    {item.label}
                                </span>
                            ),
                            textValue: String(item.value),
                        })),
                    },
                ]}
            />,
        );
        cy.get('[role="listbox"]').should(($column) => expect($column[0].getBoundingClientRect().width).to.equal(120));
        cy.get('[role="group"]').invoke('css', '--custom-width', '240px');
        cy.get('[role="listbox"]').should(($column) => expect($column[0].getBoundingClientRect().width).to.equal(240));
        cy.get('[role="group"]').invoke('css', '--custom-width', '60px');
        cy.get('[role="listbox"]').should(($column) => expect($column[0].getBoundingClientRect().width).to.equal(60));
    });

    it('cancels motion after a container resize and animates from the new column position', () => {
        pauseNewAnimations();
        mount(
            <div data-cy="width-container" style={{ width: 700 }}>
                <Demo animated width="100%" columns={[columns[0], { ...columns[1], width: 200 }]} />
            </div>,
        );
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        cy.get('[role="listbox"]')
            .first()
            .then(($column) => {
                pauseAnimations($column[0], 0.5);
            });
        cy.get('[data-cy="width-container"]').invoke('css', 'width', '900px');
        cy.get('[role="listbox"]').first().should('not.have.attr', 'data-animating');
        selectedOption().should('have.attr', 'aria-label', '5');
        selectedOption().then(($row) => expect(Number(getComputedStyle(getDescription($row[0])!).opacity)).to.equal(1));
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        cy.get('[role="listbox"]')
            .first()
            .then(($column) => pauseAnimations($column[0], 1).forEach((animation) => animation.finish()));
        cy.get('[role="listbox"]').first().should('not.have.attr', 'data-animating');
        selectedOption().should('have.attr', 'aria-label', '6');
    });

    (['left', 'center', 'right', 'mixed'] as const).forEach((align) => {
        it(`aligns values, descriptions and controls with align=${align}`, () => {
            const names = ['first', 'second', 'third', 'fourth', 'fifth'];
            mount(
                <Demo
                    align={align}
                    initialValue={Object.fromEntries(names.map((name) => [name, 4]))}
                    columns={names.map((name) => ({ ...columns[0], name }))}
                />,
            );
            cy.get('[role="listbox"]').each(($column, index) => {
                checkAlignment($column[0], expectedAlignment(align, index, names.length));
            });

            cy.matchImageSnapshot();
        });
    });

    it('centers a single mixed column and only shifts the outer columns for two and four', () => {
        const names = ['first', 'second', 'third', 'fourth'];
        [1, 2, 4].forEach((count) => {
            mount(
                <Demo
                    align="mixed"
                    separator="dots"
                    initialValue={Object.fromEntries(names.map((name) => [name, 4]))}
                    columns={names.slice(0, count).map((name) => ({ ...columns[0], name }))}
                />,
            );
            cy.get('[role="listbox"]')
                .should('have.length', count)
                .each(($column, index) => {
                    checkAlignment($column[0], expectedAlignment('mixed', index, count));
                });
        });
    });

    (['none', 'dots', 'divider'] as const).forEach((separator) => {
        it(`renders separator=${separator}`, () => {
            mount(<Demo separator={separator} />);
            if (separator === 'none') {
                cy.get('.plasma-wheel-separator').should('not.exist');
            } else {
                cy.get('.plasma-wheel-separator')
                    .should('have.length', 1)
                    .and('have.class', `plasma-wheel-${separator}`)
                    .and('have.attr', 'aria-hidden', 'true');
            }

            cy.matchImageSnapshot();
        });
    });

    it('renders custom separators and zero only between adjacent columns', () => {
        mount(<Demo separator={<span data-cy="separator">/</span>} />);
        cy.get('[data-cy="separator"]').should('have.length', 1).and('have.text', '/');
        cy.get('.plasma-wheel-separator').should('not.have.attr', 'aria-hidden');
        cy.get('[data-cy="separator"]').then(($separator) => {
            selectedOption().then(($row) => {
                const label = getContent($row[0]);
                if (!label) {
                    throw new Error('The selected row must contain a value');
                }
                const content = label.getBoundingClientRect();
                const separator = $separator[0].getBoundingClientRect();
                expect(separator.top + separator.height / 2).to.be.closeTo(content.top + content.height / 2, 1);
            });
        });

        cy.matchImageSnapshot();

        mount(<Demo separator={0} />);
        cy.get('.plasma-wheel-separator').should('have.text', '0');
        mount(<Demo separator="dots" columns={[columns[0]]} />);
        cy.get('.plasma-wheel-separator').should('not.exist');
        mount(<Wheel {...componentProps} columns={[]} separator="dots" />);
        cy.get('[role="listbox"]').should('not.exist');
        cy.get('.plasma-wheel-separator').should('not.exist');
    });

    it('supports JSX labels, textAfter and position-aware rendering without losing accessible names', () => {
        pauseNewAnimations();
        mount(
            <Demo
                width={348}
                columns={[
                    {
                        ...columns[0],
                        items: items.map((item) => ({
                            ...item,
                            label: <b>{item.value}</b>,
                            textValue: `${item.value} часов`,
                        })),
                        renderItem: (item, state) => (
                            <span className="plasma-wheel-item-content" data-cy="custom" data-selected={state.selected}>
                                {item.label}
                            </span>
                        ),
                    },
                ]}
                animated
            />,
        );
        selectedOption().should('have.attr', 'aria-label', '4 часов');
        selectedOption().find('[data-cy="custom"]').should('have.attr', 'data-selected', 'true').and('have.text', '4');
        selectedOption().find('> .plasma-wheel-item-content').should('have.text', '4ч');
        cy.get('[role="listbox"]').trigger('keydown', { key: 'ArrowDown' });
        selectedOption().then(($row) => {
            const content = getContent($row[0]);
            const custom = $row[0].querySelector('[data-cy="custom"]');
            expect(content?.getAnimations()).to.have.length(1);
            expect(custom?.getAnimations()).to.have.length(0);
        });
        cy.get('[role="listbox"]').then(($column) =>
            pauseAnimations($column[0], 1).forEach((animation) => animation.finish()),
        );
        cy.get('[role="listbox"]').should('not.have.attr', 'data-animating');

        cy.matchImageSnapshot();
    });

    it('updates dependent columns in the parent without emitting extra changes', () => {
        const onChange = cy.stub().as('onChange');
        const cities = {
            ru: [
                { value: 'msk', label: 'Москва' },
                { value: 'spb', label: 'Петербург' },
            ],
            by: [
                { value: 'minsk', label: 'Минск' },
                { value: 'brest', label: 'Брест' },
            ],
        };
        const Dependent = () => {
            const [value, setValue] = useState<WheelValue>({ country: 'ru', city: 'msk' });
            return (
                <Wheel
                    animated={false}
                    value={value}
                    columns={[
                        {
                            name: 'country',
                            label: 'Страна',
                            items: [
                                { value: 'ru', label: 'Россия' },
                                { value: 'by', label: 'Беларусь' },
                            ],
                        },
                        { name: 'city', label: 'Город', items: cities[value.country as keyof typeof cities] },
                    ]}
                    onChange={(next, column) => {
                        setValue(
                            column === 'country'
                                ? { ...next, city: cities[next.country as keyof typeof cities][0].value }
                                : next,
                        );
                        onChange(next, column);
                    }}
                />
            );
        };
        mount(<Dependent />);
        cy.get('[role="listbox"]').last().trigger('keydown', { key: 'ArrowDown' });
        selectedOption(1).should('have.attr', 'aria-label', 'Петербург');
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        selectedOption().should('have.attr', 'aria-label', 'Беларусь');
        selectedOption(1).should('have.attr', 'aria-label', 'Минск');
        cy.get('@onChange').should('have.been.calledWithExactly', { country: 'by', city: 'spb' }, 'country');
        cy.get('[role="listbox"]').last().trigger('keydown', { key: 'ArrowDown' });
        selectedOption(1).should('have.attr', 'aria-label', 'Брест');
        cy.get('@onChange').should('have.been.calledThrice');
    });

    it('preserves values when columns are removed and restored', () => {
        const onChange = cy.stub().as('onChange');
        const Dynamic = () => {
            const [all, setAll] = useState(true);
            return (
                <>
                    <button type="button" data-cy="columns" onClick={() => setAll(!all)}>
                        Переключить
                    </button>
                    <Demo columns={all ? columns : columns.slice(0, 1)} onChange={onChange} />
                </>
            );
        };
        mount(<Dynamic />);
        cy.get('[role="listbox"]').last().trigger('keydown', { key: 'ArrowDown' });
        cy.get('[data-cy="columns"]').click();
        cy.get('[role="listbox"]').should('have.length', 1);
        cy.get('[data-cy="columns"]').click();
        cy.get('[role="listbox"]').should('have.length', 2);
        selectedOption(1).should('have.attr', 'aria-label', '4');
        cy.get('@onChange').should('have.been.calledOnce');
    });

    it('keeps keyboard selection available without controls', () => {
        mount(<Demo hasControls={false} />);
        cy.get('button').should('not.exist');
        cy.get('[role="listbox"]').first().focus().trigger('keydown', { key: 'ArrowDown' });
        selectedOption().should('have.attr', 'aria-label', '5');

        cy.matchImageSnapshot();
    });

    it('keeps the column description fixed through interrupted loop transitions', () => {
        pauseNewAnimations();
        mount(
            <Demo
                animated
                initialValue={{ first: 8, second: 3 }}
                columns={[{ ...columns[0], loop: true }, columns[1]]}
            />,
        );
        let caption: HTMLElement;
        let position: DOMRect;
        cy.get('[role="listbox"]')
            .first()
            .then(($column) => {
                caption = getDescription($column[0])!;
                position = caption.getBoundingClientRect();
            });
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        selectedOption().should('have.attr', 'aria-label', '0');
        cy.get('[role="listbox"]')
            .first()
            .then(($column) => {
                pauseAnimations($column[0], 0.5);
                checkFixedContent(caption, position);
            });
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        cy.get('[role="listbox"]')
            .first()
            .then(($column) => {
                const animations = pauseAnimations($column[0], 0);
                expect(getDescription($column[0])).to.equal(caption);
                checkFixedContent(caption, position);
                animations.forEach((animation) => animation.finish());
                checkFixedContent(caption, position);
            });
        selectedOption().should('have.attr', 'aria-label', '1');
        cy.get('[role="listbox"]').first().should('not.have.attr', 'data-animating');
    });

    it('updates immediately when animation is disabled', () => {
        mount(<Demo animated={false} />);
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        selectedOption().should('have.attr', 'aria-label', '5');
        cy.get('[role="listbox"]')
            .first()
            .then(($column) => {
                expect($column[0].getAnimations({ subtree: true })).to.have.length(0);
                expect(
                    Number(getComputedStyle(getDescription($column.find('[aria-selected="true"]')[0])!).opacity),
                ).to.equal(1);
            });
    });

    it('respects prefers-reduced-motion for values', () => {
        cy.window().then((win) => {
            const original = win.matchMedia.bind(win);
            cy.stub(win, 'matchMedia').callsFake((query: string) =>
                query === '(prefers-reduced-motion: reduce)'
                    ? {
                          matches: true,
                          media: query,
                          onchange: null,
                          addEventListener() {},
                          removeEventListener() {},
                          addListener() {},
                          removeListener() {},
                          dispatchEvent: () => true,
                      }
                    : original(query),
            );
        });
        mount(<Demo animated />);
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        selectedOption().should('have.attr', 'aria-label', '5');
        cy.get('[role="listbox"]')
            .first()
            .then(($column) => expect($column[0].getAnimations({ subtree: true })).to.have.length(0));
    });

    it('cancels animations when row count and CSS alignment change', () => {
        pauseNewAnimations();
        const Dynamic = () => {
            const [compact, setCompact] = useState(false);
            return (
                <>
                    <button type="button" data-cy="layout" onClick={() => setCompact(true)}>
                        Изменить
                    </button>
                    <Demo animated visibleItemsCount={compact ? 3 : 5} align={compact ? 'left' : 'mixed'} />
                </>
            );
        };
        mount(<Dynamic />);
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        cy.get('[role="listbox"]')
            .first()
            .then(($column) => {
                pauseAnimations($column[0], 0.5);
            });
        cy.get('[data-cy="layout"]').click();
        cy.get('[role="listbox"]').first().should('not.have.attr', 'data-animating');
        cy.get('[role="listbox"]').each(($column) => {
            expect($column.find('[role="option"]')).to.have.length(3);
            checkAlignment($column[0], 'left');
        });
        selectedOption().should('have.attr', 'aria-label', '5');
        cy.get('[role="listbox"]').first().trigger('keydown', { key: 'ArrowDown' });
        cy.get('[role="listbox"]').first().should('have.attr', 'data-animating', 'true');
        cy.get('[role="listbox"]')
            .first()
            .then(($column) => $column[0].getAnimations({ subtree: true }).forEach((animation) => animation.finish()));
        cy.get('[role="listbox"]').first().should('not.have.attr', 'data-animating');
    });
});
