import ts from 'typescript';
import { Project, PropertyAssignment, QuoteKind, Node } from 'ts-morph';

import childProcess from 'child_process';

import { getProjects } from './getMetaInfo.mjs';

const fastBuild = (args) => {
    const withAsdk = args.includes('full');
    const withUtils = args.includes('utils');

    const projects = getProjects({
        withAsdk,
        withUtils,
    })
        .map(p => `@salutejs/${p}`);

    if (args.includes('-h') || args.includes('--help')) {
        console.log(`
            build libs "import libs from .github/meta.js"
            without plasma-ui, plasma-asdk

            full: with plasma-asdk
            utils: add plasma-sb-utils

            example:
            devBuild full utils
        `.replace(/ {8}/g, ''));
    }

    const cmd = `npx lerna bootstrap --scope={${projects.join(',')}}`;

    console.log(cmd);

    const child = childProcess.exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
    });

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
};

fastBuild(process.argv.slice(2));
