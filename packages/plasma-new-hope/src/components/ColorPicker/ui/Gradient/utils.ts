// --- Helpers ---

export const getDegreeRightOffset = (degrees: number): number => {
    if (degrees > 99) return 0;
    if (degrees < 10) return 7;
    return 3;
};

export const makeKeyHandler = (handler: VoidFunction) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') handler();
};
