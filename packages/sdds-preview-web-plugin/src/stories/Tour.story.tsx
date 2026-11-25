import {
    avatarConfig,
    buttonConfig,
    component,
    mergeConfig,
    rangeConfig,
    switchConfig,
    textFieldConfig,
    tourConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import type { ChangeEvent, CSSProperties, RefObject } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

const Tour = component(mergeConfig(tourConfig as any, {}));
const FallbackButton = component(mergeConfig(buttonConfig as any, {}));
const FallbackTextField = component(mergeConfig(textFieldConfig as any, {}));
const FallbackSwitch = component(mergeConfig(switchConfig as any, {}));
const FallbackRange = component(mergeConfig(rangeConfig as any, {}));
const FallbackAvatar = component(mergeConfig(avatarConfig as any, {}));

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

const sceneStyle: CSSProperties = {
    width: '26rem',
    maxWidth: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '3.25rem 2rem 2rem' /* отступ сверху: под ним переключатель историй сцены */,
};

const cardStyle: CSSProperties = {
    padding: '1.25rem',
    background: 'var(--surface-solid-card)',
    color: 'var(--text-primary)',
    borderRadius: '0.75rem',
    boxShadow: 'var(--shadow-down-soft-s)',
    maxWidth: '18rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
};

/**
 * Tour отрисовывается порталом в `document.body`, вне сцены превью, и не видит её CSS-переменных
 * (токены компонента и темы). Story переносит их inline-стилем на корень Tour.
 */
const useSurfaceVariables = (ref: RefObject<HTMLElement | null>) => {
    const [variables, setVariables] = useState<CSSProperties>({});

    useLayoutEffect(() => {
        const surface = ref.current?.closest<HTMLElement>('[data-preview-surface]');
        const preview = ref.current?.closest<HTMLElement>('[data-preview]');

        if (!surface) {
            return;
        }

        const next: Record<string, string> = {};

        for (let i = 0; i < surface.style.length; i++) {
            const name = surface.style[i];

            if (name.startsWith('--')) {
                next[name] = surface.style.getPropertyValue(name);
            }
        }

        if (preview?.style.fontFamily) {
            next.fontFamily = preview.style.fontFamily;
        }

        // Без массива зависимостей эффект идёт после каждой отрисовки (переменные меняются с payload),
        // поэтому состояние обновляется только при изменении набора значений.
        setVariables((prev) => (JSON.stringify(prev) === JSON.stringify(next) ? prev : (next as CSSProperties)));
    });

    return variables;
};

const resolveComponents = (relatedComponents: any) => ({
    Button: relatedComponents?.Button ?? FallbackButton,
    TextField: relatedComponents?.TextField ?? FallbackTextField,
    Switch: relatedComponents?.Switch ?? FallbackSwitch,
    Range: relatedComponents?.Range ?? FallbackRange,
    Avatar: relatedComponents?.Avatar ?? FallbackAvatar,
});

const tourProps = (args: any) => {
    const { offset, shift, highlightOffset, zIndex, overlayColor, ...rest } = args;

    return {
        ...rest,
        offset: [Number(offset) || 0, Number(shift) || 0] as [number, number],
        highlightOffset: Number(highlightOffset) || 0,
        zIndex: Number(zIndex) || 9000,
        ...(overlayColor ? { overlayColor } : {}),
    };
};

const renderTourCard = (
    Button: any,
    setCurrent: (update: (current: number) => number) => void,
    onClose: () => void,
) => (currentStep: number, length: number, last: boolean, step: any) => (
    <div style={cardStyle}>
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

const TourDefault = {
    name: 'Default',
    args: [
        {
            name: 'withOverlay',
            value: true,
        },
        {
            name: 'offset',
            value: 12,
        },
        {
            name: 'shift',
            value: 12,
        },
        {
            name: 'highlightOffset',
            value: 4,
        },
        {
            name: 'highlightBorderRadius',
            value: '1rem',
        },
        {
            name: 'hasTail',
            value: false,
        },
        {
            name: 'zIndex',
            value: 9000,
        },
        {
            name: 'overlayColor',
            value: '',
        },
    ],
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button, TextField, Switch, Range, Avatar } = resolveComponents(relatedComponents);
        const scene = useRef<HTMLDivElement>(null);
        const surfaceVariables = useSurfaceVariables(scene);
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
                target: '#tour-avatar',
                title: 'Аватар профиля',
                description: 'Здесь отображается ваш аватар. Кликните по нему, чтобы загрузить фотографию.',
                placement: 'right',
                highlightBorderRadius: '50%',
            },
            {
                target: '#tour-textfield',
                title: 'Имя пользователя',
                description: 'Введите ваше имя — оно будет отображаться в профиле и переписке.',
            },
            {
                target: '#tour-switch',
                title: 'Push-уведомления',
                description: 'Включите уведомления, чтобы не пропускать важные события.',
            },
            {
                target: '#tour-range',
                title: 'Возрастной диапазон',
                description: 'Укажите диапазон возраста аудитории для персонализации контента.',
            },
            {
                target: '#tour-button',
                title: 'Сохранить настройки',
                description: 'Нажмите кнопку, чтобы применить все внесённые изменения.',
                placement: 'top',
            },
        ];

        return (
            <div ref={scene} style={sceneStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Avatar id="tour-avatar" size="m" name="Иван Иванов" />
                    <Button view="secondary" onClick={() => setOpen(true)}>
                        Запустить тур
                    </Button>
                </div>

                <div id="tour-textfield">
                    <TextField
                        label="Имя пользователя"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                </div>

                <Switch
                    id="tour-switch"
                    label="Push-уведомления"
                    checked={checked}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
                />

                <Range
                    id="tour-range"
                    label="Возрастной диапазон"
                    firstValue={firstValue}
                    secondValue={secondValue}
                    onChangeFirstValue={(e: ChangeEvent<HTMLInputElement>) => setFirstValue(e.target.value)}
                    onChangeSecondValue={(e: ChangeEvent<HTMLInputElement>) => setSecondValue(e.target.value)}
                />

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button id="tour-button" view="default">
                        Сохранить
                    </Button>
                </div>

                <Tour
                    {...tourProps(args)}
                    style={surfaceVariables}
                    open={open}
                    current={current}
                    onChange={setCurrent}
                    onClose={onClose}
                    renderStep={renderTourCard(Button, setCurrent, onClose)}
                    steps={steps}
                />
            </div>
        );
    },
};

