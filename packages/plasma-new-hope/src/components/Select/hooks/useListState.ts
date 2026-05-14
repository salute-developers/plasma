import { useReducer } from 'react';
import type { RefObject } from 'react';

import { pathReducer, focusedPathReducer, treePathReducer } from '../reducers';
import type { SelectProps } from '../Select.types';

type Props = Pick<SelectProps, 'disabled' | 'readOnly' | 'onToggle' | 'multiselect'> & {
    rootRef: RefObject<HTMLDivElement>;
};

export const useListState = ({ disabled, readOnly, onToggle, multiselect, rootRef }: Props) => {
    const [path, dispatchPath] = useReducer(pathReducer, []);
    const [treePath, dispatchTreePath] = useReducer(treePathReducer, {});
    const [focusedPath, dispatchFocusedPath] = useReducer(focusedPathReducer, []);

    const resetListState = () => {
        dispatchFocusedPath({ type: 'reset' });
        dispatchPath({ type: 'reset' });
        dispatchTreePath({ type: 'reset' });
    };

    const handleListToggle = (opened: boolean) => {
        if (disabled || readOnly) {
            return;
        }

        if (opened) {
            dispatchPath({ type: 'opened_first_level' });
        } else {
            // При закрытии ресетим все состояния.
            resetListState();

            const chipsWrapperNode = rootRef?.current?.querySelector<HTMLElement>('.input-scrollable-wrapper');

            // И скроллим чипы влево (при multiselect).
            if (multiselect && chipsWrapperNode) {
                chipsWrapperNode.scrollLeft = 0;
            }
        }

        onToggle?.(opened);
    };

    return {
        path,
        treePath,
        focusedPath,
        dispatchPath,
        dispatchTreePath,
        dispatchFocusedPath,
        handleListToggle,
        resetListState,
        isListOpened: Boolean(path[0]),
    };
};
