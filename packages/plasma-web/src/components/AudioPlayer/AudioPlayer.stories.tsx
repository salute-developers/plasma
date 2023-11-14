import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { AudioPlayer } from '.';
import type { AudioPlayerProps } from '.';

const meta: Meta<AudioPlayerProps> = {
    title: 'Controls/AudioPlayer',
    component: AudioPlayer,
    decorators: [InSpacingDecorator],
};

export default meta;

const StyledWrapper = styled.div`
    width: 23.75rem;
`;

const song = {
    name: 'I’m Not Okay',
    duration: 128,
    id: 123,
    file:
        'https://vc-static.sberdevices.ru/smartmarket-video-news/media/uploads/15/159f025fe48c54f70b7a4041edbb413044f01a61.mp3',
    canDelete: true,
};

const StoryBase = (props: AudioPlayerProps) => {
    const [state, setState] = useState({
        isSelected: false,
        isPlaying: false,
    });

    const onSelect = useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            isSelected: !prevState.isSelected,
        }));
    }, []);

    const onPlay = useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            isPlaying: !prevState.isPlaying,
        }));
    }, []);

    const onDelete = useCallback((id: number) => {
        // eslint-disable-next-line no-alert
        alert(`Трек id:${id} будет удалён`);
    }, []);

    return (
        <StyledWrapper>
            <AudioPlayer
                title={song.name}
                duration={song.duration}
                url={song.file}
                isPlaying={state.isPlaying}
                isSelected={state.isSelected}
                canDelete={song.canDelete}
                onClick={onSelect}
                onDelete={() => onDelete(song.id)}
                onPlay={(event) => {
                    event.stopPropagation();
                    onPlay();
                }}
                {...props}
            />
        </StyledWrapper>
    );
};

export const Base: StoryObj<AudioPlayerProps> = {
    render: (args) => <StoryBase {...args} />,
};
