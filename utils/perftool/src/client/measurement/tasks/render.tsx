import React from 'react';

import { Task } from '../types';
import { render as reactRender } from '../../../utils/react';
import Deferred from '../../../utils/deferred';
import debounce from '../../../utils/debounce';
import MeasureLab from '../../../utils/MeasureLab';

type RenderConfig = {
    renderWaitTimeout: number;
};

const render: Task<number, RenderConfig> = {
    id: 'render',
    isIdempotent: false,
    aim: 'decrease',
    name: 'Initial render',
    defaultConfig: {
        renderWaitTimeout: 1000,
    },
    async run({ Subject, container, config }) {
        const task = new Deferred<number>();
        const debouncedFinish = debounce(task.resolve, config.renderWaitTimeout);
        let startTime = 0;

        function measure(): void {
            const result = performance.now() - startTime;
            debouncedFinish(result);
        }

        startTime = performance.now();
        await reactRender(<MeasureLab Subject={Subject} onRender={measure} onMutation={measure} />, container);

        return task.promise;
    },
};

export default render;
