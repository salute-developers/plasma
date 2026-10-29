import React, { useEffect, useRef, useState } from 'react';
import tc from 'tinycolor2';

import { Portal } from '../../../Portal';
import { StyledButton } from '../Button';
import { DropperIcon } from '../icons';

interface EyeDropperResult {
    sRGBHex: string;
}

interface EyeDropper {
    open(options?: { signal?: AbortSignal }): Promise<EyeDropperResult>;
}

declare global {
    interface Window {
        EyeDropper?: new () => EyeDropper;
    }
}

interface DropperProps {
    onSelect: (color: string) => void;
    /** Custom External Dropper Button */
    dropperButtonSlot?: (onClick: VoidFunction) => React.ReactNode;
}

export const Dropper = ({ onSelect, dropperButtonSlot }: DropperProps) => {
    const [pickerCanvas, setPickerCanvas] = useState<CanvasRenderingContext2D | null>(null);
    const [coverUp, setCoverUp] = useState(false);
    const snapshotScale = useRef(1);

    // Снимок страницы живёт только пока открыт оверлей — он весит два вьюпорта.
    useEffect(() => {
        if (!coverUp && pickerCanvas) {
            setPickerCanvas(null);
        }
    }, [coverUp, pickerCanvas]);

    const takePick = async () => {
        const rootEl = document.body;
        const scale = window.devicePixelRatio || 1;

        setCoverUp(true);

        try {
            // html2canvas нужен только там, где нет нативного EyeDropper, — не тянем его в основной бандл.
            const { default: html2canvas } = await import('html2canvas');
            const canvas = await html2canvas(rootEl, { scale });

            const blankCanvas = document.createElement('canvas');
            blankCanvas.width = rootEl.offsetWidth * scale;
            blankCanvas.height = rootEl.offsetHeight * scale;

            const ctx = blankCanvas.getContext('2d', { willReadFrequently: true });
            if (!ctx) {
                setCoverUp(false);
                return;
            }

            ctx.drawImage(canvas, 0, 0);
            snapshotScale.current = scale;
            setPickerCanvas(ctx);
        } catch {
            // Без снимка выбирать нечего — закрываем оверлей, иначе он навсегда перекроет страницу.
            setCoverUp(false);
        }
    };

    const getColorLegacy = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (pickerCanvas) {
            const scale = snapshotScale.current;
            const x = e.pageX * scale;
            const y = e.pageY * scale;
            const rgb = pickerCanvas.getImageData(x, y, 1, 1).data;
            onSelect(`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`);
        }
        setCoverUp(false);
    };

    const getEyeDrop = () => {
        if (!window.EyeDropper) {
            takePick();
            return;
        }

        const eyeDropper = new window.EyeDropper();
        const abortController = new AbortController();

        eyeDropper
            .open({ signal: abortController.signal })
            .then((result) => {
                const { r, g, b } = tc(result.sRGBHex).toRgb();
                onSelect(`rgba(${r}, ${g}, ${b}, 1)`);
            })
            .catch(() => {
                /* Пользователь закрыл пипетку — ничего не делаем. */
            });
    };

    return (
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            {dropperButtonSlot ? (
                dropperButtonSlot(getEyeDrop)
            ) : (
                <StyledButton
                    size="xs"
                    onClick={getEyeDrop}
                    view="secondary"
                    id="plasma-color-picker-eyedropper-btn"
                    aria-label="Выбери цвета с экрана"
                    style={{
                        borderRadius: '50%',
                        maxWidth: 32,
                        padding: 8,
                        height: 'auto',
                    }}
                >
                    <DropperIcon />
                </StyledButton>
            )}

            {coverUp ? (
                <Portal container={() => document.body}>
                    <div
                        onClick={getColorLegacy}
                        onKeyDown={(e) => {
                            if (e.key === 'Escape') setCoverUp(false);
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label="Нажми для выбора цвета"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            cursor: 'crosshair',
                            zIndex: 9999,
                        }}
                    />
                </Portal>
            ) : null}
        </div>
    );
};
