import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

describe('plasma-web: Progress', () => {
    const Progress = getComponent('Progress') as React.ComponentType<any>;

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={25} view="positive" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('over min and max', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={-25} view="positive" />
                <PadMe />
                <Progress value={125} view="positive" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('__hasValue', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={25} hasValue={false} view="positive" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_status (legacy)', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={25} status="success" />
                <PadMe />
                <Progress value={50} status="warning" />
                <PadMe />
                <Progress value={75} status="error" />
                <PadMe />
                <Progress value={100} status="accent" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={25} view="default" />
                <PadMe />
                <Progress value={25} view="secondary" />
                <PadMe />
                <Progress value={25} view="accent" />
                <PadMe />
                <Progress value={25} view="positive" />
                <PadMe />
                <Progress value={25} view="warning" />
                <PadMe />
                <Progress value={25} view="negative" />
                <PadMe />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_labelPlacement', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={40} label="Загрузка" labelPlacement="top" hasValue />
                <PadMe />
                <Progress value={40} label="Загрузка" labelPlacement="left" hasValue />
                <PadMe />
                <Progress value={40} label="Загрузка" labelPlacement="none" hasValue />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_valuePlacement', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={60} valuePlacement="top" hasValue />
                <PadMe />
                <Progress value={60} valuePlacement="right" hasValue />
                <PadMe />
                <Progress value={60} valuePlacement="none" hasValue />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_valueAlign', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={50} valuePlacement="top" valueAlign="start" hasValue />
                <PadMe />
                <Progress value={50} valuePlacement="top" valueAlign="center" hasValue />
                <PadMe />
                <Progress value={50} valuePlacement="top" valueAlign="end" hasValue />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('__caption', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={75} label="Загрузка файла" caption="Осталось 2 минуты" hasValue />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('__labelTextPlacement', () => {
        mount(
            <CypressTestDecorator>
                <Progress
                    value={50}
                    labelIcon={<IconPlasma size="s" />}
                    label="Загрузка"
                    labelTextPlacement="right"
                    labelPlacement="top"
                    hasValue
                />
                <PadMe />
                <Progress
                    value={50}
                    labelIcon={<IconPlasma size="s" />}
                    label="Загрузка"
                    labelTextPlacement="left"
                    labelPlacement="top"
                    hasValue
                />
                <PadMe />
                <Progress
                    value={50}
                    label="Загрузка"
                    labelIcon={<IconPlasma size="s" />}
                    labelTextPlacement="none"
                    labelPlacement="top"
                    hasValue
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_progressSize', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={60} label="2px" progressSize="2" hasValue />
                <PadMe />
                <Progress value={60} label="4px" progressSize="4" hasValue />
                <PadMe />
                <Progress value={60} label="6px" progressSize="6" hasValue />
                <PadMe />
                <Progress value={60} label="8px" progressSize="8" hasValue />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
