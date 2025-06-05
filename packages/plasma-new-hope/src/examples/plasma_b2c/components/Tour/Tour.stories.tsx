import React, { useRef, useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { linkConfig } from '../../../../components/Link';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { Button } from '../Button/Button';

import { config } from './Tour.config';
import { Tour } from './Tour';

const meta: Meta<typeof Tour> = {
    title: 'b2c/Navigation/Tour',
    decorators: [WithTheme],
    component: Tour,
    argTypes: argTypesFromConfig(mergeConfig(linkConfig, config)),
};

export default meta;

const StoryDefault = () => {
    const ref1 = useRef<HTMLButtonElement>(null);
    const ref2 = useRef<HTMLButtonElement>(null);
    const ref3 = useRef<HTMLButtonElement>(null);
    const ref4 = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const steps = [
        {
            target: ref1,
            title: 'Первый шаг',
            description: 'Нажмите кнопку, чтобы продолжить',
        },
        {
            target: ref2,
            title: 'Второй шаг',
            description: 'Нажмите кнопку, чтобы продолжить',
        },
        {
            target: ref3,
            title: 'Третий шаг',
            description: 'Нажмите кнопку, чтобы продолжить',
        },
        {
            target: ref4,
            title: 'Последний шаг',
            description: 'Описание последнего шага',
        },
    ];

    return (
        <div
            style={{
                width: '100%',
                height: '110vh',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Button ref={ref1}>Блок 1</Button>
                <Button ref={ref2}>Блок 2</Button>
            </div>
            <Button onClick={() => setOpen(true)}>Запуск тура</Button>

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Button ref={ref3}>Блок 3</Button>
                <Button ref={ref4}>Блок 4</Button>
            </div>

            <Tour
                steps={steps}
                open={open}
                current={current}
                onClose={() => {
                    setCurrent(0);
                    setOpen(false);
                }}
                nextButton={
                    <Button size="xs" onClick={() => setCurrent(current + 1)}>
                        Далее
                    </Button>
                }
                prevButton={
                    <Button size="xs" onClick={() => setCurrent(current - 1)}>
                        Назад
                    </Button>
                }
                closeButton={
                    <Button
                        size="xs"
                        onClick={() => {
                            setCurrent(0);
                            setOpen(false);
                        }}
                    >
                        Завершить
                    </Button>
                }
            />
        </div>
    );
};

export const Default: StoryObj = {
    render: (args) => <StoryDefault {...args} />,
};
