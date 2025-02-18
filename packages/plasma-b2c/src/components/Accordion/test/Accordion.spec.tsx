import React from 'react';
import { test, expect } from '@salutejs/plasma-playwright';
import { PadMe, PlaywrightTestDecorator } from '@salutejs/plasma-playwright-utils';

import { Accordion, AccordionItem } from './component.export';

const sizes = ['xs', 's', 'm', 'l', 'h2', 'h3', 'h4', 'h5'] as const;

const title = 'Как оплатить заправку бонусами СберСпасибо?';
const body =
    'После указания деталей заправки нажмите кнопку «К оплате». Откроется окно оплаты, где вы сможете списать бонусы и оплатить ими до 99% стоимости топливa';

test.describe('Accordion', () => {
    test('simple', async ({ mount }) => {
        const component = await mount(
            <PlaywrightTestDecorator>
                <Accordion>
                    <AccordionItem title={title}>{body}</AccordionItem>
                </Accordion>
            </PlaywrightTestDecorator>,
        );

        await expect(component).toHaveScreenshot();
    });

    test('_view:clear', async ({ mount }) => {
        const component = await mount(
            <PlaywrightTestDecorator>
                <Accordion view="clear">
                    <AccordionItem title={title}>{body}</AccordionItem>
                    <AccordionItem title={title}>{body}</AccordionItem>
                </Accordion>
            </PlaywrightTestDecorator>,
        );

        await expect(component).toHaveScreenshot();
    });

    test('_size', async ({ mount }) => {
        const component = await mount(
            <PlaywrightTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Accordion size={size}>
                            <AccordionItem title={title}>{body}</AccordionItem>
                            <AccordionItem title={title}>{body}</AccordionItem>
                        </Accordion>
                        <PadMe />
                    </>
                ))}
            </PlaywrightTestDecorator>,
        );

        await expect(component).toHaveScreenshot();
    });

    test('_type', async ({ mount }) => {
        const component = await mount(
            <PlaywrightTestDecorator>
                <Accordion>
                    <AccordionItem type="arrow" title={title}>
                        {body}
                    </AccordionItem>
                    <AccordionItem type="sign" title={title}>
                        {body}
                    </AccordionItem>
                    <AccordionItem type="clear" title={title}>
                        {body}
                    </AccordionItem>
                </Accordion>
            </PlaywrightTestDecorator>,
        );

        await expect(component).toHaveScreenshot();
    });

    test('animation', async ({ page, mount }) => {
        const component = await mount(
            <PlaywrightTestDecorator>
                <Accordion>
                    <AccordionItem title={title}>{body}</AccordionItem>
                </Accordion>
            </PlaywrightTestDecorator>,
        );

        await page.locator('.accordion-root').click();
        await expect(component).toHaveScreenshot();
    });
});
