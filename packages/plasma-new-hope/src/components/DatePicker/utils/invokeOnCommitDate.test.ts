import { describe, expect, it, vi } from 'vitest';

import { invokeOnCommitDate } from './invokeOnCommitDate';

describe('invokeOnCommitDate', () => {
    it('calls the callback with the value and formatted values', () => {
        const callback = vi.fn();
        const originalDate = new Date(2023, 5, 14);
        const formattedValues = {
            error: false,
            success: true,
            dateInfo: undefined,
            originalDate,
            isoDate: originalDate.toISOString(),
        };

        invokeOnCommitDate({ callback, value: '14.06.2023', formattedValues });

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith('14.06.2023', formattedValues);
    });
});
