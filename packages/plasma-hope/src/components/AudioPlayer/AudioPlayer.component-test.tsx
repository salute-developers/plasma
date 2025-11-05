import React from 'react';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('plasma-hope: AudioPlayer', () => {
    const AudioPlayer = getComponent('AudioPlayer');

    const item = {
        name: 'Kavinsky - Nightcall',
        duration: 128,
        isPlaying: false,
        isSelected: false,
    };

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <AudioPlayer
                    title={item.name}
                    duration={item.duration}
                    isPlaying={item.isPlaying}
                    isSelected={item.isSelected}
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_isPlaying', () => {
        mount(
            <CypressTestDecorator>
                <AudioPlayer title={item.name} duration={item.duration} isSelected={item.isSelected} />
                <PadMe />
                <AudioPlayer title={item.name} duration={item.duration} isSelected={item.isSelected} isPlaying />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_isSelected', () => {
        mount(
            <CypressTestDecorator>
                <AudioPlayer title={item.name} duration={item.duration} isPlaying={item.isPlaying} />
                <PadMe />
                <AudioPlayer title={item.name} duration={item.duration} isPlaying={item.isPlaying} isSelected />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
