import { describe, expect, it } from 'vitest';

import { getCalendarContainerSize, hasCustomCalendarContainerSize } from './getCalendarContainerSize';

describe('getCalendarContainerSize', () => {
    it('returns undefined for an empty or zero size', () => {
        expect(getCalendarContainerSize()).toBeUndefined();
        expect(getCalendarContainerSize(0)).toBeUndefined();
        expect(getCalendarContainerSize('0')).toBeUndefined();
        expect(getCalendarContainerSize('0rem')).toBeUndefined();
    });

    it('returns 100% when stretched without a custom size', () => {
        expect(getCalendarContainerSize(0, true)).toBe('100%');
        expect(getCalendarContainerSize(undefined, true)).toBe('100%');
    });

    it('prefers a custom size over stretched and treats numbers as rem', () => {
        expect(getCalendarContainerSize(20, true)).toBe('20rem');
        expect(getCalendarContainerSize('20px', true)).toBe('20px');
    });
});

describe('hasCustomCalendarContainerSize', () => {
    it('does not treat a zero size as custom', () => {
        expect(hasCustomCalendarContainerSize(0)).toBe(false);
        expect(hasCustomCalendarContainerSize('0rem')).toBe(false);
        expect(hasCustomCalendarContainerSize('20px')).toBe(true);
    });
});
