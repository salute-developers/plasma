import React, { useState } from 'react';
import { IconDone } from '@salutejs/plasma-icons';
import { action } from 'storybook/actions';

type Components = {
    Button: React.ComponentType<any>;
    DrawerContent: React.ComponentType<any>;
    DrawerFooter: React.ComponentType<any>;
    DrawerHeader: React.ComponentType<any>;
    H2: React.ComponentType<any>;
    H3: React.ComponentType<any>;
    PopupProvider: React.ComponentType<any>;
    SSRProvider: React.ComponentType<any>;
};

type StoryConfig = {
    frame?: string;
    iconButtonColor?: string;
};

const onCloseAction = action('onClose');

const wrapperStyle: React.CSSProperties = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
};

const contentWrapperStyle: React.CSSProperties = {
    height: '80%',
    display: 'flex',
    flexGrow: 1,
};

const contentStyle: React.CSSProperties = {
    background: '#a8a875',
    flexGrow: 1,
    height: '100%',
};

const sectionStyle: React.CSSProperties = {
    background: '#808080',
    minHeight: '20%',
};

export const createDefaultStory = (
    Drawer: React.ComponentType<any>,
    { Button, DrawerContent, DrawerFooter, DrawerHeader, H2, H3, PopupProvider, SSRProvider }: Components,
    { frame, iconButtonColor }: StoryConfig = {},
) => {
    return ({ showHeader, showFooter, showActions, hasClose, closePlacement, offsetX, offsetY, ...rest }: any) => {
        const [isOpen, setIsOpen] = useState(false);

        const onClose = () => {
            setIsOpen(false);
            onCloseAction();
        };

        return (
            <SSRProvider>
                <PopupProvider>
                    <div style={wrapperStyle}>
                        <div style={sectionStyle}>
                            <Button text="Открыть панель" onClick={() => setIsOpen(true)} />
                        </div>
                        <div style={contentWrapperStyle}>
                            <Drawer
                                {...rest}
                                frame={frame}
                                opened={isOpen}
                                offset={[offsetX, offsetY]}
                                onClose={onClose}
                            >
                                <DrawerHeader
                                    hasClose={hasClose}
                                    closePlacement={closePlacement}
                                    actions={
                                        showActions && (
                                            <Button
                                                size="s"
                                                view="clear"
                                                style={{
                                                    position: 'relative',
                                                    width: '1.5rem',
                                                    height: '1.5rem',
                                                    color: iconButtonColor,
                                                }}
                                            >
                                                <IconDone size="s" color="inherit" />
                                            </Button>
                                        )
                                    }
                                    onClose={onClose}
                                >
                                    {showHeader && <H3>Header</H3>}
                                </DrawerHeader>
                                <DrawerContent>Content</DrawerContent>
                                {showFooter && (
                                    <DrawerFooter>
                                        <H3>Footer</H3>
                                    </DrawerFooter>
                                )}
                            </Drawer>
                            <div style={contentStyle}>
                                <H2 style={{ margin: '2rem' }}>Some basic content</H2>
                            </div>
                        </div>
                        <div style={sectionStyle} />
                    </div>
                </PopupProvider>
            </SSRProvider>
        );
    };
};
