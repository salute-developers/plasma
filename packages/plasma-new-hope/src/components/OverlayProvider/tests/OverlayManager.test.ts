import { describe, expect, it, vi } from 'vitest';

import { OverlayManager } from '../OverlayManager';
import { ScrollLocker } from '../utils/scrollLock';

type FakeNode = { id: string; contains: (node: unknown) => boolean };

const createNode = (id: string, children: FakeNode[] = []): FakeNode => {
    const node: FakeNode = {
        id,
        contains: (target) => target === node || children.some((child) => child.contains(target)),
    };

    return node;
};

const createTarget = () =>
    (({
        style: { overflow: '', paddingRight: '' },
        offsetWidth: 100,
        clientWidth: 100,
        ownerDocument: { defaultView: null, body: null },
    } as unknown) as HTMLElement);

const escapeEvent = (defaultPrevented = false) => {
    const event = { key: 'Escape', keyCode: 27, defaultPrevented, preventDefault: vi.fn() };

    return (event as unknown) as KeyboardEvent;
};

const pointerEvent = (target: unknown) => (({ target } as unknown) as Event);

const createManager = () => new OverlayManager({}, new ScrollLocker());

describe('OverlayManager', () => {
    describe('stack and z-index', () => {
        it('assigns z-index by stack order starting from base', () => {
            const manager = createManager();
            manager.register({ id: 'a', modal: true });
            manager.register({ id: 'b', modal: true });

            expect(manager.getZIndex('a')).toBe(9000);
            expect(manager.getZIndex('b')).toBe(9010);
            expect(manager.getState('b')?.childZIndex).toBe(9011);
        });

        it('keeps explicit z-index', () => {
            const manager = createManager();
            manager.register({ id: 'a', zIndex: 42 });

            expect(manager.getZIndex('a')).toBe(42);
        });

        it('places a parent registered later below its child', () => {
            const manager = createManager();
            manager.register({ id: 'child', parentId: 'parent' });
            manager.register({ id: 'parent', modal: true });

            expect(manager.getLayers().map(({ id }) => id)).toEqual(['parent', 'child']);
            expect(manager.getZIndex('child')).toBeGreaterThan(manager.getZIndex('parent'));
        });

        it('puts the global messages area below the first modal', () => {
            const manager = createManager();
            manager.register({ id: 'message', kind: 'message' });

            expect(manager.getZIndex('message')).toBe(9900);

            manager.register({ id: 'modal', modal: true });

            expect(manager.getZIndex('message')).toBeLessThan(manager.getZIndex('modal'));
        });

        it('reports top modal and blocked layers', () => {
            const manager = createManager();
            manager.register({ id: 'drawer', modal: false, dismissable: true });
            manager.register({ id: 'modal', modal: true });
            manager.register({ id: 'menu', parentId: 'modal', dismissable: true });

            expect(manager.getState('modal')?.isTopModal).toBe(true);
            expect(manager.getState('drawer')?.isBlocked).toBe(true);
            expect(manager.getState('menu')?.isBlocked).toBe(false);
            expect(manager.getState('menu')?.isTop).toBe(true);
        });
    });

    describe('Escape', () => {
        it('closes only the top layer', () => {
            const manager = createManager();
            const closeA = vi.fn();
            const closeB = vi.fn();
            manager.register({ id: 'a', modal: true, onClose: closeA });
            manager.register({ id: 'b', modal: true, onClose: closeB });

            const event = escapeEvent();
            manager.handleKeyDown(event);

            expect(closeB).toHaveBeenCalledWith('escape', event);
            expect(closeA).not.toHaveBeenCalled();
            expect(event.preventDefault).toHaveBeenCalled();
        });

        it('ignores an event already handled locally', () => {
            const manager = createManager();
            const onClose = vi.fn();
            manager.register({ id: 'a', modal: true, onClose });

            manager.handleKeyDown(escapeEvent(true));

            expect(onClose).not.toHaveBeenCalled();
        });

        it('does not close a lower layer when Escape is disabled on the top modal', () => {
            const manager = createManager();
            const closeA = vi.fn();
            manager.register({ id: 'a', modal: true, onClose: closeA });
            manager.register({ id: 'b', modal: true, closeOnEsc: false, onClose: vi.fn() });

            manager.handleKeyDown(escapeEvent());

            expect(closeA).not.toHaveBeenCalled();
        });

        it('skips message layers, closing and passive layers', () => {
            const manager = createManager();
            const onClose = vi.fn();
            manager.register({ id: 'modal', modal: true, onClose });
            manager.register({ id: 'passive', parentId: 'modal' });
            manager.register({ id: 'closing', modal: true, closing: true, onClose: vi.fn() });
            manager.register({ id: 'toast', kind: 'message', onClose: vi.fn() });

            manager.handleKeyDown(escapeEvent());

            expect(onClose).toHaveBeenCalledTimes(1);
        });
    });

    describe('outside pointer', () => {
        it('treats child layers in other containers as inside', () => {
            const manager = createManager();
            const onClose = vi.fn();
            const popoverNode = createNode('popover');
            const menuNode = createNode('menu');
            const outsideNode = createNode('outside');

            manager.register({
                id: 'popover',
                dismissable: true,
                closeOnOutside: true,
                onClose,
                getElements: () => [(popoverNode as unknown) as Element],
            });
            manager.register({
                id: 'menu',
                parentId: 'popover',
                getElements: () => [(menuNode as unknown) as Element],
            });

            manager.handlePointerDown(pointerEvent(menuNode));
            expect(onClose).not.toHaveBeenCalled();

            manager.handlePointerDown(pointerEvent(outsideNode));
            expect(onClose).toHaveBeenCalledWith('outside', expect.anything());
        });

        it('respects disabled outside closing', () => {
            const manager = createManager();
            const onClose = vi.fn();
            manager.register({ id: 'a', dismissable: true, closeOnOutside: false, onClose, getElements: () => [] });

            manager.handlePointerDown(pointerEvent(createNode('outside')));

            expect(onClose).not.toHaveBeenCalled();
        });
    });

    describe('close request', () => {
        it('keeps the layer open when the request is rejected', () => {
            const manager = createManager();
            const onClose = vi.fn();
            manager.register({ id: 'a', modal: true, onClose, onCloseRequest: () => false });

            expect(manager.requestClose('a', 'escape')).toBe('rejected');
            expect(onClose).not.toHaveBeenCalled();
        });

        it('waits for a deferred decision and ignores repeated requests meanwhile', async () => {
            const manager = createManager();
            const onClose = vi.fn();
            let resolve: (value: boolean) => void = () => {};
            const onCloseRequest = vi.fn(
                () =>
                    new Promise<boolean>((res) => {
                        resolve = res;
                    }),
            );
            manager.register({ id: 'a', modal: true, onClose, onCloseRequest });

            expect(manager.requestClose('a', 'outside')).toBe('deferred');
            expect(manager.requestClose('a', 'escape')).toBe('ignored');
            expect(onClose).not.toHaveBeenCalled();

            resolve(true);
            await Promise.resolve();
            await Promise.resolve();

            expect(onClose).toHaveBeenCalledWith('outside', undefined);
            expect(onCloseRequest).toHaveBeenCalledTimes(1);
        });

        it('passes the reason to the product check', () => {
            const manager = createManager();
            const onCloseRequest = vi.fn();
            manager.register({ id: 'a', modal: true, onClose: vi.fn(), onCloseRequest });

            manager.requestClose('a', 'close-button');

            expect(onCloseRequest).toHaveBeenCalledWith('close-button', undefined);
        });
    });

    describe('nesting and group rules', () => {
        it('closes descendants when the owner closes', () => {
            const manager = createManager();
            const closeChild = vi.fn();
            const closeGrandChild = vi.fn();
            manager.register({ id: 'owner', modal: true, onClose: vi.fn() });
            manager.register({ id: 'child', parentId: 'owner', onClose: closeChild, onCloseRequest: () => false });
            manager.register({ id: 'grand', parentId: 'child', onClose: closeGrandChild });

            manager.update('owner', { closing: true });

            expect(closeChild).toHaveBeenCalledWith('parent-closed', undefined);
            expect(closeGrandChild).toHaveBeenCalledWith('parent-closed', undefined);
        });

        it('closes transient background layers when a modal opens', () => {
            const manager = createManager();
            const closeTooltip = vi.fn();
            const closeLauncher = vi.fn();
            manager.register({ id: 'tooltip', kind: 'tooltip', transient: true, onClose: closeTooltip });
            manager.register({ id: 'launcher', kind: 'dropdown', transient: true, onClose: closeLauncher });
            manager.register({ id: 'modal', modal: true, parentId: 'launcher' });

            expect(closeTooltip).toHaveBeenCalledWith('modal-opened', undefined);
            expect(closeLauncher).not.toHaveBeenCalled();
        });

        it('closes another layer of the same group unless they form a chain', () => {
            const manager = createManager();
            const closeFirst = vi.fn();
            const closeNested = vi.fn();
            manager.register({ id: 'first', kind: 'popover', group: 'g', onClose: closeFirst });
            manager.register({ id: 'nested', kind: 'popover', group: 'g', parentId: 'first', onClose: closeNested });

            expect(closeFirst).not.toHaveBeenCalled();

            manager.register({ id: 'second', kind: 'popover', group: 'g', onClose: vi.fn() });

            expect(closeFirst).toHaveBeenCalledWith('outside', undefined);
            expect(closeNested).toHaveBeenCalledWith('outside', undefined);
        });
    });

    describe('scroll lock', () => {
        it('releases the lock only after the last holder', () => {
            const locker = new ScrollLocker();
            const manager = new OverlayManager({}, locker);
            const target = createTarget();
            target.style.overflow = 'auto';

            manager.register({ id: 'a', scrollLock: target });
            manager.register({ id: 'b', scrollLock: target });

            expect(target.style.overflow).toBe('hidden');

            manager.unregister('a');
            expect(target.style.overflow).toBe('hidden');

            manager.unregister('b');
            expect(target.style.overflow).toBe('auto');
            expect(locker.isLocked(target)).toBe(false);
        });

        it('releases the lock when the layer starts closing', () => {
            const locker = new ScrollLocker();
            const manager = new OverlayManager({}, locker);
            const target = createTarget();

            manager.register({ id: 'a', scrollLock: target });
            manager.update('a', { closing: true });

            expect(locker.isLocked(target)).toBe(false);
        });
    });

    it('notifies subscribers about stack changes', () => {
        const manager = createManager();
        const listener = vi.fn();
        manager.subscribe(listener);

        const unregister = manager.register({ id: 'a' });
        unregister();

        expect(listener).toHaveBeenCalledTimes(2);
    });
});