const TourCustomHighlight = {
    name: 'CustomHighlight',
    args: TourDefault.args.filter((arg) => arg.name !== 'withOverlay'),
    render: function Story({ relatedComponents, ...args }: any) {
        const { Button, TextField, Switch } = resolveComponents(relatedComponents);
        const scene = useRef<HTMLDivElement>(null);
        const surfaceVariables = useSurfaceVariables(scene);
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
                target: '#tour-custom-textfield',
                title: 'Имя пользователя',
                description: 'Введите ваше имя — оно будет отображаться в профиле.',
            },
            {
                target: '#tour-custom-switch',
                title: 'Уведомления',
                description: 'Включите push-уведомления, чтобы быть в курсе событий.',
                placement: 'right',
            },
            {
                target: '#tour-custom-button',
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

        return (
            <div ref={scene} style={sceneStyle}>
                <style>{PULSE_KEYFRAMES}</style>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button view="secondary" onClick={() => setOpen(true)}>
                        Запустить тур
                    </Button>
                </div>

                <div id="tour-custom-textfield">
                    <TextField
                        label="Имя пользователя"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                </div>

                <Switch
                    id="tour-custom-switch"
                    label="Push-уведомления"
                    checked={checked}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
                />

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button id="tour-custom-button" view="default">
                        Сохранить
                    </Button>
                </div>

                <Tour
                    {...tourProps(args)}
                    style={surfaceVariables}
                    open={open}
                    current={current}
                    withOverlay={false}
                    renderHighlight={renderHighlight}
                    onChange={setCurrent}
                    onClose={onClose}
                    renderStep={renderTourCard(Button, setCurrent, onClose)}
                    steps={steps}
                />
            </div>
        );
    },
};

export const TourStories = [TourDefault, TourCustomHighlight];
