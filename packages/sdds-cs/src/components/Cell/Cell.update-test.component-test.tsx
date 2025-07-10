import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconChevronRight } from '@salutejs/plasma-icons';

import { Avatar as AvatarCS } from '../Avatar';

import { Cell as CellCS } from './Cell';

const Icon = () => <IconChevronRight color="inherit" size="xs" />;

describe('sdds-cs: Cell', () => {
    const Cell = getComponent('Cell') as typeof CellCS;
    const Avatar = getComponent('Avatar') as typeof AvatarCS;

    const contentLeft = <Avatar size="s" name="Иван Фадеев" />;

    it('[PLASMA-1391] Cell: size=s, title, subtitle, label, contentLeft, contentRight', () => {
        mount(
            <CypressTestDecorator>
                <Cell
                    size="s"
                    title="Title"
                    subtitle="Subtitle"
                    label="Label"
                    contentLeft={contentLeft}
                    contentRight={<Icon />}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1392] Cell: size=s, title, contentLeft', () => {
        mount(
            <CypressTestDecorator>
                <Cell size="s" title="Title" contentLeft={contentLeft} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1393] Cell: size=s, contentRight, subtitle', () => {
        mount(
            <CypressTestDecorator>
                <Cell size="s" subtitle="Subtitle" contentRight={<Icon />} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1394] Cell: size=xs, contentLeft, label', () => {
        mount(
            <CypressTestDecorator>
                <Cell size="xs" label="Label" contentLeft={contentLeft} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1462] Cell: size=s, stretching=fixed, alignContentLeft=top, alignContentRight=top', () => {
        mount(
            <CypressTestDecorator>
                <Cell
                    size="s"
                    title="Title"
                    subtitle="Subtitle"
                    label="Label"
                    stretching="fixed"
                    alignContentLeft="top"
                    alignContentRight="top"
                    contentLeft={contentLeft}
                    contentRight={<Icon />}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1464] Cell: size=s, stretching=filled, alignContentLeft=center, alignContentRight=center', () => {
        mount(
            <CypressTestDecorator>
                <Cell
                    size="s"
                    title="Title"
                    subtitle="Subtitle"
                    label="Label"
                    stretching="filled"
                    alignContentLeft="center"
                    alignContentRight="center"
                    contentLeft={contentLeft}
                    contentRight={<Icon />}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1465] Cell: size=s, stretching=auto, alignContentLeft=bottom, alignContentRight=bottom', () => {
        mount(
            <CypressTestDecorator>
                <Cell
                    size="s"
                    title="Title"
                    subtitle="Subtitle"
                    label="Label"
                    stretching="auto"
                    alignContentLeft="bottom"
                    alignContentRight="bottom"
                    contentLeft={contentLeft}
                    contentRight={<Icon />}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
