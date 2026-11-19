import type { CSSProperties } from 'react';
import { describe, expect, it } from 'vitest';

import { getTrackSegments } from '../../utils/getTrackSegments';

const getSegments = (cutValues: number[], value = 50, isVertical = false) =>
    getTrackSegments({ min: 0, max: 100, value, cutValues, isVertical });

describe('getTrackSegments', () => {
    it('sorts cuts, ignores duplicates and out-of-range values without mutating the input', () => {
        const cuts = [75, -10, 25, 75, 110, 25];
        const original = [...cuts];
        const result = getSegments(cuts);

        expect(result).toEqual(getSegments([25, 75]));
        expect(result.trackSegments).toHaveLength(3);
        expect(cuts).toEqual(original);
    });

    it('computes segment positions relative to min and the range length', () => {
        const result = getTrackSegments({ min: 10, max: 210, value: 110, cutValues: [60, 160], isVertical: false });

        expect(result).toEqual(getSegments([25, 75]));
    });

    it('keeps a continuous track and progress when there are no interior cuts', () => {
        const result = getSegments([-10, 110]);

        expect(result).toEqual(getSegments([]));
        expect(result.trackSegments).toHaveLength(1);
        expect(result.progressSegments).toHaveLength(1);
    });

    it('splits the progress only at cuts before the current value', () => {
        const result = getSegments([25, 50, 75]);

        expect(result.trackSegments).toHaveLength(4);
        expect(result.progressSegments).toHaveLength(2);
    });

    it('does not change the filled segments when an unfilled cut moves', () => {
        const original = getSegments([25, 75]);
        const changed = getSegments([25, 90]);

        expect(changed.progressSegments).toEqual(original.progressSegments);
        expect(changed.trackSegments).not.toEqual(original.trackSegments);
    });

    it('uses edge separators for gaps without creating extra segments', () => {
        const withoutEdges = getSegments([25, 75]);
        const withEdges = getSegments([0, 25, 75, 100]);

        expect(withEdges.trackSegments).toHaveLength(withoutEdges.trackSegments.length);
        expect(withEdges.progressSegments).toHaveLength(withoutEdges.progressSegments.length);
        expect(withEdges.trackSegments).not.toEqual(withoutEdges.trackSegments);
    });

    it.each([false, true])('fills the entire track at max, vertical=%s', (isVertical) => {
        const result = getSegments([0, 25, 75, 100], 100, isVertical);

        expect(result.progressSegments).toEqual(result.trackSegments);
    });

    it('preserves the segment geometry when switching to the vertical axis', () => {
        const horizontal = getSegments([0, 25, 75, 100]);
        const vertical = getSegments([0, 25, 75, 100], 50, true);
        const toVertical = ({ left, width }: CSSProperties) => ({ bottom: left, height: width });

        expect(vertical.trackSegments).toEqual(horizontal.trackSegments.map(toVertical));
        expect(vertical.progressSegments).toEqual(horizontal.progressSegments.map(toVertical));
    });
});
