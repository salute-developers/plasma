import { useReducer } from 'react';
import type { Dispatch, RefObject } from 'react';

import { pathReducer, focusedPathReducer, treePathReducer } from '../reducers';
import type { ComboboxProps } from '../Combobox.types';
import type {
    FocusedPathAction,
    FocusedPathState,
    PathAction,
    PathState,
    TreePathAction,
    TreePathState,
} from '../reducers';
import { getTextValue } from '../utils';
import { classes } from '../Combobox.tokens';

import type { ValueToItemMapType } from './usePathMaps';

type Props = Pick<ComboboxProps, 'disabled' | 'readOnly' | 'onToggle' | 'multiple' | 'alwaysOpened' | 'renderValue'> & {
    rootRef: RefObject<HTMLInputElement>;
    value: ComboboxProps['value'];
    valueToItemMap: ValueToItemMapType;
    setTextValue: (newTextValue: string) => void;
};

type ReturnedProps = {
    path: PathState;
    treePath: TreePathState;
    focusedPath: FocusedPathState;
    dispatchPath: Dispatch<PathAction>;
    dispatchTreePath: Dispatch<TreePathAction>;
    dispatchFocusedPath: Dispatch<FocusedPathAction>;
    handleListToggle: (opened: boolean) => void;
    resetListState: () => void;
    isListOpened: boolean;
};

export const useListState = ({
    disabled,
    readOnly,
    onToggle,
    multiple,
    alwaysOpened,
    renderValue,
    rootRef,
    value,
    valueToItemMap,
    setTextValue,
}: Props): ReturnedProps => {
    const [path, dispatchPath] = useReducer(pathReducer, alwaysOpened ? ['root'] : []);
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
            resetListState();

            setTextValue(getTextValue(multiple, value, valueToItemMap, renderValue));

            const chipsWrapperNode = rootRef?.current?.querySelector<HTMLElement>(`.${classes.inputScrollableWrapper}`);

            if (multiple && chipsWrapperNode) {
                chipsWrapperNode.scrollLeft = 0;
            }
        }

        if (onToggle) {
            onToggle(opened);
        }
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
