import React, { useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { AttachProps } from './Attach.types';

const componentExists = hasComponent('Attach');
const describeFn = getDescribeFN('Attach');

const FIXTURE_PATH = 'images/placeholder.png';
const MULTIPLE_FIXTURE_PATH = [
    'images/placeholder.png',
    'images/parrot.png',
    'images/img.png',
    'images/cat.png',
    'images/avocado.png',
];

const cellRootSelector = '.cell-root';
const inputSelector = 'input';

const buttonTypes = ['button', 'iconButton'] as const;
const flows = ['horizontal', 'vertical', 'auto'] as const;
const filenameTruncationWidths = ['400px', '350px', '300px', '180px', '0px'];

const componentProps = {};

getBaseVisualTests({
    component: 'Attach',
    componentProps,
    configPropsForMatrix: ['view', 'size', 'helperTextView'],
    actionBeforeSnapshot: () => {
        cy.get(inputSelector).attachFile(FIXTURE_PATH);
    },
});

describeFn('Attach', () => {
    const Attach = componentExists ? getComponent<AttachProps>('Attach') : () => null;

    it('hasAttachment=false', () => {
        mount(<Attach hasAttachment={false} />);
        cy.get(inputSelector).attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('not.exist');

        cy.matchImageSnapshot();
    });

    it('buttonType', () => {
        mount(
            <>
                {buttonTypes.map((buttonType) => (
                    <>
                        <Attach style={{ width: '400px' }} buttonType={buttonType} />
                        <PadMe />
                    </>
                ))}
            </>,
        );
        cy.get(inputSelector).each(($element) => cy.wrap($element).attachFile(FIXTURE_PATH));
        cy.get(cellRootSelector).should('have.length', buttonTypes.length);

        cy.matchImageSnapshot();
    });

    it('flow', () => {
        mount(
            <>
                {flows.map((flow) => (
                    <>
                        <Attach flow={flow} />
                        <PadMe />
                    </>
                ))}
            </>,
        );
        cy.get(inputSelector).each(($element) => cy.wrap($element).attachFile(FIXTURE_PATH));
        cy.get(cellRootSelector).should('have.length', flows.length);

        cy.matchImageSnapshot();
    });

    it('flow with helperText', () => {
        mount(
            <>
                {flows.map((flow) => (
                    <>
                        <Attach flow={flow} helperText="helperText" />
                        <PadMe />
                        <PadMe />
                        <PadMe />
                    </>
                ))}
            </>,
        );
        cy.get(inputSelector).each(($element) => cy.wrap($element).attachFile(FIXTURE_PATH));
        cy.get(cellRootSelector).should('have.length', flows.length);

        cy.matchImageSnapshot();
    });

    it('filenameTruncation flow:auto', () => {
        mount(
            <>
                {filenameTruncationWidths.map((width) => (
                    <>
                        <Attach style={{ width }} text={`width: ${width}`} />
                        <PadMe />
                    </>
                ))}
            </>,
        );
        cy.get(inputSelector).each(($element) => cy.wrap($element).attachFile(FIXTURE_PATH));
        cy.get(cellRootSelector).should('have.length', filenameTruncationWidths.length);

        cy.matchImageSnapshot();
    });

    it('remove attached file', () => {
        mount(<Attach flow="horizontal" />);

        cy.get(inputSelector).attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');
        cy.get('button').last().click();
        cy.get(cellRootSelector).should('not.exist');

        cy.matchImageSnapshot();
    });

    it('filenameTruncation', () => {
        mount(<Attach style={{ width: '0px' }} text="width: 0px" />);

        cy.get(inputSelector).attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('hideButtonOnAttach=true', () => {
        mount(<Attach hideButtonOnAttach />);
        cy.get(inputSelector).attachFile(FIXTURE_PATH);

        cy.matchImageSnapshot();
    });

    it('multiple=true, flow=horizontal', () => {
        mount(<Attach flow="horizontal" multiple />);
        cy.get(inputSelector).attachFile(MULTIPLE_FIXTURE_PATH);

        cy.matchImageSnapshot();
    });

    it('multiple=true, flow=vertical', () => {
        mount(<Attach flow="vertical" multiple />);
        cy.get(inputSelector).attachFile(MULTIPLE_FIXTURE_PATH);

        cy.matchImageSnapshot();
    });

    it('multiple=true, flow=horizontal, delete first file', () => {
        mount(<Attach flow="horizontal" multiple />);

        cy.get(inputSelector).attachFile(MULTIPLE_FIXTURE_PATH);
        cy.get('.cell-root .cell-content + div').first().click();

        cy.matchImageSnapshot();
    });

    it('multiple=true, flow=horizontal, files in dropdown', () => {
        mount(<Attach flow="horizontal" multiple />);

        cy.get(inputSelector).attachFile(MULTIPLE_FIXTURE_PATH);
        cy.get('.plasma-attach-horizontal + div').first().click();

        cy.matchImageSnapshot();
    });

    it('multiple=true, flow=auto', () => {
        mount(<Attach flow="auto" multiple />);
        cy.get(inputSelector).attachFile(MULTIPLE_FIXTURE_PATH);

        cy.matchImageSnapshot();
    });

    it('controlled mode: attach file', () => {
        const ControlledAttach = () => {
            const [files, setFiles] = useState<File[]>([]);
            return (
                <Attach
                    files={files}
                    onChange={(e) => setFiles(Array.from(e.target.files || []))}
                    onClear={(fileInfo) => setFiles((prev) => prev.filter((f) => f !== fileInfo.file))}
                />
            );
        };
        mount(<ControlledAttach />);
        cy.get(inputSelector).attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('controlled mode: remove attached file', () => {
        const ControlledAttach = () => {
            const [files, setFiles] = useState<File[]>([]);
            return (
                <Attach
                    flow="horizontal"
                    files={files}
                    onChange={(e) => setFiles(Array.from(e.target.files || []))}
                    onClear={(fileInfo) => setFiles((prev) => prev.filter((f) => f !== fileInfo.file))}
                />
            );
        };
        mount(<ControlledAttach />);
        cy.get(inputSelector).attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');
        cy.get('button').last().click();
        cy.get(cellRootSelector).should('not.exist');

        cy.matchImageSnapshot();
    });

    it('controlled mode: multiple files', () => {
        const ControlledAttach = () => {
            const [files, setFiles] = useState<File[]>([]);
            return (
                <Attach
                    flow="horizontal"
                    multiple
                    files={files}
                    onChange={(e) => setFiles((prev) => [...prev, ...(Array.from(e.target.files || []) as File[])])}
                    onClear={(fileInfo) => setFiles((prev) => prev.filter((f) => f !== fileInfo.file))}
                />
            );
        };
        mount(<ControlledAttach />);
        cy.get(inputSelector).attachFile(MULTIPLE_FIXTURE_PATH);
        cy.get(cellRootSelector).should('have.length.greaterThan', 0);

        cy.matchImageSnapshot();
    });

    it('re-select same file after clear', () => {
        mount(<Attach flow="horizontal" />);
        cy.get(inputSelector).attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');
        cy.get('button').last().click();
        cy.get(cellRootSelector).should('not.exist');
        cy.get(inputSelector).attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });

    it('controlled mode: re-select same file after clear', () => {
        const ControlledAttach = () => {
            const [files, setFiles] = useState<File[]>([]);
            return (
                <Attach
                    flow="horizontal"
                    files={files}
                    onChange={(e) => setFiles(Array.from(e.target.files || []))}
                    onClear={(fileInfo) => setFiles((prev) => prev.filter((f) => f !== fileInfo.file))}
                />
            );
        };
        mount(<ControlledAttach />);
        cy.get(inputSelector).attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');
        cy.get('button').last().click();
        cy.get(cellRootSelector).should('not.exist');
        cy.get(inputSelector).attachFile(FIXTURE_PATH);
        cy.get(cellRootSelector).should('be.visible');

        cy.matchImageSnapshot();
    });
});
