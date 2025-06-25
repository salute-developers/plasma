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
            placement: 'bottom-start',
            title: 'Title 1',
            description: 'Description text for title 1',
        },
        {
            target: ref5,
            placement: 'left',
            borderRadius: '0.25rem',
            title: 'Title 2',
            description: 'Description text for title 2',
        },
        {
            target: ref6,
            placement: 'bottom-end',
            title: 'Title 3',
            description: 'Description text for title 3',
        },
        {
            target: ref7,
            placement: 'bottom',
            title: 'Title 4',
            description: 'Description text for title 4',
        },
        {
            target: ref8,
            placement: 'bottom',
            title: 'Title 5',
            description: 'Description text for title 5',
        },
        {
            target: ref9,
            placement: 'bottom',
            title: 'Title 6',
            description: 'Description text for title 6',
        },
        {
            target: ref2,
            title: 'Title 7',
            description: 'Description text for title 7',
        },
        {
            target: ref3,
            title: 'Title 8',
            description: 'Description text for title 8',
        },
        {
            target: ref4,
            placement: 'left',
            title: 'Title 9',
            description: 'Description text for title 9',
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
            <div>
                <Button onClick={() => setOpen(true)}>Запуск тура</Button>
            </div>
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
    },
    render: (args) => <StoryDefault {...args} />,
};
