import { mount as cyMount } from '@cypress/react';
import type { resourceOrOption } from './Portal';
declare global {
    export namespace Cypress {
        interface Chainable {
            waitForResources(...resources: resourceOrOption[]): Chainable;
        }
    }
}
export declare const mountLegacyMode: typeof cyMount;
