import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconEye } from '@salutejs/plasma-icons';

import { TextField as TextFieldCS } from '.';

describe('sdds-cs: TextField', () => {
    const TextField = getComponent('TextField') as typeof TextFieldCS;
    const Icon = <IconEye color="inherit" size="s" />;

    it('[PLASMA-T1501] TextField: size=s, label, value, leftHelper, contentLeft, contentRight, required, requiredPlacement=left', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    label="Label"
                    value="Value"
                    leftHelper="Helper text"
                    contentLeft={Icon}
                    contentRight={Icon}
                    required
                    requiredPlacement="left"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1517] TextField: size=s, label, placeholder, leftHelper, contentRight, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="s"
                    label="Label"
                    placeholder="Placeholder"
                    leftHelper="Helper text"
                    contentRight={Icon}
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1554] TextField: size=s, label, placeholder, leftHelper, contentLeft, required, requiredPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="s"
                    label="Label"
                    placeholder="Placeholder"
                    leftHelper="Helper text"
                    contentLeft={Icon}
                    required
                    requiredPlacement="right"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1555] TextField: placeholder, leftHelper, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextField placeholder="Placeholder" leftHelper="Helper text" optional />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1556] TextField: size=s, label, value, leftHelper, contentLeft, contentRight, required, requiredPlacement=left', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginLeft: '1rem' }}>
                    <TextField
                        label="Label"
                        value="Value"
                        leftHelper="Helper text"
                        contentLeft={Icon}
                        contentRight={Icon}
                        required
                        requiredPlacement="left"
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1557] TextField: size=s, status=warning, label, value, leftHelper, contentLeft, contentRight, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="s"
                    label="Label"
                    value="Value"
                    leftHelper="Helper text"
                    contentLeft={Icon}
                    contentRight={Icon}
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1558] TextField: size=s, leftHelper, placeholder, contentLeft, contentRight, required, requiredPlacement=right, readOnly', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="s"
                    leftHelper="Helper text"
                    placeholder="Placeholder"
                    contentLeft={Icon}
                    contentRight={Icon}
                    required
                    requiredPlacement="right"
                    readOnly
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1559] TextField: label, value, leftHelper, contentLeft, contentRight, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    label="Label"
                    value="Value"
                    leftHelper="Helper text"
                    contentLeft={Icon}
                    contentRight={Icon}
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1560] TextField: size=s, label, value, leftHelper, placeholder, contentLeft, contentRight, required, requiredPlacement=left, disabled', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    label="Label"
                    value="Value"
                    leftHelper="Helper text"
                    placeholder="Placeholder"
                    contentLeft={Icon}
                    contentRight={Icon}
                    required
                    requiredPlacement="left"
                    disabled
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1561] TextField: size=s,  label, leftHelper, placeholder, contentLeft, contentRight, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="s"
                    label="Label"
                    leftHelper="Helper text"
                    placeholder="Placeholder"
                    contentLeft={Icon}
                    contentRight={Icon}
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1563] TextField: size=s, status=warning, label, value, leftHelper, placeholder, contentLeft, contentRight, required, requiredPlacement=right, focused', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="s"
                    label="Label"
                    value="Value"
                    leftHelper="Helper text"
                    placeholder="Placeholder"
                    contentLeft={Icon}
                    contentRight={Icon}
                    required
                    requiredPlacement="right"
                />
            </CypressTestDecorator>,
        );

        cy.get('input:first').focus();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1566] TextField: size=s,  label, , leftHelper, placeholder, contentLeft, contentRight, optional, isClear, hasDivider', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    label="Label"
                    leftHelper="Helper text"
                    placeholder="Placeholder"
                    contentLeft={Icon}
                    contentRight={Icon}
                    optional
                    clear
                    hasDivider
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1567] TextField: size=s, status=warning, label, value, leftHelper, contentLeft, contentRight, required, requiredPlacement=left, isClear, hasDivider', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginLeft: '1rem' }}>
                    <TextField
                        size="s"
                        label="Label"
                        value="Value"
                        leftHelper="Helper text"
                        contentLeft={Icon}
                        contentRight={Icon}
                        required
                        requiredPlacement="left"
                        clear
                        hasDivider
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1568] TextField: size=s, leftHelper, placeholder, contentLeft, contentRight, optional, isClear, hasDivider', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="s"
                    leftHelper="Helper text"
                    placeholder="Placeholder"
                    contentLeft={Icon}
                    contentRight={Icon}
                    optional
                    clear
                    hasDivider
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1569] TextField: label, value, leftHelper, contentLeft, contentRight, required, requiredPlacement=right, isClear, hasDivider, focused', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    label="Label"
                    value="Value"
                    leftHelper="Helper text"
                    contentLeft={Icon}
                    contentRight={Icon}
                    required
                    requiredPlacement="right"
                    clear
                    hasDivider
                />
            </CypressTestDecorator>,
        );

        cy.get('input:first').focus();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1570] TextField: size=s, label, value, leftHelper, contentLeft, contentRight, required, requiredPlacement=right, isClear, hasDivider', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    label="Label"
                    value="Value"
                    leftHelper="Helper text"
                    contentLeft={Icon}
                    contentRight={Icon}
                    required
                    requiredPlacement="right"
                    clear
                    hasDivider
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1571] TextField: size=s,  value, leftHelper, contentLeft, contentRight, required, requiredPlacement=left, isClear', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginLeft: '1rem' }}>
                    <TextField
                        size="s"
                        value="Value"
                        leftHelper="Helper text"
                        contentLeft={Icon}
                        contentRight={Icon}
                        required
                        requiredPlacement="left"
                        clear
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1573] TextField: no hint', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    label="Label"
                    value="Value"
                    leftHelper="Helper text"
                    placeholder="Placeholder"
                    contentLeft={Icon}
                    contentRight={Icon}
                    titleCaption="Title caption"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1574] TextField: empty titleCaption, empty hint', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    label="Label"
                    value="Value"
                    leftHelper="Helper text"
                    placeholder="Placeholder"
                    contentLeft={Icon}
                    contentRight={Icon}
                    titleCaption=""
                    hasHint
                    hintText=""
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1575] TextField: hintTrigger=click, hintHasArrow=false', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    label="Label"
                    value="Value"
                    leftHelper="Helper text"
                    placeholder="Placeholder"
                    contentLeft={Icon}
                    contentRight={Icon}
                    titleCaption="Title caption"
                    hasHint
                    hintText="Hint text"
                    hintTrigger="click"
                    hintHasArrow={false}
                />
            </CypressTestDecorator>,
        );

        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot('plasma-giga TextField -- [PLASMA-T1575] TextField mouseover on hint icon');

        cy.get('svg').first().trigger('click');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1576] TextField: hintTrigger=hover, hintSize=m, hintPlacement=top, hintWidth=1px, hintHasArrow', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginTop: '200px' }}>
                    <TextField
                        label="Label"
                        value="Value"
                        leftHelper="Helper text"
                        placeholder="Placeholder"
                        contentLeft={Icon}
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

    it('[PLASMA-T1577] TextField: hintSize=s, hintPlacement=bottom, hintWidth=100px', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    label="Label"
                    value="Value"
                    leftHelper="Helper text"
                    placeholder="Placeholder"
                    contentLeft={Icon}
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
            </CypressTestDecorator>,
        );

        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1578] TextField: view: innerLabel, hintPlacement=left, hintWidth=500px', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecorator>
                <div style={{ marginRight: '100px' }}>
                    <TextField
                        label="Label"
                        value="Value"
                        leftHelper="Helper text"
                        placeholder="Placeholder"
                        contentLeft={Icon}
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

    it('[PLASMA-T1579] TextField: hintPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    label="Label"
                    value="Value"
                    leftHelper="Helper text"
                    placeholder="Placeholder"
                    contentLeft={Icon}
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
            </CypressTestDecorator>,
        );

        cy.get('svg').first().trigger('mouseover');

        cy.matchImageSnapshot();
    });
});
