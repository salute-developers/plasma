// Commit counts are memoized by run while traversing measurements.
/* eslint-disable no-await-in-loop */

export async function enrichSpecFiles(history, countFiles) {
    const runs = new Map(history.runs.map((run) => [run.id, run]));
    const measurements = [];
    const cached = new Map();
    for (const measurement of history.measurements) {
        if (measurement.packageName !== 'plasma-b2c') {
            measurements.push(measurement);
            // eslint-disable-next-line no-continue
            continue;
        }
        if (!cached.has(measurement.runId)) {
            cached.set(measurement.runId, await countFiles(runs.get(measurement.runId), measurement));
        }
        const specFiles = cached.get(measurement.runId);
        measurements.push(specFiles ? { ...measurement, specFiles } : measurement);
    }
    return { ...history, measurements };
}
