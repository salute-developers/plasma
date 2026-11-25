import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { ProgressProps } from './Progress.types';

const componentExists = hasComponent('Progress');
const describeFn = getDescribeFN('Progress');

const Icon = <IconPlasma size="s" color="inherit" />;
const progressProps = {
    value: 50,
};

getBaseVisualTests({
    component: 'Progress',
    componentProps: progressProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Progress', () => {
    const Progress = componentExists ? getComponent<ProgressProps>('Progress') : () => null;

    it('over min and max', () => {
        mount(
            <>
                <Progress value={-25} view="positive" />
                <PadMe />
                <Progress value={125} view="positive" />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('without value', () => {
        mount(<Progress value={25} hasValue={false} view="positive" />);

        cy.matchImageSnapshot();
    });

    it('labelPlacement', () => {
        mount(
            <>
                <Progress value={40} label="Загрузка" labelPlacement="top" hasValue />
                <PadMe />
                <Progress value={40} label="Загрузка" labelPlacement="left" hasValue />
                <PadMe />
                <Progress value={40} label="Загрузка" labelPlacement="none" hasValue />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('valuePlacement', () => {
        mount(
            <>
                <Progress value={60} valuePlacement="top" hasValue />
                <PadMe />
                <Progress value={60} valuePlacement="right" hasValue />
                <PadMe />
                <Progress value={60} valuePlacement="none" hasValue />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('valueAlign', () => {
        mount(
            <>
                <Progress value={50} valuePlacement="top" valueAlign="start" hasValue />
                <PadMe />
                <Progress value={50} valuePlacement="top" valueAlign="center" hasValue />
                <PadMe />
                <Progress value={50} valuePlacement="top" valueAlign="end" hasValue />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('caption', () => {
        mount(<Progress value={75} label="Загрузка файла" caption="Осталось 2 минуты" hasValue />);

        cy.matchImageSnapshot();
    });

    it('labelTextPlacement', () => {
        mount(
            <>
                <Progress
                    value={50}
                    labelIcon={Icon}
                    label="Загрузка"
                    labelTextPlacement="right"
                    labelPlacement="top"
                    hasValue
                />
                <PadMe />
                <Progress
                    value={50}
                    labelIcon={Icon}
                    label="Загрузка"
                    labelTextPlacement="left"
                    labelPlacement="top"
                    hasValue
                />
                <PadMe />
                <Progress
                    value={50}
                    label="Загрузка"
                    labelIcon={Icon}
                    labelTextPlacement="none"
                    labelPlacement="top"
                    hasValue
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('progressSize', () => {
        mount(
            <>
                <Progress value={60} label="2px" progressSize="2" hasValue />
                <PadMe />
                <Progress value={60} label="4px" progressSize="4" hasValue />
                <PadMe />
                <Progress value={60} label="6px" progressSize="6" hasValue />
                <PadMe />
                <Progress value={60} label="8px" progressSize="8" hasValue />
            </>,
        );

        cy.matchImageSnapshot();
    });
});
