import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

const StandardTypoStyle = createGlobalStyle(standardTypo);
const text = 'Голосовая викторина с Валдисом Пельшем';

describe('plasma-web: Overlay', () => {
    const Overlay = getComponent('Overlay');
    const Button = getComponent('Button');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    function Demo(props: { withBlur?: boolean; transparent?: boolean }) {
        return (
            <div>
                <Overlay
                    zIndex="900"
                    backgroundColorProperty="rgba(26,158,50,0.5)"
                    withBlur={props.withBlur}
                    transparent={props.transparent}
                />
                <Button text={text} />
            </div>
        );
    }

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('withBlur', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo withBlur />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('transparent', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo transparent />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
