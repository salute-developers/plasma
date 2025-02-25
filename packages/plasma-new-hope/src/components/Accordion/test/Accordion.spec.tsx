import React from 'react';
import { test, expect } from '@salutejs/plasma-playwright';

import { Accordion, AccordionItem } from './component.export';

const title = 'Как оплатить заправку бонусами СберСпасибо?';
const body =
    'После указания деталей заправки нажмите кнопку «К оплате». Откроется окно оплаты, где вы сможете списать бонусы и оплатить ими до 99% стоимости топливa';

test.describe('Accordion', () => {
    test(' from bew hope', async ({ mount }) => {
        const component = await mount(
            <>
                <h1>TEST FROM NEW-HOPE</h1>
                <Accordion>
                    <AccordionItem title={title}>{body}</AccordionItem>
                </Accordion>
            </>,
        );

        await expect(component).toHaveScreenshot();
    });
});
