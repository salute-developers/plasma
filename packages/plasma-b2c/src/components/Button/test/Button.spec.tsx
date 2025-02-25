import React from 'react';
import { test, expect } from '@salutejs/plasma-playwright';

import { Button } from './component.export';

test.describe('Button', () => {
    test('[PLASMA-T1319] Button: size=l, view=default', async ({ mount }) => {
        const component = await mount(
            <>
                <Button text="Button_view_default_size_l" view="default" size="l" />
            </>,
        );

        await expect(component).toHaveScreenshot();
    });
});
