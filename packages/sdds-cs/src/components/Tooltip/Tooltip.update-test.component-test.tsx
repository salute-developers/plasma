import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { Button as ButtonCS } from '../Button';

import { Tooltip as TooltipCS } from '.';

describe('sdds-cs: Tooltip', () => {
    const Tooltip = getComponent('Tooltip') as typeof TooltipCS;
    const Button = getComponent('Button') as typeof ButtonCS;

    const Demo = ({
        size = 's',
        placement = 'top',
        hasArrow = true,
    }: {
        size?: string;
        placement?: string;
        hasArrow?: boolean;
    }) => {
        return (
            <div style={{ margin: '100px' }}>
                <Tooltip
                    size={size}
                    placement={placement}
                    hasArrow={hasArrow}
                    target={<Button text="hello" />}
                    text={placement}
                    opened
                />
            </div>
        );
    };

    it('[PLASMA-T1745] Tooltip: size=m, placement=top, hasArrow', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1746] Tooltip: size=s, placement=bottom', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="s" placement="bottom" hasArrow={false} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1747] Tooltip: placement=left', () => {
        mount(
            <CypressTestDecorator>
                <Demo placement="left" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1748] Tooltip: placement=right', () => {
        mount(
            <CypressTestDecorator>
                <Demo placement="right" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
