import { component, mergeConfig, progressBarCircularConfig } from '@salutejs/plasma-new-hope/styled-components';

const ProgressBarCircular = component(mergeConfig(progressBarCircularConfig as any, {}));

const ProgressBarCircularDefault = {
    name: 'Default',
    args: [
        {
            name: 'value',
            value: 40,
        },
        {
            name: 'strokeSize',
            value: 4,
            items: [2, 4, 6, 8].map((value) => ({ value, label: String(value) })),
        },
        {
            name: 'hasContent',
            value: true,
        },
    ],
    render: function Story(args: any) {
        const { value, strokeSize, hasContent, ...rest } = args;
        const progress = Number(value) || 0;
        const showText = hasContent && (rest.size === 'xxl' || rest.size === 'xl');

        return (
            <ProgressBarCircular {...rest} value={progress} strokeSize={Number(strokeSize) || 4}>
                {showText ? `${Math.min(100, Math.max(0, progress))}%` : undefined}
            </ProgressBarCircular>
        );
    },
};

export const ProgressBarCircularStories = [ProgressBarCircularDefault];
