import React from 'react';
import type { ComponentProps, FC } from 'react';
import { IconSaluteOutline } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

import { Note as NoteB2c } from '.';

const views = ['default', 'positive', 'warning', 'negative', 'info'] as const;
const sizes = ['l', 'm', 's', 'xs'] as const;

const getIconSize = (size?: string, isScalable?: boolean) => {
    if (isScalable) {
        return 'm';
    }

    if (size === 'l' || size === 'm') {
        return 's';
    }

    return 'xs';
};

describe('plasma-b2c: Note', () => {
    const Note = getComponent('Note') as FC<ComponentProps<typeof NoteB2c>>;

    const commonProps = {
        title: 'Title',
        text: 'Text',
    };

    it(':view', () => {
        mount(
            <CypressTestDecorator>
                {views.map((view) => (
                    <>
                        <Note {...commonProps} key={view} view={view} />
                        <PadMe />
                        <Note
                            {...commonProps}
                            key={view}
                            view={view}
                            contentBeforeSizing="scalable"
                            contentBefore={<IconSaluteOutline size={getIconSize('l')} color="inherit" />}
                        />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':size', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Note {...commonProps} key={size} size={size} />
                        <PadMe />
                        <Note
                            {...commonProps}
                            key={size}
                            size={size}
                            contentBefore={<IconSaluteOutline size={getIconSize(size)} color="inherit" />}
                        />
                        <PadMe />
                        <Note
                            {...commonProps}
                            key={size}
                            size={size}
                            contentBeforeSizing="scalable"
                            contentBefore={<IconSaluteOutline size={getIconSize(size, true)} color="inherit" />}
                        />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':width,height', () => {
        mount(
            <CypressTestDecorator>
                <Note {...commonProps} size="s" width={400} height={116} />
                <PadMe />
                <Note
                    {...commonProps}
                    size="s"
                    width={200}
                    height={90}
                    contentBeforeSizing="scalable"
                    contentBefore={<IconSaluteOutline size={getIconSize('s', true)} color="inherit" />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':stretch', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ height: '400px', width: '400px', border: '3px solid red' }}>
                    <Note {...commonProps} size="l" stretch />
                </div>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':without title', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    text={commonProps.text}
                    size="s"
                    contentBefore={<IconSaluteOutline size={getIconSize('s')} color="inherit" />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':without text', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    title={commonProps.title}
                    size="s"
                    contentBefore={<IconSaluteOutline size={getIconSize('s')} color="inherit" />}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':long title', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    text={commonProps.text}
                    size="s"
                    contentBefore={<IconSaluteOutline size={getIconSize('s')} color="inherit" />}
                    width={400}
                    height={116}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it(':long text', () => {
        mount(
            <CypressTestDecorator>
                <Note
                    title={commonProps.title}
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    size="s"
                    contentBefore={<IconSaluteOutline size={getIconSize('s')} color="inherit" />}
                    width={400}
                    height={116}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
