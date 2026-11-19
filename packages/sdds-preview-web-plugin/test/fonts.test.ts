import { describe, expect, it, vi } from 'vitest';

import { waitForFonts } from '../src/fonts';
import type { ResolvedFontLoad } from '../src/protocol';

const font = (weight: number): ResolvedFontLoad => ({
    tokenId: 'fontFamily.body',
    family: '"fontFamily.body"',
    weight,
    style: 'normal',
    allowFallback: true,
});

const fontSet = (load: (font: string) => Promise<Array<{ status: string }>>) => (({ load } as unknown) as FontFaceSet);

describe('waitForFonts', () => {
    it('запрашивает каждое начертание и не возвращает загруженные', async () => {
        const load = vi.fn().mockResolvedValue([{ status: 'loaded' }]);

        await expect(waitForFonts([font(400), font(600)], fontSet(load))).resolves.toEqual([]);
        expect(load.mock.calls).toEqual([['normal 400 16px "fontFamily.body"'], ['normal 600 16px "fontFamily.body"']]);
    });

    it('возвращает начертание с ошибкой загрузки', async () => {
        const load = vi.fn((shorthand: string) =>
            shorthand.includes('600') ? Promise.reject(new Error('network')) : Promise.resolve([{ status: 'loaded' }]),
        );

        await expect(waitForFonts([font(400), font(600)], fontSet(load))).resolves.toEqual([font(600)]);
    });

    it('считает недоступным начертание со статусом error и пустой результат', async () => {
        await expect(
            waitForFonts(
                [font(400)],
                fontSet(async () => [{ status: 'error' }]),
            ),
        ).resolves.toEqual([font(400)]);
        await expect(
            waitForFonts(
                [font(400)],
                fontSet(async () => []),
            ),
        ).resolves.toEqual([font(400)]);
    });

    it('возвращает незавершённые загрузки по истечении предела', async () => {
        vi.useFakeTimers();
        const load = vi.fn((shorthand: string) =>
            shorthand.includes('600') ? new Promise<never>(() => undefined) : Promise.resolve([{ status: 'loaded' }]),
        );

        const result = waitForFonts([font(400), font(600)], fontSet(load), 5_000);
        await vi.advanceTimersByTimeAsync(5_000);

        await expect(result).resolves.toEqual([font(600)]);
        vi.useRealTimers();
    });

    it('не ждёт без document.fonts и без начертаний', async () => {
        const load = vi.fn();

        await expect(waitForFonts([font(400)], undefined)).resolves.toEqual([]);
        await expect(waitForFonts([], fontSet(load))).resolves.toEqual([]);
        expect(load).not.toHaveBeenCalled();
    });
});
