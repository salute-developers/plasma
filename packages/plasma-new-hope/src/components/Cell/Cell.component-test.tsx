import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconChevronRight } from 'override/_Icon';

import type { AvatarProps } from '../Avatar/Avatar.types';

import type { CellProps } from './Cell.types';

const componentExists = hasComponent('Cell');
const describeFn = getDescribeFN('Cell');

const Avatar = getComponent<AvatarProps>('Avatar');

const Icon = () => <IconChevronRight color="inherit" size="xs" />;
const contentLeft = <Avatar size="m" name="Иван Фадеев" />;

const componentProps = {
    title: 'Title',
    subtitle: 'Subtitle',
    label: 'Label',
    contentLeft,
    contentRight: <Icon />,
};

getBaseVisualTests({
    component: 'Cell',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Cell', () => {
    const Cell = componentExists ? getComponent<CellProps>('Cell') : () => null;

    it('simple', () => {
        mount(<Cell title="Title" subtitle="Subtitle" label="Label" />);

        cy.matchImageSnapshot();
    });

    it('label, title, subtitle', () => {
        mount(
            <>
                <Cell label="Label" contentLeft={contentLeft} contentRight={<Icon />} />
                <PadMe />
                <Cell title="Title" contentLeft={contentLeft} contentRight={<Icon />} />
                <PadMe />
                <Cell subtitle="Subtitle" contentLeft={contentLeft} contentRight={<Icon />} />
                <PadMe />
                <Cell
                    label="Label"
                    title="Title"
                    subtitle="Subtitle"
                    contentLeft={contentLeft}
                    contentRight={<Icon />}
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('stretching', () => {
        cy.viewport(500, 400);

        mount(
            <>
                <Cell {...componentProps} stretching="fixed" />
                <PadMe />
                <Cell {...componentProps} stretching="filled" />
                <PadMe />
                <Cell {...componentProps} stretching="auto" />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('align', () => {
        mount(
            <>
                <Cell {...componentProps} alignContentLeft="top" alignContentRight="top" />
                <PadMe />
                <Cell {...componentProps} alignContentLeft="center" alignContentRight="center" />
                <PadMe />
                <Cell {...componentProps} alignContentLeft="bottom" alignContentRight="bottom" />
            </>,
        );

        cy.matchImageSnapshot();
    });
});
