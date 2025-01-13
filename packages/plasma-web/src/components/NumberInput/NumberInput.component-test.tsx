import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconPlus, IconMinus, IconSber } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const PlusIcon = () => <IconPlus color="inherit" />;
const MinusIcon = () => <IconMinus color="inherit" />;

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    * {
        animation: none !important;
    }
`;

describe('plasma-web: NumberInput', () => {
    const NumberInput = getComponent('NumberInput');
    const IconButton = getComponent('IconButton');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberInput value={5} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it(':min,max', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberInput value={5} min={5} />
                <PadMe />
                <NumberInput value={10} max={10} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberInput value={5} view="default" />
                <PadMe />
                <NumberInput value={5} view="accent" />
                <PadMe />
                <NumberInput value={5} view="secondary" />
                <PadMe />
                <NumberInput value={5} view="clear" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberInput value={5} size="l" />
                <PadMe />
                <NumberInput value={5} size="m" />
                <PadMe />
                <NumberInput value={5} size="s" />
                <PadMe />
                <NumberInput value={5} size="xs" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':segmentation', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberInput value={5} segmentation="default" />
                <PadMe />
                <NumberInput value={5} segmentation="segmented" />
                <PadMe />
                <NumberInput value={5} segmentation="solid" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':shape', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberInput value={5} shape="cornered" />
                <PadMe />
                <NumberInput value={5} shape="pilled" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':inputBackgroundType', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberInput value={5} inputBackgroundType="fill" />
                <PadMe />
                <NumberInput value={5} inputBackgroundType="clear" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':customIncrementButton,customDecrementButton', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':incrementIcon,decrementIcon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberInput
                    size="l"
                    value={5}
                    incrementIcon={<IconSber size="s" color="inherit" />}
                    decrementIcon={<IconSber size="s" color="inherit" />}
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberInput size="l" value={5} disabled />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':isLoading', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <NumberInput size="l" value={5} isLoading />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':step', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <NumberInput size="l" value={5} step={2} />
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <NumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <NumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <NumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').type('{backspace}{enter}');
        cy.get('input').should('have.value', '5');

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it(':dot at the end gets removed', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').type('5.').blur();
        cy.get('input').should('have.value', '5');
    });

    it(':dot at the end gets removed; value more than max', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').type('200.').blur();
        cy.get('input').should('have.value', '10');
    });

    it(':dot at the end gets removed; value less than min', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberInput size="l" value={5} max={10} min={0} isManualInput />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').type('-200.').blur();
        cy.get('input').should('have.value', '0');
    });

    it('precision', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NumberInput size="l" value={5} max={10} min={-10} precision={2} step={0.111} isManualInput />
            </CypressTestDecoratorWithTypo>,
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
