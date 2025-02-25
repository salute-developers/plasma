import React from 'react';
import { beforeMount } from '@playwright/experimental-ct-react/hooks';

import { ThemeDecorator } from './ThemeDecorator';

beforeMount(async ({ App }) => {
    return (
        <ThemeDecorator>
            <App />
        </ThemeDecorator>
    );
});
