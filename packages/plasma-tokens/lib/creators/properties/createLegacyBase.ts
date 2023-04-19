import { writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../data';

export const createLegacyBase = (dir: string) =>
    writeGeneratedToFS(dir, [
        {
            file: 'base.json',
            content: JSON.stringify(
                {
                    color: {
                        base: baseColors,
                    },
                },
                null,
                2,
            ),
        },
    ]);
