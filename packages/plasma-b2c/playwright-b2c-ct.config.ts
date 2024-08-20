import { createPlaywrightConfig } from '../../playwright-base-ct.config';

process.env.PACKAGE = 'plasma-b2c';

export default createPlaywrightConfig({
    testDir: './src',
    snapshotsDir: 'playwright/snapshots/b2c',
});
