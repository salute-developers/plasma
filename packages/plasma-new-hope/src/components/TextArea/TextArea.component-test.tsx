import React from 'react';
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
import { IconEye } from 'override/_Icon';

import type { TextAreaProps } from './TextArea.types';

const componentExists = hasComponent('TextArea');
const describeFn = getDescribeFN('TextArea');
const itSkip = skipForPackages(['plasma-b2c', 'plasma-web']);

const componentProps = {
    placeholder: 'Placeholder',
    defaultValue: 'Value',
    label: 'Label',
    labelPlacement: 'outer' as TextAreaProps['labelPlacement'],
    leftHelper: 'Left helper',
    rightHelper: 'Right helper',
    contentRight: <IconEye color="inherit" size="s" />,
};

getBaseVisualTests({
    component: 'TextArea',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
    packagesForSkip: ['plasma-b2c', 'plasma-web'],
});

getBaseVisualTests({
    component: 'TextArea',
    componentProps: {
        ...componentProps,
        appearance: 'clear',
        hasDivider: true,
    },
    propsForName: ['appearance=clear', 'hasDivider=true'],
    configPropsForMatrix: ['view', 'size'],
    packagesForSkip: ['plasma-b2c', 'plasma-web'],
});

describeFn('TextArea', () => {
    const TextArea = componentExists ? getComponent<TextAreaProps>('TextArea') : () => null;
    const TextS = getComponent('TextS');

    const LONG_TEXT = 'TEXT FOR RESIZE TEST ';

    beforeEach(() => {
        cy.on('uncaught:exception', (err) => {
            if (err.toString().match(/ResizeObserver loop limit exceeded/)) {
                return false;
            }
        });
    });

    it('focused', () => {
        mount(<TextArea value="Value" placeholder="Placeholder" leftHelper="Helper text" />);

        cy.get('textarea:first').focus();
        cy.matchImageSnapshot();
    });

    itSkip('disabled', () => {
        mount(
            <>
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    label="Label"
                    labelPlacement="outer"
                    leftHelper="Helper text"
                    hintText="hint"
                    disabled
                    optional
                />
                <PadMe />
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    label="Label"
                    labelPlacement="inner"
                    leftHelper="Helper text"
                    hintText="hint"
                    disabled
                    optional
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('contentRight', () => {
        mount(
            <>
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <PadMe />
                <TextArea
                    value="Very very very very very very very very very very very very long text"
                    placeholder="Placeholder"
                    leftHelper="Helper text"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('leftHelper and rightHelper', () => {
        mount(
            <>
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Helper text left"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <PadMe />
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    rightHelper="Helper text right"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
                <PadMe />
                <TextArea
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Helper text left"
                    rightHelper="Helper text right"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('headerSlot', () => {
        const HeaderSlot = () => (
            <div style={{ display: 'flex', gap: '1rem' }}>
                <IconEye color="inherit" size="s" />
                <TextS>Дополнительный контент</TextS>
            </div>
        );

        mount(
            <TextArea value="Value" placeholder="Placeholder" leftHelper="Helper text" headerSlot={<HeaderSlot />} />,
        );

        cy.matchImageSnapshot();
    });

    it('defaultValue', () => {
        mount(<TextArea placeholder="Placeholder" defaultValue="Default Value" leftHelper="Helper text left" />);

        cy.matchImageSnapshot();
    });

    it('placeholder with multiline', () => {
        mount(
            <>
                <TextArea width={10} placeholder="Very very long placeholder" leftHelper="Helper text left" />
                <PadMe />
                <TextArea
                    width={10}
                    placeholder="Very very long placeholder"
                    leftHelper="Helper text left"
                    contentRight={<IconEye color="inherit" size="s" />}
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('required attribute', () => {
        mount(
            <>
                <TextArea id="required" value="Value" placeholder="Placeholder" label="Title" required />
                <TextArea id="falseRequired" value="Value" placeholder="Placeholder" label="Title" required={false} />
                <TextArea id="notRequired" value="Value" placeholder="Placeholder" label="Title" />
            </>,
        );

        cy.get('#required').should('have.attr', 'required');
        cy.get('#falseRequired').should('not.have.attr', 'required');
        cy.get('#notRequired').should('not.have.attr', 'required');
    });

    it('with hint', () => {
        const cases = [{ labelPlacement: 'outer' }, { labelPlacement: 'inner' }];

        mount(
            <>
                {cases.map(({ labelPlacement }) => (
                    <div style={{ margin: '0 3rem' }}>
                        <TextArea
                            value="Value"
                            placeholder="Placeholder"
                            label="Title"
                            height="2.5rem"
                            hintText="Подсказка к полю"
                            hintTrigger="click"
                            labelPlacement={labelPlacement as TextAreaProps['labelPlacement']}
                        />
                        <PadMe />
                    </div>
                ))}
            </>,
        );

        cy.get('.popover-wrapper').first().click();

        cy.matchImageSnapshot();
    });

    it('autoResize', () => {
        mount(<TextArea autoResize {...componentProps} />);

        cy.get('.textarea').type(LONG_TEXT.repeat(10));

        cy.matchImageSnapshot();
    });

    it('autoResize, minAuto', () => {
        mount(<TextArea autoResize minAuto={5} {...componentProps} />);

        cy.matchImageSnapshot();
    });

    it('autoResize, maxAuto', () => {
        mount(<TextArea autoResize maxAuto={3} {...componentProps} />);

        cy.get('.textarea').type(LONG_TEXT.repeat(10));

        cy.matchImageSnapshot();
    });

    it('custom height and width', () => {
        mount(<TextArea height={10} width={10} {...componentProps} />);

        cy.matchImageSnapshot();
    });

    it('resize=horizontal', () => {
        mount(<TextArea resize="horizontal" {...componentProps} />);

        cy.get('.textarea').invoke('attr', 'style', 'width: 140px');

        cy.matchImageSnapshot();
    });

    it('resize=vertical', () => {
        mount(<TextArea resize="vertical" {...componentProps} />);

        cy.get('.textarea').invoke('attr', 'style', 'height: 280px');

        cy.matchImageSnapshot();
    });

    it('resize=both', () => {
        mount(<TextArea resize="both" {...componentProps} />);

        cy.get('.textarea').invoke('attr', 'style', 'height: 280px; width: 140px');

        cy.matchImageSnapshot();
    });

    itSkip('hintTrigger=click, hintHasArrow=false', () => {
        mount(
            <div style={{ marginRight: '100px' }}>
                <TextArea
                    label="Label"
                    labelPlacement="inner"
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={<IconEye color="inherit" size="s" />}
                    titleCaption="Title caption"
                    hintText="Hint text"
                    hintTrigger="click"
                    hintHasArrow={false}
                />
            </div>,
        );

        cy.get('svg').first().trigger('click');

        cy.matchImageSnapshot();
    });

    itSkip('hintTrigger=hover, hintSize=m, hintPlacement=top, hintWidth=1px, hintHasArrow', () => {
        mount(
            <div style={{ marginRight: '100px', marginTop: '200px' }}>
                <TextArea
                    label="Label"
                    labelPlacement="inner"
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={<IconEye color="inherit" size="s" />}
                    titleCaption="Title caption"
                    hintText="Hint text"
                    hintTrigger="hover"
                    hintSize="m"
                    hintPlacement="top"
                    hintWidth="1px"
                    hintHasArrow
                />
            </div>,
        );

        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    itSkip('hintSize=s, hintPlacement=bottom, hintWidth=100px', () => {
        mount(
            <div style={{ marginRight: '100px' }}>
                <TextArea
                    label="Label"
                    labelPlacement="inner"
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={<IconEye color="inherit" size="s" />}
                    titleCaption="Title caption"
                    hintText="Hint text"
                    hintTrigger="hover"
                    hintSize="s"
                    hintPlacement="bottom"
                    hintWidth="100px"
                    hintHasArrow
                />
            </div>,
        );

        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('labelPlacement=outer, hintPlacement=left, hintWidth=500px', () => {
        cy.viewport(800, 500);

        mount(
            <div style={{ marginLeft: '500px' }}>
                <TextArea
                    label="Label"
                    labelPlacement="outer"
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={<IconEye color="inherit" size="s" />}
                    titleCaption="Title caption"
                    hintText="Hint text"
                    hintTrigger="hover"
                    hintSize="m"
                    hintPlacement="left"
                    hintWidth="500px"
                    hintHasArrow
                />
            </div>,
        );

        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    itSkip('hintPlacement=right', () => {
        mount(
            <div style={{ marginRight: '200px' }}>
                <TextArea
                    label="Label"
                    labelPlacement="inner"
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={<IconEye color="inherit" size="s" />}
                    titleCaption="Title caption"
                    hintText="Hint text"
                    hintTrigger="hover"
                    hintSize="m"
                    hintPlacement="right"
                    hintWidth="10rem"
                    hintHasArrow
                />
            </div>,
        );

        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });
});
