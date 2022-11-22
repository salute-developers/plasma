/// <reference types="cypress" />
import type { navigate } from './commands';

declare global {
    export namespace Cypress {
        interface Chainable {
            /**
             * @param dir {navigate | navigate[]} Эвент который нужно вызвать
             * @param opts {Patial<Cypress.TypeOptions> & { times?: number }}
             */

            sendNavigateAction(
                dir: navigate | navigate[],
                opts?: Partial<Cypress.TypeOptions> & {
                    times?: number;
                },
            ): Chainable;

            triggerSpatNavEvent(dir: 'left' | 'right' | 'up' | 'down', times?: number): Chainable<HTMLElement>;
            mockImage(selector: string, path: string): Chainable;
            mockBackgroundImage(selector: string, path: string): Chainable;
            /**
             * Для `userAgent == 'sberbox'` ждем фокуса на элементе
             * @param timeout {number?}
             */
            waitForFocusElement(timeout?: number): Chainable<HTMLElement>;
            waitForResources(...resources: resourceOrOption[]): Chainable;
        }
    }
}

export type resourceOrOption =
    | string
    | {
          timeout?: number;
      };

export { navigate };
