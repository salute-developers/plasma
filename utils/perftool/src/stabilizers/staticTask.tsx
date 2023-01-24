import React from 'react';
import assert from 'assert';

const Component = () => (
    <div style={{ border: '1px black solid' }}>
        {[...Array(100)].map(() => (
            <div style={{ width: 10, height: 10, border: '1px black solid' }} />
        ))}
    </div>
);

export const id = 'staticTask';

export function overrideMetric<T extends number | [number, number]>(staticTaskResult: T, result: T): T {
    if (Array.isArray(result)) {
        assert(Array.isArray(staticTaskResult));

        const denominator = staticTaskResult[0] ** 2 - staticTaskResult[1] ** 2;
        if (denominator === 0) {
            return result;
        }

        const value = (result[0] * staticTaskResult[0] + result[1] * staticTaskResult[1]) / denominator;
        const error = (result[0] * staticTaskResult[1] + staticTaskResult[0] * result[1]) / denominator;

        return [value, error] as T;
    }

    assert(typeof staticTaskResult === 'number' && typeof result === 'number');

    if (staticTaskResult === 0) {
        return result;
    }

    return (result / staticTaskResult) as T;
}

export const subject = {
    id,
    Component,
};
