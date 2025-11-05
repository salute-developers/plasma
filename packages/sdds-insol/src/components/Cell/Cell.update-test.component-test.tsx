import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import { IconChevronRight } from '@salutejs/plasma-icons';

const Icon = () => <IconChevronRight color="inherit" size="xs" />;

describe('sdds-insol: Cell', () => {
    const Cell = getComponent('Cell');
    const Avatar = getComponent('Avatar');

    const contentLeft = <Avatar size="m" name="Иван Фадеев" />;

    it('[PLASMA-1391] Cell: size=l, title, subtitle, label, contentLeft, contentRight', () => {
        mount(
            <CypressTestDecorator>
                <Cell
                    size="l"
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

    it('[PLASMA-1392] Cell: size=m, title, contentLeft', () => {
        mount(
            <CypressTestDecorator>
                <Cell size="m" title="Title" contentLeft={contentLeft} />
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

    it('[PLASMA-1462] Cell: size=l, stretching=fixed, alignContentLeft=top, alignContentRight=top', () => {
        mount(
            <CypressTestDecorator>
                <Cell
                    size="l"
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

    it('[PLASMA-1464] Cell: size=m, stretching=filled, alignContentLeft=center, alignContentRight=center', () => {
        mount(
            <CypressTestDecorator>
                <Cell
                    size="m"
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
