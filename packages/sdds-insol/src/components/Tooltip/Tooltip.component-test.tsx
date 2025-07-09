/* eslint-disable */
import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('sdds-insol: Tooltip', () => {
    const Tooltip = getComponent('Tooltip');
    const Button = getComponent('Button');

    function Demo() {
        const [inputValue, setInputValue] = React.useState('');

        return (
            <div>
                <div style={{ marginLeft: '100px', marginBottom: '35px' }}>
                    <Tooltip target={<Button text="hello" />} text={inputValue} opened />
                </div>
                <label
                    htmlFor="tooltip-input"
                    style={{
                        display: 'block',
                        marginTop: '100px',
                    }}
                >
                    <input
                        id="tooltip-input"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                </label>
            </div>
        );
    }

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Tooltip
                    target={<Button text="hello" />}
                    text="Высокое качество воспроизведения"
                    opened
                    placement="bottom"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot({
            failureThreshold: 0.02,
            failureThresholdType: 'percent',
        });
    });

    it('multiple placement', () => {
        const Container = ({ children }) => {
            return (
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, max-content)',
                        gridGap: '1rem 3.5rem',
                        padding: '2.5rem',
                    }}
                >
                    {children}
                </div>
            );
        };

        mount(
            <CypressTestDecorator>
                <Container>
                    <Tooltip
                        target={
                            <Tooltip target={<Button text="hello" />} placement="left" opened hasArrow text="Left" />
                        }
                        placement="top-start"
                        opened
                        hasArrow
                        text="Top start"
                    />
                    <Tooltip target={<Button text="hello" />} placement="top" opened hasArrow text="Top" />
                    <Tooltip
                        target={
                            <Tooltip target={<Button text="hello" />} placement="right" opened hasArrow text="Right" />
                        }
                        placement="top-end"
                        opened
                        hasArrow
                        text="Top end"
                    />
                    <Tooltip
                        target={<Button text="hello" />}
                        placement="bottom-start"
                        opened
                        hasArrow
                        text="Bottom start"
                    />
                    <Tooltip target={<Button text="hello" />} placement="bottom" opened hasArrow text="Bottom" />
                    <Tooltip
                        target={<Button text="hello" />}
                        placement="bottom-end"
                        opened
                        hasArrow
                        text="Bottom end"
                    />
                </Container>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('multiple lines placement', () => {
        mount(
            <CypressTestDecorator>
                <div
                    style={{
                        margin: '10rem',
                        marginBottom: '15rem',
                    }}
                >
                    <Tooltip
                        target={
                            <Tooltip
                                target={<Button text="hello" />}
                                placement="right-start"
                                maxWidth="7rem"
                                text="Right start: very long looong text, really long"
                                opened
                                hasArrow
                            />
                        }
                        placement="left-start"
                        maxWidth="7rem"
                        text="Left start: very long looong text, really long"
                        opened
                        hasArrow
                    />
                </div>
                <div
                    style={{
                        margin: '10rem',
                    }}
                >
                    <Tooltip
                        target={
                            <Tooltip
                                target={<Button text="hello" />}
                                placement="right-end"
                                text="Right end: very long looong text, really long"
                                maxWidth="7rem"
                                opened
                                hasArrow
                            />
                        }
                        placement="left-end"
                        text="Left end: very long looong text, really long"
                        maxWidth="7rem"
                        opened
                        hasArrow
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('interaction', () => {
        function Demo() {
            const [isOpen, setIsOpen] = React.useState(false);

            return (
                <>
                    <Tooltip
                        target={
                            <Button
                                text="Toggle"
                                onClick={() => {
                                    setIsOpen((isVis) => !isVis);
                                }}
                            />
                        }
                        opened={isOpen}
                        placement="bottom"
                        text="Hello there"
                    />
                </>
            );
        }

        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('out of bounds + multiple placement', () => {
        const Container = ({ children }) => {
            return (
                <div
                    style={{
                        display: 'flex',
                        gap: '4rem',
                    }}
                >
                    {children}
                </div>
            );
        };

        mount(
            <CypressTestDecorator>
                <Container>
                    <Tooltip
                        target={<Button text="hello" />}
                        placement={['left', 'right']}
                        opened
                        hasArrow
                        text="Left"
                    />
                    <Tooltip
                        target={<Button text="hello" />}
                        placement={['top', 'bottom']}
                        opened
                        hasArrow
                        text="Top"
                    />
                </Container>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('long text', () => {
        mount(
            <CypressTestDecorator>
                <Tooltip
                    target={<Button text="hello" />}
                    placement="bottom"
                    opened
                    hasArrow
                    maxWidth="10rem"
                    text="It is not very long text for example. It is not very long text for example. It is not very long text for example. It is not very long text for example."
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('wrapper overflow scroll', () => {
        const Container = ({ children }) => {
            return (
                <div
                    style={{
                        background: 'coral',
                        overflow: 'scroll',
                    }}
                >
                    {children}
                </div>
            );
        };

        mount(
            <CypressTestDecorator>
                <Container>
                    <Tooltip target={<Button text="hello" />} placement="bottom-end" opened hasArrow text="Toggle" />
                </Container>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('opened false', () => {
        mount(
            <CypressTestDecorator>
                <Tooltip
                    target={<Button text="hello" />}
                    text="Высокое качество воспроизведения"
                    opened={false}
                    placement="right"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('Text interaction', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot('empty');

        cy.get('input').type('1');

        cy.matchImageSnapshot('single');

        cy.get('input').type('234');

        cy.matchImageSnapshot('multiple');
    });

    describe('trigger', () => {
        it('trigger:click', () => {
            mount(
                <CypressTestDecorator>
                    <span id="outer" />
                    <Tooltip
                        target={<Button text="hello" />}
                        text="World"
                        placement="bottom"
                        trigger="click"
                        closeOnOverlayClick
                    />
                </CypressTestDecorator>,
            );

            cy.contains('World').should('not.visible');

            cy.contains('hello').click();
            cy.contains('World').should('be.visible');

            cy.contains('hello').click();
            cy.contains('World').should('not.visible');

            cy.contains('hello').click();
            cy.contains('World').should('be.visible');
            cy.get('#outer').click({ force: true });
        });

        it('trigger:hover', () => {
            mount(
                <CypressTestDecorator>
                    <Tooltip target={<Button text="hello" />} text="World" placement="bottom" trigger="hover" />
                </CypressTestDecorator>,
            );

            cy.contains('World').should('not.visible');

            cy.get('button').first().trigger('mouseover', { force: true });
            cy.contains('World').should('be.visible');

            cy.get('button').first().trigger('mouseout', { force: true });
            cy.contains('World').should('not.visible');
        });

        it('trigger:none', () => {
            mount(
                <CypressTestDecorator>
                    <Tooltip target={<Button text="hello" />} text="World" placement="bottom" trigger="none" />
                </CypressTestDecorator>,
            );

            cy.contains('World').should('not.visible');

            cy.get('button').first().trigger('mouseover', { force: true });
            cy.contains('World').should('not.visible');

            cy.contains('hello').click();
            cy.contains('World').should('not.visible');
        });
    });
});
