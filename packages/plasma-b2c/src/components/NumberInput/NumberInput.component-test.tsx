import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import { createGlobalStyle } from 'styled-components';
import { IconPlus, IconMinus, IconSber } from '@salutejs/plasma-icons';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { NumberInput as NumberInputB2C } from '.';

const PlusIcon = () => <IconPlus color="inherit" />;
const MinusIcon = () => <IconMinus color="inherit" />;

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    * {
        animation: none !important;
    }
`;

describe('plasma-b2c: NumberInput', () => {
    const NumberInput = getComponent('NumberInput') as typeof NumberInputB2C;
    const IconButton = getComponent('IconButton');

    const InteractiveNumberInput = ({ value: outerValue, ...rest }: ComponentProps<typeof NumberInputB2C>) => {
        const [value, setValue] = useState<number | string | undefined>(outerValue);

        const handleChange = (_: any, newValue: number | string | undefined) => {
            setValue(newValue);
        };

        return <NumberInput value={value} onChange={handleChange} {...rest} />;
    };

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput value={5} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it(':min,max', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput value={5} min={5} />
                <PadMe />
                <NumberInput value={10} max={10} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':view', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput value={5} view="default" />
                <PadMe />
                <NumberInput value={5} view="accent" />
                <PadMe />
                <NumberInput value={5} view="secondary" />
                <PadMe />
                <NumberInput value={5} view="clear" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':size', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput value={5} size="l" />
                <PadMe />
                <NumberInput value={5} size="m" />
                <PadMe />
                <NumberInput value={5} size="s" />
                <PadMe />
                <NumberInput value={5} size="xs" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':segmentation', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput value={5} segmentation="default" />
                <PadMe />
                <NumberInput value={5} segmentation="segmented" />
                <PadMe />
                <NumberInput value={5} segmentation="solid" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':shape', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput value={5} shape="cornered" />
                <PadMe />
                <NumberInput value={5} shape="pilled" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':inputBackgroundType', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput value={5} inputBackgroundType="fill" />
                <PadMe />
                <NumberInput value={5} inputBackgroundType="clear" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':customIncrementButton,customDecrementButton', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput
                    size="l"
                    value={5}
                    customDecrementButton={
                        <IconButton size="l" view="critical">
                            <MinusIcon />
                        </IconButton>
                    }
                    customIncrementButton={
                        <IconButton size="l" view="success">
                            <PlusIcon />
                        </IconButton>
                    }
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':incrementIcon,decrementIcon', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput
                    size="l"
                    value={5}
                    incrementIcon={<IconSber size="s" color="inherit" />}
                    decrementIcon={<IconSber size="s" color="inherit" />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':disabled', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput size="l" value={5} disabled />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':isLoading', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <NumberInput size="l" value={5} isLoading />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':step', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <InteractiveNumberInput value={5} step={2} />
            </CypressTestDecorator>,
        );

        cy.get('input').should('have.value', '5');
        cy.get('button').first().click();
        cy.get('input').should('have.value', '3');
        cy.get('button').last().click();
        cy.get('button').last().click();
        cy.get('input').should('have.value', '7');

        cy.matchImageSnapshot();
    });

    it(':invalidValue, more than max', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecorator>,
        );

        cy.get('input').type('15{enter}');
        cy.get('input').should('have.value', '10');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it(':invalidValue, less than min', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecorator>,
        );

        cy.get('input').type('-15{enter}');
        cy.get('input').should('have.value', '0');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it(':empty input', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecorator>,
        );

        cy.get('input').type('{backspace}{enter}');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it(':empty input, decrement', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput size="l" max={10} min={0} />
            </CypressTestDecorator>,
        );

        cy.get('button').first().click();
        cy.get('input').should('have.value', '9');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it(':empty input, increment', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput size="l" max={10} min={0} />
            </CypressTestDecorator>,
        );

        cy.get('button').last().click();
        cy.get('input').should('have.value', '1');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it(':dot at the end gets removed', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecorator>,
        );

        cy.get('input').type('5.').blur();
        cy.get('input').should('have.value', '5');
    });

    it(':dot at the end gets removed; value more than max', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecorator>,
        );

        cy.get('input').type('200.').blur();
        cy.get('input').should('have.value', '10');
    });

    it(':dot at the end gets removed; value less than min', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecorator>,
        );

        cy.get('input').type('-200.').blur();
        cy.get('input').should('have.value', '0');
    });

    it('precision', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput
                    size="l"
                    value={5}
                    max={10}
                    min={-10}
                    precision={2}
                    step={0.111}
                    isManualInput
                />
            </CypressTestDecorator>,
        );

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
});
