import React, { useState } from 'react';
import { IconDone } from '@salutejs/plasma-icons';

import { flatItems, items, shortListItems } from './fixtures';

const getIconSize = (size?: string) => {
    return size === 'xs' ? 'xs' : 's';
};

export const createSingleStory = (Combobox: any) => {
    return ({ enableContentLeft, ...rest }: any) => {
        const [value, setValue] = useState('');

        return (
            <div style={{ width: '400px' }}>
                <Combobox
                    {...rest}
                    items={items}
                    value={value}
                    onChange={setValue}
                    contentLeft={enableContentLeft ? <IconDone size={getIconSize(rest.size)} /> : undefined}
                />
            </div>
        );
    };
};

export const createMultipleStory = (Combobox: any) => {
    return ({ enableContentLeft, ...rest }: any) => {
        const [value, setValue] = useState<Array<string>>([]);

        return (
            <div style={{ width: '400px' }}>
                <Combobox
                    {...rest}
                    multiple
                    items={items}
                    value={value}
                    onChange={setValue}
                    contentLeft={enableContentLeft ? <IconDone size={getIconSize(rest.size)} /> : undefined}
                />
            </div>
        );
    };
};

export const createSelectAllStory = (Combobox: any) => {
    return ({ selectAllLabel, selectAllSticky }: any) => {
        const [value, setValue] = useState<Array<string>>([]);
        const [checked, setChecked] = useState(false);
        const [indeterminate, setIndeterminate] = useState(false);

        const handleClick = () => {
            if (checked && !indeterminate) {
                setValue([]);
            } else {
                setValue(flatItems.map((item) => item.value));
            }
        };

        React.useEffect(() => {
            if (value.length === 0) {
                setChecked(false);
                setIndeterminate(false);
            } else if (value.length === flatItems.length) {
                setChecked(true);
                setIndeterminate(false);
            } else {
                setChecked(true);
                setIndeterminate(true);
            }
        }, [value]);

        return (
            <div style={{ width: '400px' }}>
                <Combobox
                    placeholder="Placeholder"
                    multiple
                    items={flatItems}
                    value={value}
                    onChange={setValue}
                    listMaxHeight="300px"
                    selectAllOptions={{
                        sticky: selectAllSticky || false,
                        label: selectAllLabel,
                        checked,
                        indeterminate,
                        onClick: handleClick,
                    }}
                />
            </div>
        );
    };
};

export const createAddItemStory = (Combobox: any) => {
    return ({ helperText, emptyStateDescription }: any) => {
        const [currentItems, setItems] = useState(shortListItems);
        const [value, setValue] = useState<Array<string>>([]);
        const [textValue, setTextValue] = useState('');

        const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                setItems([...currentItems, { value: textValue, label: textValue }]);
                setValue([...value, textValue]);
                setTextValue('');
            }
        };

        return (
            <div style={{ width: '400px' }}>
                <Combobox
                    multiple
                    label="Label"
                    placeholder="Placeholder"
                    items={currentItems}
                    value={value}
                    onChange={setValue}
                    onChangeValue={setTextValue}
                    onKeyDown={handleKeyDown}
                    helperText={helperText}
                    emptyStateDescription={emptyStateDescription}
                />
            </div>
        );
    };
};
