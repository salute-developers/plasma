import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, SpaceMe, PadMe } from '@salutejs/plasma-cy-utils';
import { IconSleep, IconEye } from '@salutejs/plasma-icons';

import { TextField as TextFieldB2C } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const sizes = ['xs', 's', 'm', 'l'];

describe('plasma-b2c: TextField', () => {
    const TextField = getComponent('TextField') as typeof TextFieldB2C;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

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

    it(':clear, status, hasDivider', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField
                    appearance="clear"
                    hasDivider
                    size="m"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    status="success"
                />
                <SpaceMe />
                <TextField
                    appearance="clear"
                    hasDivider
                    size="m"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    status="warning"
                />
                <SpaceMe />
                <TextField
                    appearance="clear"
                    hasDivider
                    size="m"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    status="error"
                />
                <SpaceMe />
                <TextField appearance="clear" hasDivider size="m" placeholder="Placeholder" status="success" />
                <SpaceMe />
                <TextField appearance="clear" hasDivider size="m" placeholder="Placeholder" status="warning" />
                <SpaceMe />
                <TextField appearance="clear" hasDivider size="m" placeholder="Placeholder" status="error" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    sizes.forEach((size) => {
        it(`content: keepPlaceholder, size: ${size}`, () => {
            const props = {
                size,
                value: '',
                label: 'Label',
                labelPlacement: 'inner',
                placeholder: 'Placeholder',
                view: 'innerLabel',
                animatedHint: 'label',
                keepPlaceholder: true,
            };

            mount(
                <CypressTestDecoratorWithTypo>
                    <>
                        <TextField {...props} />
                        <SpaceMe />
                        <TextField
                            {...props}
                            contentLeft={<IconSleep color="inherit" size="s" />}
                            contentRight={<IconEye color="inherit" size="s" />}
                        />
                        <SpaceMe />
                        <TextField {...props} value="Value" />
                        <SpaceMe />
                        <TextField
                            {...props}
                            value="Value"
                            contentLeft={<IconSleep color="inherit" size="s" />}
                            contentRight={<IconEye color="inherit" size="s" />}
                        />
                    </>
                </CypressTestDecoratorWithTypo>,
            );

            cy.matchImageSnapshot();
        });
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
                    view="innerLabel"
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

    it('textBefore,textAfter', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField
                    size="s"
                    value="Outer"
                    placeholder="Placeholder"
                    label="Label"
                    labelPlacement="outer"
                    textBefore="_"
                    textAfter="%"
                />
                <SpaceMe />
                <TextField
                    size="s"
                    value="Outer focused"
                    placeholder="Placeholder"
                    label="Label"
                    labelPlacement="outer"
                    textBefore="_"
                    textAfter="%"
                />
                <SpaceMe />
                <TextField
                    size="s"
                    value="Inner"
                    placeholder="Placeholder"
                    label="Label"
                    labelPlacement="inner"
                    view="innerLabel"
                    textBefore="_"
                    textAfter="%"
                />
                <SpaceMe />
                <TextField
                    size="s"
                    value=""
                    placeholder="Placeholder"
                    label="Label"
                    labelPlacement="inner"
                    view="innerLabel"
                    textBefore="_"
                    textAfter="%"
                />
                <SpaceMe />
                <TextField
                    id="focused"
                    size="s"
                    value=""
                    placeholder="Placeholder"
                    label="Label"
                    labelPlacement="inner"
                    view="innerLabel"
                    keepPlaceholder
                    textBefore="_"
                    textAfter="%"
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#focused').focus();

        cy.matchImageSnapshot();

        mount(
            <CypressTestDecoratorWithTypo>
                <div id="test">
                    <TextField
                        id="empty"
                        size="s"
                        value=""
                        placeholder=""
                        label="Label"
                        labelPlacement="inner"
                        view="innerLabel"
                        keepPlaceholder
                        textBefore="_"
                        textAfter="%"
                    />
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('#empty').focus();
        cy.get('#test').matchImageSnapshot('empty');
    });

    it('with hint', () => {
        const cases = [
            { labelPlacement: 'outer' },
            { labelPlacement: 'inner', view: 'innerLabel' },
            { labelPlacement: 'inner', view: 'innerLabel', hintTargetPlacement: 'inner' },
        ] as const;

        mount(
            <>
                {cases.map((props) => (
                    <div style={{ margin: '0 3rem' }}>
                        <TextField
                            value="Value"
                            placeholder="Placeholder"
                            label="Title"
                            hintText="Подсказка к полю"
                            hintTrigger="click"
                            {...props}
                        />
                        <PadMe />
                    </div>
                ))}
            </>,
        );

        cy.get('.popover-wrapper').first().click();

        cy.matchImageSnapshot();
    });
});
