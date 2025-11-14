import React from 'react';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { IconSaluteOutline } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

import { Note as NoteB2c } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

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

describe('plasma-web: Note', () => {
    const Note = getComponent('Note') as FC<ComponentProps<typeof NoteB2c>>;

    const commonProps = {
        title: 'Title',
        text: 'Text',
    };

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it(':view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':width,height', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':stretch', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ height: '400px', width: '400px', border: '3px solid red', boxSizing: 'content-box' }}>
                    <Note {...commonProps} size="l" stretch />
                </div>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':without title', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Note
                    text={commonProps.text}
                    size="s"
                    contentBefore={<IconSaluteOutline size={getIconSize('s')} color="inherit" />}
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':without text', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Note
                    title={commonProps.title}
                    size="s"
                    contentBefore={<IconSaluteOutline size={getIconSize('s')} color="inherit" />}
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':long title', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Note
                    title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    text={commonProps.text}
                    size="s"
                    contentBefore={<IconSaluteOutline size={getIconSize('s')} color="inherit" />}
                    width={400}
                    height={116}
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':long title with close icon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Note
                    title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    text={commonProps.text}
                    size="s"
                    hasClose
                    contentBefore={<IconSaluteOutline size={getIconSize('s')} color="inherit" />}
                    width={400}
                    height={116}
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':long text', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Note
                    title={commonProps.title}
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    size="s"
                    contentBefore={<IconSaluteOutline size={getIconSize('s')} color="inherit" />}
                    width={400}
                    height={116}
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });
});
