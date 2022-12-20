// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import jstat from 'jstat';

import { compareMetricWithError } from './comparators';
import { Metric, MetricResultWithError } from './types';

const { jStat } = jstat;

const median: Metric<MetricResultWithError> = {
    id: 'median',
    name: 'Median',
    compare: compareMetricWithError,
    compute: (observations) => {
        const result = jStat.median(observations);
        const error = jStat.normalci(result, 0.01, observations)[1] - result;

        return [result, error];
    },
};

const mean: Metric<MetricResultWithError> = {
    id: 'mean',
    name: 'Mean',
    compare: compareMetricWithError,
    compute: (observations) => {
        const result = jStat.mean(observations);
        const error = jStat.normalci(result, 0.01, observations)[1] - result;

        return [result, error];
    },
};

export default [median, mean];
