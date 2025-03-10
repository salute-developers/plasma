import React, { useRef } from 'react';
import type { FC } from 'react';
import styled, { css } from 'styled-components';
import { footnote1 } from '@salutejs/plasma-core';
import { IconPlay, IconPause, IconTrashFilled } from '@salutejs/plasma-icons';

import { useAudioPlayer, formatSecondsToMintues } from './utils';

const ButtonDelete = styled.button`
    position: absolute;
    right: 1.25rem;
    top: 1.25rem;

    display: none;
    padding-top: 0;
    padding-bottom: 0;
    line-height: 0;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    svg {
        color: var(--surface-transparent-tertiary);
    }

    &:hover {
        svg {
            color: var(--text-primary);
        }
    }
`;

export const StyledControl = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;

    display: flex;
`;

const StyledContainer = styled.div<{ isSelected: boolean; isDisabled: boolean }>`
    position: relative;

    display: flex;
    align-items: center;
    box-sizing: border-box;

    width: 100%;
    height: 4rem;
    padding: 1.25rem 1rem;

    appearance: none;
    border-radius: 0.75rem;

    cursor: pointer;

    ${({ isSelected }) =>
        isSelected &&
        css`
            background-color: var(--surface-transparent-tertiary);
        `}

    ${StyledControl} {
        ${({ isDisabled }) =>
            isDisabled &&
            css`
                opacity: 0.24;
                pointer-events: none;
            `}
    }
`;

const StyledDuration = styled.div`
    position: absolute;
    right: 1rem;

    text-align: right;

    color: var(--text-primary);

    mix-blend-mode: normal;
    opacity: 0.5;
`;

const StyledRoot = styled.div`
    ${footnote1};

    position: relative;
    width: 100%;

    &:hover ${ButtonDelete} {
        display: block;
    }

    &:hover ${StyledDuration} {
        display: none;
    }

    &:hover ${StyledContainer} {
        background-color: var(--surface-transparent-secondary);
    }
`;

const StyledTitle = styled.div`
    margin-left: 1rem;
    color: var(--text-primary);
`;

export interface AudioPlayerProps {
    /**
     * Название трека.
     */
    title: string;
    /**
     * Адрес расположения трека.
     */
    url: string;
    /**
     * Длительность трека в секундах.
     */
    duration?: number;
    /**
     * Выделен ли компонент.
     */
    isSelected: boolean;
    /**
     * Воспроизводится ли трек.
     */
    isPlaying: boolean;
    /**
     * Можно ли удалить компонент.
     */
    canDelete: boolean;
    /**
     * Callback на клик по компоненту.
     */
    onClick: () => void;
    /**
     * Callback на удаление компонента.
     */
    onDelete: () => void;
    /**
     * Callback на воспроизведение трека.
     */
    onPlay: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

/**
 * Компонент для воспроизведения аудио.
 */
export const AudioPlayer: FC<AudioPlayerProps> = ({
    title,
    duration,
    url,
    isPlaying,
    isSelected,
    canDelete,
    onClick,
    onDelete,
    onPlay,
    ...props
}) => {
    const ref = useRef<HTMLAudioElement>();

    const [canPlaying] = useAudioPlayer(url, isPlaying, ref);

    return (
        <StyledRoot {...props}>
            <StyledContainer isSelected={isSelected} isDisabled={!canPlaying} onClick={onClick}>
                <StyledControl onClick={onPlay}>{isPlaying ? <IconPause /> : <IconPlay />}</StyledControl>
                <StyledTitle>{title}</StyledTitle>
                {duration && <StyledDuration>{formatSecondsToMintues(duration)}</StyledDuration>}
            </StyledContainer>

            {canDelete && (
                <ButtonDelete type="button" onClick={onDelete}>
                    <IconTrashFilled />
                </ButtonDelete>
            )}
        </StyledRoot>
    );
};
