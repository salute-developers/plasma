import React from 'react';
import { Button } from '@salutejs/plasma-ui';

import { startApp, images } from '../../testHelpers/testRenderHelpers';
import { AnyObject } from '../../types';

import { Cart, CartProps } from './Cart';
import { CartProvider, CartProviderProps } from './CartProvider/CartProvider';
import { EmptyCart } from './EmptyCart/EmptyCart';
import { useCart } from './hooks/useCart';
import { CartItemType, CartState } from './types';

const imageSrc = images.imagePlaceholder;

export const items: CartItemType[] = [
    {
        id: '1',
        name: 'Молоко Parmalat ультрапастеризованное длинное название',
        nameDetails: '1л',
        price: 68,
        oldPrice: 99,
        quantity: 3,
        imageSrc,
        caption: {
            type: 'sale',
            content: '31',
        },
    },
    {
        id: '2',
        name: 'Молоко Parmalat',
        nameDetails: '925мл',
        price: 68,
        quantity: 2,
        quantityLimit: 2,
        imageSrc,
    },
    {
        id: '3',
        label: 'Cubic',
        name: 'CCC 3x3x3 Sail W',
        price: 68,
        quantity: 1,
        imageSrc,
        present: true,
        caption: {
            type: 'present',
        },
    },
];

const defaultState: CartState = {
    items,
    currency: 'rub',
    quantity: 109,
    amount: 408,
    discount: 93,
    percentDiscount: 19,
    deliveryPrice: 100,
};

const dummyFn = () => {};

export function generateWrapper<ID = unknown, T extends AnyObject = AnyObject>(
    passedProps?: Partial<CartProps<ID, T>>,
    passedProviderProps?: Partial<CartProviderProps>,
    cartWrapper?: React.ComponentType,
): Cypress.Chainable {
    const defaultProps: CartProps<ID, T> = {
        defaultItemImage: images.imagePlaceholder,
        onCheckout: dummyFn,
        onImageClick: dummyFn,
    };

    const props = { ...defaultProps, ...passedProps };
    const providerProps = { initialState: defaultState, ...passedProviderProps };

    const CartWrapper = cartWrapper ?? React.Fragment;
    return startApp(
        [
            {
                name: 'form',
                component: () => (
                    <CartProvider {...providerProps}>
                        <CartWrapper>
                            <Cart {...props} />
                        </CartWrapper>
                    </CartProvider>
                ),
            },
        ],
        ({ pushScreen }) => pushScreen('form'),
    );
}

describe('Cart', () => {
    let onChangeCartStub;
    let onGoToCatalogStub;

    beforeEach(() => {
        onChangeCartStub = cy.stub();
        onGoToCatalogStub = cy.stub();
    });

    // TODO: https://github.com/salute-developers/plasma/issues/250
    it('render cart', (done) => {
        generateWrapper().then(() => {
            cy.matchImageSnapshot();
            done();
        });
    });

    // TODO: https://github.com/salute-developers/plasma/issues/250
    it('increase item quantity', (done) => {
        generateWrapper({}, { onChangeCart: onChangeCartStub }).then(() => {
            cy.get('[data-cy="QuantityButton-plus"]')
                .first()
                .click()
                .then(() => {
                    expect(onChangeCartStub).to.be.calledOnce;
                });
            cy.matchImageSnapshot();

            done();
        });
    });

    it('decrease item quantity', (done) => {
        generateWrapper().then(() => {
            cy.get('[data-cy="QuantityButton-minus"]').first().click();
            cy.matchImageSnapshot();

            done();
        });
    });

    it('add item', (done) => {
        const CartWrapper: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
            const { addItem } = useCart();

            return (
                <>
                    <Button
                        data-cy="add-button"
                        onClick={() => addItem({ id: '4', name: 'New Item', quantity: 1, price: 10000, imageSrc })}
                    >
                        Add item
                    </Button>
                    {children}
                </>
            );
        };

        generateWrapper({}, { onChangeCart: onChangeCartStub }, CartWrapper).then(() => {
            cy.get('[data-cy="add-button"]')
                .click()
                .then(() => {
                    expect(onChangeCartStub).to.be.calledOnce;
                });
            cy.matchImageSnapshot();
            done();
        });
    });

    it('decrease item quantity to 0', (done) => {
        const CartWrapper: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
            const { changeItemQuantity } = useCart();

            return (
                <>
                    <Button data-cy="change-quantity-button" onClick={() => changeItemQuantity('1', 0)}>
                        Change Quantity
                    </Button>
                    {children}
                </>
            );
        };

        generateWrapper({}, { onChangeCart: onChangeCartStub }, CartWrapper).then(() => {
            cy.get('[data-cy="change-quantity-button"]')
                .click()
                .then(() => {
                    expect(onChangeCartStub).to.be.calledOnce;
                });
            cy.matchImageSnapshot();
            done();
        });
    });

    it('remove item', (done) => {
        const CartWrapper: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
            const { state, removeItem } = useCart();

            return (
                <>
                    <Button data-cy="remove-button" onClick={() => removeItem(state.items[0].id)}>
                        Remove item
                    </Button>
                    {children}
                </>
            );
        };

        generateWrapper({}, { onChangeCart: onChangeCartStub }, CartWrapper).then(() => {
            cy.get('[data-cy="remove-button"]')
                .click()
                .then(() => {
                    expect(onChangeCartStub).to.be.calledOnce;
                });
            cy.matchImageSnapshot();
            done();
        });
    });

    it('clear cart', (done) => {
        const CartWrapper: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
            const { clearCart } = useCart();

            return (
                <>
                    <Button data-cy="clear-button" onClick={() => clearCart()}>
                        Clear cart
                    </Button>
                    {children}
                </>
            );
        };

        generateWrapper(
            { emptyCart: <EmptyCart imageSrc={images.imagePlaceholder} /> },
            { onChangeCart: onChangeCartStub },
            CartWrapper,
        ).then(() => {
            cy.get('[data-cy="clear-button"]')
                .click()
                .then(() => {
                    expect(onChangeCartStub).to.be.calledOnce;
                });
            cy.matchImageSnapshot();

            done();
        });
    });

    describe('empty cart', () => {
        beforeEach(() => {
            generateWrapper(
                { emptyCart: <EmptyCart onGoToCatalog={onGoToCatalogStub} imageSrc={images.imagePlaceholder} /> },
                { initialState: { items: [], amount: 0, quantity: 0, currency: 'rub' } },
            );
        });

        it('render empty cart', () => {
            cy.matchImageSnapshot();
        });

        it('go to catalog', () => {
            cy.get('[data-cy="EmptyCart-button"]')
                .click()
                .then(() => {
                    expect(onGoToCatalogStub).to.be.calledOnce;
                });
        });
    });
});
