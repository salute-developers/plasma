/* eslint-disable */
import React, { FC } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Tooltip', () => {
    const Tooltip = getComponent('Tooltip');
    const Button = getComponent('Button');

    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    function Demo() {
        const [inputValue, setInputValue] = React.useState('');

        return (
            <div>
                <div style={{ marginLeft: '100px', marginBottom: '35px' }}>
                    <Tooltip target={<Button text="hello" />} text={inputValue} isOpen />
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
            <CypressTestDecoratorWithTypo>
                <Tooltip
                    target={<Button text="hello" />}
                    text="Высокое качество воспроизведения"
                    isOpen
                    placement="right"
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
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
            <CypressTestDecoratorWithTypo>
                <Container>
                    <Tooltip
                        target={
                            <Tooltip target={<Button text="hello" />} placement="left" isOpen hasArrow text="Left" />
                        }
                        placement="top-start"
                        isOpen
                        hasArrow
                        text="Top start"
                    />
                    <Tooltip target={<Button text="hello" />} placement="top" isOpen hasArrow text="Top" />
                    <Tooltip
                        target={
                            <Tooltip target={<Button text="hello" />} placement="right" isOpen hasArrow text="Right" />
                        }
                        placement="top-end"
                        isOpen
                        hasArrow
                        text="Top end"
                    />
                    <Tooltip
                        target={<Button text="hello" />}
                        placement="bottom-start"
                        isOpen
                        hasArrow
                        text="Bottom start"
                    />
                    <Tooltip target={<Button text="hello" />} placement="bottom" isOpen hasArrow text="Bottom" />
                    <Tooltip
                        target={<Button text="hello" />}
                        placement="bottom-end"
                        isOpen
                        hasArrow
                        text="Bottom end"
                    />
                </Container>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('interaction', () => {
        function Demo() {
            const [isOpen, setVisible] = React.useState(false);

            return (
                <>
                    <Tooltip
                        target={
                            <Button
                                text="Toggle"
                                onClick={() => {
                                    setVisible((isVis) => !isVis);
                                }}
                            />
                        }
                        isOpen={isOpen}
                        placement="bottom"
                        text="Hello there"
                    />
                </>
            );
        }

        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <Container>
                    <Tooltip
                        target={<Button text="hello" />}
                        placement={['left', 'right']}
                        isOpen
                        hasArrow
                        text="Left"
                    />
                    <Tooltip
                        target={<Button text="hello" />}
                        placement={['top', 'bottom']}
                        isOpen
                        hasArrow
                        text="Top"
                    />
                </Container>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('long text', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tooltip
                    target={<Button text="hello" />}
                    placement="bottom"
                    isOpen
                    hasArrow
                    maxWidth="10rem"
                    text="It is not very long text for example. It is not very long text for example. It is not very long text for example. It is not very long text for example."
                />
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <Container>
                    <Tooltip target={<Button text="hello" />} placement="bottom-end" isOpen hasArrow text="Toggle" />
                </Container>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('isOpen false', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tooltip
                    target={<Button text="hello" />}
                    text="Высокое качество воспроизведения"
                    isOpen={false}
                    placement="right"
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('Text interaction', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot('empty');

        cy.get('input').type('1');

        cy.matchImageSnapshot('single');

        cy.get('input').type('234');

        cy.matchImageSnapshot('multiple');
    });
});
