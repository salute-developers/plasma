import { writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';

export const createSpacing = (dir: string, spacingTokens: Record<string, any>) =>
    writeGeneratedToFS(
        dir,
        Object.entries(spacingTokens).map(([key, type]) => ({
            file: `${key}.json`,
            content: JSON.stringify(
                {
                    spacing: type,
                },
                null,
                2,
            ),
        })),
        '',
    );
