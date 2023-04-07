/* eslint-disable @typescript-eslint/ban-ts-comment, no-underscore-dangle */
// @ts-ignore
import _package from '@pkg';

declare global {
    interface Window {
        __PLASMA_INFO__: {
            [k: string]: {
                version: string;
                entities: string[];
            };
        };
    }
}

export const collectPackageInfo = (entityName: string): void => {
    if (typeof window === 'undefined') {
        return;
    }

    const { name, version } = _package;

    if (!window.__PLASMA_INFO__) {
        window.__PLASMA_INFO__ = {};
    }

    if (!window.__PLASMA_INFO__[name]) {
        window.__PLASMA_INFO__[name] = {
            version,
            entities: [entityName],
        };
        return;
    }

    window.__PLASMA_INFO__[name].entities.push(entityName);
};
