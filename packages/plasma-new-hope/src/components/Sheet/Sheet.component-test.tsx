import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';

import type { SheetProps } from './Sheet.types';

const componentExists = hasComponent('Sheet');
const describeFn = getDescribeFN('Sheet');

const readSafeAreaMaxHeight = () => {
    const declarations: string[] = [];

    Array.from(document.styleSheets).forEach((sheet) => {
        let rules: CSSRuleList;

        try {
            rules = sheet.cssRules;
        } catch {
            return;
        }

        Array.from(rules).forEach((rule) => {
            if (!(rule instanceof CSSStyleRule)) {
                return;
            }

            if (rule.style.maxHeight.includes('safe-area-inset-top')) {
                declarations.push(rule.style.maxHeight);
            }
        });
    });

    return declarations;
};

describeFn('Sheet', () => {
    const Sheet = componentExists ? getComponent<SheetProps>('Sheet') : () => null;

    const renderSheet = (props: Partial<SheetProps> = {}) => (
        <Sheet
            data-testid="sheet"
            opened
            withOverlay={false}
            withTransition={false}
            onClose={() => {}}
            contentHeader={<div data-testid="sheet-header">Заголовок</div>}
            contentFooter={<div data-testid="sheet-footer">Подвал</div>}
            {...props}
        >
            {props.children ?? <div data-testid="sheet-fill" style={{ height: '100%' }} />}
        </Sheet>
    );

    it('stretches the body to the panel and keeps the safe area above a full-height sheet', () => {
        mount(
            renderSheet({
                snapPoints: ['100%'],
            }),
        );

        cy.get('[data-testid="sheet"]').should(($wrapper) => {
            const wrapper = $wrapper[0];
            const panel = wrapper.lastElementChild as HTMLElement;
            const fill = wrapper.querySelector('[data-testid="sheet-fill"]') as HTMLElement;
            const body = fill.parentElement as HTMLElement;
            const header = wrapper.querySelector('[data-testid="sheet-header"]')?.parentElement as HTMLElement;
            const footer = wrapper.querySelector('[data-testid="sheet-footer"]')?.parentElement as HTMLElement;
            const panelStyle = getComputedStyle(panel);
            const padding = parseFloat(panelStyle.paddingTop) + parseFloat(panelStyle.paddingBottom);
            const expectedBodyHeight = panel.clientHeight - padding - header.offsetHeight - footer.offsetHeight;

            expect(panelStyle.display).to.eq('flex');
            expect(panelStyle.flexDirection).to.eq('column');
            expect(getComputedStyle(body).flex).to.eq('1 0 auto');
            expect(body.offsetHeight).to.be.closeTo(expectedBodyHeight, 1);
            expect(fill.offsetHeight).to.eq(body.clientHeight);
            expect(readSafeAreaMaxHeight()[0]).to.match(/^calc\(100% - env\(safe-area-inset-top,\s*0px\)\)$/);
            expect(Math.round(wrapper.getBoundingClientRect().height)).to.be.at.most(window.innerHeight);
        });

        cy.get('[data-testid="sheet"]').then(($wrapper) => {
            const wrapper = $wrapper[0];
            const previousHeight = wrapper.style.height;

            wrapper.style.height = '5000px';

            expect(Math.round(wrapper.getBoundingClientRect().height)).to.eq(window.innerHeight);

            wrapper.style.height = previousHeight;
        });
    });

    it('keeps the body sized by its content without snap points', () => {
        mount(
            renderSheet({
                children: <div data-testid="sheet-content" style={{ height: '48px' }} />,
            }),
        );

        cy.get('[data-testid="sheet"]').should(($wrapper) => {
            const wrapper = $wrapper[0];
            const panel = wrapper.lastElementChild as HTMLElement;
            const content = wrapper.querySelector('[data-testid="sheet-content"]') as HTMLElement;
            const body = content.parentElement as HTMLElement;

            expect(getComputedStyle(panel).display).to.eq('block');
            expect(getComputedStyle(body).flexGrow).to.eq('0');
            expect(body.offsetHeight).to.eq(content.offsetHeight);
            expect(Math.round(wrapper.getBoundingClientRect().height)).to.be.lessThan(window.innerHeight);
        });
    });
});
