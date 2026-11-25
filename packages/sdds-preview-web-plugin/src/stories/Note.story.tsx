import { LinkButton } from '@salutejs/plasma-b2c';
import { IconPlasma } from '@salutejs/plasma-icons';
import { component, noteConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const Note = component(mergeConfig(noteConfig as any, {}));

const NoteDefault = {
    name: 'Default',
    args: [
        {
            name: 'title',
            value: 'Title',
        },
        {
            name: 'text',
            value: 'Text',
        },
        {
            name: 'width',
            value: '400',
        },
        {
            name: 'height',
            value: '400',
        },
        {
            name: 'stretch',
            value: false,
        },
        {
            name: 'hasClose',
            value: false,
        },
        {
            name: 'hasActionContent',
            value: false,
        },
        {
            name: 'enableContentBefore',
            value: true,
        },
        {
            name: 'enableHeightControl',
            value: false,
        },
        {
            name: 'contentBeforeSizing',
            value: 'fixed',
            items: [
                {
                    value: 'fixed',
                    label: 'fixed',
                },
                {
                    value: 'scalable',
                    label: 'scalable',
                },
            ],
        },
        {
            name: 'orientation',
            value: 'vertical',
            items: [
                {
                    value: 'vertical',
                    label: 'vertical',
                },
                {
                    value: 'horizontal',
                    label: 'horizontal',
                },
            ],
        },
    ],
    render: function Story(args: any) {
        const { enableContentBefore, enableHeightControl, hasActionContent, height, ...rest } = args;

        const getIconSize = (size?: string, isScalable?: boolean) => {
            if (isScalable) {
                return 'm';
            }

            if (size === 'l' || size === 'm') {
                return 's';
            }

            return 'xs';
        };

        return (
            <div>
                <Note
                    key={`${rest.text ?? ''}|${rest.title ?? ''}`} // INFO: Нужно чтобы при изменении text или title компонент перерендерился
                    contentBefore={
                        enableContentBefore ? (
                            <IconPlasma
                                size={getIconSize(args.size, args.contentBeforeSizing === 'scalable')}
                                color="inherit"
                            />
                        ) : undefined
                    }
                    height={enableHeightControl ? height : undefined}
                    actionContent={
                        hasActionContent ? (
                            <LinkButton
                                text="Label"
                                size={args.size}
                                view={args.view === 'default' ? 'positive' : args.view}
                            />
                        ) : undefined
                    }
                    {...rest}
                />
            </div>
        );
    },
};

export const NoteStories = [NoteDefault];
