import { useCallback } from 'react';
import { isSberPortal } from '@salutejs/plasma-ui';
import { AssistantNavigationCommand } from '@salutejs/client';

import { Axis } from '../../../types';

import { useAssistantOnNavigation } from './useAssistantOnNavigation';

const defaultStepSize = isSberPortal() ? 3 : 4;

export interface UseVoiceNavigationProps {
    index: number;
    setIndex: (value: number) => void;
    axis: Axis;
    maxIndex: number;
    minIndex?: number;
    stepSize?: number;
    disabled?: boolean;
    main?: boolean;
}

export const navigateByVoice = (
    {
        index,
        setIndex,
        minIndex = 0,
        maxIndex,
        stepSize = defaultStepSize,
        disabled,
        axis,
        main,
    }: UseVoiceNavigationProps,
    command: AssistantNavigationCommand,
) => {
    if (disabled) {
        return;
    }

    const direction = command.navigation.command;

    const isNext = axis === 'x' ? direction === 'RIGHT' : direction === 'DOWN';
    const isPrevious = axis === 'x' ? direction === 'LEFT' : direction === 'UP';

    if (isNext || (main && direction === 'FORWARD')) {
        setIndex(maxIndex ? Math.min(maxIndex, index + stepSize) : index + stepSize);
    } else if (isPrevious) {
        setIndex(Math.max(minIndex, index - stepSize));
    }
};

export const useVoiceNavigation = (props: UseVoiceNavigationProps): void => {
    useAssistantOnNavigation((command) => navigateByVoice(props, command));
};

type Direction = 'left' | 'right' | 'up' | 'down';

interface UseVoiceNavigationWithSpatNavProps {
    axis: Axis;
    main?: boolean;
    /**
     * Функция вызова пространственной навигации, например:
     * const navigate = (direction) => window.navigate(direction);
     */
    navigate?: (direction: Direction) => void;
}

const defaultSpatNavNavigate = (direction: Direction) => {
    window.navigate(direction);
};

export const useVoiceNavigationWithSpatNav = ({
    axis,
    main,
    navigate = defaultSpatNavNavigate,
}: UseVoiceNavigationWithSpatNavProps): void => {
    const onNavigate = useCallback(
        (command: AssistantNavigationCommand) => {
            const direction = command.navigation.command;

            if (axis === 'x') {
                switch (direction) {
                    case 'LEFT':
                        navigate('left');
                        break;
                    case 'RIGHT':
                        navigate('right');
                        break;
                    case 'FORWARD': {
                        if (main) {
                            navigate('right');
                        }
                        break;
                    }
                    default:
                }
            } else {
                switch (direction) {
                    case 'DOWN':
                        navigate('down');
                        break;
                    case 'UP':
                        navigate('up');
                        break;
                    case 'FORWARD': {
                        if (main) {
                            navigate('down');
                        }
                        break;
                    }
                    default:
                }
            }
        },
        [axis, main],
    );

    useAssistantOnNavigation(onNavigate);
};
