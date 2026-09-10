import React, { createRef } from 'react';
import type { RefAttributes } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';
import { inverseBackgroundPrimary } from '@salutejs/plasma-themes/tokens/plasma_homeds';

import type { NumbersProps } from './component/Numbers.types';
import { classes } from './component/Numbers.tokens';

const componentExists = hasComponent('Numbers');
const describeFn = getDescribeFN('Numbers');

const numbersProps: NumbersProps = {
    value: -28.8,
    unit: 'degree',
    style: { backgroundColor: inverseBackgroundPrimary },
};

getBaseVisualTests({
    component: 'Numbers',
    componentProps: numbersProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Numbers', () => {
    const Numbers = componentExists
        ? getComponent<NumbersProps & RefAttributes<HTMLSpanElement>>('Numbers')
        : () => null;

    it('renders zero without a minus, fraction or unit', () => {
        mount(<Numbers value={0} />);

        cy.get(`.${classes.integer}`).should('have.text', '0');
        cy.get(`.${classes.minus}`).should('not.exist');
        cy.get(`.${classes.separator}`).should('not.exist');
        cy.get(`.${classes.fraction}`).should('not.exist');
        cy.get(`.${classes.unit}`).should('not.exist');
    });

    it('expands exponential notation', () => {
        mount(
            <>
                <Numbers value={-1.2e-7} data-testid="small" />
                <Numbers value={1.2e21} data-testid="large" />
            </>,
        );

        cy.get('[data-testid="small"]').should('have.text', '-0.00000012');
        cy.get('[data-testid="large"]').should('have.text', '1200000000000000000000');
    });

    [NaN, Infinity, -Infinity].forEach((value) => {
        it(`does not render ${value}`, () => {
            mount(<Numbers value={value} data-testid="numbers" />);

            cy.get('[data-testid="numbers"]').should('not.exist');
        });
    });

    it('forwards the ref and HTML attributes', () => {
        const ref = createRef<HTMLSpanElement>();
        const onClick = cy.stub().as('onClick');

        mount(
            <Numbers ref={ref} value={28} id="numbers" className="custom" aria-label="Temperature" onClick={onClick} />,
        );

        cy.get('#numbers')
            .should('have.class', 'custom')
            .and('have.attr', 'aria-label', 'Temperature')
            .then(($element) => expect(ref.current).to.equal($element[0]));
        cy.get('#numbers').click();
        cy.get('@onClick').should('have.been.calledOnce');
    });
});
