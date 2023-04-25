import { writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';

export const createShadows = (dir: string, shadowTokens: Record<string, any>) =>
    writeGeneratedToFS(
        dir,
        Object.entries(shadowTokens).map(([key, type]) => ({
            file: `${key}.json`,
            content: JSON.stringify(
                {
                    shadow: type,
                },
                null,
                2,
            ),
        })),
    );
