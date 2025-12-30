import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['./tests/**/*'],
        typecheck: {
            enabled: true,
            include: ['./tests/**/*'],
            ignoreSourceErrors: true,
        },
        environment: 'node',
    },
});
