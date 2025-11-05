import React, { useState, useCallback } from 'react';
import { CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import type { FC } from 'react';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Pagination', () => {
    const Pagination = getComponent('Pagination');
    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T1679] Pagination: size=l, view=default, viewCurrentPage=clear,count=100, value=1, slots=7, type=default, hasQuickJump', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination
                    size="l"
                    view="default"
                    viewCurrentPage="clear"
                    count={100}
                    value={1}
                    slots={7}
                    type="default"
                    hasQuickJump
                    hasPerPage={false}
                    pilled={false}
                    square={false}
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.viewport(1000, 500);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1680] Pagination: size=m, view=secondary, viewCurrentPage=default,count=1000, value=1, slots=10, type=compact, hasPerPage', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination
                    size="m"
                    view="secondary"
                    viewCurrentPage="default"
                    count={1000}
                    value={1}
                    slots={10}
                    type="compact"
                    hasQuickJump={false}
                    hasPerPage
                    pilled={false}
                    square={false}
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.viewport(1000, 500);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1681] Pagination: size=s, view=clear, viewCurrentPage=secondary,count=1000, value=10, slots=15, type=compact, pilled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination
                    size="s"
                    view="clear"
                    viewCurrentPage="secondary"
                    count={1000}
                    value={10}
                    slots={15}
                    type="compact"
                    hasQuickJump={false}
                    hasPerPage={false}
                    pilled
                    square={false}
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1682] Pagination: size=xs, view=default, viewCurrentPage=secondary,count=2000, value=1, slots=10, type=default, square', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination
                    size="xs"
                    view="default"
                    viewCurrentPage="secondary"
                    count={2000}
                    value={1}
                    slots={10}
                    type="default"
                    hasQuickJump={false}
                    hasPerPage={false}
                    pilled={false}
                    square
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T891] Pagination: select perPage', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination
                    size="xs"
                    view="clear"
                    viewCurrentPage="secondary"
                    count={2000}
                    value={1}
                    slots={10}
                    type="default"
                    hasQuickJump
                    hasPerPage
                    pilled={false}
                    square={false}
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.viewport(1000, 500);
        cy.contains('button', '20').click();
        cy.contains('50').click();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T899] Pagination: select page by Prev and Next', () => {
        const PaginationWithButtons = () => {
            const [pageValue, setPageValue] = useState(1);
            const handleChangePage = (page: number) => {
                setPageValue(page);
            };
            const Pagination = getComponent('Pagination');
            const Button = getComponent('Button');
            return (
                <Pagination
                    size="xs"
                    view="clear"
                    viewCurrentPage="secondary"
                    leftContent={
                        <Button
                            id="pagination-button-prev"
                            onClick={() => {
                                handleChangePage(pageValue - 1);
                            }}
                        >
                            Prev
                        </Button>
                    }
                    rightContent={
                        <Button
                            id="pagination-button-next"
                            onClick={() => {
                                handleChangePage(pageValue + 1);
                            }}
                        >
                            Next
                        </Button>
                    }
                    count={2000}
                    value={pageValue}
                    slots={10}
                    type="default"
                    hasQuickJump
                    hasPerPage
                    pilled={false}
                    square={false}
                />
            );
        };
        mount(
            <CypressTestDecoratorWithTypo>
                <PaginationWithButtons />
            </CypressTestDecoratorWithTypo>,
        );
        cy.viewport(1000, 500);
        cy.get('button[id="pagination-button-next"]').click();
        cy.get('button.pagination-page-button-active').should('contain.text', '2');

        cy.get('button[id="pagination-button-prev"]').click();
        cy.get('button.pagination-page-button-active').should('contain.text', '1');
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T900] Pagination: select page by quickJump', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination
                    size="xs"
                    view="clear"
                    viewCurrentPage="secondary"
                    count={2000}
                    defaultValue
                    slots={10}
                    type="default"
                    hasQuickJump
                    hasPerPage
                    pilled={false}
                    square={false}
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.viewport(1000, 500);
        cy.get('input').focus().type('3').type('{enter}');
        cy.get('button.pagination-page-button-active').should('contain.text', '3');
        cy.matchImageSnapshot();
    });
});
