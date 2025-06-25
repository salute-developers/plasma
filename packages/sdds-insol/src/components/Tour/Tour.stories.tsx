import React, { useRef, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import styled from 'styled-components';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';

import { config } from './Tour.config';
import { Tour } from './Tour';

const { views, sizes } = getConfigVariations(config);

const meta: Meta<typeof Tour> = {
    title: 'Navigation/Tour',
    component: Tour,
    argTypes: {
        withOverlay: {
            type: 'boolean',
        },
        overlayColor: {
            control: {
                type: 'color',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const Card = styled.div`
    padding: 1rem;
    background: #fff;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
    border-radius: 0.75rem;
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const Title = styled.h4`
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
`;

const Description = styled.p`
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #666;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    margin-top: 0.5rem;

    > div {
        display: flex;
        gap: 0.5rem;
    }

    small {
        color: #666;
        white-space: nowrap;
    }
`;

const StoryDefault = (args) => {
    const ref1 = useRef<HTMLButtonElement>(null);
    const ref2 = useRef<HTMLButtonElement>(null);
    const ref3 = useRef<HTMLButtonElement>(null);
    const ref4 = useRef<HTMLButtonElement>(null);
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const onNext = () => setCurrent(current + 1);
    const onPrev = () => setCurrent(current - 1);
    const onClose = () => setOpen(false);

    const renderTourCard = (currentStep: number, length, last, step) => {
        return (
            <Card>
                {step?.title && <Title>{step?.title}</Title>}
                {step?.description && <Description>{step?.description}</Description>}
                <Footer>
                    <div>
                        {currentStep > 0 && (
                            <Button size="xs" type="button" onClick={onPrev}>
                                Назад
                            </Button>
                        )}
                        {!last && (
                            <Button size="xs" type="button" onClick={onNext}>
                                Далее
                            </Button>
                        )}
                        {last && (
                            <Button size="xs" type="button" onClick={onClose}>
                                Закрыть
                            </Button>
                        )}
                    </div>
                    <small>
                        Шаг {currentStep + 1} / {length}
                    </small>
                </Footer>
            </Card>
        );
    };

    const steps = [
        {
            target: ref1,
            title: 'Title 1',
            description: 'Description text for title 1',
            placement: 'right',
        },
        {
            target: ref2,
            title: 'Title 2',
            description: 'Description text for title 2',
        },
        {
            target: ref3,
            title: 'Title 3',
            description: 'Description text for title 3',
        },
        {
            target: ref4,
            title: 'Title 4',
            description: 'Description text for title 4',
            placement: 'left',
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
                {...args}
                offset={[args.offset, args.shift]}
                open={open}
                current={current}
                onClose={() => {
                    setCurrent(0);
                    setOpen(false);
                }}
                renderStep={renderTourCard}
                steps={steps}
            />
        </div>
    );
};

export const Default: StoryObj = {
    args: {
        size: 's',
        view: 'default',
        withOverlay: true,
        offset: 12,
        shift: 12,
        highlightOffset: 4,
        overlayColor: 'rgba(255, 255, 255, 0.25)',
    },
    render: (args) => <StoryDefault {...args} />,
};
