import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { IconDownload } from '@salutejs/plasma-icons';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { mount, CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';

import { Button as ButtonWeb } from '.';

const Icon = () => <IconDownload color="inherit" />;
const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Button', () => {
    const Button = getComponent('Button') as typeof ButtonWeb;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Button>Hello Plasma</Button>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('with Icon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Button text="with Icon" contentLeft={<Icon />} />
                <PadMe />
                <Button text="with Icon" contentRight={<Icon />} />
                <PadMe />
                <Button text="with Icon" contentLeft={<Icon />} contentRight={<Icon />} />
                <PadMe />
                <Button contentLeft={<Icon />} contentRight={<Icon />}>
                    text as children
                </Button>
                <PadMe />
                <Button contentLeft={<Icon />} contentRight={<Icon />}>
                    <Icon />
                </Button>
                <SpaceMe />
                <Button>
                    <Icon />
                </Button>
                <SpaceMe />
                <Button contentLeft={<Icon />} />
                <SpaceMe />
                <Button contentRight={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('with Value', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Button text="Hello" value="Plasma" />
                <PadMe />
                <Button value="Plasma">text as children</Button>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('contentPlacing', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Button text="Hello" value="Plasma" contentPlacing="default" />
                <PadMe />
                <Button text="Hello" value="Plasma" contentPlacing="relaxed" />
                <PadMe />
                <Button text="Hello" value="Plasma" contentPlacing="default" stretching="filled" />
                <PadMe />
                <Button text="Hello" value="Plasma" contentPlacing="relaxed" stretching="filled" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('with Loader', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Button size="l" view="default" text="Button_view_default" contentLeft={<Icon />} isLoading />
                <PadMe />
                <Button size="m" view="default" text="Button_view_default" contentLeft={<Icon />} isLoading />
                <PadMe />
                <Button size="s" view="default" text="Button_view_default" contentLeft={<Icon />} isLoading />
                <PadMe />
                <Button size="xs" view="default" text="Button_view_default" contentLeft={<Icon />} isLoading />
                <PadMe />
                <Button size="xxs" view="default" text="Button_view_default" contentLeft={<Icon />} isLoading />
                <PadMe />
                <Button view="default" isLoading />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Button view="default" text="Button_view_default" contentLeft={<Icon />} />
                <SpaceMe />
                <Button view="default" text="_disabled" disabled contentLeft={<Icon />} />
                <PadMe />
                <Button view="accent" text="Button_view_accent" contentLeft={<Icon />} />
                <SpaceMe />
                <Button view="accent" text="_disabled" disabled contentLeft={<Icon />} />
                <PadMe />
                <Button view="secondary" text="Button_view_secondary" contentLeft={<Icon />} />
                <SpaceMe />
                <Button view="secondary" text="_disabled" disabled contentLeft={<Icon />} />
                <PadMe />
                <Button view="success" text="Button_view_success" contentLeft={<Icon />} />
                <SpaceMe />
                <Button view="success" text="_disabled" disabled contentLeft={<Icon />} />
                <PadMe />
                <Button view="warning" text="Button_view_warning" contentLeft={<Icon />} />
                <SpaceMe />
                <Button view="warning" text="_disabled" disabled contentLeft={<Icon />} />
                <PadMe />
                <Button view="critical" text="Button_view_critical" contentLeft={<Icon />} />
                <SpaceMe />
                <Button view="critical" text="_disabled" disabled contentLeft={<Icon />} />
                <PadMe />
                <Button view="clear" text="Button_view_clear" contentLeft={<Icon />} />
                <SpaceMe />
                <Button view="clear" text="_disabled" disabled contentLeft={<Icon />} />
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Button text="Button_size_l" size="l" contentLeft={<Icon />} />
                <PadMe />
                <Button text="Button_size_m" size="m" contentLeft={<Icon />} />
                <PadMe />
                <Button text="Button_size_s" size="s" contentLeft={<Icon />} />
                <PadMe />
                <Button text="Button_size_xs" size="xs" contentLeft={<Icon />} />
                <PadMe />
                <Button text="Button_size_xxs" size="xxs" contentLeft={<Icon />} />
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_pin', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Button pin="square-square" text="pin me" contentLeft={<Icon />} />
                <PadMe />
                <Button pin="square-clear" text="pin me" contentLeft={<Icon />} />
                <PadMe />
                <Button pin="clear-square" text="pin me" contentLeft={<Icon />} />
                <PadMe />
                <Button pin="clear-clear" text="pin me" contentLeft={<Icon />} />
                <PadMe />
                <Button pin="clear-circle" text="pin me" contentLeft={<Icon />} />
                <PadMe />
                <Button pin="circle-clear" text="pin me" contentLeft={<Icon />} />
                <PadMe />
                <Button pin="circle-circle" text="pin me" contentLeft={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('withAutoFocus', () => {
        const withAutoFocus = getComponent('withAutoFocus');
        const Focused = withAutoFocus(Button);

        mount(
            <CypressTestDecoratorWithTypo>
                <PadMe />
                <SpaceMe />
                <Focused autoFocus text="Hello Plasma" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('as', () => {
        // INFO: Почему и как может сломаться?
        // https://plasma.sberdevices.ru/ui/types/as-and-forwardedas/#forwardedas

        mount(
            <CypressTestDecoratorWithTypo>
                <Button as="a">Hello Plasma</Button>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('[type="button"]').first().should('have.prop', 'tagName').should('eq', 'A');
    });
});
