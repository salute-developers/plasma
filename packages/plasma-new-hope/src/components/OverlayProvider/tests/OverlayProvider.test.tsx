import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { page, userEvent } from 'vitest/browser';
import { Modal, modalClasses } from 'src/examples/components/Modal/Modal';
import { Drawer } from 'src/examples/components/Drawer/Drawer';
import { ToastController, useToast } from 'src/examples/components/Toast/Toast';

import { createOverlayProvider } from '../createOverlayProvider';
import type { CloseRequestHandler } from '../OverlayProvider.types';

const OverlayProvider = createOverlayProvider({ toast: ToastController });

type DialogProps = {
    name: string;
    children?: ReactNode;
    onClose?: () => void;
    onCloseRequest?: CloseRequestHandler;
};

const Dialog = ({ name, children, onClose, onCloseRequest }: DialogProps) => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <button type="button" onClick={() => setOpened(true)}>
                Open {name}
            </button>
            <Modal
                opened={opened}
                onClose={() => {
                    setOpened(false);
                    onClose?.();
                }}
                onCloseRequest={onCloseRequest}
            >
                <button type="button">Inside {name}</button>
                {children}
            </Modal>
        </>
    );
};

const NestedDialogs = () => (
    <>
        <p data-testid="background">Background</p>
        <Dialog name="A">
            <Dialog name="B" />
        </Dialog>
    </>
);

const ToastButton = () => {
    const { showToast } = useToast();

    return (
        <button type="button" onClick={() => showToast({ text: 'Saved', timeout: 10000 })}>
            Show toast
        </button>
    );
};

const queryText = (text: string) =>
    Array.from(document.querySelectorAll('button, div, span'))
        .reverse()
        .find((element) => element.textContent === text);

const isOpen = (name: string) => Boolean(queryText(`Inside ${name}`));

const getDialog = (name: string) => queryText(`Inside ${name}`)?.closest<HTMLElement>('[role="dialog"]');

const getZIndex = (element: Element | null | undefined) => {
    let current = element as HTMLElement | null;

    while (current) {
        const { zIndex } = getComputedStyle(current);

        if (zIndex !== 'auto') {
            return Number(zIndex);
        }

        current = current.parentElement;
    }

    return 0;
};

const getTopOverlay = () => {
    const overlays = document.querySelectorAll<HTMLElement>(`.${modalClasses.overlay}`);

    return overlays[overlays.length - 1];
};

const openNested = async () => {
    await page.getByRole('button', { name: 'Open A' }).click();
    await expect.poll(() => isOpen('A')).toBe(true);
    await page.getByRole('button', { name: 'Open B' }).click();
    await expect.poll(() => isOpen('B')).toBe(true);
};

