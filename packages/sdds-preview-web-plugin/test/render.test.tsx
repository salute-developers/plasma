import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { parseWebPayload } from '../src/payload';
import { registry } from '../src/registry';
import { PreviewSurface, storyProps } from '../src/render';

import { webButtonPayload } from './fixtures';

const fixtureRequest = () => {
    const parsed = parseWebPayload(webButtonPayload());
    if (!parsed.ok) throw new Error(parsed.message);
    return parsed.request;
};

describe('PreviewSurface по payload общего формата', () => {
    it('задаёт фон, шрифт, @font-face, CSS-переменные темы и ядра и рисует Button с текстом из example.props', async () => {
        const request = fixtureRequest();
        const onRendered = vi.fn();
        const { container } = render(
            <PreviewSurface
                renderId={1}
                request={request}
                story={registry.Button.stories[0]}
                onRendered={onRendered}
                onCrash={vi.fn()}
            />,
        );

        const surface = container.querySelector<HTMLElement>('[data-preview-surface]')!;
        expect(surface.style.getPropertyValue('--plasma-button-background-color')).toBe('#2A72F8FF');
        expect(surface.style.getPropertyValue('--plasma-button-background-color-hover')).toBe('#3F81FDFF');
        expect(surface.style.getPropertyValue('--plasma-button-background-color-active')).toBe('#2462D6FF');
        expect(surface.style.getPropertyValue('--plasma-button-height')).toBe('3rem');
        expect(surface.style.getPropertyValue('--text-primary')).toBe('#FFFFFFF5');
        expect(surface.style.getPropertyValue('--background-primary')).toBe('#000000FF');
        expect(surface.style.background).not.toBe('');
        expect(container.querySelector<HTMLElement>('[data-preview]')!.style.fontFamily).toContain('fontFamily.body');
        expect(container.querySelector('style[data-preview-fonts]')!.textContent).toContain('Body-Semibold.woff2');

        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Купить');
        expect(button).not.toBeDisabled();
        await vi.waitFor(() => expect(onRendered).toHaveBeenCalledTimes(1));
    });

    it('передаёт story значения по умолчанию, example.props и имена стилей вариаций', () => {
        const request = {
            ...fixtureRequest(),
            variations: { view: 'accent', pin: 'true' },
            example: { id: 'Default', props: { disabled: true } },
        };
        expect(storyProps(request, registry.Button.stories[0])).toEqual({
            disabled: true,
            isLoading: false,
            stretching: 'fixed',
            contentPlacing: 'default',
            value: 'value',
            text: 'Text',
            enableContentLeft: true,
            enableContentRight: false,
            view: 'accent',
            pin: true,
        });
    });
});
