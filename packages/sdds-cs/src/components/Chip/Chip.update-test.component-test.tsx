import React from 'react';
import { IconDownload } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { Chip as ChipCS } from '.';

const Icon = () => <IconDownload color="inherit" />;

describe('sdds-cs: Chip', () => {
    const Chip = getComponent('Chip') as typeof ChipCS;

    it('[PLASMA-T1442] Chip: view=default, hasClear', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Chip_view_default" view="default" hasClear />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1443] Chip: view=secondary, without Clear, pilled', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Chip_view_secondary" view="secondary" hasClear={false} pilled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1446] Chip: view=accent, size=s', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Chip_view_accent_size_s" view="accent" size="s" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1447] Chip: size=xs, with Icon', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Chip_size_xs_with_icon" size="xs" contentLeft={<Icon />} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1654] Chip: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Chip text="Chip_disabled" size="s" disabled />
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
});
