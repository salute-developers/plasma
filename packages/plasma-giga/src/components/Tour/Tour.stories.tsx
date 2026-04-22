import React, { ComponentProps, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { getTourStories } from '@salutejs/plasma-sb-utils';

import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Range } from '../Range';
import { Switch } from '../Switch';
import { TextField } from '../TextField';
import { ButtonGroup } from '../ButtonGroup';
import { LinkButton } from '../LinkButton';

import { config } from './Tour.config';
import { Tour } from './Tour';
import { TourCard } from './TourCard';

type TourProps = ComponentProps<typeof Tour>;

const { meta: META, Default, CustomHighlight } = getTourStories({
    component: Tour,
    componentConfig: config,
    disablePropsList: ['view', 'size'],
    additionalComponents: { Avatar, Button, Range, Switch, TextField },
});

const meta: Meta<TourProps> = {
    ...META,
    title: 'Navigation/Tour',
};

export default meta;

const getImage = () => {
    const svgString = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin slice"
      viewBox="1 0.5 8 8"
      style="background: lightblue"
    >
      <path stroke="#fff" stroke-dasharray="1" d="M1 1h7M2 2h7M1 3h7M2 4h7M1 5h7M2 6h7M1 7h7M2 8h7" />
    </svg>
  `;

    const cleanedSvg = svgString.replace(/\s+/g, ' ').trim();
    return `data:image/svg+xml,${encodeURIComponent(cleanedSvg)}`;
};

const StoryCard = (props: TourProps) => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const [name, setName] = useState('');
    const [checked, setChecked] = useState(false);
    const [firstValue, setFirstValue] = useState('18');
    const [secondValue, setSecondValue] = useState('65');

    const onClose = () => {
        setOpen(false);
        setCurrent(0);
    };

    const goToStep = (index: number) => {
        setCurrent(index);
    };

    const image = props.showImage
        ? {
              src: getImage(),
          }
        : undefined;

    const steps = [
        {
            target: '#avatar-id',
            title: 'Аватар профиля',
            description: 'Здесь отображается ваш аватар. Кликните по нему, чтобы загрузить фотографию.',
            placement: 'right',
            highlightBorderRadius: '50%',
        },
        {
            target: '#textfield-id',
            title: 'Имя пользователя',
            description: 'Введите ваше имя — оно будет отображаться в профиле и переписке.',
        },
        {
            target: '#switch-id',
            title: 'Push-уведомления',
            description: 'Включите уведомления, чтобы не пропускать важные события.',
        },
        {
            target: '#range-id',
            title: 'Возрастной диапазон',
            description: 'Укажите диапазон возраста аудитории для персонализации контента.',
        },
        {
            target: '#button-id',
            title: 'Сохранить настройки',
            description: 'Нажмите кнопку, чтобы применить все внесённые изменения.',
            placement: 'top',
        },
    ];

    const renderTourCard = (stepCurrent: number, stepLength: number, last: boolean, step: any) => {
        const actionButtons = props.showActionButtons ? (
            <ButtonGroup stretching="filled">
                {stepCurrent > 0 && (
                    <Button size="s" view="secondary" onClick={() => setCurrent((c) => c - 1)}>
                        Назад
                    </Button>
                )}

                {last ? (
                    <Button size="s" view="default" onClick={onClose}>
                        Закрыть
                    </Button>
                ) : (
                    <Button size="s" view="default" onClick={() => setCurrent((c) => c + 1)}>
                        Далее
                    </Button>
                )}
            </ButtonGroup>
        ) : undefined;

        const skipButton = props.showSkipButton ? <LinkButton onClick={onClose}>Пропустить</LinkButton> : undefined;

        return (
            <TourCard
                title={step?.title}
                description={step?.description}
                actionButtons={actionButtons}
                skipButton={skipButton}
                orientation={props.orientation}
                showPagination={props.showPagination}
                stepCurrent={stepCurrent}
                stepLength={stepLength}
                goToStep={goToStep}
                showClose={props.showClose}
                onClose={onClose}
                image={image}
            />
        );
    };

    return (
        <div
            style={{
                maxWidth: '26rem',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                padding: '2rem',
            }}
        >
            <Avatar id="avatar-id" size="m" name="Иван Иванов" style={{ alignSelf: 'flex-start' }} />

            <div id="textfield-id">
                <TextField
                    label="Имя пользователя"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
            </div>

            <Switch
                id="switch-id"
                label="Push-уведомления"
                checked={checked}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
            />

            <Range
                id="range-id"
                label="Возрастной диапазон"
                firstValue={firstValue}
                secondValue={secondValue}
                onChangeFirstValue={(e: React.ChangeEvent<HTMLInputElement>) => setFirstValue(e.target.value)}
                onChangeSecondValue={(e: React.ChangeEvent<HTMLInputElement>) => setSecondValue(e.target.value)}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button view="secondary" onClick={() => setOpen(true)}>
                    Запустить тур
                </Button>
                <Button id="button-id" view="default">
                    Сохранить
                </Button>
            </div>

            <Tour
                open={open}
                current={current}
                hasTail
                onChange={setCurrent}
                onClose={onClose}
                renderStep={renderTourCard}
                steps={steps}
                highlightBorderRadius="1rem"
            />
        </div>
    );
};

const Card: StoryObj<TourProps> = {
    args: {
        orientation: 'vertical',
        showImage: true,
        showPagination: true,
        showActionButtons: true,
        showSkipButton: true,
        showClose: true,
    },
    parameters: {
        controls: {
            include: ['orientation', 'showImage', 'showPagination', 'showActionButtons', 'showSkipButton', 'showClose'],
        },
    },
    argTypes: {
        orientation: {
            options: ['vertical', 'horizontal'],
            control: {
                type: 'select',
            },
        },
    },
    render: (args) => <StoryCard {...args} />,
};

export { Default, CustomHighlight, Card };
