import React, { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { IconDownload } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';

import { Chip as ChipB2C } from '.';

const Icon = () => <IconDownload color="inherit" />;
const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Chip', () => {
    const Chip = getComponent('Chip') as typeof ChipB2C;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Chip>Hello Plasma</Chip>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('without Clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Chip hasClear={false}>Hello Plasma</Chip>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with Icon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('fixed width', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Chip style={{ width: '10rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Chip>
                <PadMe />
                <Chip
                    style={{ width: '10rem' }}
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    contentLeft={<Icon />}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
                <PadMe />
                <Chip view="positive" text="Chip_view_positive" contentLeft={<Icon />} />
                <SpaceMe />
                <Chip view="positive" text="_disabled" disabled contentLeft={<Icon />} />
                <PadMe />
                <Chip view="warning" text="Chip_view_warning" contentLeft={<Icon />} />
                <SpaceMe />
                <Chip view="warning" text="_disabled" disabled contentLeft={<Icon />} />
                <PadMe />
                <Chip view="negative" text="Chip_view_negative" contentLeft={<Icon />} />
                <SpaceMe />
                <Chip view="negative" text="_disabled" disabled contentLeft={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Chip text="Chip_size_l" size="l" contentLeft={<Icon />} />
                <PadMe />
                <Chip text="Chip_size_m" size="m" contentLeft={<Icon />} />
                <PadMe />
                <Chip text="Chip_size_s" size="s" contentLeft={<Icon />} />
                <PadMe />
                <Chip text="Chip_size_xs" size="xs" contentLeft={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    const Demo = () => {
        const [isChipVisible, setIsChipVisible] = useState(true);

        return isChipVisible ? (
            <Chip className="chip" onClickClose={() => setIsChipVisible(false)}>
                text
            </Chip>
        ) : (
            <></>
        );
    };

    it('click on close', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.get('.chip').click();
        cy.get('.chip').should('exist');
        cy.get('.chip div').last().click();
        cy.get('.chip').should('not.exist');
    });
});
