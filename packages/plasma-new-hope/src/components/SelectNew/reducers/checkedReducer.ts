import { updateDescendants, updateAncestors, updateSingleAncestors } from '../utils';

export type CheckedState = any;

export type CheckedAction =
    | { type: 'checkbox_changed'; item: any; setValues: any; valueToItemMap: any }
    | { type: 'item_clicked'; item: any; setValues: any };

export function checkedReducer(state: CheckedState, action: CheckedAction): CheckedState {
    switch (action.type) {
        case 'checkbox_changed': {
            const checkedCopy = new Map(state);

            if (!checkedCopy.get(action.item.value)) {
                checkedCopy.set(action.item.value, true);
                updateDescendants(action.item, checkedCopy, true);
            } else {
                checkedCopy.set(action.item.value, false);
                updateDescendants(action.item, checkedCopy, false);
            }

            updateAncestors(action.item, checkedCopy);

            const newValues = [];

            action.valueToItemMap.forEach((value, key) => {
                if (checkedCopy.get(key)) {
                    newValues.push(value.value);
                }
            });

            action.setValues(newValues);

            return checkedCopy;
        }

        case 'item_clicked': {
            const checkedCopy = new Map(state);

            const isCurrentChecked = checkedCopy.get(action.item.value);

            checkedCopy.forEach((_, key) => {
                checkedCopy.set(key, false);
            });

            if (!isCurrentChecked) {
                checkedCopy.set(action.item.value, 'done');
                updateSingleAncestors(action.item, checkedCopy, 'dot');
            }

            action.setValues(isCurrentChecked ? null : action.item.value);

            return checkedCopy;
        }

        default: {
            return state;
        }
    }
}
