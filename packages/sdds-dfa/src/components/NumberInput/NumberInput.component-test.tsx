import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { IconPlus, IconMinus, IconSber } from '@salutejs/plasma-icons';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

const PlusIcon = () => <IconPlus color="inherit" />;
const MinusIcon = () => <IconMinus color="inherit" />;

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    * {
        animation: none !important;
    }
`;

describe('plasma-b2c: NumberInput', () => {
    const NumberInput = getComponent('NumberInput');
    const IconButton = getComponent('IconButton');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput value={5} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
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
                <NumberInput size="l" value={5} step={2} />
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
                <NumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecorator>,
        );

        cy.get('input').type('15{enter}');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(400);
        cy.get('input').should('have.value', '10');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it(':invalidValue, less than min', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecorator>,
        );

        cy.get('input').type('-15{enter}');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(400);
        cy.get('input').should('have.value', '0');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it(':empty input', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecorator>,
        );

        cy.get('input').type('{backspace}{enter}');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(400);
        cy.get('input').should('have.value', '5');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });
});
