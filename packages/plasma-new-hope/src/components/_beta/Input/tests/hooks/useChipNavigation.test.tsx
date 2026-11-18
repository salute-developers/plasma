import React, { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { page, userEvent } from 'vitest/browser';
import { Input } from 'src/examples/components/_beta/Input/Input';
import type { InputProps } from 'src/examples/components/_beta/Input/Input';

import { classes } from '../../Input.tokens';

const getInput = () => page.getByRole('textbox', { name: 'Поле' });
const getControl = () => getInput().element() as HTMLInputElement;
const getChip = (value: string) => page.getByRole('button', { name: `Удалить ${value}`, exact: true });
const values = ['Первый', 'Второй', 'Третий'];

// Список изменяет потребитель, как в TextField; Input отвечает только за взаимодействие.
const ChipsInput = ({ chips, ...props }: InputProps) => {
    const [items, setItems] = useState(chips?.value ?? values);
    return (
        <Input
            label={{ value: 'Поле' }}
            rootProps={{ style: { width: 400 } }}
            {...props}
            chips={{
                ...chips,
                value: items,
                onRemove: (value) => {
                    chips?.onRemove?.(value);
                    setItems((previous) => previous.filter((item) => item !== value));
                },
            }}
        />
    );
};

describe('Input / useChipNavigation', () => {
    describe.each(['close-icon', 'full'] as const)('clickArea=%s', (clickArea) => {
        it('selects the last chip on the first Backspace and removes it on the second', async () => {
            const onRemove = vi.fn();
            await render(<ChipsInput chips={{ clickArea, onRemove }} />);
            await getInput().click();

            await userEvent.keyboard('{Backspace}');
            await expect.element(getChip('Третий')).toHaveFocus();
            expect(onRemove).not.toHaveBeenCalled();

            await userEvent.keyboard('{Backspace}');
            await expect.element(getChip('Третий')).not.toBeInTheDocument();
            await expect.element(getChip('Второй')).toHaveFocus();
            expect(onRemove).toHaveBeenCalledExactlyOnceWith('Третий');

            await userEvent.keyboard('{Backspace}{Backspace}');
            await expect.element(getInput()).toHaveFocus();
            expect(getControl().selectionStart).toBe(0);
            expect(onRemove.mock.calls.map(([value]) => value)).toEqual(['Третий', 'Второй', 'Первый']);
        });

        it('supports ArrowLeft, ArrowRight and Home between chips', async () => {
            await render(<ChipsInput chips={{ clickArea }} />);
            await getInput().click();
            await userEvent.keyboard('{ArrowLeft}');
            await expect.element(getChip('Третий')).toHaveFocus();
            await userEvent.keyboard('{ArrowLeft}');
            await expect.element(getChip('Второй')).toHaveFocus();
            await userEvent.keyboard('{Home}');
            await expect.element(getChip('Первый')).toHaveFocus();
            await userEvent.keyboard('{ArrowLeft}');
            await expect.element(getChip('Первый')).toHaveFocus();
            await userEvent.keyboard('{ArrowRight}');
            await expect.element(getChip('Второй')).toHaveFocus();
        });

        it.each(['ArrowRight', 'End', 'Escape'])('returns to the beginning of the input with %s', async (key) => {
            await render(<ChipsInput chips={{ clickArea }} defaultValue="Текст" />);
            getChip('Третий').element().focus();
            await userEvent.keyboard(`{${key}}`);
            await expect.element(getInput()).toHaveFocus();
            expect(getControl().selectionStart).toBe(0);
            expect(getControl().selectionEnd).toBe(0);
        });

        it.each(['Enter', ' ', 'Delete', 'Backspace'])(
            'restores focus after removing the first chip with %s',
            async (key) => {
                const onRemove = vi.fn();
                await render(<ChipsInput chips={{ clickArea, onRemove }} />);
                getChip('Первый').element().focus();
                await userEvent.keyboard(key === ' ' ? ' ' : `{${key}}`);

                await expect.element(getChip('Первый')).not.toBeInTheDocument();
                await expect.element(getChip('Второй')).toHaveFocus();
                expect(onRemove).toHaveBeenCalledExactlyOnceWith('Первый');
            },
        );

        it('restores focus after mouse removal and does not submit a form', async () => {
            const onSubmit = vi.fn((event: React.FormEvent) => event.preventDefault());
            await render(
                <form onSubmit={onSubmit}>
                    <ChipsInput chips={{ clickArea }} />
                </form>,
            );
            await getChip('Второй').click();
            await expect.element(getChip('Третий')).toHaveFocus();
            expect(onSubmit).not.toHaveBeenCalled();
        });

        it.each(['disabled', 'readOnly'] as const)('prevents chip removal when %s', async (state) => {
            const onRemove = vi.fn();
            await render(<ChipsInput {...{ [state]: true }} chips={{ clickArea, onRemove }} />);
            await expect.element(getChip('Первый')).toBeDisabled();
            await getChip('Первый').click({ force: true });
            getControl().focus();
            await userEvent.keyboard('{Backspace}{ArrowLeft}{Delete}');

            expect(onRemove).not.toHaveBeenCalled();
            await expect.element(getChip('Третий')).toBeInTheDocument();
        });
    });

    it('makes only the close icon removable by default', async () => {
        const onRemove = vi.fn();
        await render(<ChipsInput chips={{ onRemove }} />);
        await page.getByText('Первый', { exact: true }).click();
        expect(onRemove).not.toHaveBeenCalled();
        await expect.element(getInput()).not.toHaveFocus();
        await getChip('Первый').click();
        expect(onRemove).toHaveBeenCalledExactlyOnceWith('Первый');
    });

    it('removes a full chip by clicking its text', async () => {
        const onRemove = vi.fn();
        await render(<ChipsInput chips={{ clickArea: 'full', onRemove }} />);
        await page.getByText('Первый', { exact: true }).click();
        expect(onRemove).toHaveBeenCalledExactlyOnceWith('Первый');
    });

    it('does not change a controlled chip list without a consumer update', async () => {
        const onRemove = vi.fn();
        await render(<Input label={{ value: 'Поле' }} chips={{ value: values, onRemove }} />);
        await getChip('Первый').click();
        expect(onRemove).toHaveBeenCalledExactlyOnceWith('Первый');
        await expect.element(getChip('Первый')).toBeInTheDocument();
        await expect.element(getChip('Первый')).toHaveFocus();
    });

    it('does not expose removal actions or intercept input keys without onRemove', async () => {
        await render(<Input label={{ value: 'Поле' }} chips={{ value: values }} />);
        expect(document.querySelectorAll(`.${classes.inputChip} button`)).toHaveLength(0);
        await getInput().click();
        await userEvent.keyboard('{Backspace}{ArrowLeft}');
        await expect.element(getInput()).toHaveFocus();
    });

    it('deletes input text before offering chip selection', async () => {
        const onRemove = vi.fn();
        await render(<ChipsInput defaultValue="ab" chips={{ onRemove }} />);
        await getInput().click();
        getControl().setSelectionRange(2, 2);
        await userEvent.keyboard('{Backspace}');
        await expect.element(getInput()).toHaveValue('a');
        await expect.element(getInput()).toHaveFocus();
        await userEvent.keyboard('{Backspace}');
        await expect.element(getInput()).toHaveValue('');
        await expect.element(getInput()).toHaveFocus();
        await userEvent.keyboard('{Backspace}');
        await expect.element(getChip('Третий')).toHaveFocus();
        expect(onRemove).not.toHaveBeenCalled();
    });

    it('preserves native arrow movement and selection inside input text', async () => {
        await render(<ChipsInput defaultValue="abcd" />);
        await getInput().click();
        getControl().setSelectionRange(2, 2);
        await userEvent.keyboard('{ArrowLeft}');
        expect(getControl().selectionStart).toBe(1);
        await expect.element(getInput()).toHaveFocus();

        getControl().setSelectionRange(0, 2);
        await userEvent.keyboard('{ArrowLeft}');
        await expect.element(getInput()).toHaveFocus();
        expect(getControl().selectionEnd).toBe(0);
    });

    it.each([
        { ctrlKey: true },
        { altKey: true },
        { metaKey: true },
        { shiftKey: true },
        { isComposing: true },
        { keyCode: 229 },
    ])('does not intercept modified or composing events: %j', async (options) => {
        const onRemove = vi.fn();
        await render(<ChipsInput chips={{ onRemove }} />);
        getControl().focus();
        const event = new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true, cancelable: true, ...options });
        getControl().dispatchEvent(event);
        expect(event.defaultPrevented).toBe(false);
        await expect.element(getInput()).toHaveFocus();
        expect(onRemove).not.toHaveBeenCalled();
    });

    it('respects an input key handler that prevents the default action', async () => {
        await render(<ChipsInput onKeyDown={(event) => event.preventDefault()} />);
        await getInput().click();
        await userEvent.keyboard('{Backspace}');
        await expect.element(getInput()).toHaveFocus();
    });

    it('does not intercept keyboard events from content slots', async () => {
        const onRemove = vi.fn();
        await render(<ChipsInput chips={{ onRemove }} contentAfter={<button type="button">Действие</button>} />);
        await page.getByRole('button', { name: 'Действие' }).click();
        await userEvent.keyboard('{Backspace}{ArrowLeft}');
        await expect.element(page.getByRole('button', { name: 'Действие' })).toHaveFocus();
        expect(onRemove).not.toHaveBeenCalled();
    });

    it('keeps focus on an existing chip when the consumer reorders the list', async () => {
        const onRemove = vi.fn();
        const { rerender } = await render(<Input label={{ value: 'Поле' }} chips={{ value: values, onRemove }} />);
        getChip('Второй').element().focus();
        await rerender(<Input label={{ value: 'Поле' }} chips={{ value: ['Второй', 'Первый', 'Третий'], onRemove }} />);
        await expect.element(getChip('Второй')).toHaveFocus();
        await userEvent.keyboard('{ArrowRight}');
        await expect.element(getChip('Первый')).toHaveFocus();
    });

    it('does not steal focus moved by the consumer during removal', async () => {
        const onRemove = () => page.getByRole('button', { name: 'Вне поля' }).element().focus();
        await render(
            <>
                <ChipsInput chips={{ onRemove }} />
                <button type="button">Вне поля</button>
            </>,
        );
        await getChip('Первый').click();
        await expect.element(page.getByRole('button', { name: 'Вне поля' })).toHaveFocus();
    });

    it('renders duplicate chip values and removes only the item updated by the consumer', async () => {
        const onRemove = vi.fn();
        const { rerender } = await render(
            <Input label={{ value: 'Поле' }} chips={{ value: ['A', 'A', 'B'], onRemove }} />,
        );
        await getChip('A').nth(0).click();
        expect(onRemove).toHaveBeenCalledExactlyOnceWith('A');
        await rerender(<Input label={{ value: 'Поле' }} chips={{ value: ['A', 'B'], onRemove }} />);
        expect(document.querySelectorAll(`.${classes.inputChip}`)).toHaveLength(2);
        await expect.element(getChip('A')).toBeInTheDocument();
    });
});
