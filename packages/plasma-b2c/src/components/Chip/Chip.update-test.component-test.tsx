import React from 'react';
import { IconDownload } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { Chip as ChipB2C } from '.';

const Icon = () => <IconDownload color="inherit" />;

describe('plasma-b2c: Chip', () => {
    const Chip = getComponent('Chip') as typeof ChipB2C;

    it('[PLASMA-T757] Chip: view=default, size=m', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Chip_view_default_size_m" view="default" size="m" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T758] Chip: view=secondary, size=s', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Chip_view_secondary_size_s" view="secondary" size="s" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T759] Chip: view=accent, size=l', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Chip_view_accent_size_l" view="accent" size="l" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T761] Chip: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Chip_disabled" disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T973] Chip: pilled, size=xs', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Chip_pilled_size_xs" pilled size="xs" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T974] Chip: with Icon', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Chip_with_icon" contentLeft={<Icon />} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T977] Chip: fixed width', () => {
        mount(
            <CypressTestDecorator>
                <Chip
                    style={{ width: '10rem' }}
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    contentLeft={<Icon />}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1194] Chip: without Clear', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Chip_without_clear" hasClear={false} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
