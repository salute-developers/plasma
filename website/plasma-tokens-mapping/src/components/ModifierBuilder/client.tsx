'use client';

import React, { useState, PropsWithChildren } from 'react';

import { styled } from '@linaria/react';

import { h2, h3, textM, bodyM } from '@salutejs/plasma-typo';

import { useTheme, useThemeDispatch, ModifierTokensAPI, TokenObject } from '../../state';
import { ChangeEventHandler } from 'react';
import { Preview } from '../Preview/client';

import { typo } from '../../tokens';

const plasmaTokens = {
    typo,
};

export const Headline2 = styled.h1`
    ${h2}
    margin: 0;
    margin-right: 0.5rem;
`;

export const Headline3 = styled.h1`
    ${h3}
    margin: 0;
    margin-right: 0.5rem;
`;

export const Root = styled.div`
    margin: 1rem;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    display: flex;
    ${bodyM}
`;


export interface ModValueProps {
    name: string;
    modName: string;
    componentName: string;
    tokenAPI: ModifierTokensAPI;
    isDefault: boolean;
}

// TODO: Token nornalization

const generateEmptyTokens = (tokenAPI: ModifierTokensAPI): Record<string, TokenObject> => {
    if (Array.isArray(tokenAPI)) {
        return tokenAPI.reduce<Record<string, TokenObject>>((acc, key) => {
            if (typeof key === 'string') {
                acc[key] = '';
            } else {
                acc[key.name] = key;
            }
            return acc;
        }, {});
    } else {
        return tokenAPI.tokens.reduce<Record<string, TokenObject>>((acc, key) => {
            if (typeof key === 'string') {
                acc[key] = '';
            } else {
                acc[key.name] = key;
            }
            return acc;
        }, {});
    }
}

export function ModValueClient(props: PropsWithChildren<ModValueProps>) {
    const { name, modName, componentName, tokenAPI, isDefault } = props;

    const theme = useTheme();
    const dispatch = useThemeDispatch();

    const _tokens = theme.components[componentName].variations[modName][name];


    const isNew = Object.keys(_tokens).length === 0;
    const __tokens = !isNew
        ? _tokens
        : generateEmptyTokens(tokenAPI);

    const [isEditing, setEditing] = useState(isNew);
    const [tokens, setTokens] = useState(__tokens);

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setEditing(!isEditing);

        if (isEditing) {
            dispatch({
                type: 'update_tokens',
                componentName,
                modName,
                modValue: name,
                // TODO: fck
                // @ts-ignore
                tokens,
            });
        }
    };

    const onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch({
            type: 'remove_tokens',
            componentName,
            modName,
            modValue: name,
        });
    };

    const tokenChanged = (tokenName: string, tokenValue: string) => {
        setTokens({
            ...tokens,
            [tokenName]: tokenValue,
        });
    };

    const onCancel = () => {
        setEditing(false);
        // TODO: maybe we should nt sync two states ??
        setTokens({
            ...__tokens,
        });
    };

    const onCheck: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { checked } = e.target;

        if (checked) {
            dispatch({
                type: 'set_default',
                componentName,
                modName,
                modValue: name,
            });
        } else {
            dispatch({
                type: 'remove_default',
                componentName,
                modName,
            })
        }
    };

    const disabled = isEditing && Object.keys(tokens).some((key) => tokens[key] === '');

    return (
        <Root>
            <Header>
                <Headline3>{name}:</Headline3>
                <button onClick={onClick} disabled={disabled}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                <button onClick={onDelete}>Delete</button>
                {isEditing && (
                    <button disabled={disabled} onClick={onCancel}>
                        Cancel
                    </button>
                )}
                <Label><input type="checkbox" checked={isDefault} onChange={onCheck}/> Default </Label>
            </Header>
            <ul>
                {Object.keys(tokens).map((tokenName) => {
                    
                    const tokenValue = tokens[tokenName] as TokenObject;
                    // console.log('TOKEN', tokenValue, tokenName, typeof tokenName)
                    if (typeof tokenValue === 'string') {
                        return (
                            <li key={tokenName}>
                                <Token isEditing={isEditing} name={tokenName} value={tokenValue} onChange={tokenChanged} />
                            </li>
                        );
                    }
                    // TODO: Improve tokens API
                    const name = tokenValue.name;
                    
                    const valParts = tokenValue.value.split(':');
                    
                    const valTokens = valParts.reduce<Record<string, any>>((acc, el) => {
                        if (acc && acc[el]) {
                            return acc[el]
                        }
                        return null;
                    }, plasmaTokens);

                    const values = valTokens ? Object.keys(valTokens): [];

                    return (
                        <li key={name}>
                            <TokenEnum isEditing={isEditing} name={name} values={values.map(a => [a,a])} value={" "} onChange={tokenChanged} />
                        </li>
                    );
                })}
            </ul>
        </Root>
    );
}

