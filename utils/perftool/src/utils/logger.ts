import log, { LogLevelDesc } from 'loglevel';
import prefix from 'loglevel-plugin-prefix';

type LogLevel = 'quiet' | 'normal' | 'verbose';

// We don't want chalk in client build
if (!process.env.PERFTOOL_CLIENT_RUNTIME) {
    const { default: chalk } = await import('chalk');
    const colors = {
        trace: chalk.magenta,
        debug: chalk.cyan,
        info: chalk.blue,
        warn: chalk.yellow,
        error: chalk.red,
    };

    prefix.reg(log as any);
    prefix.apply(log as any, {
        format(level, _, timestamp) {
            return `${chalk.gray(`[${timestamp}]`)} ${colors[level.toLowerCase() as keyof typeof colors](level)}`;
        },
    });
}

const logLevelMapping: Record<LogLevel, LogLevelDesc> = {
    quiet: 'error',
    normal: 'info',
    verbose: 'debug',
};

let logLevel: LogLevel = 'normal';
log.setDefaultLevel(logLevelMapping[logLevel]);

export function setLogLevel(level?: LogLevel): void {
    if (!level) {
        return;
    }

    logLevel = level;

    const resultLevel = logLevelMapping[logLevel];

    log.setLevel(resultLevel);
}

export function error<T extends unknown[]>(...args: T): void {
    log.error(...args);
}

export function warn<T extends unknown[]>(...args: T): void {
    log.warn(...args);
}

export function info<T extends unknown[]>(...args: T): void {
    log.info(...args);
}

export function debug<T extends unknown[]>(...args: T): void {
    log.debug(...args);
}
