import React from 'react';
import type { ComponentProps, FC } from 'react';
import { IconSaluteOutline } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

import { Note as NoteINSOL } from '.';

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

describe('sdds-insol: Note', () => {
    const Note = getComponent('Note') as FC<ComponentProps<typeof NoteINSOL>>;

    it('[PLASMA-T2175] Note: size=l, view=default, width=400', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    size="l"
                    view="default"
                    title="Title"
                    text="Text"
                    width={400}
                    contentBeforeSizing="fixed"
                    contentBefore={<IconSaluteOutline size={getIconSize('l')} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2176] Note: size=m, view=positive, stretch=true', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    size="m"
                    view="positive"
                    title="Title"
                    text="Text"
                    width={400}
                    stretch
                    contentBefore={<IconSaluteOutline size={getIconSize('m')} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2177] Note: size=s, view=warning, hasClose=true', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    size="s"
                    view="warning"
                    title="Title"
                    text="Text"
                    width={400}
                    stretch={false}
                    hasClose
                    contentBefore={<IconSaluteOutline size={getIconSize('s')} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2178] Note: size=xs, view=negative', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    size="xs"
                    view="negative"
                    title="Title"
                    text="Text"
                    width={400}
                    stretch={false}
                    hasClose={false}
                    contentBefore={<IconSaluteOutline size={getIconSize('xs')} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2179] Note: size=l, view=default, title=noText', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    size="l"
                    view="default"
                    title=""
                    text="Text"
                    width={400}
                    stretch={false}
                    hasClose={false}
                    contentBefore={<IconSaluteOutline size={getIconSize('l')} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2180] Note: size=l, view=default, text=noText', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    size="l"
                    view="default"
                    title="Title"
                    text=""
                    width={400}
                    stretch={false}
                    hasClose={false}
                    contentBefore={<IconSaluteOutline size={getIconSize('l')} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2181] Note: size=l, view=default, title=noText text=noText', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    size="l"
                    view="default"
                    title=""
                    text=""
                    width={400}
                    stretch={false}
                    hasClose={false}
                    contentBefore={<IconSaluteOutline size={getIconSize('l')} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2201] Note: size=l, view=default, contentBeforeSizing=fixed', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    size="l"
                    view="default"
                    title="Title"
                    text="Text"
                    width={400}
                    stretch={false}
                    hasClose={false}
                    contentBeforeSizing="fixed"
                    contentBefore={<IconSaluteOutline size={getIconSize('l')} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2202] Note: size=l, view=default, contentBeforeSizing=scalable', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    size="l"
                    view="default"
                    title="Title"
                    text="Text"
                    width={400}
                    stretch={false}
                    hasClose={false}
                    contentBeforeSizing="scalable"
                    contentBefore={<IconSaluteOutline size={getIconSize('l', true)} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2203] Note: size=l, view=default, withoutContentBefore', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    size="l"
                    view="default"
                    title="Title"
                    text="Text"
                    width={400}
                    stretch={false}
                    hasClose={false}
                    contentBeforeSizing="fixed"
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2204] Note: size=l, view=default, width=200, isHeight=true, height=10', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    size="l"
                    view="default"
                    title="Title"
                    text="Text"
                    width={200}
                    stretch={false}
                    hasClose={false}
                    contentBeforeSizing="fixed"
                    height={10}
                    contentBefore={<IconSaluteOutline size={getIconSize('l')} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2205] Note: size=l, view=default, width=100, height=100', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    size="l"
                    view="default"
                    title="Title"
                    text="Text"
                    width={100}
                    stretch={false}
                    hasClose={false}
                    contentBeforeSizing="fixed"
                    height={100}
                    contentBefore={<IconSaluteOutline size={getIconSize('l')} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2206] Note: size=l, view=default, width=10, height=200', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    size="l"
                    view="default"
                    title="Title"
                    text="Text"
                    width={10}
                    stretch={false}
                    hasClose={false}
                    contentBeforeSizing="fixed"
                    height={200}
                    contentBefore={<IconSaluteOutline size={getIconSize('l')} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2298] Note: size=l, view=default, longText', () => {
        cy.viewport(500, 588);

        mount(
            <CypressTestDecorator>
                <Note
                    size="l"
                    view="default"
                    title={longText}
                    text={longText}
                    width={400}
                    stretch
                    hasClose={false}
                    contentBeforeSizing="fixed"
                    contentBefore={<IconSaluteOutline size={getIconSize('l')} />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
