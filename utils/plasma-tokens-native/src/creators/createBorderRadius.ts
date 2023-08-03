import { writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';

export const createBorderRadius = (dir: string, borderRadiusTokens: Record<string, any>) =>
    writeGeneratedToFS(
        dir,
        Object.entries(borderRadiusTokens).map(([key, type]) => ({
            file: `${key}.json`,
            content: JSON.stringify(
                {
                    borderRadius: type,
                },
                null,
                2,
            ),
        })),
        '',
    );
