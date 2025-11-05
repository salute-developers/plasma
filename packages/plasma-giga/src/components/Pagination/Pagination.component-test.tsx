/* eslint-disable */
import React, { useState, useCallback } from 'react';
import { CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import type { FC } from 'react';

const id = 'test-pagination';
const slots = [7, 9, 13, 1, 3];
const values = [1, 10, 20];
const count = 2000;
const views = ['clear', 'secondary', 'default'];

describe('plasma-giga: Pagination Styled', () => {
    const Pagination = getComponent('Pagination');

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
                <Pagination size="xs" value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination size="s" value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination size="m" value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination size="l" value={values[1]} slots={slots[1]} count={count} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <Pagination view={views[0]} value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination view={views[1]} value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination view={views[2]} value={values[1]} slots={slots[1]} count={count} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_viewCurrentPage', () => {
        mount(
            <CypressTestDecorator>
                <Pagination viewCurrentPage={views[0]} value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination viewCurrentPage={views[1]} value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination viewCurrentPage={views[2]} value={values[1]} slots={slots[1]} count={count} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('type:Default', () => {
        cy.viewport(1000, 1000);
        mount(
            <CypressTestDecorator>
                <Pagination
                    type="default"
                    hasQuickJump
                    hasPerPage
                    helperText="Helper Text"
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <SpaceMe />
                <Pagination
                    type="default"
                    hasQuickJump
                    hasPerPage
                    helperText="Loooooooooooooooooooooooooooooooooooooooooooooooog Helper Text"
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <SpaceMe />
                <Pagination type="default" hasQuickJump hasPerPage value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination
                    type="default"
                    helperText="HelperText"
                    hasQuickJump
                    hasPerPage={false}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
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
                    helperText="HelperText"
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
                    helperText="HelperText"
                    hasQuickJump={false}
                    hasPerPage={false}
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
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
                return false; // Игнорируем ошибку
            }
            return true; // Для остальных ошибок тест упадет
        });

        cy.viewport(650, 1200);
        mount(
            <CypressTestDecorator>
                <Pagination
                    type="compact"
                    hasQuickJump
                    hasPerPage
                    helperText="Helper Text"
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <SpaceMe />
                <Pagination
                    type="compact"
                    hasQuickJump
                    hasPerPage
                    helperText="Looooooooooooooooooooooooooooong Helper Text"
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <SpaceMe />
                <Pagination
                    type="compact"
                    hasQuickJump
                    hasPerPage
                    helperText="Veeeeeeeeeeeeeeeeeeeeeeery looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Helper Text"
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <SpaceMe />
                <Pagination
                    type="compact"
                    hasQuickJump
                    hasPerPage
                    helperText="Veeeeeeeeeeeeeeeeeeeeeeery looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Helper Text"
                    singleLine={true}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <SpaceMe />
                <Pagination type="compact" hasQuickJump hasPerPage value={values[1]} slots={slots[1]} count={count} />
                <SpaceMe />
                <Pagination
                    type="compact"
                    helperText="HelperText"
                    hasQuickJump
                    hasPerPage={false}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
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
                    helperText="HelperText"
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
                    helperText="HelperText"
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

describe('plasma-giga: Pagination Slots', () => {
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

describe('plasma-giga: Pagination Content', () => {
    const Pagination = getComponent('Pagination');
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
