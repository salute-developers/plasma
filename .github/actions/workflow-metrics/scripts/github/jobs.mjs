// Read every jobs page before a run is marked complete.
/* eslint-disable no-await-in-loop */

/** Fetch all pages before a run can replace previously archived measurements. */
export async function loadRunJobs(request, runId) {
    const jobs = [];
    let jobPage = 1;
    let totalJobs;
    do {
        const data = await request(`runs/${runId}/jobs?filter=latest&per_page=100&page=${jobPage}`);
        totalJobs = data.total_count;
        if (!data.jobs.length && jobs.length < totalJobs) {
            throw new Error(`Неполный список jobs для прогона ${runId}.`);
        }
        jobs.push(...data.jobs);
        jobPage += 1;
    } while (jobs.length < totalJobs);

    return jobs;
}
