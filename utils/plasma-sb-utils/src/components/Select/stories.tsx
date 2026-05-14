import React, { useState, useEffect } from 'react';
import { IconPlasma, IconLockOutline } from '@salutejs/plasma-icons';
import styled from 'styled-components';

import { items, flatItems } from './fixtures';

const Container = styled.div`
    width: 100%;

    table {
        border-collapse: collapse;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    th,
    td {
        padding: 15px;
    }

    th {
        text-align: left;
    }

    table,
    th,
    td {
        border: 1px solid #d3d3d3;
        border-collapse: collapse;
    }

    thead {
        th {
            background-color: #55608f;
            color: #fff;
        }
    }

    tbody {
        td {
            position: relative;
        }
    }
`;

const getIconSize = (size?: string) => {
    return size === 'xs' ? 'xs' : 's';
};

const getIcon = (size: string, disabled?: boolean, readOnly?: boolean) => {
    if (disabled) {
        return <IconLockOutline size={getIconSize(size)} />;
    }
    if (readOnly) {
        return <IconLockOutline size={getIconSize(size)} />;
    }
    return undefined;
};

type CustomGetContentType = (size: string, disabled?: boolean, readOnly?: boolean) => JSX.Element | undefined;

export const createSingleStory = (Select: any, customGetContentRight?: CustomGetContentType) => {
    return ({ enableContentLeft, ...rest }: any) => {
        const [value, setValue] = useState('');
        const resolveIcon = customGetContentRight ?? getIcon;

        return (
            <div
                style={{
                    width: '300px',
                }}
            >
                <Select
                    {...rest}
                    items={items}
                    value={value}
                    onChange={setValue}
                    contentLeft={
                        enableContentLeft ? <IconPlasma size={getIconSize(rest.size)} color="inherit" /> : undefined
                    }
                    contentRight={resolveIcon(rest.size, rest.disabled, rest.readOnly)}
                />
            </div>
        );
    };
};

export const createMultipleStory = (Select: any, customGetContentRight?: CustomGetContentType) => {
    return ({ enableContentLeft, ...rest }: any) => {
        const [value, setValue] = useState<Array<string>>([]);
        const resolveIcon = customGetContentRight ?? getIcon;

        return (
            <div style={{ width: '300px' }}>
                <Select
                    {...rest}
                    multiselect
                    items={items}
                    value={value}
                    onChange={setValue}
                    contentLeft={
                        enableContentLeft ? <IconPlasma size={getIconSize(rest.size)} color="inherit" /> : undefined
                    }
                    contentRight={resolveIcon(rest.size, rest.disabled, rest.readOnly)}
                />
            </div>
        );
    };
};

export const createPredefinedStory = (Select: any, customGetContentRight?: CustomGetContentType) => {
    return ({ enableContentLeft, ...rest }: any) => {
        const [valueSingle, setValueSingle] = useState('paris');
        const [valueMultiple, setValueMultiple] = useState(['paris', 'north_america']);
        const resolveIcon = customGetContentRight ?? getIcon;

        return (
            <div style={{ width: '300px' }}>
                <Select
                    {...rest}
                    items={items}
                    value={valueSingle}
                    onChange={setValueSingle}
                    contentLeft={
                        enableContentLeft ? <IconPlasma size={getIconSize(rest.size)} color="inherit" /> : undefined
                    }
                    contentRight={resolveIcon(rest.size, rest.disabled, rest.readOnly)}
                />

                <br />

                <Select
                    {...rest}
                    items={items}
                    multiselect
                    value={valueMultiple}
                    onChange={setValueMultiple}
                    contentLeft={
                        enableContentLeft ? <IconPlasma size={getIconSize(rest.size)} color="inherit" /> : undefined
                    }
                    contentRight={resolveIcon(rest.size, rest.disabled, rest.readOnly)}
                />
            </div>
        );
    };
};

export const createCommonStory = (Select: any) => {
    return ({ enableContentLeft, ...rest }: any) => {
        const [value, setValue] = useState('');
        const [valueMultiple, setValueMultiple] = useState<Array<string>>([]);

        return (
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>View &#8595;</th>
                            <th>Single Button</th>
                            <th>Multiple Button</th>
                            <th>Single Textfield</th>
                            <th>Multiple Textfield</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Default</td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="default"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="default"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="default"
                                        contentLeft={
                                            enableContentLeft ? (
                                                <IconPlasma size={getIconSize(rest.size)} color="inherit" />
                                            ) : undefined
                                        }
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="default"
                                        contentLeft={
                                            enableContentLeft ? (
                                                <IconPlasma size={getIconSize(rest.size)} color="inherit" />
                                            ) : undefined
                                        }
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Accent</td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="accent"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="accent"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td>Secondary</td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="secondary"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="secondary"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td>Clear</td>

                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="clear"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="clear"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td>Positive</td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="positive"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="positive"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="positive"
                                        contentLeft={
                                            enableContentLeft ? (
                                                <IconPlasma size={getIconSize(rest.size)} color="inherit" />
                                            ) : undefined
                                        }
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="positive"
                                        contentLeft={
                                            enableContentLeft ? (
                                                <IconPlasma size={getIconSize(rest.size)} color="inherit" />
                                            ) : undefined
                                        }
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Warning</td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="warning"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="warning"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="warning"
                                        contentLeft={
                                            enableContentLeft ? (
                                                <IconPlasma size={getIconSize(rest.size)} color="inherit" />
                                            ) : undefined
                                        }
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="warning"
                                        contentLeft={
                                            enableContentLeft ? (
                                                <IconPlasma size={getIconSize(rest.size)} color="inherit" />
                                            ) : undefined
                                        }
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Negative</td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="negative"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="negative"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="negative"
                                        contentLeft={
                                            enableContentLeft ? (
                                                <IconPlasma size={getIconSize(rest.size)} color="inherit" />
                                            ) : undefined
                                        }
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="negative"
                                        contentLeft={
                                            enableContentLeft ? (
                                                <IconPlasma size={getIconSize(rest.size)} color="inherit" />
                                            ) : undefined
                                        }
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Dark</td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="dark"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="dark"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td>Black</td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="black"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="black"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td>White</td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        items={items}
                                        value={value}
                                        onChange={setValue}
                                        view="white"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td>
                                <div style={{ width: '200px' }}>
                                    <Select
                                        {...rest}
                                        multiselect
                                        items={items}
                                        value={valueMultiple}
                                        onChange={setValueMultiple}
                                        view="white"
                                        target="button-like"
                                    />
                                </div>
                            </td>
                            <td />
                            <td />
                        </tr>
                    </tbody>
                </table>
            </Container>
        );
    };
};

export const createSelectAllStory = (Select: any) => {
    return ({ ...rest }: any) => {
        const [value, setValue] = useState<string[]>([]);
        const [checked, setChecked] = useState(false);
        const [indeterminate, setIndeterminate] = useState(false);

        const handleClick = () => {
            if (checked && !indeterminate) {
                setValue([]);
            } else {
                setValue(flatItems.map((item) => item.value));
            }
        };

        useEffect(() => {
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
                <Select
                    placeholder="Placeholder"
                    multiselect
                    items={flatItems}
                    value={value}
                    onChange={setValue}
                    listOverflow="auto"
                    listMaxHeight="300px"
                    selectAllOptions={{
                        sticky: rest?.selectAllSticky || false,
                        label: rest?.selectAllLabel,
                        checked,
                        indeterminate,
                        onClick: handleClick,
                    }}
                />
            </div>
        );
    };
};
