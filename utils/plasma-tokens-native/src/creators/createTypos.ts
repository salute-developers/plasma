import { writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';

export const createTypos = (dir: string, typoArchetypes: Record<string, any>) =>
    writeGeneratedToFS(
        dir,
        Object.entries(typoArchetypes).map(([key, value]) => ({
            file: `${key}.json`,
            content: JSON.stringify(
                {
                    typo: Object.entries(value.s).reduce(
                        (acc, [keys, values]) => ({
                            ...acc,
                            [keys]: {
                                value: values,
                            },
                        }),
                        {},
                    ),
                },
                null,
                2,
            ),
        })),
    );
