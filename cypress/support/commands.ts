import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import 'cypress-file-upload';

const { absolute } = Cypress.spec;
const componentName = absolute.split('/').at(-2);
const baseSnapsDir = `${Cypress.env('snapshotsDir')}`;

const getSnapshotPath = () => {
    if (Cypress.env('hasSpecGroup')) {
        return `${baseSnapsDir}/components`;
    }

    if (Cypress.env('hasComponents')) {
        return `${baseSnapsDir}/components/${componentName}`;
    }

    if (['plasma-web', 'plasma-b2c'].includes(Cypress.env('package'))) {
        return baseSnapsDir;
    }

    return `${baseSnapsDir}/components`;
};

addMatchImageSnapshotCommand({
    customSnapshotsDir: getSnapshotPath(),
    failureThreshold: Cypress.env('threshold'),
    failureThresholdType: 'percent',
});

const { isPlainObject, last } = Cypress._;

/**
 * Adds command "cy.waitForResources(name1, name2, ...)"
 * that checks performance entries for resources that end with the given names.
 * This command will be available in every spec file.
 *
 * @example cy.waitForResources('base.css', 'app.css')
 *
 * You can pass additional options, like "timeout"
 *
 * @example cy.waitForResources('base.css', 'app.css', { timeout: 3000 })
 */
Cypress.Commands.add('waitForResources', (...args) => {
    let names;
    let options;

    if (isPlainObject(last(args))) {
        names = args.slice(0, args.length - 1);
        options = last(args);
    } else {
        names = args;
        options = {};
    }

    const timeout = options.timeout || Cypress.config('defaultCommandTimeout');

    cy.log(`Waiting for resources ${names.join(', ')}`);

    cy.window({ log: false }).then(
        // note that ".then" method has options first, callback second
        // https://on.cypress.io/then
        { timeout },
        (win) => {
            return new Cypress.Promise((resolve, reject) => {
                // flag set when we find all names
                let foundResources;

                // control how long we should try finding the resource
                // and if it is still not found. An explicit "reject"
                // allows us to show nice informative message

                const interval = setInterval(() => {
                    foundResources = names.every((name) => {
                        return win.performance.getEntriesByType('resource').find((item) => item.name.endsWith(name));
                    });

                    if (!foundResources) {
                        // some resource not found, will try again
                        return;
                    }

                    cy.log('Found all resources');
                    clearInterval(interval);
                    resolve();
                }, 100);

                setTimeout(() => {
                    if (foundResources) {
                        // nothing needs to be done, successfully found the resource
                        return;
                    }

                    clearInterval(interval);
                    reject(new Error(`Timed out waiting for resources ${names.join(', ')}`));
                }, timeout);
            });
        },
    );
});

export enum navigate {
    LEFT = '{leftarrow}',
    UP = '{uparrow}',
    RIGHT = '{rightarrow}',
    DOWN = '{downarrow}',
    ENTER = '{enter}',
}

type SendNavigatioActionParams = Partial<Cypress.TypeOptions> & {
    times?: number;
};

Cypress.Commands.add(
    'sendNavigateAction',
    { prevSubject: 'optional' },
    (subject: HTMLElement | void, dir: navigate, opts: SendNavigatioActionParams = {}) => {
        const { times = 1, ...typeOptions } = opts;
        const sequence: navigate[] = Array.isArray(dir) ? dir : Array(times).fill(dir);

        const options = {
            delay: 350, // анимация перемещения фокуса
            waitForAnimation: true,
            ...typeOptions,
        };

        const chainer = subject ? cy.wrap(subject, { log: false }) : cy.get('body');

        return sequence.reduce<Cypress.Chainable>((acc, key) => {
            return acc.type(key, options);
        }, chainer);
    },
);

Cypress.Commands.add(
    'triggerSpatNavEvent',
    { prevSubject: 'element' },
    (subject: HTMLElement, dir: 'left' | 'right' | 'up' | 'down', times = 1) => {
        return Array({ length: times }).reduce<Cypress.Chainable>((acc) => {
            return acc.trigger('navbeforefocus', {
                eventConstructor: 'CustomEvent',
                detail: { dir },
            });
        }, cy.wrap(subject));
    },
);

Cypress.Commands.add('mockImage', (selector: string, path: string) => {
    cy.fixture(path, 'base64').then((src) => {
        cy.get(selector).invoke('attr', 'src', `data:image/png;base64, ${src}`);
    });
});

Cypress.Commands.add('mockBackgroundImage', (selector: string, path: string) => {
    cy.fixture(path, 'base64').then((src) => {
        cy.get(selector).invoke('css', 'background-image', `url(data:image/jpg;base64,${src})`);
    });
});

Cypress.Commands.add('waitForFocusElement', { prevSubject: 'element' }, (subject: HTMLElement, timeout = 300) => {
    const specsUa = Cypress.config('userAgent');

    if (specsUa === 'sberbox') {
        cy.wrap(subject, { timeout }).should('be.visible').should('be.focused');
    }
});
