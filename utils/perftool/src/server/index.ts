import express from 'express';
import morgan from 'morgan';
import { AddressInfo } from 'net';

import { buildDirectory, Config } from '../config';
import { debug } from '../utils/logger';

type CreateServerResult = {
    port: number;
    stop: () => Promise<void>;
};

export function createServer(config: Config): Promise<CreateServerResult> {
    debug('starting server');
    const app = express();

    if (config.logLevel === 'verbose') {
        app.use(
            morgan('dev', {
                skip: (req) => req.path === '/',
            }),
        );
    }

    app.use(express.static(buildDirectory, { maxAge: 1000 * 60 * 30 }));

    return new Promise((resolve) => {
        const server = app.listen(() => {
            const { port } = server?.address?.() as AddressInfo;

            debug('server started successfully, listening on port', port);

            const stop = () =>
                new Promise<void>((res, rej) => {
                    server.close((error) => {
                        if (error) {
                            rej(error);
                            return;
                        }
                        debug('server stopped successfully');
                        res();
                    });
                });

            resolve({ port, stop });
        });

        server.keepAliveTimeout = 0;
    });
}
