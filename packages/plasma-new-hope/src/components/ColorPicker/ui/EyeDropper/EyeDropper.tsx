import React, { useState } from 'react';
import html2canvas from 'html2canvas';
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

    const takePick = () => {
        const rootEl = document.getElementById('root') ?? document.body;
        setCoverUp(true);

        html2canvas(rootEl).then((canvas: HTMLCanvasElement) => {
            const blankCanvas = document.createElement('canvas');
            const ctx = blankCanvas.getContext('2d', { willReadFrequently: true });
            if (!ctx) return;

            blankCanvas.width = rootEl.offsetWidth * 2;
            blankCanvas.height = rootEl.offsetHeight * 2;
            ctx.drawImage(canvas, 0, 0);
            setPickerCanvas(ctx);
        });
    };

    const getColorLegacy = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (pickerCanvas) {
            const x = e.pageX * 2;
            const y = e.pageY * 2;
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
            .catch((e: unknown) => {
                console.warn('EyeDropper отменён или не удался:', e);
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
