/** Keep Chromium screenshots small while allowing tests to use larger viewports. */
export const resizeBrowserWindowBeforeScreenshots = () => {
    if (Cypress.browser.family !== 'chromium' || Cypress.browser.name === 'electron') {
        return;
    }

    let viewport = {
        viewportWidth: Cypress.config('viewportWidth'),
        viewportHeight: Cypress.config('viewportHeight'),
    };
    let browserWindow: { windowId: number; bounds: { width: number; height: number } } | undefined;

    Cypress.on('viewport:changed', (nextViewport) => {
        viewport = nextViewport;
    });

    Cypress.Commands.overwrite('screenshot', (originalFn, ...args) => {
        const width = Math.max(1280, viewport.viewportWidth);
        // Reserve space for Chromium's toolbar above the page in headed and headless runs.
        const height = Math.max(900, viewport.viewportHeight + 100);

        if (browserWindow?.bounds.width === width && browserWindow.bounds.height === height) {
            return originalFn(...args);
        }

        return cy
            .then(() => {
                const getWindow = browserWindow
                    ? Cypress.Promise.resolve(browserWindow)
                    : Cypress.automation('remote:debugger:protocol', { command: 'Browser.getWindowForTarget' });

                return getWindow.then((currentWindow) => {
                    browserWindow = currentWindow;
                    if (currentWindow.bounds.width === width && currentWindow.bounds.height === height) {
                        return;
                    }

                    return Cypress.automation('remote:debugger:protocol', {
                        command: 'Browser.setWindowBounds',
                        params: { windowId: currentWindow.windowId, bounds: { width, height } },
                    }).then(() => {
                        browserWindow.bounds = { width, height };
                        // Wait for the resized page to paint before Cypress starts taking the screenshot.
                        return new Cypress.Promise<void>((resolve) => {
                            window.top.requestAnimationFrame(() => window.top.requestAnimationFrame(() => resolve()));
                        });
                    });
                });
            })
            .then(() => originalFn(...args));
    });
};
