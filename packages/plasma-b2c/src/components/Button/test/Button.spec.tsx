import React from 'react';
import { test, expect } from '@salutejs/plasma-playwright';
import { PlaywrightTestDecorator } from '@salutejs/plasma-playwright-utils';

import { Button } from './component.export';

test.describe('Button', () => {
    test('[PLASMA-T1319] Button: size=l, view=default', async ({ mount }) => {
        const component = await mount(
            <PlaywrightTestDecorator>
                <Button text="Button_view_default_size_l" view="default" size="l" />
            </PlaywrightTestDecorator>,
        );

        await expect(component).toHaveScreenshot();
    });
});
