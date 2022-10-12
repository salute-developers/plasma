import styled, { css } from 'styled-components';
import { Tabs as BaseTabs, surfaceLiquid01, StyledTabs } from '@salutejs/plasma-core';
import type { TabsProps as BaseTabsProps } from '@salutejs/plasma-core';

export interface TabsProps extends BaseTabsProps {
    /**
     * Вид компонента.
     */
    view?: 'secondary' | 'clear';
    /**
     * Кнопки табов и контейнер примут вид скругленных "капсул".
     */
    pilled?: boolean;
    /**
     * Размер компонента. По умолчанию 'l'
     */
    size?: 'l' | 's';
    /**
     * Уберет скругление с выбранной стороны и подвинет контейнер
     */
    outsideScroll?: boolean | { left?: string; right?: string };
}

const sizes = {
    l: (stretch: boolean) => css`
        --tabs-height: 3rem;
        --tab-item-padding: ${stretch ? '0.75rem 1.25rem' : '0.75rem 1.75rem'};
    `,
    s: (stretch: boolean) => css`
        --tabs-height: 2.5rem;
        --tab-item-padding: ${stretch ? '0.625rem 0.5rem' : '0.625rem 1rem'};
    `,
};

const views = {
    secondary: css`
        --tabs-padding: 0.125rem;
        --tabs-background-color: ${surfaceLiquid01};
    `,
    clear: css`
        --tabs-padding: 0rem;
        --tabs-background-color: transparent;
    `,
};

/**
 * Контейнер вкладок, основной компонент для пользовательской сборки вкладок.
 */
export const Tabs = styled(BaseTabs)<TabsProps>`
    --tabs-border-radius: ${({ pilled }) => (pilled ? '6.25rem' : '0.875rem')};
    --tab-focus-border-size: 0.125rem;
    --tabs-margin: 0;

    border-radius: var(--tabs-border-radius);

    ${({ outsideScroll }) =>
        outsideScroll === true
            ? css`
                  margin: calc(var(--tab-focus-border-size) * -2) -1rem;
                  padding: var(--tab-focus-border-size) 1rem;
                  border-radius: 0;
              `
            : outsideScroll &&
              css`
                  ${outsideScroll?.left &&
                  css`
                      border-top-left-radius: 0;
                      border-bottom-left-radius: 0;
                      margin-left: calc(-1 * ${outsideScroll?.left});
                      padding-left: ${outsideScroll?.left};
                  `}

                  ${outsideScroll?.right &&
                  css`
                      border-top-right-radius: 0;
                      border-bottom-right-radius: 0;
                      margin-right: calc(-1 * ${outsideScroll?.right});
                      padding-right: ${outsideScroll?.right};
                  `}
              `}

    ${StyledTabs} {
        ${({ view = 'secondary' }) => views[view]}
        ${({ size = 'l', stretch = false }) =>
            sizes[size](stretch)}

        --tab-item-height: calc(var(--tabs-height) - var(--tabs-padding) * 2);
        --tab-item-border-radius: calc(var(--tabs-border-radius) - var(--tabs-padding));
        --tab-focus-border-radius: calc(var(--tab-item-border-radius) + 0.125rem);

        height: var(--tabs-height);
        padding: var(--tabs-padding);

        background-color: var(--tabs-background-color);
        border-radius: var(--tabs-border-radius);
    }
`;

Tabs.defaultProps = {
    outsideScroll: true,
};
