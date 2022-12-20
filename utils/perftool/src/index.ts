#!/usr/bin/env node --experimental-specifier-resolution=node
import process from 'process';
import { createArgument, createCommand, createOption, OptionValues } from 'commander';

import { getConfig, getAllTasks, ProjectConfig } from './config';
import { importConfig } from './config/node';
import collectTestSubjects from './build/collect';
import { buildClient } from './build';
import { createServer } from './server';
import { runTests } from './controller';
import Statistics from './statistics';
import { generateReport, measureStartingPoint, report } from './reporter';
import { CliConfig } from './config/common';
import { debug, error, info, setLogLevel } from './utils/logger';

const cli = createCommand('perftool');

export type { ProjectConfig as Config };

cli.addArgument(createArgument('[include...]', 'Modules to run perftest on'))
    .addOption(createOption('-l, --logLevel <level>', 'Log level').choices(['quiet', 'normal', 'verbose']))
    .addOption(createOption('-c, --configPath <path>', 'Config path'))
    .addOption(createOption('-o, --outputFilePath <path>', 'Output file path'));

function getCliConfig(include: string[], options: OptionValues): CliConfig {
    return {
        include,
        configPath: options.configPath,
        outputFilePath: options.outputFilePath,
        logLevel: options.logLevel,
    };
}

async function start() {
    await cli.parseAsync();
    const options = cli.opts();

    setLogLevel(options.logLevel);

    const [include] = cli.processedArgs;
    const cliConfig: CliConfig = getCliConfig(include, options || {});
    debug('parsed cli config', cliConfig);

    const importedConfig = await importConfig(cliConfig.configPath);
    const config = getConfig(cliConfig, importedConfig?.value);

    const testModules = await collectTestSubjects({
        config,
        exportPickRule: config.exportPickRule,
    });
    const tasks = getAllTasks(config);

    info(
        'Tasks performed in this run: ',
        tasks.map((t) => t.id),
    );

    await buildClient({ config, testModules, projectConfigPath: importedConfig?.path, cliConfig });

    const { port, stop } = await createServer(config);

    measureStartingPoint();

    const testResultsStream = runTests({ config, port, tasks, testModules });

    const stats = new Statistics(config, tasks);
    const consumingPromise = stats.consume(testResultsStream);

    if (config.displayIntermediateCalculations) {
        await report(stats.stream());
    } else {
        await consumingPromise;
    }

    await stop();

    await generateReport(config, stats.getResult(), testModules);
}

await start()
    .then(() => process.exit())
    .catch((err: Error) => {
        error(err.name, err.message, err.stack);
        process.exit(1);
    });
