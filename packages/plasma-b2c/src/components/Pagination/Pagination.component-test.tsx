/* eslint-disable */
import React, { useState, useCallback } from 'react';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import type { FC } from 'react';

const id = 'test-pagination';
const slots = [7, 9, 13];
const values = [1, 10, 20];
const count = 2000;
const views = ['clear', 'secondary', 'default'];

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-new-hope: Pagination Styled', () => {
    const Pagination = getComponent('Pagination');

    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const ControlledPagination = () => {
        const [value, setValue] = useState(values[1]);

        return <Pagination id={id} value={value} count={count} slots={slots[1]} onChange={(v) => setValue(v)} />;
    };

    it('default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <ControlledPagination />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination size="xs" value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination size="s" value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination size="m" value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination size="l" value={values[1]} slots={slots[1]} count={count} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination view={views[0]} value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination view={views[1]} value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination view={views[2]} value={values[1]} slots={slots[1]} count={count} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_viewCurrentPage', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination viewCurrentPage={views[0]} value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination viewCurrentPage={views[1]} value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination viewCurrentPage={views[2]} value={values[1]} slots={slots[1]} count={count} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('type', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination type="default" hasQuickJump hasPerPage value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination
                    type="default"
                    hasQuickJump
                    hasPerPage={false}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <SpaceMe />
                <Pagination
                    type="default"
                    hasQuickJump={false}
                    hasPerPage
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <SpaceMe />
                <Pagination
                    type="default"
                    hasQuickJump={false}
                    hasPerPage={false}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <SpaceMe />
                <Pagination type="compact" hasQuickJump hasPerPage value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination
                    type="compact"
                    hasQuickJump
                    hasPerPage={false}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <SpaceMe />
                <Pagination
                    type="compact"
                    hasQuickJump={false}
                    hasPerPage
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <SpaceMe />
                <Pagination
                    type="compact"
                    hasQuickJump={false}
                    hasPerPage={false}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});

describe('plasma-new-hope: Pagination Slots', () => {
    const Pagination = getComponent('Pagination');

    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('minSlots', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination slots={slots[0]} value={values[0]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[0]} value={values[1]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[0]} value={values[2]} count={count} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
    it('avrSlots', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination slots={slots[1]} value={values[0]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[1]} value={values[1]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[1]} value={values[2]} count={count} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
    it('maxSlots', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination slots={slots[2]} value={values[0]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[2]} value={values[1]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[2]} value={values[2]} count={count} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});

describe('plasma-new-hope: Pagination Content', () => {
    const Pagination = getComponent('Pagination');
    const Button = getComponent('Button');

    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const PaginationContent = (agrs) => {
        const [pageValue, setPageValue] = useState(agrs.value);
        const [perPageValue, setPerPageValue] = useState(agrs.perPage);

        const handleChangePerpage = useCallback(
            (perPage: number) => {
                setPerPageValue(perPage);
            },
            [perPageValue, setPerPageValue],
        );

        const handleChangePage = useCallback(
            (page: number) => {
                setPageValue(page);
            },
            [pageValue, setPageValue],
        );

        return (
            <>
                <Pagination
                    {...agrs}
                    count={count}
                    value={pageValue}
                    perPage={perPageValue}
                    count={count}
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
                    onChangePageValue={handleChangePage}
                    onChangePerageValue={handleChangePerpage}
                />
            </>
        );
    };

    it('clickOnContent', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PaginationContent value={values[0]} count={count} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button[id="pagination-button-next"]').click();
        cy.get('button[id="pagination-button-next"]').click();
        cy.get('button[id="pagination-button-prev"]').click();

        cy.matchImageSnapshot();
    });
    it('setInput', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination slots={slots[1]} value={values[0]} count={count} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('input:first').focus().type('10').type('{enter}');

        cy.matchImageSnapshot();
    });
    it('setSelect', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecoratorWithTypo>
                <Pagination slots={slots[2]} value={values[0]} count={count} listWidth="5rem" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.get('button').last().click();

        cy.matchImageSnapshot();
    });
});
