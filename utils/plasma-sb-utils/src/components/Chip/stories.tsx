import React from 'react';
import { action } from 'storybook/actions';

const onClear = action('onClear');

const iconSizeMapper: Record<string, string> = {
    l: '1.5rem',
    m: '1.5rem',
    s: '1rem',
    xs: '0.75rem',
    xxs: '0.75rem',
};

const ChipIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path
            d="M11.501 21.28c1.088 0 1.978-.889 1.978-1.977H9.524c0 1.088.88 1.978 1.977 1.978zm5.933-5.932v-4.944c0-3.035-1.622-5.576-4.45-6.248v-.673c0-.82-.662-1.483-1.483-1.483-.82 0-1.483.662-1.483 1.483v.672c-2.838.673-4.45 3.204-4.45 6.25v4.943l-1.275 1.276c-.623.623-.188 1.69.692 1.69h13.022c.88 0 1.325-1.067.702-1.69l-1.275-1.276z"
            fill="currentColor"
        />
    </svg>
);

export const createDefaultStory = (Chip: any) => {
    return ({ enableContentLeft, enableContentRight, size, ...rest }: any) => {
        const iconSize = iconSizeMapper[size] || '1rem';

        return (
            <Chip
                contentLeft={enableContentLeft ? <ChipIcon width={iconSize} height={iconSize} /> : undefined}
                contentRight={enableContentRight ? <ChipIcon width={iconSize} height={iconSize} /> : undefined}
                size={size}
                onClear={onClear}
                {...rest}
            />
        );
    };
};