describe('OverlayProvider', () => {
    it('OV-01: places a nested modal above its parent', async () => {
        await render(
            <OverlayProvider>
                <NestedDialogs />
            </OverlayProvider>,
        );

        await openNested();

        expect(getZIndex(getDialog('B'))).toBeGreaterThan(getZIndex(getDialog('A')));
    });

    it('OV-02: Escape closes only the top layer and returns focus to its trigger', async () => {
        await render(
            <OverlayProvider>
                <NestedDialogs />
            </OverlayProvider>,
        );

        await openNested();
        await userEvent.keyboard('{Escape}');

        await expect.poll(() => isOpen('B')).toBe(false);
        expect(isOpen('A')).toBe(true);
        await expect.poll(() => document.activeElement?.textContent).toBe('Open B');

        await userEvent.keyboard('{Escape}');

        await expect.poll(() => isOpen('A')).toBe(false);
    });

    it('OV-03: Escape handled by content does not close the layer', async () => {
        const onClose = vi.fn();

        await render(
            <OverlayProvider>
                <Dialog name="A" onClose={onClose}>
                    <input
                        aria-label="Field"
                        onKeyDown={(event) => {
                            if (event.key === 'Escape') {
                                event.preventDefault();
                            }
                        }}
                    />
                </Dialog>
            </OverlayProvider>,
        );

        await page.getByRole('button', { name: 'Open A' }).click();
        await page.getByRole('textbox', { name: 'Field' }).click();
        await userEvent.keyboard('{Escape}');

        expect(onClose).not.toHaveBeenCalled();
        expect(isOpen('A')).toBe(true);
    });

    it('OV-04: backdrop click closes only the top modal', async () => {
        await render(
            <OverlayProvider>
                <NestedDialogs />
            </OverlayProvider>,
        );

        await openNested();
        await userEvent.click(getTopOverlay(), { position: { x: 5, y: 5 } });

        await expect.poll(() => isOpen('B')).toBe(false);
        expect(isOpen('A')).toBe(true);
    });

    it('OV-05: onCloseRequest can reject and defer closing', async () => {
        let decision: CloseRequestHandler = () => false;
        const onCloseRequest = vi.fn<CloseRequestHandler>((...args) => decision(...args));

        await render(
            <OverlayProvider>
                <Dialog name="A" onCloseRequest={onCloseRequest} />
            </OverlayProvider>,
        );

        await page.getByRole('button', { name: 'Open A' }).click();
        await userEvent.keyboard('{Escape}');

        expect(onCloseRequest).toHaveBeenCalledWith('escape', expect.any(KeyboardEvent));
        expect(isOpen('A')).toBe(true);

        let resolve: (value: boolean) => void = () => undefined;
        decision = () =>
            new Promise<boolean>((res) => {
                resolve = res;
            });

        await userEvent.click(getTopOverlay(), { position: { x: 5, y: 5 } });

        expect(onCloseRequest).toHaveBeenLastCalledWith('outside', expect.any(Event));
        expect(isOpen('A')).toBe(true);

        resolve(true);

        await expect.poll(() => isOpen('A')).toBe(false);
    });

    it('OV-06: locks page scroll until the last modal closes', async () => {
        await render(
            <OverlayProvider>
                <NestedDialogs />
            </OverlayProvider>,
        );

        const initialOverflow = document.body.style.overflow;

        await openNested();
        expect(document.body.style.overflow).toBe('hidden');

        await userEvent.keyboard('{Escape}');
        await expect.poll(() => isOpen('B')).toBe(false);
        expect(document.body.style.overflow).toBe('hidden');

        await userEvent.keyboard('{Escape}');
        await expect.poll(() => document.body.style.overflow).toBe(initialOverflow);
    });

    it('OV-07: messages stay below an active modal and do not take Escape', async () => {
        await render(
            <OverlayProvider>
                <ToastButton />
                <Dialog name="A">
                    <ToastButton />
                </Dialog>
            </OverlayProvider>,
        );

        await page.getByRole('button', { name: 'Open A' }).click();
        await page.getByRole('button', { name: 'Show toast' }).click();

        await expect.poll(() => Boolean(queryText('Saved'))).toBe(true);

        expect(getZIndex(queryText('Saved'))).toBeLessThan(getZIndex(getDialog('A')));

        await userEvent.keyboard('{Escape}');

        await expect.poll(() => isOpen('A')).toBe(false);
        expect(queryText('Saved')).toBeTruthy();
    });

    it('OV-08: exposes dialog semantics and hides the background from assistive technology', async () => {
        await render(
            <OverlayProvider>
                <NestedDialogs />
            </OverlayProvider>,
        );

        await openNested();

        const dialogA = getDialog('A');
        const dialogB = getDialog('B');

        expect(dialogB?.getAttribute('aria-modal')).toBe('true');
        expect(document.querySelector('[data-testid="background"]')?.closest('[aria-hidden="true"]')).toBeTruthy();
        expect(dialogA?.closest('[inert]')).toBeTruthy();
        expect(dialogB?.closest('[inert], [aria-hidden="true"]')).toBeNull();

        await userEvent.keyboard('{Escape}');
        await expect.poll(() => isOpen('B')).toBe(false);

        expect(getDialog('A')?.closest('[inert]')).toBeNull();

        await userEvent.keyboard('{Escape}');
        await expect.poll(() => isOpen('A')).toBe(false);

        expect(document.querySelector('[data-testid="background"]')?.closest('[aria-hidden="true"]')).toBeNull();
    });

    it('OV-09: a non-modal drawer closes by Escape without locking scroll', async () => {
        const onClose = vi.fn();

        await render(
            <OverlayProvider>
                <Drawer opened asModal={false} onClose={onClose}>
                    <button type="button">Inside drawer</button>
                </Drawer>
            </OverlayProvider>,
        );

        await expect.poll(() => Boolean(queryText('Inside drawer'))).toBe(true);
        expect(document.body.style.overflow).not.toBe('hidden');

        await userEvent.keyboard('{Escape}');

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('OV-10: works without a provider through the global fallback manager', async () => {
        await render(<NestedDialogs />);

        await openNested();

        expect(document.getElementById('plasma-overlay-root')).toBeTruthy();
        expect(getZIndex(getDialog('B'))).toBeGreaterThan(getZIndex(getDialog('A')));

        await userEvent.keyboard('{Escape}');

        await expect.poll(() => isOpen('B')).toBe(false);
        expect(isOpen('A')).toBe(true);

        await userEvent.keyboard('{Escape}');
        await expect.poll(() => isOpen('A')).toBe(false);
    });
});
