import React from 'react';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('plasma-b2c: AudioPlayer', () => {
    const AudioPlayer = getComponent('AudioPlayer');

    const item = {
        name: 'Kavinsky - Nightcall',
        duration: 128,
        isPlaying: false,
        isSelected: false,
    };

    it('[PLASMA-T1767] AudioPlayer: default', () => {
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

    it('[PLASMA-T1768] AudioPlayer: isPlaying', () => {
        mount(
            <CypressTestDecorator>
                <AudioPlayer title={item.name} duration={item.duration} isSelected={item.isSelected} isPlaying />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2001] AudioPlayer: isSelected', () => {
        mount(
            <CypressTestDecorator>
                <AudioPlayer title={item.name} duration={item.duration} isPlaying={item.isPlaying} isSelected />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
