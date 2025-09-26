/* eslint-disable */
import React, { useState, useCallback } from 'react';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';

import { Pagination as PaginationCS } from '.';

const id = 'test-pagination';
const slots = [7, 9, 13, 1, 3];
const values = [1, 10, 20];
const count = 2000;

describe('sdds-cs: Pagination Styled', () => {
    const Pagination = getComponent('Pagination') as typeof PaginationCS;

    const ControlledPagination = () => {
        const [value, setValue] = useState(values[1]);

        return <Pagination id={id} value={value} count={count} slots={slots[1]} onChange={(v) => setValue(v)} />;
    };

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <ControlledPagination />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <Pagination size="s" value={values[1]} slots={slots[1]} count={count} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <Pagination view="default" value={values[1]} slots={slots[1]} count={count} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_viewCurrentPage', () => {
        mount(
            <CypressTestDecorator>
                <Pagination viewCurrentPage="default" value={values[1]} slots={slots[1]} count={count} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('type:Default', () => {
        cy.viewport(1000, 1000);
        mount(
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('type:Compact', () => {
        cy.viewport(650, 1200);
        mount(
            <CypressTestDecorator>
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
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

describe('sdds-cs: Pagination Slots', () => {
    const Pagination = getComponent('Pagination');

    it('minSlots', () => {
        cy.viewport(1000, 500);
        mount(
            <CypressTestDecorator>
                <Pagination slots={slots[0]} value={values[0]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[0]} value={values[1]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[0]} value={values[2]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[3]} value={values[0]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[3]} value={values[1]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[3]} value={values[2]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[4]} value={values[0]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[4]} value={values[1]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[4]} value={values[2]} count={count} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('avrSlots', () => {
        mount(
            <CypressTestDecorator>
                <Pagination slots={slots[1]} value={values[0]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[1]} value={values[1]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[1]} value={values[2]} count={count} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
    it('maxSlots', () => {
        mount(
            <CypressTestDecorator>
                <Pagination slots={slots[2]} value={values[0]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[2]} value={values[1]} count={count} />
                <SpaceMe />
                <Pagination slots={slots[2]} value={values[2]} count={count} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});

describe('sdds-cs: Pagination Content', () => {
    const Pagination = getComponent('Pagination') as typeof PaginationCS;
    const Button = getComponent('Button');

    const PaginationContent = (args) => {
        const [pageValue, setPageValue] = useState(args.value);
        const [perPageValue, setPerPageValue] = useState(args.perPage);

        const handleChangePerPage = (perPage: number) => {
            setPerPageValue(perPage);
        };

        const handleChangePage = (page: number) => {
            setPageValue(page);
        };

        return (
            <>
                <Pagination
                    {...args}
                    count={count}
                    value={pageValue}
                    perPage={perPageValue}
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
                    onChangePerPageValue={handleChangePerPage}
                />
            </>
        );
    };

    it('clickOnContent', () => {
        mount(
            <CypressTestDecorator>
                <PaginationContent value={values[0]} count={count} />
            </CypressTestDecorator>,
        );

        cy.get('button[id="pagination-button-next"]').click();
        cy.get('button[id="pagination-button-next"]').click();
        cy.get('button[id="pagination-button-prev"]').click();

        cy.matchImageSnapshot();
    });
    it('setInput', () => {
        mount(
            <CypressTestDecorator>
                <Pagination slots={slots[1]} count={count} />
            </CypressTestDecorator>,
        );
        cy.get('input:first').focus().type('10').type('{enter}');

        cy.matchImageSnapshot();
    });
    it('setSelect', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecorator>
                <Pagination slots={slots[2]} count={count} listWidth="5rem" />
            </CypressTestDecorator>,
        );
        cy.get('button').last().click();

        cy.matchImageSnapshot();
    });
});
