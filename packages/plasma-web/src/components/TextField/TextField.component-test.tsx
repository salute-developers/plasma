import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconSleep, IconEye } from '@salutejs/plasma-icons';

import { TextField as TextFieldWeb } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: TextField', () => {
    const TextField = getComponent('TextField') as typeof TextFieldWeb;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    function Demo({ maxLength }) {
        const [value, setValue] = React.useState('');

        return (
            <TextField
                size="m"
                maxLength={maxLength}
                placeholder="Placeholder"
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                value={value}
                helperText="Helper text"
            />
        );
    }

    it('default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField size="m" value="Value" placeholder="Placeholder" helperText="Helper text" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField size="s" value="Small s" label="Label" placeholder="Placeholder" helperText="Helper text" />
                <SpaceMe />
                <TextField size="m" value="Medium m" label="Label" placeholder="Placeholder" helperText="Helper text" />
                <SpaceMe />
                <TextField size="l" value="Medium l" label="Label" placeholder="Placeholder" helperText="Helper text" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_status', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField size="m" value="Value" placeholder="Placeholder" helperText="Helper text" status="success" />
                <SpaceMe />
                <TextField size="m" value="Value" placeholder="Placeholder" helperText="Helper text" status="warning" />
                <SpaceMe />
                <TextField size="m" value="Value" placeholder="Placeholder" helperText="Helper text" status="error" />
                <SpaceMe />
                <TextField size="m" placeholder="Placeholder" status="success" />
                <SpaceMe />
                <TextField size="m" placeholder="Placeholder" status="warning" />
                <SpaceMe />
                <TextField size="m" placeholder="Placeholder" status="error" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_maxLength', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo maxLength={10} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').type('More then ten symbols');

        cy.matchImageSnapshot();
    });

    it(':empty', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField size="m" placeholder="Placeholder" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it(':focused', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField size="m" value="Value" placeholder="Placeholder" helperText="Helper text" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input:first').focus();
        cy.matchImageSnapshot();
    });

    it(':disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField size="m" value="Value" placeholder="Placeholder" helperText="Helper text" disabled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it(':readOnly', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField size="m" value="Value" placeholder="Placeholder" helperText="Helper text" readOnly />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('content', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField
                    size="m"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentLeft={<IconSleep color="inherit" size="s" />}
                />
                <SpaceMe />
                <TextField
                    size="m"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentLeft={<IconSleep color="inherit" size="s" />}
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <SpaceMe />
                <TextField
                    size="m"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_defaultValue', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField size="m" defaultValue="Default value" placeholder="Placeholder" helperText="Helper text" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('content: with label', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField
                    size="l"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    animatedHint="label"
                    label="Label"
                />
                <TextField
                    size="l"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    animatedHint="label"
                    label="Label"
                    contentLeft={<IconSleep color="inherit" size="s" />}
                />
                <SpaceMe />
                <TextField
                    size="l"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    animatedHint="label"
                    label="Label"
                    contentLeft={<IconSleep color="inherit" size="s" />}
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <SpaceMe />
                <TextField
                    size="l"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    animatedHint="label"
                    label="Label"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_animatedHint:label', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField
                    size="l"
                    label="Label"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    animatedHint="label"
                />
                <SpaceMe />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_animatedHint:placeholder', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {/* for backward comp  */}
                <div
                    style={{
                        marginBottom: '8px',
                        lineHeight: '20px',
                        letterSpacing: '-0.32px',
                        fontFamily: '"SB Sans Text", SBSansText, sans-serif',
                        fontSize: '16px',
                    }}
                >
                    Label
                </div>
                <TextField
                    size="l"
                    label="" /** no more label & placeholder together */
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    animatedHint="placeholder"
                />
                <SpaceMe />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_enumerationType:chip', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField
                    size="l"
                    label="Label"
                    enumerationType="chip"
                    chips={['Value 1', 'Value 2']}
                    placeholder="Placeholder"
                    helperText="Helper text"
                    animatedHint="label"
                />
                <SpaceMe />
                <TextField
                    size="l"
                    label="Label"
                    value="place values"
                    enumerationType="chip"
                    chips={['Value 1', 'Value 2']}
                    placeholder="Placeholder"
                    helperText="Helper text"
                    animatedHint="label"
                />
                <SpaceMe />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    describe('_required', () => {
        const sizes = ['xs', 's', 'm', 'l'];

        const cases = [
            { required: true, labelPlacement: 'outer' },
            { required: true, requiredPlacement: 'right', labelPlacement: 'outer' },
            { required: true, labelPlacement: 'inner' },
            { required: true, requiredPlacement: 'right', labelPlacement: 'inner' },
        ];

        sizes.forEach((size) => {
            it(`_size:${size}`, () => {
                mount(
                    <CypressTestDecoratorWithTypo>
                        {cases.map((props) => (
                            <div style={{ margin: '0 1rem' }}>
                                <TextField
                                    value="Value"
                                    placeholder="Placeholder"
                                    label="Title"
                                    size={size}
                                    {...props}
                                />
                                <SpaceMe />
                            </div>
                        ))}
                    </CypressTestDecoratorWithTypo>,
                );

                cy.matchImageSnapshot();
            });
        });
    });
});

describe('plasma-web: TextField keyboard navigation', () => {
    const TextField = getComponent('TextField') as typeof TextFieldWeb;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('chips', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField size="m" placeholder="Placeholder" enumerationType="chip" helperText="Helper text" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').tab();

        // добавляем chips
        cy.get('input').type('Hello,{enter} Plasma!{enter} Have fun{enter}');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('.has-chips').find('button').should('have.length', 3);

        // фокус на первом чипе слева от инпута по ArrowLeft
        cy.get('input').type('{leftarrow}');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100);
        cy.get('.has-chips').find('button').eq(2).should('be.focused');

        // фокус на первом чипе по ArrowLeft
        cy.focused()
            .trigger('keydown', { key: 'ArrowLeft' })
            .trigger('keydown', { key: 'ArrowLeft' })
            .trigger('keydown', { key: 'ArrowLeft' });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('.has-chips').find('button').eq(0).should('be.focused');

        // фокус на инпуте по ArrowRight до конца
        cy.focused()
            .trigger('keydown', { key: 'ArrowRight' })
            .trigger('keydown', { key: 'ArrowRight' })
            .trigger('keydown', { key: 'ArrowRight' });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('input').should('be.focused');

        // удалён последний чип по Backspace из фокуса на инпуте
        cy.focused().trigger('keydown', { key: 'Backspace' });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('.has-chips').find('button').should('have.length', 2);

        // фокус на первом чипе по ArrowLeft
        cy.focused().trigger('keydown', { key: 'ArrowLeft' }).trigger('keydown', { key: 'ArrowLeft' });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('.has-chips').find('button').eq(0).should('be.focused');

        // удалён первый чип по Backspace
        cy.focused().trigger('keydown', { key: 'Backspace' });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('.has-chips').find('button').should('have.length', 1);

        // фокус на инпуте и ввод текста
        cy.get('input').focus().type('Hello!!!');

        // удаление части текста
        cy.focused().type('{backspace}{backspace}{backspace}');
        cy.get('input').should('have.value', 'Hello');

        cy.matchImageSnapshot();
    });
});
