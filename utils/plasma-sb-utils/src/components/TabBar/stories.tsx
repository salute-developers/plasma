import React, { useState } from 'react';
import { IconStar, IconStarFill } from '@salutejs/plasma-icons';

const getIcon = (size?: string, selected = false) => {
    const Icon = selected ? IconStarFill : IconStar;

    return <Icon size={size === 'l' ? 'm' : 's'} color="inherit" />;
};

const labels = ['Selected', 'Label', 'Label', 'Label', 'Label'];

const Frame = ({ children }: { children: React.ReactNode }) => <div style={{ width: 393 }}>{children}</div>;

export const createDefaultStory = (TabBar: any, TabBarItem: any) => {
    return (args: any) => {
        const [selected, setSelected] = useState(0);

        return (
            <Frame>
                <TabBar {...args}>
                    {labels.map((label, index) => (
                        <TabBarItem
                            key={label + index}
                            selected={selected === index}
                            icon={getIcon(args.size, selected === index)}
                            label={label}
                            counter={index === labels.length - 1 ? 1 : undefined}
                            onClick={() => setSelected(index)}
                        />
                    ))}
                </TabBar>
            </Frame>
        );
    };
};

export const createWithSlotStory = (TabBar: any, TabBarItem: any, TabBarSlot: any) => {
    return (args: any) => {
        const [selected, setSelected] = useState(0);

        return (
            <Frame>
                <TabBar {...args}>
                    <TabBarItem
                        selected={selected === 0}
                        icon={getIcon(args.size, selected === 0)}
                        label="Главная"
                        onClick={() => setSelected(0)}
                    />
                    <TabBarSlot>
                        <div
                            style={{
                                width: '6rem',
                                height: '4rem',
                                background: 'var(--on-light-surface-positive-minor)',
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            Slot
                        </div>
                    </TabBarSlot>
                    <TabBarItem
                        selected={selected === 1}
                        icon={getIcon(args.size, selected === 1)}
                        label="Сценарии"
                        counter={1}
                        onClick={() => setSelected(1)}
                    />
                </TabBar>
            </Frame>
        );
    };
};
