import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconEye } from '@salutejs/plasma-icons';

describe('plasma-giga: TextArea', () => {
    const TextArea = getComponent('TextArea');
    const LONG_TEXT = 'TEXT FOR RESIZE TEST ';
    const Icon = <IconEye color="inherit" size="s" />;

    const propsDefault = {
        size: 'l',
        view: 'default',
        label: 'label',
        labelPlacement: 'outer',
        placeholder: 'Placeholder',
        leftHelper: 'Left helper',
        rightHelper: 'Right helper',
    };

    it('[PLASMA-T1580] TextArea: size=l, view=default, label, labelPlacement=inner, value, leftHelperText, rightHelperText, contentRight, required, requiredPlacement=left', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    size="l"
                    view="default"
                    label="Label"
                    labelPlacement="inner"
                    value="Value"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={Icon}
                    required
                    requiredPlacement="left"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1581] TextArea: size=m, view=positive, label, labelPlacement=outer, placeholder, leftHelper, rightHelper, contentRight, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    size="m"
                    view="positive"
                    label="Label"
                    labelPlacement="outer"
                    placeholder="Placeholder"
                    value="Value"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={Icon}
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1582] TextArea: size=s, view=warning, label, labelPlacement=inner, placeholder, rightHelper, required, requiredPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    size="s"
                    view="warning"
                    label="Label"
                    labelPlacement="inner"
                    placeholder="Placeholder"
                    rightHelper="Right helper"
                    required
                    requiredPlacement="right"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1583] TextArea: size=xs, view=negative, labelPlacement=inner, placeholder, leftHelper, rightHelper, contentRight, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    size="xs"
                    view="negative"
                    labelPlacement="inner"
                    placeholder="Placeholder"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={Icon}
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1584] size=l, view=default, label, labelPlacement=outer, value, contentRight, required, requiredPlacement=left, readOnly', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginLeft: '1rem' }}>
                    <TextArea
                        size="l"
                        view="default"
                        label="Label"
                        labelPlacement="outer"
                        value="Value"
                        leftHelper="Left helper"
                        rightHelper="Right helper"
                        contentRight={Icon}
                        required
                        requiredPlacement="left"
                        readOnly
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1585] TextArea: size=m, view=warning, label, labelPlacement=inner, value, leftHelper, rightHelper, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    size="m"
                    view="warning"
                    label="Label"
                    labelPlacement="inner"
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1586] TextArea: size=s, view=default, labelPlacement=inner, placeholder, leftHelper, rightHelper, required, requiredPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    size="s"
                    view="default"
                    labelPlacement="inner"
                    placeholder="Placeholder"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={Icon}
                    required
                    requiredPlacement="right"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1587] TextArea: size=xs, view=positive, label, labelPlacement=outer, value, leftHelper, rightHelper, contentRight, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    size="xs"
                    view="positive"
                    label="Label"
                    labelPlacement="outer"
                    value="Value"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={Icon}
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1588] TextArea: size=l, view=default, label, labelPlacement=inner, value, placeholder, contentRight, contentLeft, required, requiredPlacement=left, disabled', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    size="l"
                    view="default"
                    label="Label"
                    labelPlacement="inner"
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={Icon}
                    required
                    requiredPlacement="left"
                    disabled
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1589] TextArea: size=m, view=negative, label, labelPlacement=outer, placeholder, leftHelper, rightHelper, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    size="m"
                    view="negative"
                    label="Label"
                    labelPlacement="outer"
                    placeholder="Placeholder"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1590] TextArea: size=s, view=warning, label, labelPlacement=inner, placeholder, leftHelper, rightHelper, contentRight, required, requiredPlacement=right, focused', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    size="s"
                    view="warning"
                    label="Label"
                    labelPlacement="inner"
                    placeholder="Placeholder"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={Icon}
                    required
                    requiredPlacement="right"
                    focused
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1944] TextArea: size=xl, view=default, label, labelPlacement=inner, value, placeholder, leftHelper, rightHelper, contentRight', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    size="xl"
                    view="default"
                    label="Label"
                    labelPlacement="inner"
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={Icon}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1963] TextArea: required, without hasRequiredIndicator', () => {
        mount(
            <CypressTestDecorator>
                <TextArea
                    size="l"
                    view="default"
                    label="Label"
                    labelPlacement="outer"
                    value="Value"
                    placeholder="Placeholder"
                    leftHelper="Left helper"
                    rightHelper="Right helper"
                    contentRight={Icon}
                    required
                    requiredPlacement="right"
                    hasRequiredIndicator={false}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T768] TextArea: autoResize', () => {
        mount(
            <CypressTestDecorator>
                <TextArea autoResize {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.get('.textarea').type(LONG_TEXT.repeat(10));

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1041] TextArea: autoResize, minAuto', () => {
        mount(
            <CypressTestDecorator>
                <TextArea autoResize minAuto={5} {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1234] TextArea: autoResize, maxAuto', () => {
        mount(
            <CypressTestDecorator>
                <TextArea autoResize maxAuto={3} {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.get('.textarea').type(LONG_TEXT.repeat(10));

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1235] TextArea: custom height and width', () => {
        mount(
            <CypressTestDecorator>
                <TextArea height={10} width={10} {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1236] TextArea: resize=horizontal', () => {
        mount(
            <CypressTestDecorator>
                <TextArea resize="horizontal" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.get('.textarea').invoke('attr', 'style', 'width: 140px');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1237] TextArea: resize=vertical', () => {
        mount(
            <CypressTestDecorator>
                <TextArea resize="vertical" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.get('.textarea').invoke('attr', 'style', 'height: 280px');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1238] TextArea: resize=both', () => {
        mount(
            <CypressTestDecorator>
                <TextArea resize="both" {...propsDefault} />
            </CypressTestDecorator>,
        );

        cy.get('.textarea').invoke('attr', 'style', 'height: 280px; width: 140px');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1610] TextArea: no hint', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginRight: '100px' }}>
                    <TextArea
                        size="l"
                        view="default"
                        label="Label"
                        labelPlacement="inner"
                        value="Value"
                        placeholder="Placeholder"
                        leftHelper="Left helper"
                        rightHelper="Right helper"
                        contentRight={Icon}
                        titleCaption="Title caption"
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1611] TextArea: empty titleCaption, empty hint', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginRight: '100px' }}>
                    <TextArea
                        size="l"
                        view="default"
                        label="Label"
                        labelPlacement="inner"
                        value="Value"
                        placeholder="Placeholder"
                        leftHelper="Left helper"
                        rightHelper="Right helper"
                        contentRight={Icon}
                        titleCaption=""
                        hasHint
                        hintText=""
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1612] TextArea: hasHint, hintTrigger=click, hintHasArrow=false', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginRight: '100px' }}>
                    <TextArea
                        size="l"
                        view="default"
                        label="Label"
                        labelPlacement="inner"
                        value="Value"
                        placeholder="Placeholder"
                        leftHelper="Left helper"
                        rightHelper="Right helper"
                        contentRight={Icon}
                        titleCaption="Title caption"
                        hasHint
                        hintText="Hint text"
                        hintTrigger="click"
                        hintHasArrow={false}
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot('plasma-giga TextArea -- [PLASMA-T1612] TextArea mouseover on hint icon');

        cy.get('svg').first().trigger('click');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1613] TextArea: hintTrigger=hover, hintSize=m, hintPlacement=top, hintWidth=1px, hintHasArrow', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginRight: '100px', marginTop: '200px' }}>
                    <TextArea
                        size="l"
                        view="default"
                        label="Label"
                        labelPlacement="inner"
                        value="Value"
                        placeholder="Placeholder"
                        leftHelper="Left helper"
                        rightHelper="Right helper"
                        contentRight={Icon}
                        titleCaption="Title caption"
                        hasHint
                        hintText="Hint text"
                        hintTrigger="hover"
                        hintSize="m"
                        hintPlacement="top"
                        hintWidth="1px"
                        hintHasArrow
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1614] TextArea: hintSize=s, hintPlacement=bottom, hintWidth=100px', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginRight: '100px' }}>
                    <TextArea
                        size="l"
                        view="default"
                        label="Label"
                        labelPlacement="inner"
                        value="Value"
                        placeholder="Placeholder"
                        leftHelper="Left helper"
                        rightHelper="Right helper"
                        contentRight={Icon}
                        titleCaption="Title caption"
                        hasHint
                        hintText="Hint text"
                        hintTrigger="hover"
                        hintSize="s"
                        hintPlacement="bottom"
                        hintWidth="100px"
                        hintHasArrow
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1615] TextArea: labelPlacement=outer, hintPlacement=left, hintWidth=500px', () => {
        cy.viewport(800, 500);

        mount(
            <CypressTestDecorator>
                <div style={{ marginLeft: '500px' }}>
                    <TextArea
                        size="l"
                        view="default"
                        label="Label"
                        labelPlacement="outer"
                        value="Value"
                        placeholder="Placeholder"
                        leftHelper="Left helper"
                        rightHelper="Right helper"
                        contentRight={Icon}
                        titleCaption="Title caption"
                        hasHint
                        hintText="Hint text"
                        hintTrigger="hover"
                        hintSize="m"
                        hintPlacement="left"
                        hintWidth="500px"
                        hintHasArrow
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1616] TextArea: hintPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginRight: '200px' }}>
                    <TextArea
                        size="l"
                        view="default"
                        label="Label"
                        labelPlacement="inner"
                        value="Value"
                        placeholder="Placeholder"
                        leftHelper="Left helper"
                        rightHelper="Right helper"
                        contentRight={Icon}
                        titleCaption="Title caption"
                        hasHint
                        hintText="Hint text"
                        hintTrigger="hover"
                        hintSize="m"
                        hintPlacement="right"
                        hintWidth="10rem"
                        hintHasArrow
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });
});
