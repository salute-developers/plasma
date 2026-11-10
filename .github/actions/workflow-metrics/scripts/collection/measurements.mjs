import { measurementKey, normalizeJob } from '../shared/model.mjs';

/** Preserve archived step/spec data and select the latest job for each logical measurement. */
export function mergeJobMeasurements({ jobs, run, workflow, source, previousRun, previousMeasurements }) {
    const previousById = new Map(previousMeasurements.map((value) => [value.jobId, value]));
    const latest = new Map(
        previousRun?.attempt === run.run_attempt
            ? previousMeasurements.map((value) => [measurementKey(value), value])
            : [],
    );
    jobs.forEach((job) => {
        let measurement = normalizeJob(job, { ...run, path: run.path || `.github/workflows/${source}` }, workflow);
        if (!measurement) {
            if (job.steps?.some((step) => /^Run Cypress CT\b/.test(step.name))) {
                throw new Error(`Неизвестный формат Cypress job: ${job.name}. Прогон не помечен обработанным.`);
            }
            return;
        }
        const cached = previousById.get(measurement.jobId);
        // GitHub can retain job timestamps after removing its steps. Preserve data already archived.
        if (cached) {
            if (cached.specFiles) {
                measurement = { ...measurement, specFiles: cached.specFiles };
            }
            const cachedKey = measurementKey(cached);
            if (latest.get(cachedKey)?.jobId === cached.jobId) {
                latest.delete(cachedKey);
            }
            if (measurement.cypressConclusion === 'unknown' && cached.cypressConclusion !== 'unknown') {
                measurement = {
                    ...measurement,
                    cypressSeconds: cached.cypressSeconds,
                    cypressConclusion: cached.cypressConclusion,
                };
            }
            if (measurement.jobSeconds === null && cached.jobSeconds !== null) {
                measurement = { ...measurement, jobSeconds: cached.jobSeconds };
            }
        }
        const key = measurementKey(measurement);
        const previous = latest.get(key);
        if (
            !previous ||
            measurement.attempt > previous.attempt ||
            (measurement.attempt === previous.attempt && measurement.jobId > previous.jobId)
        ) {
            latest.set(key, measurement);
        }
    });

    return [...latest.values()];
}
