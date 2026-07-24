import React, { useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { ChipProps } from './Chip.types';

const componentExists = hasComponent('Chip');
const describeFn = getDescribeFN('Chip');

const Icon = <IconPlasma size="s" color="inherit" />;
const chipProps = {
    text: 'Hello Plasma',
};

getBaseVisualTests({
    component: 'Chip',
    componentProps: chipProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Chip', () => {
    const Chip = componentExists ? getComponent<ChipProps>('Chip') : () => null;

    const Demo = () => {
        const [isChipVisible, setIsChipVisible] = useState(true);

        return isChipVisible ? (
            <Chip className="chip" onClickClose={() => setIsChipVisible(false)}>
                text
            </Chip>
        ) : null;
    };

    it('without clear', () => {
        mount(<Chip hasClear={false}>Hello Plasma</Chip>);

        cy.matchImageSnapshot();
    });

    it('with icon', () => {
        mount(
            <>
                <Chip text="with Icon" contentLeft={Icon} />
                <PadMe />
                <Chip text="with Icon" contentRight={Icon} />
                <PadMe />
                <Chip text="with Icon" contentLeft={Icon} contentRight={Icon} />
                <PadMe />
                <Chip contentLeft={Icon} contentRight={Icon}>
                    text as children
                </Chip>
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('fixed width', () => {
        mount(
            <>
                <Chip style={{ width: '10rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Chip>
                <PadMe />
                <Chip
                    style={{ width: '10rem' }}
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    contentLeft={Icon}
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('click on close', () => {
        mount(<Demo />);

        cy.get('.chip').click();
        cy.get('.chip').should('exist');
        cy.get('.chip div').last().click();
        cy.get('.chip').should('not.exist');
    });

    it('pin', () => {
        mount(
            <>
                <Chip pin="square-square" text="square-square" />
                <PadMe />
                <Chip pin="square-clear" text="square-clear" />
                <PadMe />
                <Chip pin="clear-square" text="clear-square" />
                <PadMe />
                <Chip pin="clear-clear" text="clear-clear" />
                <PadMe />
                <Chip pin="clear-circle" text="clear-circle" />
                <PadMe />
                <Chip pin="circle-clear" text="circle-clear" />
                <PadMe />
                <Chip pin="circle-circle" text="circle-circle" />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('pilled', () => {
        mount(<Chip text="Chip_pilled" pilled />);

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(<Chip text="Chip_disabled" size="l" disabled />);

        cy.matchImageSnapshot();
    });
});
