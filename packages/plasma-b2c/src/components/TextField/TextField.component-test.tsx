import React, { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { IconSleep, IconEye } from '@salutejs/plasma-icons';

import { TextField as TextFieldB2C } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: TextField', () => {
    const TextField = getComponent('TextField') as typeof TextFieldB2C;

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

    it(':clear, status, hasDivider', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <TextField
                    clear
                    hasDivider
                    size="m"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    status="success"
                />
                <SpaceMe />
                <TextField
                    clear
                    hasDivider
                    size="m"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    status="warning"
                />
                <SpaceMe />
                <TextField
                    clear
                    hasDivider
                    size="m"
                    value="Value"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    status="error"
                />
                <SpaceMe />
                <TextField clear hasDivider size="m" placeholder="Placeholder" status="success" />
                <SpaceMe />
                <TextField clear hasDivider size="m" placeholder="Placeholder" status="warning" />
                <SpaceMe />
                <TextField clear hasDivider size="m" placeholder="Placeholder" status="error" />
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

    describe('with hint', () => {
        const sizes = ['xs', 's', 'm', 'l'] as const;

        const cases = [{ labelPlacement: 'outer' }, { labelPlacement: 'inner' }];

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

describe('plasma-b2c: TextField keyboard navigation', () => {
    const TextField = getComponent('TextField') as typeof TextFieldB2C;

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

describe('plasma-b2c: TextField email validation', () => {
    const TextField = getComponent('TextField') as typeof TextFieldB2C;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const options = {
        minLength: {
            value: 7,
            errorMessage: 'Почта слишком короткая',
        },
        maxLength: {
            value: 30,
            errorMessage: 'Почта слишком длинная',
        },
        minHostLength: {
            value: 2,
            errorMessage: 'Хост слишком короткий',
        },
        maxHostLength: {
            value: 12,
            errorMessage: 'Хост слишком длинный',
        },
        minDomainLength: {
            value: 3,
            errorMessage: 'Домен слишком короткий',
        },
        maxDomainLength: {
            value: 6,
            errorMessage: 'Домен слишком длинный',
        },
        minZoneLength: {
            value: 2,
            errorMessage: 'Доменная зона слишком короткая',
        },
        maxZoneLength: {
            value: 5,
            errorMessage: 'Доменная зона слишком длинная',
        },
        whitelistDomains: {
            value: ['plasma.ru', 'gmail.com', 'mail.ru'],
            errorMessage: 'Домен не разрешен',
        },
        blacklistDomains: {
            value: ['hah.ah', 'heh.eh'],
            errorMessage: 'Домен запрещен',
        },
    };

    const Demo = () => {
        const [error, setError] = useState('');

        const handleOnChange = () => {
            setError('');
        };

        const handleOnValidate = ({ errorMessage }: { errorMessage?: string }) => {
            setError(errorMessage || '');
        };

        return (
            <TextField
                size="m"
                label="Валидация почты"
                placeholder="Заполните поле"
                validationType="email"
                options={options}
                status={error ? 'error' : undefined}
                helperText={error || 'Валидация почты'}
                onChange={handleOnChange}
                onValidate={handleOnValidate}
            />
        );
    };

    it('email validation', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        // проверка корректности почты
        cy.get('input').type('HelloPlasmaHaveFun{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', 'Invalid email');

        cy.get('input').clear().type('HelloPlasmaHaveFun@{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', 'Invalid email');

        // проверка длины почты
        cy.get('input').clear().type('HelloPlasmaHaveFun@plasma-sberdevices.ru{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.maxLength.errorMessage);

        cy.get('input').clear().type('H@p.ro{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.minLength.errorMessage);

        // проверка длины хоста почты
        cy.get('input').clear().type('H@plasma.ru{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.minHostLength.errorMessage);

        cy.get('input').clear().type('HelloPlasmaHaveFun@plasma.ru{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.maxHostLength.errorMessage);

        // проверка длины домена почты
        cy.get('input').clear().type('HelloPlasma@p.ru{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.minDomainLength.errorMessage);

        cy.get('input').clear().type('Hello@plasma-sberdevices.ru{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.maxDomainLength.errorMessage);

        // проверка длины доменной зоны почты
        cy.get('input').clear().type('HelloPlasma@plasma.ruzone{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.maxZoneLength.errorMessage);

        // проверка доменов
        cy.get('input').clear().type('HelloPlasma@yachoo.com{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.whitelistDomains.errorMessage);

        cy.get('input').clear().type('HelloPlasma@heh.eh{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.blacklistDomains.errorMessage);

        // корректная почта
        cy.get('input').clear().type('HelloPlasma@plasma.ru{enter}');

        cy.matchImageSnapshot();
    });
});

describe('plasma-b2c: TextField password validation', () => {
    const TextField = getComponent('TextField') as typeof TextFieldB2C;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const options = {
        minLength: {
            value: 5,
            errorMessage: 'Пароль слишком короткий',
        },
        maxLength: {
            value: 20,
            errorMessage: 'Пароль слишком длинный',
        },
        includeUppercase: {
            value: true,
            errorMessage: 'Пароль должен содержать хотя бы одну заглавную букву',
        },
        includeLowercase: {
            value: true,
            errorMessage: 'Пароль должен содержать хотя бы одну строчную букву',
        },
        includeDigits: {
            value: true,
            errorMessage: 'Пароль должен содержать хотя бы одну цифру',
        },
        includeSpecialSymbols: {
            value: true,
            errorMessage: 'Пароль должен содержать хотя бы один специальный символ',
        },
    };

    const Demo = ({ hidden }: { hidden?: boolean }) => {
        const [error, setError] = useState('');

        const handleOnChange = () => {
            setError('');
        };

        const handleOnValidate = ({ errorMessage }: { errorMessage?: string }) => {
            setError(errorMessage || '');
        };

        return (
            <TextField
                size="m"
                label="Валидация пароля"
                placeholder="Заполните поле"
                validationType="password"
                options={options}
                status={error ? 'error' : undefined}
                helperText={error || 'Валидация почты'}
                onChange={handleOnChange}
                onValidate={handleOnValidate}
                passwordHidden={hidden}
            />
        );
    };

    it('password validation', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        // проверка длины пароля
        cy.get('input').type('H{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.minLength.errorMessage);

        cy.get('input').clear().type('HelloPlasmaHaveFunHelloPlasmaHaveFunHelloPlasmaHaveFun@{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.maxLength.errorMessage);

        // проверка наличия заглавных букв
        cy.get('input').clear().type('helloplasma24*_{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.includeUppercase.errorMessage);

        // проверка наличия строчных букв
        cy.get('input').clear().type('HELLOPLASMA24*_{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.includeLowercase.errorMessage);

        // проверка наличия цифр
        cy.get('input').clear().type('HelloPlasma*_{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.includeDigits.errorMessage);

        // проверка наличия специальных символов
        cy.get('input').clear().type('HelloPlasma24{enter}');
        cy.get('.text-field-group-item div').last().should('have.text', options.includeSpecialSymbols.errorMessage);

        // валидный пароль
        cy.get('input').clear().type('HelloPlasma24*_{enter}');

        cy.matchImageSnapshot();
    });

    it('password validation hidden', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo hidden />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').clear().type('HelloPlasma24*_{enter}');

        cy.matchImageSnapshot();
    });
});
