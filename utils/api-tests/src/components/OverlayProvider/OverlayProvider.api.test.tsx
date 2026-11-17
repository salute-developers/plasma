import React, { useRef } from 'react';
import type { ComponentProps, ReactNode, RefObject } from 'react';
import { describe, it } from 'node:test';
import { expectTypeOf } from 'expect-type';
import { OverlayProvider, useOverlayChildZIndex } from '@salutejs/plasma-b2c';
import type { CloseReason, CloseRequestHandler } from '@salutejs/plasma-b2c';

type OverlayProviderProps = ComponentProps<typeof OverlayProvider>;

describe('Basics', () => {
    it('Common', () => {
        // layout
        expectTypeOf<OverlayProviderProps>().toHaveProperty('zIndexBase').toEqualTypeOf<number | undefined>();
        expectTypeOf<OverlayProviderProps>()
            .toHaveProperty('portalContainer')
            .toEqualTypeOf<'document' | string | RefObject<HTMLElement> | undefined>();
        expectTypeOf<OverlayProviderProps>().toHaveProperty('UNSAFE_SSR_ENABLED').toEqualTypeOf<boolean | undefined>();

        // content slots
        expectTypeOf<OverlayProviderProps>().toHaveProperty('children').toEqualTypeOf<ReactNode>();
    });

    it('Messages', () => {
        expectTypeOf<false>().toExtend<OverlayProviderProps['toast']>();
        expectTypeOf<{ queue: boolean; maxQueueLength: number }>().toExtend<
            NonNullable<OverlayProviderProps['toast']>
        >();

        expectTypeOf<false>().toExtend<OverlayProviderProps['notifications']>();
        expectTypeOf<{ maxCount: number }>().toExtend<NonNullable<OverlayProviderProps['notifications']>>();
        // @ts-expect-error
        expectTypeOf<OverlayProviderProps>({ notifications: { config: {} } });
    });

    it('CloseRequest', () => {
        expectTypeOf<CloseReason>().toEqualTypeOf<
            'escape' | 'outside' | 'close-button' | 'parent-closed' | 'modal-opened' | 'action'
        >();
        expectTypeOf<CloseRequestHandler>().parameters.toEqualTypeOf<[CloseReason, (Event | undefined)?]>();
        expectTypeOf<CloseRequestHandler>().returns.toEqualTypeOf<boolean | void | Promise<boolean | void>>();
        expectTypeOf<ReturnType<typeof useOverlayChildZIndex>>().toEqualTypeOf<number | undefined>();
    });
});

describe('Examples', () => {
    it('Root', () => {
        () => {
            return (
                <OverlayProvider zIndexBase={1000} toast={{ queue: false }} notifications={{ maxCount: 3 }}>
                    <div />
                </OverlayProvider>
            );
        };
    });

    it('PortalContainer', () => {
        () => {
            const ref = useRef<HTMLElement>(null);

            return (
                <OverlayProvider portalContainer={ref} toast={false} notifications={false}>
                    <div />
                </OverlayProvider>
            );
        };
    });

    it('ConfirmClose', () => {
        const onCloseRequest: CloseRequestHandler = (reason) => (reason === 'outside' ? false : Promise.resolve(true));

        void onCloseRequest;
    });
});
