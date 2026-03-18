import React, { ComponentProps } from 'react';
import { styled } from '@linaria/react';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { IconHeartOutline, IconHeartDashOutline, IconCopyOutline, IconRefresh } from '../../../../components/_Icon';
import { WithTheme } from '../../../_helpers';
import { Flow } from '../../Flow/Flow';
import { Button } from '../../Button/Button';
import { Chip } from '../../Chip/Chip';
import { ChipGroup } from '../../ChipGroup/ChipGroup';
import { EmbedIconButton } from '../../EmbedIconButton/EmbedIconButton';

import { Answer } from './Answer';
import { config } from './Answer.config';

type StoryProps = ComponentProps<typeof Answer> & {
    contentVariant: 'placeholder' | 'text' | 'gallery';
    storyContainerWidth: number;
};

const { views, sizes } = getConfigVariations(config);
const contentVariants = ['placeholder', 'text', 'gallery'];

const meta: Meta<StoryProps> = {
    title: 'AI Kit/Answer',
    component: Answer,
    decorators: [WithTheme],
    parameters: {
        controls: {
            disableSaveFromUI: true,
        },
    },
    argTypes: {
        storyContainerWidth: {
            control: { type: 'number' },
        },
        view: {
            options: views,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        size: {
            options: sizes,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        title: {
            control: 'text',
            table: { category: 'content-related' },
        },
        contentVariant: {
            options: contentVariants,
            control: { type: 'select' },
            table: { category: 'content-related' },
        },
        isLoading: {
            control: { type: 'boolean' },
            table: { category: 'loading-related' },
            if: { arg: 'isError', truthy: false },
        },
        loaderTitle: {
            control: 'text',
            table: { category: 'loading-related' },
            if: { arg: 'isError', truthy: false },
        },
        isError: {
            control: { type: 'boolean' },
            table: { category: 'error-related' },
            if: { arg: 'isLoading', truthy: false },
        },
        errorTitle: {
            control: 'text',
            table: { category: 'error-related' },
            if: { arg: 'isLoading', truthy: false },
        },
        errorDescription: {
            control: 'text',
            table: { category: 'error-related' },
            if: { arg: 'isLoading', truthy: false },
        },
        ...disableProps(['title', 'content', 'footer', 'customLoader', 'customError']),
    },
    args: {
        storyContainerWidth: 800,
        view: 'default',
        size: 'm',
        title: 'Заголовок ответа',
        contentVariant: 'placeholder',
        isLoading: false,
        loaderTitle: 'Генерирую ответ...',
        isError: false,
        errorTitle: 'Произошла ошибка',
        errorDescription: 'Не удалось получить ответ. Попробуйте ещё раз.',
    },
};

export default meta;

/* stylelint-disable */
const ContentPlaceholder = styled.div`
    width: 100%;
    height: 240px;
    background: linear-gradient(to right, #9747ff 0.063rem, transparent 0.063rem) 0 0,
        linear-gradient(to right, #9747ff 0.063rem, transparent 0.063rem) 0 100%,
        linear-gradient(to left, #9747ff 0.063rem, transparent 0.063rem) 100% 0,
        linear-gradient(to left, #9747ff 0.063rem, transparent 0.063rem) 100% 100%,
        linear-gradient(to bottom, #9747ff 0.063rem, transparent 0.063rem) 0 0,
        linear-gradient(to bottom, #9747ff 0.063rem, transparent 0.063rem) 100% 0,
        linear-gradient(to top, #9747ff 0.063rem, transparent 0.063rem) 0 100%,
        linear-gradient(to top, #9747ff 0.063rem, transparent 0.063rem) 100% 100%;

    background-repeat: no-repeat;
    background-size: 0.5rem 0.5rem;

    position: relative;

    &:before {
        content: 'Контент';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #9747ff;
        font-family: var(--plasma-typo-body-xs-font-family);
        font-style: var(--plasma-typo-body-xs-font-style);
        font-weight: var(--plasma-typo-body-xs-font-weight);
        font-size: var(--plasma-typo-body-xs-font-size);
        line-height: var(--plasma-typo-body-xs-line-height);
        letter-spacing: var(--plasma-typo-body-xs-letter-spacing);
    }
`;
/* stylelint-enable */

const ImagePlaceholder = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin slice"
        viewBox="1 0.5 8 8"
        style={{ width: '100px', height: '100px', borderRadius: '1rem', background: 'var(--text-tertiary)' }}
    >
        <path stroke="#fff" strokeDasharray={1} d="M1 1h7M2 2h7M1 3h7M2 4h7M1 5h7M2 6h7M1 7h7M2 8h7" />
    </svg>
);

const Gallery = () => {
    return (
        <Flow orientation="horizontal" arrangement="start" mainAxisGap="8px" crossAxisGap="8px">
            {Array.from({ length: 8 }, (_, i) => (
                <ImagePlaceholder key={i} />
            ))}
        </Flow>
    );
};

const ActionGroup = ({ size }: { size: string }) => {
    const actionSize = () => {
        switch (size) {
            case 's':
            case 'xs':
                return 's';
            default:
                return 'm';
        }
    };

    const actionIconSize = () => {
        switch (size) {
            case 's':
            case 'xs':
                return 'xs';
            default:
                return 's';
        }
    };

    const IconsArray = [
        <IconHeartOutline color="inherit" size={actionIconSize()} />,
        <IconHeartDashOutline color="inherit" size={actionIconSize()} />,
        <IconCopyOutline color="inherit" size={actionIconSize()} />,
        <IconRefresh color="inherit" size={actionIconSize()} />,
    ];

    return (
        <Flow orientation="horizontal" arrangement="start" mainAxisGap="8px" crossAxisGap="8px">
            {IconsArray.map((Icon, i) => (
                <EmbedIconButton size={actionSize()} view="secondary" key={i}>
                    {Icon}
                </EmbedIconButton>
            ))}
        </Flow>
    );
};

const ButtonGroup = ({ size }: { size: string }) => {
    const buttonSize = () => {
        switch (size) {
            case 'xl':
                return 'm';
            case 'l':
            case 'm':
                return 's';
            case 's':
            case 'xs':
                return 'xs';
            default:
                return 's';
        }
    };

    return (
        <Flow
            orientation="horizontal"
            arrangement="spaceBetween"
            alignment="center"
            mainAxisGap="8px"
            style={{
                width: '100%',
            }}
        >
            <ActionGroup size={size} />
            <Button size={buttonSize()} view="secondary">
                Перейти в источник
            </Button>
        </Flow>
    );
};

const Suggestions = ({ size }: { size: string }) => {
    const chipGroupSize = () => {
        switch (size) {
            case 'xl':
                return 'l';
            case 'l':
                return 'm';
            case 'm':
                return 's';
            case 's':
            case 'xs':
                return 'xs';
            default:
                return 's';
        }
    };

    return (
        <ChipGroup
            size={chipGroupSize()}
            view="secondary"
            gap="wide"
            style={{ flexDirection: 'column', width: 'fit-content' }}
        >
            {Array.from({ length: 3 }, (_, i) => (
                <Chip key={i} text={`Вариант действия ${i}`} hasClear={false} pilled />
            ))}
        </ChipGroup>
    );
};

const Footer = ({ size }: { size: string }) => {
    return (
        <Flow orientation="vertical" mainAxisGap="20px">
            <ButtonGroup size={size} />
            <Suggestions size={size} />
        </Flow>
    );
};

const contentVariantMap = {
    placeholder: <ContentPlaceholder />,
    gallery: <Gallery />,
    text: 'Это содержимое ответа. Здесь может быть любой текст или React-элементы.',
};

const StoryDefault = ({ storyContainerWidth, contentVariant, ...args }: StoryProps) => {
    return (
        <div style={{ width: `${storyContainerWidth}px`, maxWidth: '100%' }}>
            <Answer {...args} content={contentVariantMap[contentVariant]} footer={<Footer size={args.size} />} />
        </div>
    );
};

export const Default: StoryObj<StoryProps> = {
    render: StoryDefault,
};
