import { getSortableSensorOptions } from './sortableCompat';

describe('PreviewGallery sortableCompat', () => {
    describe('getSortableSensorOptions', () => {
        it('Should use distance activation when pressDelay is undefined', () => {
            expect(getSortableSensorOptions(4)).toEqual({
                mouse: {
                    activationConstraint: { distance: 4 },
                },
                touch: {
                    activationConstraint: { delay: 250, tolerance: 5 },
                },
            });
        });

        it('Should use delay activation when pressDelay is zero', () => {
            expect(getSortableSensorOptions(1, 0)).toEqual({
                mouse: {
                    activationConstraint: { delay: 0, tolerance: 5 },
                },
                touch: {
                    activationConstraint: { delay: 0, tolerance: 5 },
                },
            });
        });
    });
});
