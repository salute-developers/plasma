import React, { useState } from 'react';
import {
    mount,
    getComponent,
    getDescribeFN,
    hasComponent,
    getBaseVisualTests,
    PadMe,
    skipForPackages,
} from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma, IconEye } from 'override/_Icon';

import type { TextFieldProps } from './TextField.types';

const componentExists = hasComponent('TextField');
const describeFn = getDescribeFN('TextField');
const itSkip = skipForPackages(['plasma-b2c', 'plasma-web']);

const componentProps = {
    placeholder: 'Placeholder',
    value: 'Value',
    label: 'Label',
    labelPlacement: 'outer' as TextFieldProps['labelPlacement'],
    leftHelper: 'Helper text',
    contentLeft: <IconPlasma color="inherit" size="s" />,
    contentRight: <IconEye color="inherit" size="s" />,
};

getBaseVisualTests({
    component: 'TextField',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
    packagesForSkip: ['plasma-b2c', 'plasma-web'],
});

getBaseVisualTests({
    component: 'TextField',
    componentProps: {
        ...componentProps,
        appearance: 'clear',
        hasDivider: true,
    },
    propsForName: ['appearance=clear', 'hasDivider=true'],
    configPropsForMatrix: ['view', 'size'],
    packagesForSkip: ['plasma-b2c', 'plasma-web'],
});

describeFn('TextField', () => {
    const TextField = componentExists ? getComponent<TextFieldProps>('TextField') : () => null;

    function Demo({ maxLength }) {
        const [value, setValue] = useState('');

        return (
            <TextField
                maxLength={maxLength}
                placeholder="Placeholder"
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                value={value}
                leftHelper="Helper text"
            />
        );
    }

    it('maxLength', () => {
        mount(<Demo maxLength={10} />);

        cy.get('input').type('More then ten symbols');

        cy.matchImageSnapshot();
    });

    it('focused', () => {
        mount(<TextField value="Value" placeholder="Placeholder" leftHelper="Helper text" />);

        cy.get('input:first').focus();
        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(<TextField value="Value" placeholder="Placeholder" leftHelper="Helper text" disabled />);

        cy.matchImageSnapshot();
    });

    it('readOnly', () => {
        mount(<TextField value="Value" placeholder="Placeholder" leftHelper="Helper text" readOnly />);

        cy.matchImageSnapshot();
    });

    it('content', () => {
        mount(
            <>
                <TextField
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Helper text"
                    contentLeft={<IconPlasma color="inherit" size="s" />}
                />
                <PadMe />
                <TextField
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Helper text"
                    contentLeft={<IconPlasma color="inherit" size="s" />}
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <PadMe />
                <TextField
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('defaultValue', () => {
        mount(<TextField defaultValue="Default value" placeholder="Placeholder" leftHelper="Helper text" />);

        cy.matchImageSnapshot();
    });

    itSkip('textBefore,textAfter', () => {
        mount(
            <>
                <TextField
                    id="focused"
                    value="Outer"
                    placeholder="Placeholder"
                    label="Label"
                    labelPlacement="outer"
                    textBefore="_"
                    textAfter="%"
                />
            </>,
        );

        cy.get('#focused').focus();

        cy.matchImageSnapshot();
    });

    it('enumerationType:chip, _chipView, _chipValidator', () => {
        cy.viewport(500, 778);

        mount(
            <>
                <TextField
                    label="Label"
                    enumerationType="chip"
                    chips={['Value 1', 'Value 2']}
                    placeholder="Placeholder"
                    leftHelper="Helper text"
                />
                <PadMe />
                <TextField
                    label="Label"
                    value="place values"
                    enumerationType="chip"
                    chips={['Value 1', 'Value 2']}
                    placeholder="Placeholder"
                    leftHelper="Helper text"
                />
                <PadMe />
                <TextField
                    label="Label"
                    enumerationType="chip"
                    chips={['Value 1', 'Value 2', 'Value 3']}
                    placeholder="Placeholder"
                    leftHelper="Helper text"
                    chipView="warning"
                    chipValidator={(value) => (value === 'Value 1' ? { view: 'negative' } : {})}
                />
                <PadMe />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('required attribute', () => {
        mount(
            <>
                <TextField id="required" value="Value" placeholder="Placeholder" label="Title" required />
                <TextField id="falseRequired" value="Value" placeholder="Placeholder" label="Title" required={false} />
                <TextField id="notRequired" value="Value" placeholder="Placeholder" label="Title" />
            </>,
        );

        cy.get('#required').should('have.attr', 'required');
        cy.get('#falseRequired').should('not.have.attr', 'required');
        cy.get('#notRequired').should('not.have.attr', 'required');
    });

    it('required with chips', () => {
        mount(<TextField enumerationType="chip" id="textfield" placeholder="Placeholder" label="Title" required />);

        cy.get('#textfield').should('have.attr', 'required');
        cy.get('#textfield').type('some value{enter}');
        cy.get('#textfield').should('not.have.attr', 'required');
        cy.get('#textfield').type('{backspace}');
        cy.get('#textfield').should('have.attr', 'required');
    });

    it('chipType', () => {
        mount(
            <TextField
                size="l"
                label="Label"
                enumerationType="chip"
                chips={['Value 1', 'Value 2']}
                chipType="text"
                placeholder="Placeholder"
                leftHelper="Helper text"
            />,
        );

        cy.matchImageSnapshot();
    });

    itSkip('with hint', () => {
        const cases = [
            { labelPlacement: 'outer' },
            { labelPlacement: 'inner' },
            { labelPlacement: 'inner', hintTargetPlacement: 'inner' },
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

    it('keyboard navigation: chips', () => {
        mount(<TextField placeholder="Placeholder" enumerationType="chip" leftHelper="Helper text" />);

        cy.get('body').tab();

        cy.get('input').type('Hello,{enter} Plasma!{enter} Have fun{enter}');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('.has-chips').find('button').should('have.length', 3);

        cy.get('input').type('{leftarrow}');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100);
        cy.get('.has-chips').find('button').eq(2).should('be.focused');

        cy.focused()
            .trigger('keydown', { key: 'ArrowLeft' })
            .trigger('keydown', { key: 'ArrowLeft' })
            .trigger('keydown', { key: 'ArrowLeft' });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('.has-chips').find('button').eq(0).should('be.focused');

        cy.focused()
            .trigger('keydown', { key: 'ArrowRight' })
            .trigger('keydown', { key: 'ArrowRight' })
            .trigger('keydown', { key: 'ArrowRight' });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('input').should('be.focused');

        cy.focused().trigger('keydown', { key: 'Backspace' });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('.has-chips').find('button').should('have.length', 2);

        cy.focused().trigger('keydown', { key: 'ArrowLeft' }).trigger('keydown', { key: 'ArrowLeft' });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('.has-chips').find('button').eq(0).should('be.focused');

        cy.focused().trigger('keydown', { key: 'Backspace' });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('.has-chips').find('button').should('have.length', 1);

        cy.get('input').focus().type('Hello!!!');

        cy.focused().type('{backspace}{backspace}{backspace}');
        cy.get('input').should('have.value', 'Hello');

        cy.matchImageSnapshot();
    });

    it('truncate placeholder', () => {
        mount(
            <div style={{ width: '6rem' }}>
                <TextField size="l" label="Label" leftHelper="Helper text" placeholder="Placeholder very long" />
            </div>,
        );

        cy.matchImageSnapshot();
    });
});
