import { component, loaderConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Loader = component(mergeConfig(loaderConfig as any, {}));

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

const LoaderDefault = {
    name: 'Default',
    args: [
        {
            name: 'type',
            value: 'spinner',
            items: toItems(['spinner', 'progress']),
        },
        {
            name: 'value',
            value: 40,
        },
        {
            name: 'maxValue',
            value: 100,
        },
        {
            name: 'strokeSize',
            value: '4',
            items: toItems(['2', '4', '6', '8']),
        },
        {
            name: 'hasTrack',
            value: true,
        },
        {
            name: 'hasContent',
            value: true,
        },
        {
            name: 'hasOverlay',
            value: false,
        },
        {
            name: 'withBlur',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const { value, maxValue, strokeSize, hasContent, ...rest } = args;
        const progress = Number(value) || 0;
        const limit = Number(maxValue) || 100;
        const percent = Math.round((Math.min(limit, Math.max(0, progress)) / limit) * 100);

        return (
            <Loader {...rest} value={progress} maxValue={limit} strokeSize={Number(strokeSize) || 4}>
                {hasContent && rest.type === 'progress' ? `${percent}%` : undefined}
            </Loader>
        );
    },
};

export const LoaderStories = [LoaderDefault];
