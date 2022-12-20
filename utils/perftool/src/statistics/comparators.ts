import assert from 'assert';

import { CompareResult, MetricResultWithError, SignificanceRank, SimpleMetricResult } from './types';

export function compareMetricWithError(current: MetricResultWithError, previous: MetricResultWithError): CompareResult {
    assert(Array.isArray(current) && Array.isArray(previous));

    const [currentVal, currentError] = current;
    const [previousVal, previousError] = previous;

    const difference = currentVal - previousVal;
    const absolute = Math.abs(difference);
    const percentage = +((100 * difference) / previousVal).toFixed(2);
    let significanceRank: SignificanceRank;

    if (absolute > currentError + previousError) {
        significanceRank = 'high';
    } else if (absolute > currentError && absolute > previousError) {
        significanceRank = 'medium';
    } else {
        significanceRank = 'low';
    }

    return {
        difference,
        percentage,
        significanceRank,
    };
}

export function compareSimpleMetricResults(current: SimpleMetricResult, previous: SimpleMetricResult): CompareResult {
    assert(typeof current === 'number' && typeof previous === 'number');

    const difference = current - previous;
    const percentage = +((100 * difference) / previous).toFixed(2);

    return {
        difference,
        percentage,
    };
}
