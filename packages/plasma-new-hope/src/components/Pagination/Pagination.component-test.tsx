import React, { useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { PaginationProps } from './Pagination.types';

const componentExists = hasComponent('Pagination');
const describeFn = getDescribeFN('Pagination');

const slots = [7, 9, 13, 1, 3] as const;
const values = [1, 10, 20] as const;
const count = 2000;

const componentProps = {
    value: 10,
    slots: 9,
    count: 2000,
};

getBaseVisualTests({
    component: 'Pagination',
    componentProps,
    configPropsForMatrix: ['view', 'viewCurrentPage', 'size', 'type'],
});

describeFn('Pagination', () => {
    const Pagination = componentExists ? getComponent<PaginationProps>('Pagination') : () => null;
    const Button = getComponent('Button');

    const ControlledPagination = () => {
        const [value, setValue] = useState<number | undefined>(values[1]);

        return (
            <Pagination
                id="test-pagination"
                value={value}
                helperText="HelperText"
                count={count}
                slots={slots[1]}
                onChange={(v) => setValue(v)}
            />
        );
    };

    it('default', () => {
        cy.viewport(1000, 500);
        mount(<ControlledPagination />);
        cy.matchImageSnapshot();
    });

    it('type:Default', () => {
        mount(
            <>
                <Pagination
                    type="default"
                    hasQuickJump
                    hasPerPage
                    helperText="Helper Text"
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="default"
                    hasQuickJump
                    hasPerPage
                    helperText="Loooooooooooooooooooooooooooooooooooooooooooooooog Helper Text"
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination type="default" hasQuickJump hasPerPage value={values[1]} slots={slots[1]} count={count} />
                <PadMe />
                <Pagination
                    type="default"
                    helperText="HelperText"
                    hasQuickJump
                    placeholderQuickJump="##"
                    textQuickJump="Jump to"
                    hasPerPage={false}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="default"
                    hasQuickJump
                    hasPerPage={false}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="default"
                    hasQuickJump={false}
                    hasPerPage
                    helperText="HelperText"
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="default"
                    hasQuickJump={false}
                    hasPerPage
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="default"
                    helperText="HelperText"
                    hasQuickJump={false}
                    hasPerPage={false}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="default"
                    hasQuickJump={false}
                    hasPerPage={false}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
            </>,
        );

        cy.viewport(1000, 599);
        cy.matchImageSnapshot();
    });

    it('type:Compact', () => {
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
                return false;
            }
            return true;
        });

        mount(
            <>
                <Pagination
                    type="compact"
                    hasQuickJump
                    hasPerPage
                    helperText="Helper Text"
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="compact"
                    hasQuickJump
                    hasPerPage
                    helperText="Looooooooooooooooooooooooooooong Helper Text"
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="compact"
                    hasQuickJump
                    hasPerPage
                    helperText="Veeeeeeeeeeeeeeeeeeeeeeery looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Helper Text"
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="compact"
                    hasQuickJump
                    hasPerPage
                    helperText="Veeeeeeeeeeeeeeeeeeeeeeery looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Helper Text"
                    singleLine
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination type="compact" hasQuickJump hasPerPage value={values[1]} slots={slots[1]} count={count} />
                <PadMe />
                <Pagination
                    type="compact"
                    helperText="HelperText"
                    hasQuickJump
                    hasPerPage={false}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="compact"
                    hasQuickJump
                    hasPerPage={false}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="compact"
                    hasQuickJump={false}
                    hasPerPage
                    helperText="HelperText"
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="compact"
                    hasQuickJump={false}
                    hasPerPage
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="compact"
                    hasQuickJump={false}
                    hasPerPage={false}
                    helperText="HelperText"
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
                <PadMe />
                <Pagination
                    type="compact"
                    hasQuickJump={false}
                    hasPerPage={false}
                    value={values[1]}
                    slots={slots[1]}
                    count={count}
                />
            </>,
        );

        cy.viewport(650, 1086);
        cy.matchImageSnapshot();
    });

    it('minSlots', () => {
        cy.viewport(1000, 500);
        mount(
            <>
                <Pagination slots={slots[0]} value={values[0]} count={count} />
                <PadMe />
                <Pagination slots={slots[0]} value={values[1]} count={count} />
                <PadMe />
                <Pagination slots={slots[0]} value={values[2]} count={count} />
                <PadMe />
                <Pagination slots={slots[3]} value={values[0]} count={count} />
                <PadMe />
                <Pagination slots={slots[3]} value={values[1]} count={count} />
                <PadMe />
                <Pagination slots={slots[3]} value={values[2]} count={count} />
                <PadMe />
                <Pagination slots={slots[4]} value={values[0]} count={count} />
                <PadMe />
                <Pagination slots={slots[4]} value={values[1]} count={count} />
                <PadMe />
                <Pagination slots={slots[4]} value={values[2]} count={count} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('avrSlots', () => {
        cy.viewport(1000, 500);
        mount(
            <>
                <Pagination slots={slots[1]} value={values[0]} count={count} />
                <PadMe />
                <Pagination slots={slots[1]} value={values[1]} count={count} />
                <PadMe />
                <Pagination slots={slots[1]} value={values[2]} count={count} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('maxSlots', () => {
        cy.viewport(1000, 500);
        mount(
            <>
                <Pagination slots={slots[2]} value={values[0]} count={count} />
                <PadMe />
                <Pagination slots={slots[2]} value={values[1]} count={count} />
                <PadMe />
                <Pagination slots={slots[2]} value={values[2]} count={count} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('setInput', () => {
        cy.viewport(1000, 500);
        mount(<Pagination slots={slots[1]} count={count} />);
        cy.get('input:first').focus().type('10').type('{enter}');
        cy.matchImageSnapshot();
    });

    it.skip('setSelect', () => {
        cy.viewport(1000, 500);
        mount(<Pagination slots={slots[2]} count={count} listWidth="5rem" />);
        cy.get('button').last().click();
        cy.matchImageSnapshot();
    });

    it('select page by Prev and Next', () => {
        const PaginationWithButtons = () => {
            const [pageValue, setPageValue] = useState(1);
            const handleChangePage = (page: number) => {
                setPageValue(page);
            };

            return (
                <Pagination
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

        mount(<PaginationWithButtons />);
        cy.viewport(1000, 500);
        cy.get('button[id="pagination-button-next"]').click();
        cy.get('button.pagination-page-button-active').should('contain.text', '2');
        cy.get('button[id="pagination-button-prev"]').click();
        cy.get('button.pagination-page-button-active').should('contain.text', '1');
        cy.matchImageSnapshot();
    });

    it('select page by quickJump', () => {
        mount(
            <Pagination
                view="clear"
                viewCurrentPage="secondary"
                count={2000}
                defaultValue={1}
                slots={10}
                type="default"
                hasQuickJump
                hasPerPage
                pilled={false}
                square={false}
            />,
        );
        cy.viewport(1000, 500);
        cy.get('input').focus().type('3').type('{enter}');
        cy.get('button.pagination-page-button-active').should('contain.text', '3');
        cy.matchImageSnapshot();
    });
});
