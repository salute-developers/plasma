import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { IconRefresh } from '@salutejs/plasma-icons';

import { RectSkeleton } from '../Skeleton';
import { BodyXXS } from '../Typography';
import { IconButton } from '../IconButton';
import { Button } from '../Button';

import { Image, Ratio } from '.';
import type { ImageProps } from '.';

const ratios: Ratio[] = ['1/1', '4/3', '16/9', '2/1', '3/4', '9/16', '1/2'];

const getSizeByRatio = (ratio: Ratio, base = 240) => {
    const [w, h] = ratio.split('/').map(Number);

    if (w >= h) {
        return { width: base, height: Math.round((base * h) / w) };
    }

    return { width: Math.round((base * w) / h), height: base };
};

type ImageStatus = 'loading' | 'error' | 'loaded';

type ImageWithStatusProps = {
    src: string;
    width: number;
    height: number;
    status: ImageStatus;
    alt?: string;
    onRetry?: () => void;
};

const ImageWithStatus = ({ src, width, height, status, alt, onRetry }: ImageWithStatusProps) => {
    if (status === 'loading') {
        return <RectSkeleton width={width} height={height} roundness={0} />;
    }

    if (status === 'error') {
        return (
            <div
                style={{
                    width,
                    height,
                    boxSizing: 'border-box',
                    padding: 4,
                    background: 'var(--inverse-outline-solid-default)',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--surface-solid-primary)',
                    }}
                >
                    <div
                        style={{
                            width: 166,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 6,
                        }}
                    >
                        <BodyXXS color="var(--text-secondary)" style={{ textAlign: 'center' }}>
                            Не удалось загрузить изображение
                        </BodyXXS>
                        {onRetry && (
                            <IconButton
                                view="clear"
                                size="xs"
                                aria-label="Повторить загрузку"
                                onClick={onRetry}
                                style={{ width: 24, height: 24, padding: 0 }}
                            >
                                <IconRefresh color="var(--text-primary)" size="xs" sizeCustomValue="12px" />
                            </IconButton>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return <Image src={src} width={`${width}px`} height={`${height}px`} alt={alt} />;
};

const StateStory = ({ ratio = '1/1' }: { ratio?: Ratio }) => {
    const [status, setStatus] = React.useState<ImageStatus>('error');
    const { width, height } = getSizeByRatio(ratio);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
            <ImageWithStatus
                src="./images/320_320_9.jpg"
                width={width}
                height={height}
                alt="картинка для примера фоном"
                status={status}
                onRetry={() => setStatus('loading')}
            />
            <Button size="xs" text="Остановить загрузку" onClick={() => setStatus('error')} />
        </div>
    );
};

const meta: Meta<ImageProps> = {
    title: 'Data Display/Image',
    component: Image,
    decorators: [InSpacingDecorator],
    argTypes: {
        base: {
            options: ['div', 'img'],
            control: {
                type: 'inline-radio',
            },
        },
        ratio: {
            options: ratios,
            control: {
                type: 'select',
            },
        },
        ...disableProps(['src', 'alt', 'customRatio']),
    },
};

export default meta;

export const Default: StoryObj<ImageProps & { ratio: Ratio }> = {
    args: {
        base: 'div',
        src: './images/320_320_9.jpg',
        alt: 'картинка для примера фоном',
        width: '200px',
        height: '200px',
    },
    render: (args) => (
        <div style={{ maxWidth: '10rem' }}>
            <Image {...args} />
        </div>
    ),
};

export const LoadingAndError: StoryObj<ImageProps & { ratio: Ratio }> = {
    name: 'Loading / Error',
    args: {
        ratio: '1/1',
    },
    argTypes: {
        ...disableProps(['base', 'src', 'alt', 'customRatio', 'width', 'height']),
    },
    render: ({ ratio }) => <StateStory ratio={ratio} />,
};
