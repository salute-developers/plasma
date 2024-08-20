import { test, expect } from '@playwright/experimental-ct-react';
// import { PlaywrightTestDecorator } from '@salutejs/plasma-cy-utils';

import { Button } from '.';

test.describe('plasma-b2c: Button', () => {
    // const Button = getComponentPw('Button') as typeof ButtonWeb;

    test('[PLASMA-T678] Button: view=default, size=m', async ({ page, mount }) => {
        await page.waitForLoadState('networkidle', { timeout: 500 });
        /* const component = await mount(
            <PlaywrightTestDecorator>
                <Button text="Button_view_default_size_m" view="default" size="m" />
            </PlaywrightTestDecorator>,
        );*/
        // eslint-disable-next-line react/react-in-jsx-scope
        const component = await mount(<Button text="Button_view_default_size_m" view="default" size="m" />);
        await expect(component).toHaveScreenshot();
    });
});
