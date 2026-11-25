import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { page, userEvent } from 'vitest/browser';
import { Combobox } from 'src/examples/components/Combobox/Combobox';

const items = [
    { value: 'north', label: 'Северная Америка' },
    { value: 'south', label: 'Южная Америка' },
    { value: 'europe', label: 'Европа' },
];
const input = () => page.getByRole('combobox');
const item = (name: string) => page.getByRole('treeitem', { name, exact: true });

for (const treeView of [false, true]) {
    describe(`Combobox keepSearchOnSelect (treeView=${treeView})`, () => {
        const options = treeView ? [{ value: 'regions', label: 'Регионы', items }] : items;

        it.each([undefined, false, true])(
            'handles selection with keepSearchOnSelect=%s',
            async (keepSearchOnSelect) => {
                const onChange = vi.fn();
                await render(
                    <Combobox
                        multiple
                        items={options}
                        treeView={treeView}
                        keepSearchOnSelect={keepSearchOnSelect}
                        onChange={onChange}
                    />,
                );
                await input().fill('Америка');
                await item('Северная Америка').click();
                expect(onChange).toHaveBeenLastCalledWith(['north'], expect.objectContaining(items[0]));
                await expect.element(input()).toHaveValue(keepSearchOnSelect ? 'Америка' : '');

                if (keepSearchOnSelect) {
                    await expect.element(item('Европа')).not.toBeInTheDocument();
                    await item('Южная Америка').click();
                    expect(onChange).toHaveBeenLastCalledWith(['north', 'south'], expect.objectContaining(items[1]));
                    await item('Северная Америка').click();
                    expect(onChange).toHaveBeenLastCalledWith(['south'], expect.objectContaining(items[0]));
                    await expect.element(input()).toHaveValue('Америка');
                }
            },
        );

        it('clears preserved search on Escape', async () => {
            await render(<Combobox multiple items={options} treeView={treeView} keepSearchOnSelect />);
            await input().fill('Америка');
            await item('Северная Америка').click();
            await input().click();
            await userEvent.keyboard('{Escape}');
            await expect.element(input()).toHaveValue('');
        });

        it('clears search when closeAfterSelect closes the list', async () => {
            await render(<Combobox multiple items={options} treeView={treeView} keepSearchOnSelect closeAfterSelect />);
            await input().fill('Америка');
            await item('Северная Америка').click();
            await expect.element(input()).toHaveValue('');
            await expect.element(item('Южная Америка')).not.toBeInTheDocument();
        });
    });
}

it('does not affect single selection', async () => {
    await render(<Combobox items={items} keepSearchOnSelect />);
    await input().fill('Америка');
    await item('Северная Америка').click();
    await expect.element(input()).toHaveValue('Северная Америка');
});
