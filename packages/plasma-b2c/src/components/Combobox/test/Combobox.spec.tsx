import React from 'react';
import { test, expect } from '@salutejs/plasma-playwright';

import { ComboboxGroup, RenderItemForTest } from './Combobox.test-components';

const sizes = ['xs', 's', 'm', 'l'] as const;

test.describe('Combobox', () => {
    test.describe('common:', () => {
        test.use({ viewport: { width: 1500, height: 1200 } });

        sizes.forEach((size) => {
            test(`size ${size}`, async ({ mount }) => {
                const component = await mount(<ComboboxGroup size={size} />);

                await expect(component).toHaveScreenshot();
            });
        });

        test('disabled', async ({ mount }) => {
            const component = await mount(<ComboboxGroup size="m" disabled />);

            await expect(component).toHaveScreenshot();
        });

        test('readonly', async ({ mount }) => {
            const component = await mount(<ComboboxGroup size="m" readonly />);

            await expect(component).toHaveScreenshot();
        });
    });
});
