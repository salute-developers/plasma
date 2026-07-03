import { mount as cyMount } from '@cypress/react';
import type { resourceOrOption } from './Portal';
declare global {
    export namespace Cypress {
        interface Chainable {
            waitForResources(...resources: resourceOrOption[]): Chainable;
            pressKey(key: string, currentElem?: string): Chainable;
            attachFile(fixture: string | string[] | {
                filePath?: string;
                fileContent?: Blob;
                fileName?: string;
                mimeType?: string;
            } | Array<{
                filePath?: string;
                fileContent?: Blob;
                fileName?: string;
                mimeType?: string;
            }>, processingOpts?: {
                subjectType?: 'input' | 'drag-n-drop';
                force?: boolean;
                allowEmpty?: boolean;
            }): Chainable;
        }
    }
}
export declare const mount: typeof cyMount;
export declare const mountLegacyMode: typeof cyMount;
