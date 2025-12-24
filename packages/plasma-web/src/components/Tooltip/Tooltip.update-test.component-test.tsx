import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-web: Tooltip', () => {
    const Tooltip = getComponent('Tooltip');
    const Button = getComponent('Button');

    const Demo = ({
        size = 'm',
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
