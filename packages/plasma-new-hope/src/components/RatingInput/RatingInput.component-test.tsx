import React, { createRef, useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { RatingInputProps } from './RatingInput.types';

const componentExists = hasComponent('RatingInput');
const describeFn = getDescribeFN('RatingInput');

const ratingInputProps: RatingInputProps = {
    defaultValue: 2.5,
    fractions: 2,
    hasValue: true,
};

getBaseVisualTests({
    component: 'RatingInput',
    componentProps: ratingInputProps,
    configPropsForMatrix: ['view', 'size', 'iconSize'],
    actionBeforeSnapshot: () => {
        cy.get('input').first().trigger('mouseout', { relatedTarget: null });
    },
});

describeFn('plasma-new-hope: RatingInput', () => {
    const RatingInput = componentExists
        ? getComponent<RatingInputProps & React.RefAttributes<HTMLDivElement>>('RatingInput')
        : () => null;

    it('valuePlacement, valueAlign', () => {
        mount(
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <RatingInput {...ratingInputProps} valuePlacement="top" valueAlign="start" />
                <RatingInput {...ratingInputProps} valuePlacement="top" valueAlign="center" />
                <RatingInput {...ratingInputProps} valuePlacement="bottom" valueAlign="start" />
                <RatingInput {...ratingInputProps} valuePlacement="bottom" valueAlign="center" />
            </div>,
        );
    });

    it('limitLabelsPlacement', () => {
        mount(
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <RatingInput {...ratingInputProps} limitLabelsPlacement="side" minLabel="плохо" maxLabel="отлично" />
                <RatingInput {...ratingInputProps} limitLabelsPlacement="bottom" minLabel="плохо" maxLabel="отлично" />
            </div>,
        );
    });

    it('without value', () => {
        mount(<RatingInput {...ratingInputProps} hasValue={false} />);

        cy.matchImageSnapshot();
    });

    it('custom icon quantity', () => {
        mount(<RatingInput {...ratingInputProps} iconQuantity={3} />);

        cy.matchImageSnapshot();
    });

    it('custom icons', () => {
        mount(
            <RatingInput
                {...ratingInputProps}
                iconSlot={<IconPlasma size="s" />}
                iconSlotOutline={<IconPlasma size="s" color="grey" />}
            />,
        );

        cy.matchImageSnapshot();
    });

    it('selects an uncontrolled value and keeps it on repeated click by default', () => {
        const onChange = cy.stub().as('onChange');
        mount(<RatingInput {...ratingInputProps} defaultValue={2} onChange={onChange} />);

        cy.get('input[value="2"]').should('be.checked');
        cy.get('input[value="4"]').parent('label').click();
        cy.get('input[value="4"]').should('be.checked');
        cy.get('@onChange').should('have.been.calledOnceWithExactly', 4);
        cy.get('input[value="4"]').parent('label').click();
        cy.get('input[value="4"]').should('be.checked');
        cy.get('@onChange').should('have.been.calledOnce');
    });

    it('does not change a controlled value without a prop update', () => {
        const onChange = cy.stub().as('onChange');
        mount(<RatingInput {...ratingInputProps} value={2} onChange={onChange} />);

        cy.get('input[value="4"]').parent('label').click();
        cy.get('@onChange').should('have.been.calledOnceWithExactly', 4);
        cy.get('input[value="2"]').should('be.checked');
        cy.get('input[value="4"]').should('not.be.checked');
    });

    it('supports controlled selection and clearing with null', () => {
        const Controlled = () => {
            const [value, setValue] = useState<number | null>(2);
            return (
                <RatingInput
                    value={value}
                    onChange={setValue}
                    allowClear
                    hasValue
                    renderValue={(next) => next ?? 'Пусто'}
                />
            );
        };

        mount(<Controlled />);

        cy.get('label').eq(2).click();
        cy.get('input[value="3"]').should('be.checked');
        cy.get('label').eq(2).click();
        cy.get('input:checked').should('not.exist');
        cy.contains('Пусто').should('exist');

        cy.matchImageSnapshot();
    });

    it('navigates fractions with arrow keys and Home/End without wrapping', () => {
        mount(<RatingInput {...ratingInputProps} defaultValue={2} fractions={4} />);

        cy.get('input[value="2"]').focus().trigger('keydown', { key: 'ArrowRight' });
        cy.get('input[value="2.25"]').should('be.checked').and('have.focus');
        cy.focused().trigger('keydown', { key: 'ArrowLeft' });
        cy.get('input[value="2"]').should('be.checked').and('have.focus');
        cy.focused().trigger('keydown', { key: 'End' });
        cy.get('input[value="5"]').should('be.checked').and('have.focus');
        cy.focused().trigger('keydown', { key: 'ArrowRight' });
        cy.get('input[value="5"]').should('be.checked').and('have.focus');
        cy.focused().trigger('keydown', { key: 'ArrowUp' });
        cy.get('input[value="5"]').should('be.checked').and('have.focus');
        cy.focused().trigger('keydown', { key: 'Home' });
        cy.get('input[value="0.25"]').should('be.checked').and('have.focus');
        cy.focused().trigger('keydown', { key: 'ArrowLeft' });
        cy.get('input:checked').should('not.exist');
        cy.get('input[value="0.25"]').should('have.focus');
        cy.focused().trigger('keydown', { key: 'ArrowRight' });
        cy.get('input[value="0.25"]').should('be.checked').and('have.focus');
        cy.focused().trigger('keydown', { key: 'ArrowDown' });
        cy.get('input:checked').should('not.exist');
        cy.get('input[tabindex="0"]').should('have.length', 1);
    });

    it('clears the first value with ArrowLeft without allowClear', () => {
        const onChange = cy.stub().as('onChange');

        mount(<RatingInput defaultValue={1} onChange={onChange} />);

        cy.get('input[value="1"]').focus().trigger('keydown', { key: 'ArrowLeft' });
        cy.get('input:checked').should('not.exist');
        cy.get('input[value="1"]').should('have.focus').and('have.attr', 'tabindex', '0');
        cy.get('@onChange').should('have.been.calledOnceWithExactly', null);
        cy.focused().trigger('keydown', { key: 'ArrowLeft' });
        cy.get('input:checked').should('not.exist');
        cy.get('@onChange').should('have.been.calledOnce');
        cy.focused().trigger('keydown', { key: 'ArrowRight' });
        cy.get('input[value="1"]').should('be.checked').and('have.focus');
        cy.get('@onChange').should('have.been.calledWithExactly', 1);
    });

    it('does not emit a change when navigating past the last controlled option', () => {
        const onChange = cy.stub().as('onChange');

        mount(<RatingInput value={2} onChange={onChange} />);

        cy.get('input[value="5"]').focus().trigger('keydown', { key: 'ArrowRight' });
        cy.get('input[value="5"]').should('have.focus');
        cy.get('input[value="2"]').should('be.checked');
        cy.get('@onChange').should('not.have.been.called');
    });

    it('respects prevented keyboard events', () => {
        mount(<RatingInput {...ratingInputProps} defaultValue={2} onKeyDown={(event) => event.preventDefault()} />);

        cy.get('input[value="2"]').trigger('keydown', { key: 'End' });
        cy.get('input[value="2"]').should('be.checked');
    });

    it('clears the hover preview when switching to keyboard navigation', () => {
        mount(<RatingInput {...ratingInputProps} defaultValue={2} iconSlot={<span data-cy="filled" />} />);

        cy.get('label').eq(2).click();
        cy.get('input[value="3"]').trigger('keydown', { key: 'End' });
        cy.get('input[value="5"]').should('be.checked');
        cy.get('[data-cy="filled"]').should('have.length', 5);
    });

    it('clears the focused selection with Space when allowClear is enabled', () => {
        const onChange = cy.stub().as('onChange');

        mount(<RatingInput {...ratingInputProps} defaultValue={2} onChange={onChange} allowClear />);

        cy.get('input[value="2"]').focus().trigger('keydown', { key: ' ' });
        cy.get('input:checked').should('not.exist');
        cy.get('@onChange').should('have.been.calledOnceWithExactly', null);
    });

    it('submits the selected value and restores defaultValue on form reset', () => {
        mount(
            <form data-cy="form">
                <RatingInput defaultValue={2} name="rating" fractions={4} />
            </form>,
        );

        cy.get('label').eq(14).click();
        cy.get('[data-cy="form"]').then(($form) => {
            expect(new FormData($form[0] as HTMLFormElement).get('rating')).to.equal('3.75');
        });
        cy.get('[data-cy="form"]').then(($form) => ($form[0] as HTMLFormElement).reset());
        cy.get('input[value="2"]').should('be.checked');
    });

    it('uses the half icon for a half-filled star even with four fractions', () => {
        mount(<RatingInput {...ratingInputProps} value={2.5} fractions={4} />);
        cy.get('.plasma-rating-input-default-half').should('exist');

        cy.matchImageSnapshot();
    });

    it('gives the fraction renderer priority and supports undefined fallback', () => {
        mount(
            <RatingInput
                {...ratingInputProps}
                value={2.5}
                fractions={4}
                renderFractionIcon={(filled, total) => (
                    <span data-cy="custom">
                        {filled}/{total}
                    </span>
                )}
            />,
        );

        cy.get('[data-cy="custom"]').should('have.text', '2/4');
        cy.get('.plasma-rating-input-default-half').should('not.exist');

        mount(<RatingInput {...ratingInputProps} value={2.5} fractions={4} renderFractionIcon={() => undefined} />);
        cy.get('.plasma-rating-input-default-half').should('exist');
    });

    it('clips custom full icons for arbitrary fractions without a renderer', () => {
        mount(
            <RatingInput
                {...ratingInputProps}
                value={1 / 3}
                fractions={3}
                iconSlot={<span data-cy="filled">Полная</span>}
                iconSlotOutline={<span data-cy="empty">Пустая</span>}
            />,
        );

        cy.get('[data-cy="filled"]')
            .parent()
            .should(($icon) => {
                expect(getComputedStyle($icon[0]).clipPath).to.contain('66.666');
            });
        cy.get('[data-cy="empty"]').should('have.length', 5);
    });

    it('separates visible value rendering from accessible option labels and forwards the root ref', () => {
        const ref = createRef<HTMLDivElement>();
        mount(
            <RatingInput
                ref={ref}
                value={3}
                hasValue
                renderValue={(value) => <strong data-cy="score">Оценка: {value}</strong>}
                getLabelText={(value) => `Выбрать ${value}`}
                aria-label="Качество"
            />,
        );
        cy.get('[role="radiogroup"]').should('have.attr', 'aria-label', 'Качество');
        cy.get('input[value="3"]').should('have.attr', 'aria-label', 'Выбрать 3');
        cy.get('[data-cy="score"]').should('have.text', 'Оценка: 3');
        cy.get('[role="radiogroup"]').then(($root) => expect(ref.current).to.equal($root[0]));

        cy.matchImageSnapshot();
    });

    it('normalizes invalid counts and fractions and clamps the value', () => {
        mount(<RatingInput {...ratingInputProps} value={20} iconQuantity={0} fractions={Number.NaN} />);

        cy.get('input[type="radio"]').should('have.length', 5);
        cy.get('input[value="5"]').should('be.checked');
    });
});
