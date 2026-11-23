import { describe, expect, it } from 'vitest';

import { viewContainerVariables } from '../src/stories/ViewContainer.story';

const names = [
    '--text-primary',
    '--on-dark-text-primary',
    '--on-light-text-primary',
    '--dark-background-primary',
    '--light-background-primary',
    '--dark-surface-solid',
];

describe('viewContainerVariables', () => {
    it('onDark берёт свои переменные из on-dark/dark, inverse — из on-light/light, как генератор темы', () => {
        expect(viewContainerVariables(names, 'onDark')).toEqual({
            '--text-primary': 'var(--on-dark-text-primary)',
            '--inverse-text-primary': 'var(--on-light-text-primary)',
            '--background-primary': 'var(--dark-background-primary)',
            '--inverse-background-primary': 'var(--light-background-primary)',
        });
    });

    it('onLight зеркален onDark', () => {
        expect(viewContainerVariables(names, 'onLight')).toEqual({
            '--text-primary': 'var(--on-light-text-primary)',
            '--inverse-text-primary': 'var(--on-dark-text-primary)',
            '--background-primary': 'var(--light-background-primary)',
            '--inverse-background-primary': 'var(--dark-background-primary)',
        });
    });
});
