'use client';

import React, { useState, PropsWithChildren } from 'react';

import { styled } from '@linaria/react';
// @ts-ignore
import { h2, h3, textM } from '@salutejs/plasma-typo/lib/esm/tokens';

import { useTheme, useThemeDispatch } from '../../state';
import { ChangeEventHandler } from 'react';
import { Preview } from '../Preview/client';

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

export interface ModValueProps {
    name: string;
    modName: string;
    componentName: string;
    tokenAPI: string[];
}

export function ModValueClient(props: PropsWithChildren<ModValueProps>) {
    const { name, modName, componentName, tokenAPI } = props;

    const theme = useTheme();
    const dispatch = useThemeDispatch();

    const _tokens = theme.components[componentName].variations[modName][name];

    const isNew = Object.keys(_tokens).length === 0;
    const __tokens = !isNew
        ? _tokens
        : tokenAPI.reduce<Record<string, string>>((acc, key) => {
              acc[key] = '';
              return acc;
          }, {});

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
            </Header>
            <ul>
                {Object.keys(tokens).map((tokenName) => {
                    const tokenValue = tokens[tokenName];
                    return (
                        <li key={tokenName}>
                            <Token isEditing={isEditing} name={tokenName} value={tokenValue} onChange={tokenChanged} />
                        </li>
                    );
                })}
            </ul>
        </Root>
    );
}

const Nano = styled.div`
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

interface TokenProps {
    name: string;
    value: string;
    isEditing: boolean;
    onChange: (name: string, value: string) => void;
}

const Token = ({ name, value, onChange, isEditing }: TokenProps) => {
    const handle: ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange(name, e.target.value);
    };

    return (
        <Flex>
            <Text>
                {name}: {isEditing ? <input value={value} onChange={handle} /> : value}
            </Text>
            <Nano style={{ backgroundColor: value }} />
        </Flex>
    );
};

export interface ModifierBuilderProps {
    name: string;
    tokenAPI: string[];
    componentName: string;
}

export function ModifierBuilder({ name, tokenAPI, componentName }: ModifierBuilderProps) {
    const [newModVal, setNewModVal] = useState('');

    const theme = useTheme();
    const dispatch = useThemeDispatch();

    const modifier = theme.components[componentName].variations[name] || {};

    const addModifier = () => {
        dispatch({
            type: 'add_modifier',
            componentName,
            modName: name,
            modValue: newModVal,
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
                <input type="text" value={newModVal} onChange={onChange} />
                <button onClick={addModifier}>Add</button>
            </Header>
            {Object.keys(modifier).map((modValue) => {
                // const tokens = modifier[modValue];

                return (
                    <ModValueClient
                        key={modValue}
                        name={modValue}
                        componentName={componentName}
                        modName={name}
                        tokenAPI={tokenAPI}
                    />
                );
            })}
            <Preview componentName={componentName} modName={name} />
        </Root>
    );
}
