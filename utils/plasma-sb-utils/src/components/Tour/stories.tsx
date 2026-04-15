import React, { useState } from 'react';

type StoryArgs = {
    offset: number;
    shift: number;
    hasTail?: boolean;
    withOverlay?: boolean;
    highlightOffset?: number;
    highlightBorderRadius?: number;
    overlayColor?: string;
    zIndex?: number;
    [key: string]: unknown;
};

type AdditionalComponents = {
    Button: React.FC<any>;
    TextField: React.FC<any>;
    Switch: React.FC<any>;
    Range: React.FC<any>;
    Avatar: React.FC<any>;
};

const PULSE_KEYFRAMES = `
    @keyframes plasma-tour-pulse-border {
        0%, 100% {
            box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.85), 0 0 0 6px rgba(0, 102, 255, 0.2);
        }
        50% {
            box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.35), 0 0 0 12px rgba(0, 102, 255, 0);
        }
    }
`;

export const createCustomHighlightStory = (
    TourComponent: React.FC<any>,
    additionalComponents: AdditionalComponents,
) => {
    return ({ offset, shift, ...rest }: StoryArgs) => {
        const { Button, TextField, Switch } = additionalComponents;

        const [open, setOpen] = useState(false);
        const [current, setCurrent] = useState(0);
        const [name, setName] = useState('');
        const [checked, setChecked] = useState(false);

        const onClose = () => {
            setOpen(false);
            setCurrent(0);
        };

        const steps = [
            {
                target: '#custom-highlight-textfield',
                title: 'Имя пользователя',
                description: 'Введите ваше имя — оно будет отображаться в профиле.',
            },
            {
                target: '#custom-highlight-switch',
                title: 'Уведомления',
                description: 'Включите push-уведомления, чтобы быть в курсе событий.',
                placement: 'right',
            },
            {
                target: '#custom-highlight-button',
                title: 'Сохранить настройки',
                description: 'Нажмите, чтобы применить все изменения.',
                placement: 'top',
            },
        ];

        const renderHighlight = ({ left, top, width, height, borderRadius }: any) => (
            <div
                style={{
                    position: 'fixed',
                    background: 'rgba(0, 102, 255, 0.15)',
                    left,
                    top,
                    width,
                    height,
                    borderRadius,
                    animation: 'plasma-tour-pulse-border 1.4s ease-in-out infinite',
                    pointerEvents: 'none',
                }}
            />
        );

        const renderTourCard = (currentStep: number, length: number, last: boolean, step: any) => (
            <div
                style={{
                    padding: '1.25rem',
                    background: 'var(--surface-solid-card)',
                    borderRadius: '0.75rem',
                    boxShadow: 'var(--shadow-down-soft-s)',
                    maxWidth: '18rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                }}
            >
                {step?.title && <div style={{ fontWeight: 600, fontSize: '1rem' }}>{step.title}</div>}
                {step?.description && (
                    <div style={{ fontSize: '0.875rem', lineHeight: 1.5, opacity: 0.75 }}>{step.description}</div>
                )}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '0.25rem',
                    }}
                >
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {currentStep > 0 && (
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
                    </div>
                    <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>
                        {currentStep + 1} / {length}
                    </span>
                </div>
            </div>
        );

        return (
            <>
                {/* eslint-disable-next-line react/no-danger */}
                <style dangerouslySetInnerHTML={{ __html: PULSE_KEYFRAMES }} />
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
                    <div id="custom-highlight-textfield">
                        <TextField
                            label="Имя пользователя"
                            value={name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        />
                    </div>

                    <Switch
                        id="custom-highlight-switch"
                        label="Push-уведомления"
                        checked={checked}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Button view="secondary" onClick={() => setOpen(true)}>
                            Запустить тур
                        </Button>
                        <Button id="custom-highlight-button" view="default">
                            Сохранить
                        </Button>
                    </div>

                    <TourComponent
                        {...rest}
                        offset={[offset, shift]}
                        open={open}
                        current={current}
                        withOverlay={false}
                        renderHighlight={renderHighlight}
                        onChange={setCurrent}
                        onClose={onClose}
                        renderStep={renderTourCard}
                        steps={steps}
                    />
                </div>
            </>
        );
    };
};

export const createDefaultStory = (TourComponent: React.FC<any>, additionalComponents: AdditionalComponents) => {
    return ({ offset, shift, hasTail, ...rest }: StoryArgs) => {
        const { Button, TextField, Switch, Range, Avatar } = additionalComponents;

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

        const renderTourCard = (currentStep: number, length: number, last: boolean, step: any) => (
            <div
                style={{
                    padding: '1.25rem',
                    background: 'var(--surface-solid-card)',
                    borderRadius: '0.75rem',
                    boxShadow: 'var(--shadow-down-soft-s)',
                    maxWidth: '18rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                }}
            >
                {step?.title && <div style={{ fontWeight: 600, fontSize: '1rem' }}>{step.title}</div>}
                {step?.description && (
                    <div style={{ fontSize: '0.875rem', lineHeight: 1.5, opacity: 0.75 }}>{step.description}</div>
                )}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '0.25rem',
                    }}
                >
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {currentStep > 0 && (
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
                    </div>
                    <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>
                        {currentStep + 1} / {length}
                    </span>
                </div>
            </div>
        );

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

                <TourComponent
                    {...rest}
                    offset={[offset, shift]}
                    open={open}
                    current={current}
                    hasTail={hasTail}
                    onChange={setCurrent}
                    onClose={onClose}
                    renderStep={renderTourCard}
                    steps={steps}
                />
            </div>
        );
    };
};
