import React from 'react';
import { test, expect } from '@salutejs/plasma-playwright';

import { items, itemsWithDisabled, Controlled, RenderItemForTest } from './Combobox.story';
import { Combobox } from './component.export';

test.describe('Combobox', () => {
    test.describe('prop:', () => {
        test('variant', async ({ mount, page }) => {
            page.setViewportSize({ width: 1500, height: 800 });

            await mount(
                <div style={{ display: 'grid', gridTemplateColumns: '300px 300px 300px 300px', gap: '300px 30px' }}>
                    <Combobox
                        size="l"
                        variant="tight"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        alwaysOpened
                    />

                    <Combobox
                        size="m"
                        variant="tight"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        alwaysOpened
                    />

                    <Combobox
                        size="s"
                        variant="tight"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        alwaysOpened
                    />

                    <Combobox
                        size="xs"
                        variant="tight"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        alwaysOpened
                    />

                    <Combobox
                        size="l"
                        variant="tight"
                        multiple
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        alwaysOpened
                    />

                    <Combobox
                        size="m"
                        variant="tight"
                        multiple
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        alwaysOpened
                    />

                    <Combobox
                        size="s"
                        variant="tight"
                        multiple
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        alwaysOpened
                    />

                    <Combobox
                        size="xs"
                        variant="tight"
                        multiple
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        alwaysOpened
                    />
                </div>,
            );

            await expect(page).toHaveScreenshot();
        });

        test('placement', async ({ mount, page }) => {
            page.setViewportSize({ width: 600, height: 1600 });

            const itemsForPlacement = [{ value: 'item', label: 'Item' }];

            await mount(
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                    }}
                >
                    <div
                        style={{
                            width: '200px',
                            padding: '60px 60px 0 60px',
                        }}
                    >
                        <Combobox
                            placement="top"
                            size="xs"
                            alwaysOpened
                            items={itemsForPlacement}
                            label="Label"
                            placeholder="Top"
                            listWidth="150px"
                        />
                    </div>

                    <div
                        style={{
                            width: '200px',
                            padding: '60px 60px 0 60px',
                        }}
                    >
                        <Combobox
                            placement="top-start"
                            size="xs"
                            alwaysOpened
                            items={itemsForPlacement}
                            label="Label"
                            placeholder="Top-start"
                            listWidth="150px"
                        />
                    </div>

                    <div
                        style={{
                            width: '200px',
                            padding: '60px 60px 0 60px',
                        }}
                    >
                        <Combobox
                            placement="top-end"
                            size="xs"
                            alwaysOpened
                            items={itemsForPlacement}
                            label="Label"
                            placeholder="Top-end"
                            listWidth="150px"
                        />
                    </div>

                    <div
                        style={{
                            width: '200px',
                            padding: '20px 300px 20px 0',
                        }}
                    >
                        <Combobox
                            placement="right"
                            size="xs"
                            alwaysOpened
                            items={itemsForPlacement}
                            label="Label"
                            placeholder="Right"
                        />
                    </div>

                    <div
                        style={{
                            width: '200px',
                            padding: '20px 300px 20px 0',
                        }}
                    >
                        <Combobox
                            placement="right-start"
                            size="xs"
                            alwaysOpened
                            items={itemsForPlacement}
                            label="Label"
                            placeholder="Right-start"
                        />
                    </div>

                    <div
                        style={{
                            width: '200px',
                            padding: '20px 300px 20px 0',
                        }}
                    >
                        <Combobox
                            placement="right-end"
                            size="xs"
                            alwaysOpened
                            items={itemsForPlacement}
                            label="Label"
                            placeholder="Right-end"
                        />
                    </div>

                    <div
                        style={{
                            width: '200px',
                            padding: '0 60px 60px 60px',
                        }}
                    >
                        <Combobox
                            placement="bottom"
                            size="xs"
                            alwaysOpened
                            items={itemsForPlacement}
                            label="Label"
                            placeholder="Bottom"
                            listWidth="150px"
                        />
                    </div>

                    <div
                        style={{
                            width: '200px',
                            padding: '0 60px 60px 60px',
                        }}
                    >
                        <Combobox
                            placement="bottom-start"
                            size="xs"
                            alwaysOpened
                            items={itemsForPlacement}
                            label="Label"
                            placeholder="Bottom-start"
                            listWidth="150px"
                        />
                    </div>

                    <div
                        style={{
                            width: '200px',
                            padding: '0 60px 60px 60px',
                        }}
                    >
                        <Combobox
                            placement="bottom-end"
                            size="xs"
                            alwaysOpened
                            items={itemsForPlacement}
                            label="Label"
                            placeholder="Bottom-end"
                            listWidth="150px"
                        />
                    </div>

                    <div
                        style={{
                            width: '200px',
                            padding: '20px 0 20px 300px',
                        }}
                    >
                        <Combobox
                            placement="left"
                            size="xs"
                            alwaysOpened
                            items={itemsForPlacement}
                            label="Label"
                            placeholder="Left"
                        />
                    </div>

                    <div
                        style={{
                            width: '200px',
                            padding: '20px 0 20px 300px',
                        }}
                    >
                        <Combobox
                            placement="left-start"
                            size="xs"
                            alwaysOpened
                            items={itemsForPlacement}
                            label="Label"
                            placeholder="Left-start"
                        />
                    </div>

                    <div
                        style={{
                            width: '200px',
                            padding: '20px 0 20px 300px',
                        }}
                    >
                        <Combobox
                            placement="left-end"
                            size="xs"
                            alwaysOpened
                            items={itemsForPlacement}
                            label="Label"
                            placeholder="Left-end"
                        />
                    </div>
                </div>,
            );

            await expect(page).toHaveScreenshot();
        });

        test('listWidth, listHeight, listOverflow', async ({ mount, page }) => {
            page.setViewportSize({ width: 500, height: 500 });

            await mount(
                <Combobox
                    listWidth="400px"
                    listHeight="200px"
                    listOverflow="scroll"
                    items={items}
                    label="Label"
                    placeholder="Placeholder"
                    alwaysOpened
                />,
            );

            await expect(page).toHaveScreenshot();
        });

        /**
         * Если использовать ref вместо id, тест упадет,
         * так как ref будет жить в контексте Node и не сериализуется, чтобы попасть в браузер
         */
        test('portal ref', async ({ mount, page }) => {
            page.setViewportSize({ width: 300, height: 400 });

            await mount(
                <>
                    <div id="combobox-wrapper">
                        <Combobox
                            portal="portal-root"
                            id="combobox"
                            items={items}
                            label="Label"
                            placeholder="Placeholder"
                        />
                    </div>

                    <div id="portal-root" />
                </>,
            );

            await page.locator('#combobox').click();

            await expect(page.locator('#combobox-wrapper [data-floating-ui-portal]')).not.toBeAttached();
            await expect(page.locator('#portal-root [data-floating-ui-portal]')).toBeAttached();
        });

        /**
         * render function так же живет в контексте ноды и не может быть сериализована.
         * Пытался сделать обертку (как в документации Playwright),
         * чтобы файл с компонентом обертки попадал в конечную сборку.
         * Но возникает ошибка при маунте. Playwright считает,
         * что я сделал объявление компонента в файле тестов.
         */
        test('renderItem', async ({ mount, page }) => {
            page.setViewportSize({ width: 500, height: 200 });

            await mount(<RenderItemForTest renderItem={(item) => <div>{item.label}</div>} />);

            await page.locator('#combobox').click();

            await expect(page).toHaveScreenshot();
        });

        test('isTargetAmount', async ({ mount, page }) => {
            page.setViewportSize({ width: 500, height: 200 });

            const component = await mount(
                <>
                    <Combobox
                        isTargetAmount
                        multiple
                        id="combobox1"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        closeAfterSelect
                    />

                    <br />

                    <Combobox
                        isTargetAmount
                        targetAmount={999}
                        multiple
                        id="combobox2"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        closeAfterSelect
                    />
                </>,
            );

            await component.locator('#combobox1').click();
            await component.locator('#combobox1').press('ArrowDown');
            await component.locator('#combobox1').press('ArrowDown');
            await component.locator('#combobox1').press('Enter');

            await component.locator('#combobox2').click();
            await component.locator('#combobox2').press('ArrowDown');
            await component.locator('#combobox2').press('ArrowDown');
            await component.locator('#combobox2').press('Enter');
            await component.locator('#combobox2').press('Tab');

            await expect(page).toHaveScreenshot();
        });

        test('renderValue', async ({ mount, page }) => {
            page.setViewportSize({ width: 500, height: 500 });

            await mount(
                <>
                    {/* <RenderValueForTest renderValue={(item) => item.value} /> */}
                    <div id="combobox1">
                        <Combobox
                            renderValue={(item) => item.value}
                            id="single"
                            items={items}
                            label="Single"
                            placeholder="Placeholder"
                        />
                    </div>

                    <br />

                    <div id="combobox2">
                        <Combobox
                            renderValue={(item) => item.value}
                            id="multiple"
                            multiple
                            items={items}
                            label="Multiple"
                            placeholder="Placeholder"
                            closeAfterSelect
                        />
                    </div>
                </>,
            );

            await page.locator('#single').click();
            await page.locator('#combobox1 [id$="north_america"]').click();
            await page.locator('#multiple').click();
            await page.locator('#combobox2 [id$="north_america"]').click();

            await expect(page).toHaveScreenshot();
        });

        test('closeAfterSelect, single', async ({ mount, page }) => {
            await page.setViewportSize({ width: 700, height: 500 });

            await mount(
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div id="combobox1" style={{ width: '300px' }}>
                        <Combobox id="single1" items={items} label="Label" placeholder="Placeholder" />
                    </div>
                    <div id="combobox2" style={{ width: '300px' }}>
                        <Combobox
                            id="single2"
                            closeAfterSelect={false}
                            items={items}
                            label="Label"
                            placeholder="Placeholder"
                        />
                    </div>
                </div>,
            );

            await page.locator('#single1').click();
            await expect(page.locator('#single1')).toBeFocused();
            await expect(page.locator('#combobox1 [id$="tree_level_1"]')).toBeVisible();
            await page.locator('#combobox1 [id$="north_america"]').click();
            await expect(page.locator('#combobox1 [id$="tree_level_1"]')).not.toBeVisible();
            await expect(page.locator('#single1')).not.toBeFocused();

            await page.locator('#single2').click();
            await expect(page.locator('#single2')).toBeFocused();
            await expect(page.locator('#combobox2 [id$="tree_level_1"]')).toBeVisible();
            await page.locator('#combobox2 [id$="north_america"]').click();
            await expect(page.locator('#combobox2 [id$="tree_level_1"]')).toBeVisible();
            await expect(page.locator('#single1')).not.toBeFocused();
        });

        test('closeAfterSelect, multiple', async ({ mount, page }) => {
            await page.setViewportSize({ width: 700, height: 500 });

            await mount(
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div id="combobox1" style={{ width: '300px' }}>
                        <Combobox id="multiple1" multiple items={items} label="Label" placeholder="Placeholder" />
                    </div>
                    <div id="combobox2" style={{ width: '300px' }}>
                        <Combobox
                            id="multiple2"
                            closeAfterSelect
                            multiple
                            items={items}
                            label="Label"
                            placeholder="Placeholder"
                        />
                    </div>
                </div>,
            );

            await page.locator('#multiple1').click();
            await expect(page.locator('#multiple1')).toBeFocused();
            await expect(page.locator('#combobox1 [id$="tree_level_1"]')).toBeVisible();
            await page.locator('#combobox1 [id$="north_america"]').click();
            await expect(page.locator('#combobox1 [id$="tree_level_1"]')).toBeVisible();
            await expect(page.locator('#multiple1')).not.toBeFocused();

            await page.locator('#multiple2').click();
            await expect(page.locator('#multiple2')).toBeFocused();
            await expect(page.locator('#combobox2 [id$="tree_level_1"]')).toBeVisible();
            await page.locator('#combobox2 [id$="north_america"]').click();
            await expect(page.locator('#combobox2 [id$="tree_level_1"]')).not.toBeVisible();
            await expect(page.locator('#multiple2')).not.toBeFocused();
        });

        test('required, requiredPlacement', async ({ mount, page }) => {
            await page.setViewportSize({ width: 500, height: 100 });

            await mount(
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div style={{ width: '200px' }}>
                        <Combobox required items={items} label="Label" placeholder="Placeholder" />
                    </div>
                    <div style={{ width: '200px' }}>
                        <Combobox
                            required
                            requiredPlacement="left"
                            items={items}
                            label="Label"
                            placeholder="Placeholder"
                        />
                    </div>
                </div>,
            );

            await expect(page).toHaveScreenshot();
        });

        test('optional', async ({ mount, page }) => {
            await page.setViewportSize({ width: 400, height: 100 });

            await mount(
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div style={{ width: '300px' }}>
                        <Combobox optional items={items} label="Label" placeholder="Placeholder" />
                    </div>
                </div>,
            );

            await expect(page).toHaveScreenshot();
        });

        test('item data-attrs', async ({ mount, page }) => {
            await page.setViewportSize({ width: 400, height: 100 });

            await mount(
                <div style={{ width: '300px' }}>
                    <Combobox id="single" items={items} label="Label" placeholder="Placeholder" />
                </div>,
            );

            await page.locator('#single').click();
            await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();

            const northAmericaItem = page.locator('[id$="north_america"]');
            await expect(northAmericaItem).toHaveClass(/test-classname/);
            await expect(northAmericaItem).toHaveAttribute('data-name', 'test-data-name');
        });

        test('zIndex', async ({ mount, page }) => {
            await mount(
                <div style={{ width: '300px' }}>
                    <Combobox id="single" items={items} label="Label" placeholder="Placeholder" zIndex={10000} />
                </div>,
            );

            await page.locator('#single').click();
            await expect(page.locator('[data-floating-ui-portal] > div')).toHaveCSS('z-index', '10000');
        });

        test('beforeList', async ({ mount, page }) => {
            await page.setViewportSize({ width: 400, height: 400 });

            await mount(
                <div style={{ width: '300px' }}>
                    <Combobox
                        id="single"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        beforeList="Content before list"
                    />
                </div>,
            );

            await page.locator('#single').click();
            await expect(page).toHaveScreenshot();
        });

        test('afterList', async ({ mount, page }) => {
            await page.setViewportSize({ width: 400, height: 400 });

            await mount(
                <div style={{ width: '300px' }}>
                    <Combobox
                        id="single"
                        items={items}
                        label="Label"
                        placeholder="Placeholder"
                        afterList="Content after list"
                    />
                </div>,
            );

            await page.locator('#single').click();
            await expect(page).toHaveScreenshot();
        });
    });

    test.describe.only('flow:', () => {
        test('disabled item behavior', async ({ mount, page }) => {
            await mount(
                <div style={{ width: '300px' }}>
                    <Combobox id="multiple" multiple label="Список стран" items={itemsWithDisabled} />
                </div>,
            );

            await page.click('#multiple');
            await page.click('[id$="brazil"]');
            await page.click('[id$="brazil"] .checkbox-trigger');

            await expect(page.locator('[id$="rio_de_janeiro"]')).toHaveAttribute('aria-selected', 'false');
            await expect(page.locator('[id$="brazil"]')).toHaveAttribute('aria-selected', 'true');
            await expect(page.locator('[id$="sao_paulo"]')).toHaveAttribute('aria-selected', 'true');

            await page.click('[id$="brazil"] .checkbox-trigger');

            await expect(page.locator('[id$="rio_de_janeiro"]')).toHaveAttribute('aria-selected', 'false');
            await expect(page.locator('[id$="brazil"]')).toHaveAttribute('aria-selected', 'false');
            await expect(page.locator('[id$="sao_paulo"]')).toHaveAttribute('aria-selected', 'false');
        });

        test('single uncontrolled', async ({ mount, page }) => {
            await mount(
                <div style={{ width: '300px' }}>
                    <Combobox id="single" label="Label" placeholder="Placeholder" items={items} />
                </div>,
            );

            await page.click('#single');
            await expect(page.locator('#single')).toBeFocused();
            await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();

            await page.click('[id$="north_america"]');
            await expect(page.locator('#single')).not.toBeFocused();
            await expect(page.locator('[id$="tree_level_1"]')).not.toBeVisible();

            await page.click('.label-placement-outer');
            await expect(page.locator('#single')).toBeFocused();
            await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();
            await expect(page.locator('[id$="north_america"] > div:first-child svg')).toBeVisible();

            await page.click('[id$="north_america"]');
            await expect(page.locator('#single')).not.toBeFocused();
            await expect(page.locator('[id$="tree_level_1"]')).not.toBeVisible();
            await expect(page.locator('[id$="north_america"] > div:first-child svg')).not.toBeVisible();

            await page.click('#single');
            await expect(page.locator('#single')).toBeFocused();
            await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();

            await page.type('#single', 'Париж');
            await expect(page.locator('#single')).toHaveValue('Париж');
            await expect(page.locator('[id$="tree_level_1"] li')).toHaveCount(1);

            await page.click('[id$="europe"]');
            await expect(page.locator('#single')).not.toBeFocused();
            await expect(page.locator('[id$="europe"]')).toHaveClass(/dropdown-item-is-active/);
            await expect(page.locator('[id$="tree_level_2"]')).toBeVisible();
            await expect(page.locator('[id$="tree_level_2"] li')).toHaveCount(1);

            await page.click('[id$="france"]');
            await expect(page.locator('[id$="france"]')).toHaveClass(/dropdown-item-is-active/);
            await expect(page.locator('[id$="tree_level_3"]')).toBeVisible();
            await expect(page.locator('[id$="tree_level_3"] li')).toHaveCount(1);

            await page.click('[id$="paris"]');
            await expect(page.locator('#single')).not.toBeFocused();
            await expect(page.locator('#single')).toHaveValue('Париж');
            await expect(page.locator('[id$="tree_level_1"]')).not.toBeVisible();
        });

        /**
         * Ошибка при маунте. Playwright считает, что я сделал объявление компонента в файле тестов.
         * Если занести внутрь, то ошибка маунта останется + та же проблема с сериализацией.
         */
        test('single controlled', async ({ mount, page }) => {
            await mount(<Controlled />);

            await page.click('#single');
            await expect(page.locator('#single')).toBeFocused();
            await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();

            await page.click('[id$="north_america"]');
            await expect(page.locator('#single')).not.toBeFocused();
            await expect(page.locator('[id$="tree_level_1"]')).not.toBeVisible();

            await page.click('.label-placement-outer');
            await expect(page.locator('#single')).toBeFocused();
            await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();
            await expect(page.locator('[id$="north_america"] > div:first-child svg')).toBeVisible();

            await page.click('[id$="north_america"]');
            await expect(page.locator('#single')).not.toBeFocused();
            await expect(page.locator('[id$="tree_level_1"]')).not.toBeVisible();
            await expect(page.locator('[id$="north_america"] > div:first-child svg')).not.toBeVisible();

            await page.click('#single');
            await expect(page.locator('#single')).toBeFocused();
            await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();

            await page.type('#single', 'Париж');
            await expect(page.locator('#single')).toHaveValue('Париж');
            await expect(page.locator('[id$="tree_level_1"] li')).toHaveCount(1);

            await page.click('[id$="europe"]');
            await expect(page.locator('#single')).not.toBeFocused();
            await expect(page.locator('[id$="europe"]')).toHaveClass(/dropdown-item-is-active/);
            await expect(page.locator('[id$="tree_level_2"]')).toBeVisible();
            await expect(page.locator('[id$="tree_level_2"] li')).toHaveCount(1);

            await page.click('[id$="france"]');
            await expect(page.locator('[id$="france"]')).toHaveClass(/dropdown-item-is-active/);
            await expect(page.locator('[id$="tree_level_3"]')).toBeVisible();
            await expect(page.locator('[id$="tree_level_3"] li')).toHaveCount(1);

            await page.click('[id$="paris"]');
            await expect(page.locator('#single')).not.toBeFocused();
            await expect(page.locator('#single')).toHaveValue('Париж');
            await expect(page.locator('[id$="tree_level_1"]')).not.toBeVisible();
        });

        // test('multiple uncontrolled', async ({ mount, page }) => {
        //     await mount(
        //         <div style={{ width: '300px' }}>
        //             <Combobox id="multiple" multiple label="Label" placeholder="Placeholder" items={items} />
        //         </div>,
        //     );

        //     await page.click('#multiple');
        //     await expect(page.locator('#multiple')).toBeFocused();
        //     await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();

        //     await page.click('[id$="north_america"]');
        //     await expect(page.locator('#multiple')).not.toBeFocused();
        //     await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();
        //     await expect(page.locator('.has-chips')).toBeVisible();
        //     await expect(page.locator('.has-chips button')).toHaveCount(1);

        //     await page.click('.has-chips button');
        //     await expect(page.locator('#multiple')).not.toBeFocused();
        //     await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();
        //     await expect(page.locator('.has-chips')).not.toBeVisible();

        //     await page.click('[id$="south_america"] > div:first-child');
        //     await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();
        //     await expect(page.locator('.has-chips')).toBeAttached();
        //     await expect(page.locator('.has-chips button')).toHaveCount(6);

        //     await page.click('[id$="south_america"] > div:first-child');
        //     await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();
        //     await expect(page.locator('.has-chips')).not.toBeVisible();
        // });

        // test('multiple controlled', async ({ mount, page }) => {
        //     await mount(<ControlledCombobox />);

        //     await page.click('#multiple');
        //     await expect(page.locator('#multiple')).toBeFocused();
        //     await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();

        //     await page.click('[id$="north_america"]');
        //     await expect(page.locator('#multiple')).not.toBeFocused();
        //     await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();
        //     await expect(page.locator('.has-chips')).toBeVisible();
        //     await expect(page.locator('.has-chips button')).toHaveCount(1);

        //     await page.click('.has-chips button');
        //     await expect(page.locator('#multiple')).not.toBeFocused();
        //     await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();
        //     await expect(page.locator('.has-chips')).not.toBeVisible();

        //     await page.click('[id$="south_america"] > div:first-child');
        //     await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();
        //     await expect(page.locator('.has-chips')).toBeVisible();
        //     await expect(page.locator('.has-chips button')).toHaveCount(6);

        //     await page.click('[id$="south_america"] > div:first-child');
        //     await expect(page.locator('[id$="tree_level_1"]')).toBeVisible();
        //     await expect(page.locator('.has-chips')).not.toBeVisible();
        // });
    });
});
