import fs from 'fs';

import { getProjects, getNewHopeComponentFilePath, getComponentFilePath } from './getMetaInfo.mjs';

const copyFiles = () => {
    const args = process.argv.slice(2);

    const [step, files = ''] = args;

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

    const serv = 'sdds-serv';

    const firstStep = (file) => {
        const nhB2C = getNewHopeComponentFilePath(file, 'b2c');
        const nhWEB = getNewHopeComponentFilePath(file, 'web');

        const componentFile = getComponentFilePath(serv, file);

        console.log(file, nhB2C, componentFile);

        fs.copyFileSync(nhB2C, nhWEB);
        fs.copyFileSync(nhB2C, nhWEB);
        fs.copyFileSync(nhB2C, componentFile);
    };

    const secondStep = (project, file) => {
        const baseFile = getComponentFilePath(serv, file);
        const destFile = getComponentFilePath(project, file);

        console.log(project, file, baseFile, destFile);

        fs.copyFileSync(baseFile, destFile);
    };

    if (step === '1') {
        files.split(',')
            .forEach(firstStep);
    }

    if (step === '2') {
        const projects = getProjects({ skipNewHope: true })
            .filter(p => p !== serv);

        projects.forEach(project => {
            files.split(',')
                .forEach((file) => secondStep(project, file));
        });
    }
};

copyFiles();
