import React, { useRef, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { styled } from '@linaria/react';

import { IconArrowDown } from '../../../../components/_Icon';
import { linkConfig } from '../../../../components/Link';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { Button } from '../Button/Button';
import { TextArea } from '../TextArea/TextArea';
import { TextField } from '../TextField/TextField';
import { Select } from '../Select/Select';
import { Combobox } from '../Combobox/Combobox';
import { Autocomplete } from '../Autocomplete/Autocomplete';
import { RangeInputRefs } from '../../../../components/Range';

import { config } from './Tour.config';
import { Tour } from './Tour';

const meta: Meta<typeof Tour> = {
    title: 'b2c/Navigation/Tour',
    decorators: [WithTheme],
    component: Tour,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(linkConfig, config)),
        withOverlay: {
            type: 'boolean',
        },
        overlayColor: {
            control: {
                type: 'color',
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

const TourCard: React.FC<{
    title: string;
    description: string;
    index: number;
    last: boolean;
    total: number;
    onPrev: () => void;
    onNext: () => void;
    onClose: () => void;
}> = ({ title, description, index, last, total, onPrev, onNext, onClose }) => {
    return (
        <Card>
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
            <Footer>
                <div>
                    {index > 0 && (
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
                    Шаг {index + 1} / {total}
                </small>
            </Footer>
        </Card>
    );
};

const StoryDefault = (args) => {
    const ref1 = useRef<HTMLTextAreaElement>(null);
    const ref2 = useRef<HTMLButtonElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);
    const ref5 = useRef<HTMLDivElement>(null);
    const ref6 = useRef<HTMLInputElement>(null);
    const ref7 = useRef<HTMLButtonElement>(null);
    const ref8 = useRef<HTMLInputElement>(null);
    const ref9 = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const onNext = () => setCurrent(current + 1);
    const onPrev = () => setCurrent(current - 1);
    const onClose = () => setOpen(false);

    const steps = [
        {
            target: ref1,
            renderItem: () => (
                <TourCard
                    title="Первый шаг"
                    description="Нажмите кнопку, чтобы продолжить"
                    index={0}
                    last={current === steps.length - 1}
                    total={steps.length}
                    onNext={onNext}
                    onPrev={onPrev}
                    onClose={onClose}
                />
            ),
            placement: 'bottom',
        },
        {
            target: ref5,
            renderItem: () => (
                <TourCard
                    title="Первый шаг"
                    description="Нажмите кнопку, чтобы продолжить"
                    index={1}
                    last={current === steps.length - 1}
                    total={steps.length}
                    onNext={onNext}
                    onPrev={onPrev}
                    onClose={onClose}
                />
            ),
            placement: 'left',
            borderRadius: '0.25rem',
        },
        {
            target: ref6,
            renderItem: () => (
                <TourCard
                    title="Первый шаг"
                    description="Нажмите кнопку, чтобы продолжить"
                    index={2}
                    last={current === steps.length - 1}
                    total={steps.length}
                    onNext={onNext}
                    onPrev={onPrev}
                    onClose={onClose}
                />
            ),
            placement: 'bottom',
        },
        {
            target: ref7,
            renderItem: () => (
                <TourCard
                    title="Первый шаг"
                    description="Нажмите кнопку, чтобы продолжить"
                    index={3}
                    last={current === steps.length - 1}
                    total={steps.length}
                    onNext={onNext}
                    onPrev={onPrev}
                    onClose={onClose}
                />
            ),
            placement: 'bottom',
        },
        {
            target: ref8,
            renderItem: () => (
                <TourCard
                    title="Первый шаг"
                    description="Нажмите кнопку, чтобы продолжить"
                    index={4}
                    last={current === steps.length - 1}
                    total={steps.length}
                    onNext={onNext}
                    onPrev={onPrev}
                    onClose={onClose}
                />
            ),
            placement: 'bottom',
        },
        {
            target: ref9,
            renderItem: () => (
                <TourCard
                    title="Первый шаг"
                    description="Нажмите кнопку, чтобы продолжить"
                    index={5}
                    last={current === steps.length - 1}
                    total={steps.length}
                    onNext={onNext}
                    onPrev={onPrev}
                    onClose={onClose}
                />
            ),
            placement: 'bottom',
        },
        {
            target: ref2,
            renderItem: () => (
                <TourCard
                    title="Первый шаг"
                    description="Нажмите кнопку, чтобы продолжить"
                    index={6}
                    last={current === steps.length - 1}
                    total={steps.length}
                    onNext={onNext}
                    onPrev={onPrev}
                    onClose={onClose}
                />
            ),
        },
        {
            target: ref3,
            renderItem: () => (
                <TourCard
                    title="Первый шаг"
                    description="Нажмите кнопку, чтобы продолжить"
                    index={7}
                    last={current === steps.length - 1}
                    total={steps.length}
                    onNext={onNext}
                    onPrev={onPrev}
                    onClose={onClose}
                />
            ),
        },
        {
            target: ref4,
            renderItem: () => (
                <TourCard
                    title="Первый шаг"
                    description="Нажмите кнопку, чтобы продолжить"
                    index={8}
                    last={current === steps.length - 1}
                    total={steps.length}
                    onNext={onNext}
                    onPrev={onPrev}
                    onClose={onClose}
                />
            ),
            placement: 'left',
        },
    ];

    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <TextArea
                        ref={ref1}
                        label="Textarea"
                        placeholder="Напиши что нибудь"
                        leftHelper="Helper Text"
                        rightHelper={
                            <div ref={ref5} style={{ cursor: 'pointer', transform: 'rotate(-90deg)' }}>
                                <IconArrowDown />
                            </div>
                        }
                        rows={10}
                        cols={20}
                    />
                    <TextField
                        size="s"
                        ref={ref6}
                        label="Textarea"
                        placeholder="Напиши что нибудь"
                        leftHelper="Helper Text"
                    />
                    <Select
                        ref={ref7}
                        items={[
                            {
                                value: 'north_america',
                                label: 'Северная Америка',
                            },
                        ]}
                        placeholder="Select"
                    />
                    <Combobox
                        ref={ref8}
                        items={[
                            {
                                value: 'north_america',
                                label: 'Северная Америка',
                            },
                        ]}
                        placeholder="Combobox"
                    />
                    <Autocomplete size="s" ref={ref9} items={[{ value: 'Test' }]} placeholder="Autocomplete" />
                </div>
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
                <div
                    style={{
                        background: 'black',
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                    }}
                    ref={ref3}
                />
                <div
                    style={{
                        background: 'black',
                        width: '100px',
                        height: '100px',
                    }}
                    ref={ref4}
                >
                    Блок 4
                </div>
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
    },
    render: (args) => <StoryDefault {...args} />,
};
