import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

import { NumberInput as NumberInputCS } from '.';

describe('sdds-cs: NumberInput', () => {
    const NumberInput = getComponent('NumberInput') as typeof NumberInputCS;

    const InteractiveNumberInput = ({ value: outerValue, ...rest }: ComponentProps<typeof NumberInputCS>) => {
        const [value, setValue] = useState<number | string | undefined>(outerValue);

        const handleChange = (_: any, newValue: number | string | undefined) => {
            setValue(newValue);
        };

        return <NumberInput value={value} onChange={handleChange} {...rest} />;
    };

    it('[PLASMA-T1673] NumberInput: size=l, view=default, shape=cornered, inputBackgroundType=fill, segmentation=default, withTextBefore, width=188', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput
                    view="default"
                    shape="cornered"
                    min={0}
                    max={9}
                    step={1}
                    width={188}
                    isManualInput={false}
                    textBefore="TB"
                    textAfter=""
                    isLoading={false}
                    disabled={false}
                    value={5}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1674] NumberInput: size=m, view=secondary, shape=pilled, inputBackgroundType=clear, segmentation=default, withTextAfter, width=100', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput
                    view="default"
                    shape="pilled"
                    inputBackgroundType="clear"
                    min={0}
                    max={9}
                    step={1}
                    width={100}
                    isManualInput={false}
                    textBefore=""
                    textAfter="TA"
                    isLoading={false}
                    disabled={false}
                    value={5}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1675] NumberInput: size=s, view=accent, shape=pilled, inputBackgroundType=clear, segmentation=segmented, width=500', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput
                    size="s"
                    shape="pilled"
                    inputBackgroundType="clear"
                    min={0}
                    max={9}
                    step={1}
                    width={500}
                    isManualInput={false}
                    textBefore=""
                    textAfter=""
                    isLoading={false}
                    disabled={false}
                    value={5}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1676] NumberInput: size=xs, view=clear, shape=cornered, inputBackgroundType=fill, segmentation=solid, withTextBefore, withTextAfter', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput
                    view="default"
                    shape="cornered"
                    segmentation="solid"
                    min={0}
                    max={9}
                    step={1}
                    isManualInput={false}
                    textBefore="TB"
                    textAfter="TA"
                    isLoading={false}
                    disabled={false}
                    value={5}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1677] NumberInput: isLoading', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput
                    view="default"
                    shape="cornered"
                    min={0}
                    max={9}
                    step={1}
                    width={188}
                    isManualInput={false}
                    textBefore=""
                    textAfter=""
                    isLoading
                    disabled={false}
                    value={5}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1678] NumberInput: Disabled', () => {
        mount(
            <CypressTestDecorator>
                <NumberInput
                    view="default"
                    shape="cornered"
                    min={0}
                    max={9}
                    step={1}
                    width={188}
                    isManualInput={false}
                    textBefore=""
                    textAfter=""
                    isLoading={false}
                    disabled
                    value={5}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1453] NumberInput: size=l, view=default, shape=cornered, inputBackgroundType=fill, segmentation=default, width=0', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput min={0} max={9} step={1} width={0} isManualInput value={5} />
            </CypressTestDecorator>,
        );
        cy.get('input').type('9');
        cy.get('input').should('have.value', '9');
        cy.get('body').click(200, 300, { force: true });
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1454] NumberInput: size=l, view=default, shape=cornered, inputBackgroundType=fill, segmentation=default, width=300, step=2', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput min={0} max={9} step={2} width={300} value={5} />
            </CypressTestDecorator>,
        );
        cy.get('button').last().click();
        cy.get('input').should('have.value', '7');
        cy.get('button').last().click();
        cy.get('input').should('have.value', '9');
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1455] NumberInput: size=l, maxInput, width=188, step=2', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput min={0} max={9} step={2} width={188} isManualInput value={5} />
            </CypressTestDecorator>,
        );
        cy.get('input').click();
        cy.get('input').type('99');
        cy.get('input').type('{enter}');
        cy.get('input').should('have.value', '9');
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1456] NumberInput: size=l, minInput, width=188, step=2', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput min={0} max={9} step={2} width={188} isManualInput value={5} />
            </CypressTestDecorator>,
        );
        cy.get('input').click();
        cy.get('input').type('-12');
        cy.get('input').type('{enter}');
        cy.get('input').should('have.value', '0');
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1457] NumberInput: emptyValue, width=188, step=2', () => {
        mount(
            <CypressTestDecorator>
                <InteractiveNumberInput min={0} max={9} step={2} width={188} isManualInput value={5} />
            </CypressTestDecorator>,
        );
        cy.get('input').click();
        cy.get('input').type('{backspace}');
        cy.get('input').type('{enter}');
        cy.matchImageSnapshot();
    });
});
