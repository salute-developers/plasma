import { Configuration as WebpackConfig } from 'webpack';
import { PuppeteerNodeLaunchOptions } from 'puppeteer';

import { Task, MeasurerConfig } from '../client/measurement/types';
import { ExportPickRule } from '../build/collect';
import { Metric } from '../statistics/types';
import { debug } from '../utils/logger';

type MetricConfiguration = {
    enable?: boolean;
    confidenceLevel?: number;
    failOnSignificantChanges?: boolean;
};

type TaskConfiguration = MeasurerConfig & {
    enable?: boolean;
    include?: string[];
    exclude?: string[];
    retries?: number;
    failOnSignificantChanges?: boolean;
    metrics?: {
        include?: string[];
        exclude?: string[];
    };
};

// TODO add comments
export type Config = {
    taskConfiguration: {
        [key: string]: TaskConfiguration;
    };
    tasks: Task<any, any>[];
    metricConfiguration: {
        [key: string]: MetricConfiguration;
    };
    metrics: Metric<any>[];
    include: string[];
    exclude: string[];
    jobs: number;
    retries: number;
    displayIntermediateCalculations: boolean;
    intermediateRefreshInterval: number;
    failOnSignificantChanges: boolean;
    outputFilePath: string;
    configPath?: string;
    logLevel: 'quiet' | 'normal' | 'verbose';
    puppeteerOptions: PuppeteerNodeLaunchOptions;
    taskWaitTimeout: number;
    runWaitTimeout: number;
    dryRunTimes: number;
    modifyWebpackConfig: (defaultConfig: WebpackConfig) => WebpackConfig;
    exportPickRule: ExportPickRule;
};

export type ProjectConfig = Partial<Omit<Config, 'configPath' | 'logLevel'>>;

export type CliConfig = Partial<
    Pick<Config, 'include' | 'configPath' | 'outputFilePath' | 'logLevel' | 'failOnSignificantChanges'>
>;

export function getConfig(cliConfig: CliConfig = {}, projectConfig: ProjectConfig = {}): Config {
    debug('getting final config');
    const mixedInputConfig = { ...cliConfig, ...projectConfig };

    const result = {
        taskConfiguration: mixedInputConfig.taskConfiguration || {},
        tasks: mixedInputConfig.tasks || [],
        metricConfiguration: mixedInputConfig.metricConfiguration || {},
        metrics: mixedInputConfig.metrics || [],
        include: mixedInputConfig.include || [],
        exclude: mixedInputConfig.exclude || [],
        jobs: mixedInputConfig.jobs || 1,
        retries: mixedInputConfig.retries || 10,
        displayIntermediateCalculations: mixedInputConfig.displayIntermediateCalculations || true,
        intermediateRefreshInterval: mixedInputConfig.intermediateRefreshInterval || 10000,
        failOnSignificantChanges: mixedInputConfig.failOnSignificantChanges || true,
        outputFilePath: mixedInputConfig.outputFilePath || 'perftest/report-[time].json',
        configPath: mixedInputConfig.configPath || undefined,
        logLevel: mixedInputConfig.logLevel || 'normal',
        puppeteerOptions: mixedInputConfig.puppeteerOptions || {},
        taskWaitTimeout: mixedInputConfig.taskWaitTimeout || 1000 * 10,
        runWaitTimeout: mixedInputConfig.runWaitTimeout || 1000 * 60 * 2,
        dryRunTimes: mixedInputConfig.taskWaitTimeout || 1,
        modifyWebpackConfig: mixedInputConfig.modifyWebpackConfig || ((c) => c),
        exportPickRule: mixedInputConfig.exportPickRule || 'named',
    };

    debug('final config: ', result);

    return result;
}
