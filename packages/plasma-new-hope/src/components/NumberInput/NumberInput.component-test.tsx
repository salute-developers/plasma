import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-expect-error override path is resolved by webpack alias at build time
import { IconPlus, IconMinus, IconSber } from 'override/_Icon';

import type { NumberInputProps } from './NumberInput.types';

const componentExists = hasComponent('NumberInput');
const describeFn = getDescribeFN('NumberInput');

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    * {
        animation: none !important;
    }
`;

const numberInputProps = {
    value: 5,
};

getBaseVisualTests({
    component: 'NumberInput',
    componentProps: numberInputProps,
    configPropsForMatrix: ['view', 'size', 'segmentation', 'shape'],
});

describeFn('NumberInput', () => {
    const NumberInput = componentExists ? getComponent<NumberInputProps>('NumberInput') : () => null;
    const IconButton = componentExists ? getComponent('IconButton') : () => null;

    const InteractiveNumberInput = ({ value: outerValue, ...rest }: NumberInputProps) => {
        const [value, setValue] = useState<number | string | undefined>(outerValue as number | string | undefined);

        const handleChange = (_: any, newValue: number | string | undefined) => {
            setValue(newValue);
        };

        return <NumberInput value={value} onChange={handleChange} {...rest} />;
    };

    it('min,max', () => {
        mount(
            <>
                <NumberInput value={5} min={5} />
                <PadMe />
                <NumberInput value={10} max={10} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('inputBackgroundType', () => {
        mount(
            <>
                <NumberInput value={5} inputBackgroundType="fill" />
                <PadMe />
                <NumberInput value={5} inputBackgroundType="clear" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('customIncrementButton,customDecrementButton', () => {
        mount(
            <NumberInput
                value={5}
                customDecrementButton={
                    <IconButton view="negative">
                        <IconMinus color="inherit" />
                    </IconButton>
                }
                customIncrementButton={
                    <IconButton view="positive">
                        <IconPlus color="inherit" />
                    </IconButton>
                }
            />,
        );
        cy.matchImageSnapshot();
    });

    it('incrementIcon,decrementIcon', () => {
        mount(
            <NumberInput
                value={5}
                incrementIcon={<IconSber size="s" color="inherit" />}
                decrementIcon={<IconSber size="s" color="inherit" />}
            />,
        );
        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(<NumberInput value={5} disabled />);
        cy.matchImageSnapshot();
    });

    it('isLoading', () => {
        mount(
            <>
                <NoAnimationStyle />
                <NumberInput value={5} isLoading />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('step', () => {
        mount(
            <>
                <NoAnimationStyle />
                <InteractiveNumberInput value={5} step={2} />
            </>,
        );

        cy.get('input').should('have.value', '5');
        cy.get('button').first().click();
        cy.get('input').should('have.value', '3');
        cy.get('button').last().click();
        cy.get('button').last().click();
        cy.get('input').should('have.value', '7');

        cy.matchImageSnapshot();
    });

    it('invalidValue, more than max', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={0} isManualInput />);

        cy.get('input').type('15{enter}');
        cy.get('input').should('have.value', '10');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('invalidValue, less than min', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={0} isManualInput />);

        cy.get('input').type('-15{enter}');
        cy.get('input').should('have.value', '0');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('empty input', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={0} isManualInput />);

        cy.get('input').type('{backspace}{enter}');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('empty input, decrement', () => {
        mount(<InteractiveNumberInput max={10} min={0} />);

        cy.get('button').first().click();
        cy.get('input').should('have.value', '9');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('empty input, increment', () => {
        mount(<InteractiveNumberInput max={10} min={0} />);

        cy.get('button').last().click();
        cy.get('input').should('have.value', '1');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('dot at the end gets removed', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={0} isManualInput />);

        cy.get('input').type('5.').blur();
        cy.get('input').should('have.value', '5');
    });

    it('dot at the end gets removed; value more than max', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={0} isManualInput />);

        cy.get('input').type('200.').blur();
        cy.get('input').should('have.value', '10');
    });

    it('dot at the end gets removed; value less than min', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={0} isManualInput />);

        cy.get('input').type('-200.').blur();
        cy.get('input').should('have.value', '0');
    });

    it('precision', () => {
        mount(<InteractiveNumberInput value={5} max={10} min={-10} precision={2} step={0.111} isManualInput />);

        cy.get('input').type('0').blur();
        cy.get('input').should('have.value', '0');

        cy.get('input').type('1.005').blur();
        cy.get('input').should('have.value', '1.01');

        cy.get('input').type('-1.005').blur();
        cy.get('input').should('have.value', '-1.01');

        cy.get('input').type('5.115').blur();
        cy.get('input').should('have.value', '5.12');

        cy.get('input').type('5.11111').blur();
        cy.get('input').should('have.value', '5.11');

        cy.get('button').first().click();
        cy.get('input').should('have.value', '5');

        cy.get('button').last().click();
        cy.get('button').last().click();
        cy.get('input').should('have.value', '5.22');
    });

    it('displayWithoutValue', () => {
        mount(
            <>
                <NumberInput min={0} max={10} displayWithoutValue="input" />
                <PadMe />
                <NumberInput min={0} max={10} displayWithoutValue="increment" />
                <PadMe />
                <NumberInput min={0} max={10} displayWithoutValue="decrement" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('displayWithoutValue=increment, click shows full component', () => {
        mount(<InteractiveNumberInput min={0} max={10} displayWithoutValue="increment" />);

        cy.get('button').last().click();
        cy.get('input').should('have.value', '1');

        cy.matchImageSnapshot();
    });

    it('displayWithoutValue=decrement, click shows full component', () => {
        mount(<InteractiveNumberInput min={0} max={10} displayWithoutValue="decrement" />);

        cy.get('button').first().click();
        cy.get('input').should('have.value', '9');

        cy.matchImageSnapshot();
    });

    it('limitBehavior=disabled', () => {
        mount(
            <>
                <NumberInput value={0} min={0} max={10} limitBehavior="disabled" />
                <PadMe />
                <NumberInput value={10} min={0} max={10} limitBehavior="disabled" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('limitBehavior=hidden', () => {
        mount(
            <>
                <NumberInput value={0} min={0} max={10} limitBehavior="hidden" />
                <PadMe />
                <NumberInput value={10} min={0} max={10} limitBehavior="hidden" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('limitBehavior=hidden, decrement appears after increment from min', () => {
        mount(<InteractiveNumberInput value={0} min={0} max={10} limitBehavior="hidden" />);

        cy.get('button').last().click();
        cy.get('input').first().should('have.value', '1');

        cy.matchImageSnapshot();
    });

    it('limitBehavior=hidden, increment appears after decrement from max', () => {
        mount(<InteractiveNumberInput value={10} min={0} max={10} limitBehavior="hidden" />);

        cy.get('button').first().click();
        cy.get('input').should('have.value', '9');

        cy.matchImageSnapshot();
    });
});
