import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { NoteProps } from './Note.types';

const componentExists = hasComponent('Note');
const describeFn = getDescribeFN('Note');

const getIconSize = (size?: string, isScalable?: boolean) => {
    if (isScalable) {
        return 'm';
    }

    if (size === 'l' || size === 'm') {
        return 's';
    }

    return 'xs';
};

const longText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
    'when an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
    'It has survived not only five centuries, but also the leap into electronic typesetting,' +
    'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing' +
    'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

const componentProps = {
    title: 'Title',
    text: 'Text',
    contentBefore: <IconPlasma size={getIconSize('s')} color="inherit" />,
};

getBaseVisualTests({
    component: 'Note',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Note', () => {
    const Note = componentExists ? getComponent<NoteProps>('Note') : () => null;

    it('width,height', () => {
        mount(
            <>
                <Note {...componentProps} width={400} height={116} />
                <PadMe />
                <Note
                    {...componentProps}
                    width={200}
                    height={90}
                    contentBeforeSizing="scalable"
                    contentBefore={<IconPlasma size={getIconSize('s', true)} color="inherit" />}
                />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('stretch', () => {
        mount(
            <div style={{ height: '400px', width: '400px', border: '3px solid red', boxSizing: 'content-box' }}>
                <Note {...componentProps} stretch />
            </div>,
        );
        cy.matchImageSnapshot();
    });

    it('without title', () => {
        mount(
            <Note text={componentProps.text} contentBefore={<IconPlasma size={getIconSize('s')} color="inherit" />} />,
        );
        cy.matchImageSnapshot();
    });

    it('without text', () => {
        mount(
            <Note
                title={componentProps.title}
                contentBefore={<IconPlasma size={getIconSize('s')} color="inherit" />}
            />,
        );
        cy.matchImageSnapshot();
    });

    it('long title', () => {
        mount(
            <Note
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                text={componentProps.text}
                contentBefore={<IconPlasma size={getIconSize('s')} color="inherit" />}
                width={400}
                height={200}
            />,
        );
        cy.matchImageSnapshot();
    });

    it('long title with close icon', () => {
        mount(
            <Note
                title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                text={componentProps.text}
                hasClose
                contentBefore={<IconPlasma size={getIconSize('s')} color="inherit" />}
                width={400}
                height={200}
            />,
        );
        cy.matchImageSnapshot();
    });

    it('long text', () => {
        mount(
            <Note
                title={componentProps.title}
                text={longText}
                contentBefore={<IconPlasma size={getIconSize('s')} color="inherit" />}
                width={400}
                height={116}
            />,
        );
        cy.matchImageSnapshot();
    });
});
