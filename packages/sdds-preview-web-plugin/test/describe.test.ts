import { describe, expect, it } from 'vitest';

import { describeStory } from '../src/describe';
import { registry } from '../src/registry';
import { storyProps } from '../src/render';
import type { WebPreviewRequest } from '../src/protocol';

describe('describe: запрещённые протоколом имена аргументов', () => {
    it('ни одно описание story не содержит variant и appearance', () => {
        for (const [component, entry] of Object.entries(registry)) {
            for (const story of entry.stories) {
                const names = describeStory(component, entry, story).properties.map((property) => property.name);
                expect(names, `${component}/${story.name}`).not.toContain('variant');
                expect(names, `${component}/${story.name}`).not.toContain('appearance');
            }
        }
    });

    it('аргумент variant идёт в протоколе как storyVariant и возвращается пропсом variant', () => {
        const entry = registry.Select;
        const story = entry.stories[0];
        expect(describeStory('Select', entry, story).properties.map((property) => property.name)).toContain(
            'storyVariant',
        );
        const request = ({
            example: { props: { storyVariant: 'tight' } },
            variations: {},
        } as unknown) as WebPreviewRequest;
        expect(storyProps(request, story)).toMatchObject({ variant: 'tight' });
        expect(storyProps(request, story)).not.toHaveProperty('storyVariant');
    });
});
