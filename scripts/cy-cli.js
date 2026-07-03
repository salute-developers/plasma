#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires, import/no-dynamic-require, global-require */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */

const inquirer = require('inquirer');
const { spawnSync } = require('child_process');

const PACKAGES = [
    'b2c',
    'giga',
    'web',
    'cs',
    'insol',
    'netology',
    'serv',
    'scan',
    'os',
    'platform-ai',
    'finai',
    'dfa',
    'homeds',
];

const PACKAGE_MAP = {
    b2c: 'plasma-b2c',
    giga: 'plasma-giga',
    web: 'plasma-web',
    cs: 'sdds-cs',
    insol: 'sdds-insol',
    netology: 'sdds-netology',
    serv: 'sdds-serv',
    scan: 'sdds-scan',
    os: 'sdds-os',
    'platform-ai': 'sdds-platform-ai',
    finai: 'sdds-finai',
    dfa: 'sdds-dfa',
    homeds: 'plasma-homeds',
};

async function main() {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Выберите действие с снапшотами:',
            choices: ['run', 'update', 'open'],
        },
    ]);

    let browser = 'chromium';

    if (action !== 'open') {
        ({ browser } = await inquirer.prompt([
            {
                type: 'list',
                name: 'browser',
                message: 'Выберите браузер:',
                choices: ['chromium', 'webkit'],
            },
        ]));
    }

    const { pkg } = await inquirer.prompt([
        {
            type: 'list',
            name: 'pkg',
            message: 'Выберите пакет:',
            choices: action === 'open' ? PACKAGES : ['all', ...PACKAGES],
        },
    ]);

    let componentsList = '';

    if (action !== 'open') {
        console.log(
            '\nЕсли нужен запуск по определенным компонентам, то введите названия компонентов через запятую, если нет, то продолжите нажав Enter',
        );

        const { components } = await inquirer.prompt([
            {
                type: 'input',
                name: 'components',
                message: 'Запуск по компонентам:',
            },
        ]);

        componentsList = components.trim();
    }

    if (action === 'open') {
        const env = { ...process.env, PACKAGE_NAME: PACKAGE_MAP[pkg] };

        console.log(`\nЗапускаем: PACKAGE_NAME=${env.PACKAGE_NAME} npm run cy:open`);

        const result = spawnSync('npm', ['run', 'cy:open'], {
            stdio: 'inherit',
            cwd: process.cwd(),
            env,
        });

        process.exit(result.status || 0);
    }

    const targets = pkg === 'all' ? PACKAGES : [pkg];

    for (const target of targets) {
        const env = { ...process.env, PACKAGE_NAME: PACKAGE_MAP[target] };

        if (browser === 'webkit') {
            env.BROWSER = 'webkit';
        }

        if (action === 'update') {
            env.CYPRESS_updateSnapshots = 'true';
        }

        if (componentsList) {
            env.COMPONENTS = componentsList;
        }

        console.log(`\nЗапускаем: PACKAGE_NAME=${env.PACKAGE_NAME} npm run cy:run`);

        const result = spawnSync('npm', ['run', 'cy:run'], {
            stdio: 'inherit',
            cwd: process.cwd(),
            env,
        });

        if (result.status !== 0) {
            process.exit(result.status || 1);
        }
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
