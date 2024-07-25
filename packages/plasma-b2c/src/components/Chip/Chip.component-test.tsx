import React from 'react';
import { IconDownload } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';

import { Chip as ChipB2C } from '.';

const Icon = () => <IconDownload color="inherit" />;

describe('plasma-b2c: Chip', () => {
    const Chip = getComponent('Chip') as typeof ChipB2C;

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Chip>Hello Plasma</Chip>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('without Clear', () => {
        mount(
            <CypressTestDecorator>
                <Chip hasClear={false}>Hello Plasma</Chip>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with Icon', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="with Icon" contentLeft={<Icon />} />
                <PadMe />
                <Chip text="with Icon" contentRight={<Icon />} />
                <PadMe />
                <Chip text="with Icon" contentLeft={<Icon />} contentRight={<Icon />} />
                <PadMe />
                <Chip contentLeft={<Icon />} contentRight={<Icon />}>
                    text as children
                </Chip>
                <PadMe />
                <Chip contentLeft={<Icon />} contentRight={<Icon />}>
                    <Icon />
                </Chip>
                <SpaceMe />
                <Chip>
                    <Icon />
                </Chip>
                <SpaceMe />
                <Chip contentLeft={<Icon />} />
                <SpaceMe />
                <Chip contentRight={<Icon />} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('fixed width', () => {
        mount(
            <CypressTestDecorator>
                <Chip style={{ width: '10rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Chip>
                <PadMe />
                <Chip
                    style={{ width: '10rem' }}
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    contentLeft={<Icon />}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <Chip view="default" text="Chip_view_default" contentLeft={<Icon />} />
                <SpaceMe />
                <Chip view="default" text="_disabled" disabled contentLeft={<Icon />} />
                <PadMe />
                <Chip view="secondary" text="Chip_view_secondary" contentLeft={<Icon />} />
                <SpaceMe />
                <Chip view="secondary" text="_disabled" disabled contentLeft={<Icon />} />
                <PadMe />
                <Chip view="accent" text="Chip_view_accent" contentLeft={<Icon />} />
                <SpaceMe />
                <Chip view="accent" text="_disabled" disabled contentLeft={<Icon />} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Chip_size_l" size="l" contentLeft={<Icon />} />
                <PadMe />
                <Chip text="Chip_size_m" size="m" contentLeft={<Icon />} />
                <PadMe />
                <Chip text="Chip_size_s" size="s" contentLeft={<Icon />} />
                <PadMe />
                <Chip text="Chip_size_xs" size="xs" contentLeft={<Icon />} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
