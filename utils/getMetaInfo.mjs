import path from 'path';
import { fileURLToPath } from 'url';
import meta from '../.github/meta.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const skip = ['plasma-ui', 'plasma-asdk', 'plasma-new-hope', 'plasma-sb-utils'];

const projects = Object.keys(meta)
    .filter(p => !skip.includes(p));

export const getProjects = ({
                                withAsdk,
                                withUtils,
                                skipNewHope = false,
                            } = {}) => {
    const result = [...projects];

    if (withAsdk) {
        result.push('plasma-asdk');
    }

    if (withUtils) {
        result.push('plasma-sb-utils');
    }

    if (!skipNewHope) {
        result.push('plasma-new-hope');
    }

    return result;
};

export const getNewHopeComponentFilePath = (file, type) => path.resolve(__dirname, `../packages/plasma-new-hope/src/examples/plasma_${type}/components/${file.split('.')[0]}/${file}`);
export const getComponentFilePath = (project, file) => path.resolve(__dirname, `../packages/${project}/src/components/${file.split('.')[0]}/${file}`);
