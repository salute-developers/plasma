import type { repository } from '../model/constants.ts';
import type { Browser, History, Measurement, Workflow } from '../model/types.ts';
import type { summarizeSpecFiles } from '../utils/statistics.ts';

export interface ChunkReference {
    period: string;
    path: string;
    sha256: string;
    bytes: number;
    gzipBytes: number;
    count: number;
}

interface ChunkHeader {
    version: 3;
    repository: typeof repository;
    workflow: Workflow;
}

export interface ArchiveManifest extends ChunkHeader {
    from: string;
    to: string;
    updatedAt: string;
    collectionRevision?: number;
    coverage: History['coverage'];
    warnings: string[];
    totals: { runs: number; jobs: number };
    packages: string[];
    series: ChunkReference[];
    jobs: ChunkReference[];
    state: ChunkReference[];
}

/** All React versions and source workflows are pooled, as in the metrics UI. */
export interface DailySeries {
    day: string;
    packageName: string;
    browser: Browser;
    runIds: number[];
    jobs: number;
    success: number;
    errors: number;
    /** Successful jobs with a known duration, in seconds. Zero is a valid duration. */
    seconds: number[];
    specFiles: ReturnType<typeof summarizeSpecFiles>;
}

export interface SeriesChunk extends ChunkHeader {
    year: string;
    series: DailySeries[];
}

export interface JobsChunk extends ChunkHeader {
    month: string;
    measurements: Measurement[];
}

export interface StateChunk extends ChunkHeader {
    month: string;
    runs: History['runs'];
}
