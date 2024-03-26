import React from 'react';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import type { FC, PropsWithChildren } from 'react';
import { IconChevronRight } from '@salutejs/plasma-icons';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-new-hope: Cell Styled', () => {
    const Cell = getComponent('Cell');
    const Avatar = getComponent('Avatar');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Cell
                    size="m"
                    contentLeft={<Avatar size="m" name="Иван Фадеев" />}
                    contentRight={<IconChevronRight color="inheart" size="xs" />}
                    title="Title"
                    subtitle="Subtitle"
                    label="Label"
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Cell size="m" title="Title" subtitle="Subtitle" label="Label" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Cell
                    size="l"
                    contentLeft={<Avatar size="l" name="Иван Фадеев" />}
                    contentRight={<IconChevronRight color="inheart" size="xs" />}
                    title="Title"
                    subtitle="Subtitle"
                    label="Label"
                />
                <SpaceMe />
                <Cell
                    size="m"
                    contentLeft={<Avatar size="m" name="Иван Фадеев" />}
                    contentRight={<IconChevronRight color="inheart" size="xs" />}
                    title="Title"
                    subtitle="Subtitle"
                    label="Label"
                />
                <SpaceMe />
                <Cell
                    size="s"
                    contentLeft={<Avatar size="s" name="Иван Фадеев" />}
                    contentRight={<IconChevronRight color="inheart" size="xs" />}
                    title="Title"
                    subtitle="Subtitle"
                    label="Label"
                />
                <SpaceMe />
                <Cell
                    size="xs"
                    contentLeft={<Avatar size="s" name="Иван Фадеев" />}
                    contentRight={<IconChevronRight color="inheart" size="xs" />}
                    title="Title"
                    subtitle="Subtitle"
                    label="Label"
                />
            </CypressTestDecoratorWithTypo>,
        );
    });

    it('_align', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Cell
                    alignLeft="top"
                    contentLeft={<Avatar size="m" name="Иван Фадеев" />}
                    contentRight={<IconChevronRight color="inheart" size="xs" />}
                    title="Title"
                    subtitle="Subtitle"
                    label="Label"
                />
                <SpaceMe />
                <Cell
                    alignRight="top"
                    contentLeft={<Avatar size="m" name="Иван Фадеев" />}
                    contentRight={<IconChevronRight color="inheart" size="xs" />}
                    title="Title"
                    subtitle="Subtitle"
                    label="Label"
                />
                <SpaceMe />
                <Cell
                    alignLeft="bottom"
                    contentLeft={<Avatar size="m" name="Иван Фадеев" />}
                    contentRight={<IconChevronRight color="inheart" size="xs" />}
                    title="Title"
                    subtitle="Subtitle"
                    label="Label"
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
