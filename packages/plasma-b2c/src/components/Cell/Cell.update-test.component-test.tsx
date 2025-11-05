import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import type { FC, PropsWithChildren } from 'react';
import { IconChevronRight } from '@salutejs/plasma-icons';

const Icon = () => <IconChevronRight color="inherit" size="xs" />;
const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: Cell', () => {
    const Cell = getComponent('Cell');
    const Avatar = getComponent('Avatar');

    const contentLeft = <Avatar size="m" name="Иван Фадеев" />;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-1391] Cell: size=l, title, subtitle, label, contentLeft, contentRight', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Cell
                    size="l"
                    title="Title"
                    subtitle="Subtitle"
                    label="Label"
                    contentLeft={contentLeft}
                    contentRight={<Icon />}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1392] Cell: size=m, title, contentLeft', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Cell size="m" title="Title" contentLeft={contentLeft} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1393] Cell: size=s, contentRight, subtitle', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Cell size="s" subtitle="Subtitle" contentRight={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1394] Cell: size=xs, contentLeft, label', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Cell size="xs" label="Label" contentLeft={contentLeft} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1462] Cell: size=l, stretching=fixed, alignContentLeft=top, alignContentRight=top', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1464] Cell: size=m, stretching=filled, alignContentLeft=center, alignContentRight=center', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1465] Cell: size=s, stretching=auto, alignContentLeft=bottom, alignContentRight=bottom', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
