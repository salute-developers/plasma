'use client';

import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react';

import { buttonConfig } from '@salutejs/plasma-new-hope';
import { component, mergeConfig } from '@salutejs/plasma-new-hope';

// @ts-ignore
import { h2 } from '@salutejs/plasma-typo/lib/esm/tokens';

import styles from './modifier.module.css';

export interface ModifierProps {
    name: string;
    tokenAPI: TokenAPI;
    componentTheme: any;
}

type TokenAPI = Array<string>;
type TokenMap = Record<string, string>;

function emptyAPI(tokenAPI: Modifier['tokenAPI']) {
    return tokenAPI.reduce<Modifier['values'][string]>((acc, token) => {
        acc[token] = '';
        return acc;
    }, {});
}

export function ModifierBuilder(props: ModifierProps) {
    const { name, tokenAPI } = props;
    const { componentTheme } = props;

    const intial = componentTheme['components']['button']['variations'][name] || {};

    const [modValues, setModValues] = useState<Modifier['values']>(intial);

    const addModValue = (newName: string) => {
        setModValues({
            ...modValues,
            [newName]: emptyAPI(tokenAPI),
        });
    };

    const removeModValue = (name: string) => {
        const newVal = {} as Modifier['values'];
        for (const key in modValues) {
            if (key !== name) {
                newVal[key] = modValues[key];
            }
        }
        setModValues(newVal);
    };

    return (
        <div className={styles.modifier}>
            <b className={styles.gap}>{name}</b>

            <AddModName onAdd={addModValue} />

            <div className={styles.vgap} />

            <ModValues onRemove={removeModValue} modValues={modValues} />

            {/* <Preview modName={name} modValues /> */}
        </div>
    );
}

function AddModName({ onAdd }: { onAdd: (value: string) => void }) {
    const [newVal, setNewVal] = useState('');

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewVal(e.target.value);
    };

    const onClick: MouseEventHandler<HTMLButtonElement> = () => {
        onAdd(newVal);
        setNewVal('');
    };

    return (
        <>
            <input onChange={onChange} type="text" placeholder="mod name" value={newVal} />
            <button onClick={onClick} disabled={newVal === ''}>
                Add modifier
            </button>
        </>
    );
}

function ModValues({ modValues, onRemove }: { modValues: Modifier['values']; onRemove: (value: string) => void }) {
    return (
        <>
            {Object.entries(modValues).map((mod) => {
                const [modVal, tokenAPI] = mod;

                return (
                    <div key={modVal}>
                        <span className={styles.gap}>{modVal}</span>
                        <button onClick={() => onRemove(modVal)}>del</button>
                        <ul>
                            {Object.entries(tokenAPI).map(([token, value]) => (
                                <li key={token}>
                                    {token} <input type="text" value={value} onChange={() => {}} />
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </>
    );
}

interface PreviewProps {}

function Preview(props: PreviewProps) {
    const cong = mergeConfig(buttonConfig);

    const Button = component(cong);

    return (
        <div className={styles.preview}>
            <Button>hello button</Button>
        </div>
    );
}

export interface ComponentBuilderProps {
    name: string;
    modsAPI: Record<string, Array<string>>;
    theme: {
        name: string;
        data: JSON;
    };
}

export function ComponentBuilder({ name, modsAPI, theme }: ComponentBuilderProps) {
    return (
        <>
            <h2 style={h2}>Component: {name} </h2>
            <button>save</button>
            {Object.entries(modsAPI).map((el) => {
                const [name, tokens] = el;

                return <ModifierBuilder key={name} name={name} tokenAPI={tokens} componentTheme={theme.data} />;
            })}
        </>
    );
}

function Themes() {}

type ComponentModifiers = Array<Modifier>;

interface Modifier {
    name: string;
    tokenAPI: TokenAPI;
    values: Record<
        string,
        {
            [key in Modifier['tokenAPI'][number]]: string;
        }
    >;
}

type Action = {
    type: 'add_mod_val';
    modName: string;
    name: string;
};

function reducer(state: ComponentModifiers, action: Action) {
    switch (action.type) {
        case 'add_mod_val':
            return state.filter((mod) => {
                if (mod.name === action.modName) {
                }
            });
    }
}