const PreviewColor = styled.div`
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    border-radius: 0.2rem;
`;

const Flex = styled.div`
    display: flex;
`;

const Text = styled.span`
    ${textM}
`;

const Light = styled.span`
    color: var(--text-secondary);
`

interface TokenProps {
    name: string;
    value: string;
    isEditing: boolean;
    onChange: (name: string, value: string) => void;
}

interface TokenEnumProps extends TokenProps {
    values: Array<[string, string]>
}

const LittleSyntax = ({ value }: { value: string}) => {
    const variable = value.match(/var\((.*)\)/);
    if (variable) {
        return (<>
            <Light >{'var('}</Light>
            {variable[1]}
            <Light >{');'}</Light>
        </>);
    } else {
        return (<>
            {value};
        </>);
    }
}

const Token = ({ name, value, onChange, isEditing }: TokenProps) => {
    const handle: ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange(name, e.target.value);
    };

    return (
        <Flex>
            <Text>
                {name}: {
                    isEditing
                    ? <input value={value} onChange={handle} />
                    : <LittleSyntax value={value} />
                }
            </Text>
            <PreviewColor style={{ background: value }} />
        </Flex>
    );
};

const TokenEnum = ({ name, value, values, onChange, isEditing }: TokenEnumProps) => {
    const handle: ChangeEventHandler<HTMLSelectElement> = (e) => {
        onChange(name, e.target.value);
    };

    const options = [[' ', ' ']].concat(values).map(([ val, label ]) => (<option key={val} value={val}>{label}</option>));

    return (
        <Flex>
            <Text>
                {name}: {
                    isEditing
                    ? <select value={value} onChange={handle}>{options}</select>
                    : <LittleSyntax value={value} />
                }
            </Text>
        </Flex>
    );
};

export interface ModifierBuilderProps {
    name: string;
    tokenAPI: ModifierTokensAPI;
    componentName: string;
}

export function ModifierBuilder({ name, tokenAPI, componentName }: ModifierBuilderProps) {
    const [newModVal, setNewModVal] = useState('');

    const theme = useTheme();
    const dispatch = useThemeDispatch();

    const modifier = theme.components[componentName].variations[name] || {};
    const defaultValue = theme.components[componentName]?.defaults?.[name];

    const isBool = Array.isArray(tokenAPI) ? false : tokenAPI.type === 'boolean';
    const hasMods = Object.keys(modifier).length !== 0;

    const addModifier = () => {
        dispatch({
            type: 'add_modifier',
            componentName,
            modName: name,
            modValue: isBool ? "true" : newModVal,
        });
        setNewModVal('');
    };

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewModVal(e.target.value);
    };

    return (
        <Root>
            <Header>
                <Headline2>{name}:</Headline2>
                <input type="text" disabled={isBool} value={newModVal} onChange={onChange} />
                <button disabled={isBool && hasMods} onClick={addModifier}>Add</button>
            </Header>
            {Object.keys(modifier).map((modValue) => {
                // const tokens = modifier[modValue];
                const isDefault = defaultValue === modValue;

                return (
                    <ModValueClient
                        key={modValue}
                        name={modValue}
                        componentName={componentName}
                        modName={name}
                        tokenAPI={tokenAPI}
                        isDefault={isDefault}
                    />
                );
            })}
            <Preview componentName={componentName} modName={name} />
        </Root>
    );
}
