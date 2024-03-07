/* eslint-disable */
import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { accent, success, warning, critical } from '@salutejs/plasma-core';
import { IconEye, IconMagicWand, IconAccessibility, IconHeart, IconTrash, IconLocation } from '@salutejs/plasma-icons';

import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const items = [
    {
        value: 'each',
        label: 'Каждый',
    },
    {
        value: 'hunter',
        label: 'Охотник',
    },
    {
        value: 'wants',
        label: 'Желает',
        contentLeft: <IconHeart color="inherit" />,
        items: [
            {
                value: '_fulllabel',
                label: 'Каждый охотник желает знать, где сидит фазан',
            },
            {
                value: '_thePheasant',
                label: 'Фазан',
            },
            {
                value: '_is',
                label: 'Сидит',
            },
        ],
    },
    {
        value: 'toKnow',
        label: 'Знать',
        isDisabled: true,
        contentLeft: <IconEye color="inherit" />,
    },
    {
        value: 'where',
        label: 'Где',
        color: accent,
        contentLeft: <IconLocation color="inherit" />,
    },
    {
        value: 'is',
        label: 'Сидит',
        color: success,
        contentLeft: <IconAccessibility color="inherit" />,
    },
    {
        value: 'thePheasant',
        label: 'Фазан',
        color: warning,
        contentLeft: <IconMagicWand color="inherit" />,
    },
    {
        value: 'fulllabel',
        label: 'Каждый охотник желает знать, где сидит фазан',
        contentLeft: <IconTrash color="inherit" />,
        color: critical,
    },
];

describe('plasma-hope: Dropdown', () => {
    const Dropdown = getComponent('Dropdown');
    const Button = getComponent('Button');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown items={items}>
                    <Button text="Open" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.matchImageSnapshot();
    });

    it('handling dropdown menu height', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown items={items} listOverflow="scroll" listHeight={6}>
                    <Button text="Open" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.matchImageSnapshot();
    });

    it('auto placement bottom', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Dropdown placement={['top', 'bottom']} items={items}>
                    <Button id="button" text="Open" stretching="filled" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#button').click();
        cy.matchImageSnapshot();
    });

    it('auto placement top', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ height: '450px' }}></div>

                <Dropdown placement={['top', 'bottom']} items={items}>
                    <Button id="button" text="Open" stretching="filled" />
                </Dropdown>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#button').click();
        cy.matchImageSnapshot();
    });
});
