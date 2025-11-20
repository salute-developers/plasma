import type { Formula } from '../types';

export const formulas: Formula = {
    stroke: {
        solid: {
            light: [
                {
                    condition: {
                        lightness: [0, 9],
                        hue: [0, 360],
                        saturation: [0, 24],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 56,
                        active: (l: number) => l + 0,
                    },
                },
                {
                    condition: {
                        lightness: [0, 9],
                        hue: [0, 360],
                        saturation: [25, 79],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 24,
                        active: (l: number) => l + 12,
                    },
                },
                {
                    condition: {
                        lightness: [0, 9],
                        hue: [0, 360],
                        saturation: [80, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 16,
                        active: (l: number) => l + 8,
                    },
                },
                {
                    condition: {
                        lightness: [10, 24],
                        hue: [0, 360],
                        saturation: [0, 24],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 48,
                        active: (l: number) => l + 20,
                    },
                },
                {
                    condition: {
                        lightness: [10, 24],
                        hue: [0, 360],
                        saturation: [25, 79],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 20,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [10, 24],
                        hue: [0, 360],
                        saturation: [80, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 12,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [25, 39],
                        hue: [0, 360],
                        saturation: [0, 24],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 32,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [25, 39],
                        hue: [0, 360],
                        saturation: [25, 79],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 14,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [25, 39],
                        hue: [0, 199],
                        saturation: [80, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 10,
                        active: (l: number) => l - 8,
                    },
                },
                {
                    condition: {
                        lightness: [25, 39],
                        hue: [200, 299],
                        saturation: [80, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 14,
                        active: (l: number) => l - 8,
                    },
                },
                {
                    condition: {
                        lightness: [25, 39],
                        hue: [300, 360],
                        saturation: [80, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 10,
                        active: (l: number) => l - 8,
                    },
                },
                {
                    condition: {
                        lightness: [40, 54],
                        hue: [0, 360],
                        saturation: [0, 9],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 20,
                        active: (l: number) => l - 8,
                    },
                },
                {
                    condition: {
                        lightness: [40, 54],
                        hue: [0, 360],
                        saturation: [10, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 20,
                        active: (l: number) => l - 6,
                    },
                },
                {
                    condition: {
                        lightness: [55, 69],
                        hue: [0, 360],
                        saturation: [0, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 16,
                        active: (l: number) => l - 8,
                    },
                },
                {
                    condition: {
                        lightness: [70, 84],
                        hue: [0, 360],
                        saturation: [0, 24],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 16,
                        active: (l: number) => l - 14,
                    },
                },
                {
                    condition: {
                        lightness: [70, 84],
                        hue: [0, 360],
                        saturation: [25, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 8,
                        active: (l: number) => l - 8,
                    },
                },
                {
                    condition: {
                        lightness: [85, 100],
                        hue: [0, 360],
                        saturation: [0, 25],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l - 20,
                        active: (l: number) => l - 10,
                    },
                },
                {
                    condition: {
                        lightness: [85, 100],
                        hue: [0, 360],
                        saturation: [25, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l - 6,
                        active: (l: number) => l - 10,
                    },
                },
            ],
            dark: [
                {
                    condition: {
                        lightness: [0, 9],
                        hue: [0, 360],
                        saturation: [0, 24],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l) => l + 24,
                        active: (l: number) => l + 12,
                    },
                },
                {
                    condition: {
                        lightness: [0, 9],
                        hue: [0, 360],
                        saturation: [25, 79],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 8,
                        active: (l: number) => l + 4,
                    },
                },
                {
                    condition: {
                        lightness: [0, 9],
                        hue: [0, 360],
                        saturation: [80, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l + 2,
                    },
                },
                {
                    condition: {
                        lightness: [10, 24],
                        hue: [0, 360],
                        saturation: [0, 24],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 18,
                        active: (l: number) => l - 6,
                    },
                },
                {
                    condition: {
                        lightness: [10, 24],
                        hue: [0, 360],
                        saturation: [25, 79],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 16,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [10, 24],
                        hue: [0, 360],
                        saturation: [80, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 12,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [25, 40],
                        hue: [0, 360],
                        saturation: [0, 24],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 36,
                        active: (l: number) => l - 10,
                    },
                },
                {
                    condition: {
                        lightness: [25, 40],
                        hue: [0, 360],
                        saturation: [25, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 12,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [40, 49],
                        hue: [0, 360],
                        saturation: [0, 24],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 36,
                        active: (l: number) => l - 10,
                    },
                },
                {
                    condition: {
                        lightness: [40, 49],
                        hue: [0, 360],
                        saturation: [25, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 20,
                        active: (l: number) => l - 6,
                    },
                },
                {
                    condition: {
                        lightness: [50, 79],
                        hue: [0, 360],
                        saturation: [0, 24],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: () => 100,
                        active: (l: number) => l - 20,
                    },
                },
                {
                    condition: {
                        lightness: [50, 79],
                        hue: [0, 360],
                        saturation: [25, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 16,
                        active: (l: number) => l - 6,
                    },
                },
                {
                    condition: {
                        lightness: [80, 94],
                        hue: [0, 360],
                        saturation: [0, 24],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l - 32,
                        active: (l: number) => l - 48,
                    },
                },
                {
                    condition: {
                        lightness: [80, 94],
                        hue: [0, 360],
                        saturation: [25, 59],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l - 20,
                        active: (l: number) => l - 32,
                    },
                },
                {
                    condition: {
                        lightness: [80, 94],
                        hue: [0, 360],
                        saturation: [60, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l - 16,
                        active: (l: number) => l - 24,
                    },
                },
                {
                    condition: {
                        lightness: [95, 100],
                        hue: [0, 360],
                        saturation: [0, 24],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l - 48,
                        active: (l: number) => l - 60,
                    },
                },
                {
                    condition: {
                        lightness: [95, 100],
                        hue: [0, 360],
                        saturation: [25, 59],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l - 16,
                        active: (l: number) => l - 20,
                    },
                },
            ],
        },
        transparent: {
            light: [
                {
                    condition: {
                        alpha: [0, 0],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: () => 0,
                        active: () => 0,
                    },
                },
                {
                    condition: {
                        alpha: [0.01, 0.14],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a) => a + 0.2,
                        active: (a: number) => a + 0.1,
                    },
                },
                {
                    condition: {
                        alpha: [0.15, 0.5],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a * 0.6,
                        active: (a: number) => a * 1.6,
                    },
                },
                {
                    condition: {
                        alpha: [0.5, 0.99],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a * 0.5,
                        active: () => 1,
                    },
                },
            ],
            dark: [
                {
                    condition: {
                        alpha: [0, 0],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: () => 0,
                        active: () => 0,
                    },
                },
                {
                    condition: {
                        alpha: [0.01, 0.09],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a + 0.1,
                        active: (a: number) => a + 0.2,
                    },
                },
                {
                    condition: {
                        alpha: [0.1, 0.29],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a * 2.5,
                        active: (a: number) => a * 0.6,
                    },
                },
                {
                    condition: {
                        alpha: [0.3, 0.49],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a * 2,
                        active: (a: number) => a * 0.6,
                    },
                },
                {
                    condition: {
                        alpha: [0.5, 0.79],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: () => 1,
                        active: (a: number) => a * 0.5,
                    },
                },
                {
                    condition: {
                        alpha: [0.8, 0.99],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a * 0.6,
                        active: (a: number) => a * 0.4,
                    },
                },
            ],
        },
    },
    fill: {
        solid: {
            light: [
                {
                    condition: {
                        lightness: [0, 0],
                        hue: [0, 360],
                        saturation: [0, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l,
                        active: (l: number) => l,
                    },
                },
                {
                    condition: {
                        lightness: [1, 4],
                        hue: [0, 360],
                        saturation: [0, 9],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 12,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [1, 4],
                        hue: [0, 360],
                        saturation: [10, 79],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [1, 4],
                        hue: [0, 360],
                        saturation: [80, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [5, 9],
                        hue: [0, 360],
                        saturation: [0, 9],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 12,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [5, 9],
                        hue: [0, 360],
                        saturation: [10, 49],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [5, 9],
                        hue: [0, 360],
                        saturation: [50, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [10, 49],
                        hue: [0, 199],
                        saturation: [0, 9],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 8,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [10, 49],
                        hue: [0, 199],
                        saturation: [10, 69],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [10, 49],
                        hue: [0, 199],
                        saturation: [70, 79],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [10, 49],
                        hue: [0, 199],
                        saturation: [80, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [10, 49],
                        hue: [200, 299],
                        saturation: [0, 9],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 8,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [10, 49],
                        hue: [200, 299],
                        saturation: [10, 69],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [10, 49],
                        hue: [200, 299],
                        saturation: [70, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [10, 49],
                        hue: [300, 360],
                        saturation: [0, 9],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 8,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [10, 49],
                        hue: [300, 360],
                        saturation: [10, 69],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [10, 49],
                        hue: [300, 360],
                        saturation: [70, 79],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [10, 49],
                        hue: [300, 360],
                        saturation: [80, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [0, 59],
                        saturation: [0, 9],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [0, 59],
                        saturation: [10, 69],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [0, 59],
                        saturation: [70, 89],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [0, 59],
                        saturation: [90, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 8,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [60, 179],
                        saturation: [0, 9],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [60, 179],
                        saturation: [10, 69],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [60, 179],
                        saturation: [70, 89],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [60, 179],
                        saturation: [90, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 10,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [180, 360],
                        saturation: [0, 9],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [180, 360],
                        saturation: [10, 69],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [180, 360],
                        saturation: [70, 89],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [180, 360],
                        saturation: [90, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 8,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [70, 89],
                        hue: [0, 360],
                        saturation: [0, 9],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l - 2,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [70, 89],
                        hue: [0, 360],
                        saturation: [10, 79],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l - 2,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [70, 89],
                        hue: [0, 360],
                        saturation: [80, 89],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l - 2,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [70, 89],
                        hue: [0, 360],
                        saturation: [90, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l - 2,
                        active: (l: number) => l - 4,
                    },
                },
                {
                    condition: {
                        lightness: [90, 94],
                        hue: [0, 360],
                        saturation: [0, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l - 2,
                        active: (l: number) => l - 3,
                    },
                },
                {
                    condition: {
                        lightness: [95, 99],
                        hue: [0, 360],
                        saturation: [0, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l - 1,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [100, 100],
                        hue: [0, 360],
                        saturation: [0, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l,
                        active: (l: number) => l,
                    },
                },
            ],
            dark: [
                {
                    condition: {
                        lightness: [0, 0],
                        hue: [0, 360],
                        saturation: [0, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l,
                        active: (l: number) => l,
                    },
                },
                {
                    condition: {
                        lightness: [1, 9],
                        hue: [0, 360],
                        saturation: [0, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 2,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [10, 49],
                        hue: [0, 360],
                        saturation: [0, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [0, 59],
                        saturation: [0, 79],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [0, 59],
                        saturation: [80, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [60, 179],
                        saturation: [0, 79],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [60, 179],
                        saturation: [80, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 8,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [180, 360],
                        saturation: [0, 79],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [50, 69],
                        hue: [180, 360],
                        saturation: [80, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 6,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [70, 89],
                        hue: [0, 360],
                        saturation: [0, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [90, 94],
                        hue: [0, 360],
                        saturation: [0, 49],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 4,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [90, 94],
                        hue: [0, 360],
                        saturation: [50, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 2,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [95, 99],
                        hue: [0, 360],
                        saturation: [0, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l + 2,
                        active: (l: number) => l - 2,
                    },
                },
                {
                    condition: {
                        lightness: [100, 100],
                        hue: [0, 360],
                        saturation: [0, 100],
                    },
                    operation: {
                        brightness: (l: number) => l + 6,
                        hover: (l: number) => l,
                        active: (l: number) => l,
                    },
                },
            ],
        },
        transparent: {
            light: [
                {
                    condition: {
                        alpha: [0, 0],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: () => 0,
                        active: () => 0,
                    },
                },
                {
                    condition: {
                        alpha: [0.01, 0.04],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a + 0.01,
                        active: (a: number) => a + 0.02,
                    },
                },
                {
                    condition: {
                        alpha: [0.05, 0.09],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a + 0.02,
                        active: (a: number) => a + 0.04,
                    },
                },
                {
                    condition: {
                        alpha: [0.1, 0.74],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a + 0.06,
                        active: (a: number) => a + 0.08,
                    },
                },
                {
                    condition: {
                        alpha: [0.75, 0.99],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a - 0.1,
                        active: (a: number) => a + 0.02,
                    },
                },
            ],
            dark: [
                {
                    condition: {
                        alpha: [0, 0],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: () => 0,
                        active: () => 0,
                    },
                },
                {
                    condition: {
                        alpha: [0.01, 0.04],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a + 0.04,
                        active: (a: number) => a - 0.02,
                    },
                },
                {
                    condition: {
                        alpha: [0.05, 0.09],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a + 0.06,
                        active: (a: number) => a - 0.02,
                    },
                },
                {
                    condition: {
                        alpha: [0.1, 0.94],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a + 0.12,
                        active: (a: number) => a - 0.06,
                    },
                },
                {
                    condition: {
                        alpha: [0.95, 0.99],
                    },
                    operation: {
                        brightness: (a: number) => a,
                        hover: (a: number) => a + 0.08,
                        active: (a: number) => a - 0.04,
                    },
                },
            ],
        },
    },
};
