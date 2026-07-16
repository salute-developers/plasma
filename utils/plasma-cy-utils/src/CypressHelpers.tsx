import React from 'react';
import { mount as cyMount } from '@cypress/react';

import type { resourceOrOption } from './Portal';
import { CypressTestDecorator } from './CypressDecorator';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    export namespace Cypress {
        interface Chainable {
            waitForResources(...resources: resourceOrOption[]): Chainable;
            pressKey(key: string, currentElem?: string): Chainable;
            attachFile(
                fixture:
                    | string
                    | string[]
                    | { filePath?: string; fileContent?: Blob; fileName?: string; mimeType?: string }
                    | Array<{ filePath?: string; fileContent?: Blob; fileName?: string; mimeType?: string }>,
                processingOpts?: { subjectType?: 'input' | 'drag-n-drop'; force?: boolean; allowEmpty?: boolean },
            ): Chainable;
        }
    }
}

export const mount: typeof cyMount = (...args) => {
    const [jsx, opts = {}] = args;

    return cyMount(<CypressTestDecorator>{jsx}</CypressTestDecorator>, opts);
};
