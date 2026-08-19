import React from 'react';
import { getComponent, getDescribeFN, hasComponent, mount } from '@salutejs/plasma-cy-utils';

import type { IconButtonProps } from '../IconButton';

import type { TooltipProps } from './Tooltip.types';

const componentExists = hasComponent('Tooltip');
const iconButtonExists = hasComponent('IconButton');
const describeFn = getDescribeFN('Tooltip');

describeFn('Tooltip', () => {
    const Tooltip = componentExists ? getComponent<TooltipProps>('Tooltip') : () => null;
    const IconButton = iconButtonExists ? getComponent<IconButtonProps>('IconButton') : () => null;

    it('does not open on focus restored after page visibility changes', () => {
        cy.window().then((window) => {
            cy.stub(window, 'matchMedia').returns({ matches: false } as MediaQueryList);
        });

        mount(
            <Tooltip
                target={<IconButton aria-label="Target">Icon</IconButton>}
                text="Tooltip text"
                trigger="hover"
                mouseLeaveDelay={0}
            />,
        );

        cy.get('button').focus().should('be.focused');
        cy.contains('Tooltip text').should('be.visible');

        cy.get('button').trigger('mouseout', { force: true });
        cy.contains('Tooltip text').should('not.be.visible');

        cy.document().then((document) => {
            Object.defineProperty(document, 'visibilityState', { configurable: true, value: 'hidden' });
            document.dispatchEvent(new Event('visibilitychange'));

            Object.defineProperty(document, 'visibilityState', { configurable: true, value: 'visible' });
            document.dispatchEvent(new Event('visibilitychange'));
        });

        cy.get('button').trigger('focusin').should('be.focused');
        cy.contains('Tooltip text').should('not.be.visible');
    });
});
