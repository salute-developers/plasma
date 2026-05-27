import React, { useRef } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';

import type { PopoverProps, PopoverTrigger } from './Popover.types';

const componentExists = hasComponent('Popover');
const componentButtonExists = hasComponent('Button');
const describeFn = getDescribeFN('Popover');

const text = 'Голосовая викторина с Валдисом Пельшем';

describeFn('Popover', () => {
    const Popover = componentExists ? getComponent<PopoverProps>('Popover') : () => null;
    const Button = componentButtonExists ? getComponent('Button') : (props: any) => <button type="button" {...props} />;

    const Demo = (props: { trigger?: PopoverTrigger; closeOnOverlayClick?: boolean; closeOnEsc?: boolean }) => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <Popover
                opened={isOpen}
                onToggle={(is) => setIsOpen(is)}
                role="presentation"
                id="popover"
                target={<Button>Target</Button>}
                {...props}
            >
                <div>
                    <p>{text}</p>
                    <Button onClick={() => setIsOpen(!isOpen)}>close</Button>
                </div>
            </Popover>
        );
    };

    it('open popover by click', () => {
        mount(<Demo trigger="click" />);

        cy.get('button').first().click();
        cy.get('p').contains(text).should('be.visible');
    });

    it('open popover by hover', () => {
        mount(<Demo trigger="hover" />);

        cy.get('button').first().trigger('mouseover', { force: true });
        cy.get('p').contains(text).should('be.visible');
    });

    it('close popover by mouseleave a target', () => {
        mount(<Demo trigger="hover" />);

        cy.get('button').first().trigger('mouseover', { force: true });
        cy.get('p').contains(text).should('be.visible');

        cy.get('button').first().trigger('mouseout', { force: true });
        cy.get('.popover-root').should('not.be.visible');
    });

    it('close popover', () => {
        mount(<Demo trigger="click" />);

        cy.get('button').first().click();
        cy.get('p').contains(text).should('be.visible');

        cy.get('button').contains('close').click();
        cy.get('p').contains(text).should('not.be.visible');
    });

    it('close popover by overlay click', () => {
        mount(<Demo trigger="click" closeOnOverlayClick />);

        cy.get('button').first().click();
        cy.get('p').contains(text).should('be.visible');

        cy.get('body').click(5, 5);
        cy.get('p').contains(text).should('not.be.visible');
    });

    it('close popover by ESC', () => {
        mount(<Demo trigger="click" closeOnEsc />);

        cy.get('button').first().click();
        cy.get('p').contains(text).should('be.visible');

        cy.get('body').type('{esc}');
        cy.get('p').contains(text).should('not.be.visible');
    });

    const TargetAsRef = () => {
        const [isOpen, setIsOpen] = React.useState(false);
        const targetRef = useRef<HTMLButtonElement>(null);

        return (
            <>
                <Button ref={targetRef}>Target</Button>
                <Popover
                    opened={isOpen}
                    onToggle={(is) => setIsOpen(is)}
                    role="presentation"
                    id="popover"
                    target={targetRef}
                    trigger="click"
                    closeOnEsc
                >
                    <div>
                        <p>{text}</p>
                        <Button onClick={() => setIsOpen(!isOpen)}>close</Button>
                    </div>
                </Popover>
            </>
        );
    };

    it('target as ref', () => {
        mount(<TargetAsRef />);

        cy.get('button').first().click();
        cy.get('p').contains(text).should('be.visible');

        cy.get('body').type('{esc}');
        cy.get('p').contains(text).should('not.be.visible');
    });

    it('resizable', () => {
        function Resizable() {
            const [isOpen, setIsOpen] = React.useState(false);

            return (
                <Popover
                    opened={isOpen}
                    onToggle={(is) => setIsOpen(is)}
                    role="presentation"
                    id="popover"
                    target={<Button>Target</Button>}
                    resizable
                >
                    <div
                        style={{
                            background: 'var(--surface-solid-card)',
                            padding: '1rem',
                            height: '100%',
                            boxSizing: 'border-box',
                        }}
                    >
                        <p>{text}</p>
                        <Button onClick={() => setIsOpen(!isOpen)}>close</Button>
                    </div>
                </Popover>
            );
        }

        mount(<Resizable />);

        cy.get('button').first().click();

        cy.get('.resizable-bottom-right-icon')
            .trigger('mousedown')
            .trigger('mousemove', { clientX: 400, clientY: 400 })
            .trigger('mouseup');

        cy.matchImageSnapshot();
    });

    const styleForTest = {
        width: '30rem',
        height: '30rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const contentStyle = {
        background: 'var(--surface-solid-03)',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        borderRadius: '0.5rem',
    };

    const PopoverForTest = ({
        placement,
        trigger,
        closeOnOverlayClick,
        closeOnEsc,
        hasArrow,
        isFocusTrapped,
        offset,
    }: any) => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <section style={styleForTest}>
                <Popover
                    opened={isOpen}
                    onToggle={(is) => setIsOpen(is)}
                    id="popover"
                    target={<Button>Open</Button>}
                    offset={offset}
                    placement={placement}
                    trigger={trigger}
                    hasArrow={hasArrow}
                    closeOnOverlayClick={closeOnOverlayClick}
                    closeOnEsc={closeOnEsc}
                    isFocusTrapped={isFocusTrapped}
                >
                    <div style={contentStyle}>
                        <p>Content</p>
                        <Button onClick={() => setIsOpen(false)}>close</Button>
                    </div>
                </Popover>
            </section>
        );
    };

    it('placement=right, trigger=click, skidding=100, distance=0', () => {
        mount(
            <PopoverForTest
                placement="right"
                trigger="click"
                offset={[100, 0]}
                closeOnOverlayClick={false}
                closeOnEsc={false}
                hasArrow
                isFocusTrapped
            />,
        );

        cy.get('button').contains('Open').click();
        cy.matchImageSnapshot();
    });

    it('placement=left, opened, trigger=click, skidding=0, distance=6', () => {
        mount(
            <section style={styleForTest}>
                <Popover
                    opened
                    id="popover"
                    target={<Button>Open</Button>}
                    offset={[0, 6]}
                    placement="left"
                    trigger="click"
                    hasArrow
                    closeOnOverlayClick={false}
                    closeOnEsc={false}
                    isFocusTrapped={false}
                >
                    <div style={contentStyle}>
                        <p>Content</p>
                        <Button>close</Button>
                    </div>
                </Popover>
            </section>,
        );

        cy.get('#popover').contains('Content').should('be.visible');
        cy.matchImageSnapshot();
        cy.get('body').click(0, 0);
        cy.get('#popover').contains('Content').should('be.visible');
    });

    it('placement=auto, trigger=click, closeOnOverlay, hasArrow=false', () => {
        mount(
            <PopoverForTest
                placement="auto"
                trigger="click"
                offset={[0, 6]}
                closeOnOverlayClick
                closeOnEsc={false}
                hasArrow={false}
                isFocusTrapped
            />,
        );

        cy.get('button').contains('Open').click();
        cy.matchImageSnapshot();
    });
});
