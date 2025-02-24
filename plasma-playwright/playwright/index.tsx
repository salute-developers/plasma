import React from 'react';
import { beforeMount } from '@playwright/experimental-ct-react/hooks';

import { PlaywrightTestDecorator } from './ThemeDecorator';

beforeMount(async ({ App }) => {
    return (
        <PlaywrightTestDecorator>
            <App />
        </PlaywrightTestDecorator>
    );
});
