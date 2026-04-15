import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        typecheck: {
            enabled: true,
            only: true,
            include: ['./tests/**/*'],
            ignoreSourceErrors: true,
        },
    },
});
