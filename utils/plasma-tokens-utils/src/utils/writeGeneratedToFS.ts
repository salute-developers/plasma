import fs from 'fs';
import path from 'path';

import { ROBO_COMMENT } from '../constants';
import type { GeneratedFiles } from '../types';

/**
 * Запись нагенерированного в файловую систему.
 * @param {string} dir Директория для записи (если не существует, то будет создана).
 * @param {GeneratedFiles} generated Сгенерированный контент для записи.
 * @param {string?} generateMessage Сообщение, которое добавляется сверху файла (по умолчанию ROBO_COMMENT).
 */
export const writeGeneratedToFS = (dir: string, generated: GeneratedFiles, generateMessage = ROBO_COMMENT) => {
    fs.existsSync(dir) || fs.mkdirSync(dir);

    for (const { file, content } of generated) {
        const src = path.join(dir, file);

        if (fs.existsSync(src)) {
            fs.appendFileSync(src, content);
            return;
        }

        fs.writeFileSync(src, `${generateMessage}${content}`);
    }
};
