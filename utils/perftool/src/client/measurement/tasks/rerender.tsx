import React from 'react';
import assert from 'assert';

import { Task } from '../types';
import { render as reactRender } from '../../../utils/react';
import Deferred from '../../../utils/deferred';
import debounce from '../../../utils/debounce';
import MeasureLab from '../../../utils/MeasureLab';
import waitForIdle from '../../../utils/waitForIdle';
import { id as staticTaskStabilizerId } from '../../../stabilizers/staticTask';

type RerenderConfig = {
    renderWaitTimeout: number;
};

function noop() {}

const rerender: Task<number, RerenderConfig> = {
    id: 'rerender',
    isIdempotent: false,
    name: 'Rerender',
    aim: 'decrease',
    availableStabilizers: [staticTaskStabilizerId],
    defaultConfig: {
        renderWaitTimeout: 1000,
    },
    async run({ Subject, container, config }) {
        const task = new Deferred<number>();
        const renderFinish = new Deferred<void>();
        const debouncedFinish = debounce(task.resolve, config.renderWaitTimeout);
        const debouncedRenderFinish = debounce(renderFinish.resolve, config.renderWaitTimeout);
        let startTime = 0;
        let forceRender = noop;
        let isRendered = false;

        function measure(): void {
            if (!isRendered) {
                debouncedRenderFinish();
                return;
            }

            const result = performance.now() - startTime;
            debouncedFinish(result);
        }

        await reactRender(
            <MeasureLab
                Subject={Subject}
                onRender={measure}
                onMutation={measure}
                onForceRenderReady={(cb) => (forceRender = cb)}
            />,
            container,
        );

        await renderFinish.promise;

        await waitForIdle();

        isRendered = true;
        assert(forceRender !== noop);

        startTime = performance.now();
        forceRender();

        return task.promise;
    },
};

export default rerender;
