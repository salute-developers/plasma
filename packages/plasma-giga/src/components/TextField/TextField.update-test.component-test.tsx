import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import { IconEye } from '@salutejs/plasma-icons';

import { TextField as TextFieldGIGA } from '.';

describe('plasma-giga: TextField', () => {
    const TextField = getComponent('TextField') as typeof TextFieldGIGA;
    const Icon = <IconEye color="inherit" size="s" />;

    it('[PLASMA-T1501] TextField: size=l, label, view=innerLabel, value, helperText, contentLeft, contentRight, required, requiredPlacement=left', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="l"
                    label="Label"
                    view="innerLabel"
                    value="Value"
                    helperText="Helper text"
                    contentLeft={Icon}
                    contentRight={Icon}
                    required
                    requiredPlacement="left"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1517] TextField: size=m, status=success, label, placeholder, helperText, contentRight, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="m"
                    status="success"
                    label="Label"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentRight={Icon}
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1554] TextField: size=s, status=warning, label, view=innerLabel, placeholder, helperText, contentLeft, required, requiredPlacement=right', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="s"
                    status="warning"
                    label="Label"
                    view="innerLabel"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    contentLeft={Icon}
                    required
                    requiredPlacement="right"
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1555] TextField: size=xs, status=error, view=innerLabel, placeholder, helperText, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="xs"
                    status="error"
                    view="innerLabel"
                    placeholder="Placeholder"
                    helperText="Helper text"
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1556] TextField: size=l, status=success, label, value, helperText, contentLeft, contentRight, required, requiredPlacement=left', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginLeft: '1rem' }}>
                    <TextField
                        size="l"
                        status="success"
                        label="Label"
                        value="Value"
                        helperText="Helper text"
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

    it('[PLASMA-T1557] TextField: size=m, status=warning, label, view=innerLabel, value, helperText, contentLeft, contentRight, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="m"
                    status="warning"
                    label="Label"
                    view="innerLabel"
                    value="Value"
                    helperText="Helper text"
                    contentLeft={Icon}
                    contentRight={Icon}
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1558] TextField: size=s, view=innerLabel, helperText, placeholder, contentLeft, contentRight, required, requiredPlacement=right, readOnly', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="s"
                    view="innerLabel"
                    helperText="Helper text"
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

    it('[PLASMA-T1559] TextField: size=xs, status=success, label, value, helperText, contentLeft, contentRight, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="xs"
                    status="success"
                    label="Label"
                    value="Value"
                    helperText="Helper text"
                    contentLeft={Icon}
                    contentRight={Icon}
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1560] TextField: size=l, label, view=innerLabel, value, helperText, placeholder, contentLeft, contentRight, required, requiredPlacement=left, disabled', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="l"
                    label="Label"
                    view="innerLabel"
                    value="Value"
                    helperText="Helper text"
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

    it('[PLASMA-T1561] TextField: size=m, status=error, label, helperText, placeholder, contentLeft, contentRight, optional', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="m"
                    status="error"
                    label="Label"
                    helperText="Helper text"
                    placeholder="Placeholder"
                    contentLeft={Icon}
                    contentRight={Icon}
                    optional
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1563] TextField: size=s, status=warning, label, view=innerLabel, value, helperText, placeholder, contentLeft, contentRight, required, requiredPlacement=right, focused', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="s"
                    status="warning"
                    label="Label"
                    view="innerLabel"
                    value="Value"
                    helperText="Helper text"
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

    it('[PLASMA-T1566] TextField: size=l, status=error, label, view="innerLabel", helperText, placeholder, contentLeft, contentRight, optional, isClear, hasDivider', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="l"
                    status="error"
                    label="Label"
                    view="innerLabel"
                    helperText="Helper text"
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

    it('[PLASMA-T1567] TextField: size=m, status=warning, label, value, helperText, contentLeft, contentRight, required, requiredPlacement=left, isClear, hasDivider', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginLeft: '1rem' }}>
                    <TextField
                        size="m"
                        status="warning"
                        label="Label"
                        view="innerLabel"
                        value="Value"
                        helperText="Helper text"
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

    it('[PLASMA-T1568] TextField: size=s, helperText, placeholder, contentLeft, contentRight, optional, isClear, hasDivider', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="s"
                    helperText="Helper text"
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

    it('[PLASMA-T1569] TextField: size=xs, status=success, label, value, helperText, contentLeft, contentRight, required, requiredPlacement=right, isClear, hasDivider, focused', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="xs"
                    status="success"
                    label="Label"
                    value="Value"
                    helperText="Helper text"
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

    it('[PLASMA-T1570] TextField: size=l, label, view=innerLabel, value, helperText, contentLeft, contentRight, required, requiredPlacement=right, isClear, hasDivider', () => {
        mount(
            <CypressTestDecorator>
                <TextField
                    size="l"
                    label="Label"
                    view="innerLabel"
                    value="Value"
                    helperText="Helper text"
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

    it('[PLASMA-T1571] TextField: size=m, status=error, view=innerLabel, value, helperText, contentLeft, contentRight, required, requiredPlacement=left, isClear', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ marginLeft: '1rem' }}>
                    <TextField
                        size="m"
                        status="error"
                        view="innerLabel"
                        value="Value"
                        helperText="Helper text"
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
                    size="l"
                    label="Label"
                    value="Value"
                    helperText="Helper text"
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
                    size="l"
                    label="Label"
                    value="Value"
                    helperText="Helper text"
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
                    size="l"
                    label="Label"
                    value="Value"
                    helperText="Helper text"
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
                        size="l"
                        label="Label"
                        value="Value"
                        helperText="Helper text"
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
                    size="l"
                    label="Label"
                    value="Value"
                    helperText="Helper text"
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
                        size="l"
                        label="Label"
                        view="innerLabel"
                        value="Value"
                        helperText="Helper text"
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
                    size="l"
                    label="Label"
                    value="Value"
                    helperText="Helper text"
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
