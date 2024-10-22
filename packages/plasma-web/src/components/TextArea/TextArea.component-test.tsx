import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconEye } from '@salutejs/plasma-icons';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: TextArea', () => {
    const TextArea = getComponent('TextArea');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const propsDefault = {
        placeholder: 'Оставьте ваш комментарий [placeholder]',
        leftHelper: 'Максимум 300 символов',
        rightHelper: '125 слов',
    };

    /*
     * INFO: Необходимо исключить эту ошибку, т.к. это проблема в Cypress:
     * https://github.com/cypress-io/cypress/issues/8418#issuecomment-992564877
     */
    beforeEach(() => {
        cy.on('uncaught:exception', (err) => {
            if (err.toString().match(/ResizeObserver loop limit exceeded/)) {
                return false;
            }
        });
    });

    it('default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea value="Value" placeholder="Placeholder" helperText="Helper text" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it(':empty', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea placeholder="Placeholder" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it(':focused', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea value="Value" placeholder="Placeholder" helperText="Helper text" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('textarea:first').focus();
        cy.matchImageSnapshot();
    });

    it(':disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea value="Value" placeholder="Placeholder" helperText="Helper text" disabled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it(':success, :warning, :error', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea value="Value" placeholder="Placeholder" helperText="Helper text" status="success" />
                <SpaceMe />
                <TextArea value="Value" placeholder="Placeholder" helperText="Helper text" status="warning" />
                <SpaceMe />
                <TextArea value="Value" placeholder="Placeholder" helperText="Helper text" status="error" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it(':clear, :success, :warning, :error', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea
                    value="Value"
                    label="Placeholder"
                    labelPlacement="inner"
                    helperText="Helper text"
                    status="success"
                    clear
                    hasDivider
                />
                <SpaceMe />
                <TextArea placeholder="Placeholder" helperText="Helper text" status="warning" clear hasDivider />
                <SpaceMe />
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    status="error"
                    clear
                    hasDivider
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('resize', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea
                    resize="horizontal"
                    value="horizontal"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <TextArea
                    resize="vertical"
                    value="vertical"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <TextArea
                    resize="both"
                    value="both"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.root().get('textarea').last().invoke('attr', 'style', 'width: 280px; height: 140px;');

        cy.matchImageSnapshot();
    });

    it('custom width and height', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    width={10}
                    height={10}
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('contentRight', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <SpaceMe />
                <TextArea
                    value="Very very very very very very very very very very very very long text"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('leftHelper and rightHelper', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Helper text left"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <SpaceMe />
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    rightHelper="Helper text right"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <SpaceMe />
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Helper text left"
                    rightHelper="Helper text right"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('defaultValue', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea placeholder="Placeholder" defaultValue="Default Value" leftHelper="Helper text left" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('placeholder with multiline', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea width={10} placeholder="Very very long placeholder" leftHelper="Helper text left" />
                <SpaceMe />
                <TextArea
                    width={10}
                    placeholder="Very very long placeholder"
                    leftHelper="Helper text left"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    describe('_required', () => {
        const sizes = ['xs', 's', 'm', 'l'];

        const cases = [
            { labelPlacement: 'outer' },
            { requiredPlacement: 'right', labelPlacement: 'outer' },
            { labelPlacement: 'inner' },
            { requiredPlacement: 'right', labelPlacement: 'inner' },
        ];

        sizes.forEach((size) => {
            it(`_size:${size}`, () => {
                mount(
                    <CypressTestDecoratorWithTypo>
                        {cases.map((props) => (
                            <div style={{ margin: '0 1rem' }}>
                                <TextArea
                                    value="Value"
                                    placeholder="Placeholder"
                                    label="Title"
                                    size={size}
                                    height="2.5rem"
                                    required
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

    it('_size :empty', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea size="l" {...propsDefault} />
                <SpaceMe />
                <TextArea size="m" {...propsDefault} />
                <SpaceMe />
                <TextArea size="s" {...propsDefault} />
                <SpaceMe />
                <TextArea size="xs" {...propsDefault} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        const props = {
            value: 'Ваш сервис - пушка',
            ...propsDefault,
        };

        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea size="l" {...props} />
                <SpaceMe />
                <TextArea size="m" {...props} />
                <SpaceMe />
                <TextArea size="s" {...props} />
                <SpaceMe />
                <TextArea size="xs" {...props} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_size with content', () => {
        const props = {
            value: 'Ваш сервис - пушка',
            contentRight: <IconEye color="inherit" size="s" />,
            ...propsDefault,
        };

        mount(
            <CypressTestDecoratorWithTypo>
                <TextArea size="l" {...props} />
                <SpaceMe />
                <TextArea size="m" {...props} />
                <SpaceMe />
                <TextArea size="s" {...props} />
                <SpaceMe />
                <TextArea size="xs" {...props} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    describe('with hint', () => {
        const sizes = ['xs', 's', 'm', 'l'];

        const cases = [{ labelPlacement: 'outer' }, { labelPlacement: 'inner' }];

        sizes.forEach((size) => {
            it(`_size:${size}`, () => {
                mount(
                    <CypressTestDecoratorWithTypo>
                        {cases.map((props) => (
                            <div style={{ margin: '0 1rem' }}>
                                <TextArea
                                    value="Value"
                                    placeholder="Placeholder"
                                    label="Title"
                                    size={size}
                                    height="2.5rem"
                                    hintText="Подсказка к полю"
                                    hintTrigger="click"
                                    {...props}
                                />
                                <SpaceMe />
                            </div>
                        ))}
                    </CypressTestDecoratorWithTypo>,
                );

                cy.get('.popover-wrapper').first().click();

                cy.matchImageSnapshot();
            });
        });
    });
});
