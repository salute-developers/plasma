import React, { useState } from 'react';
import { IconPlus } from '@salutejs/plasma-icons';

const getSizeForIcon = (size?: string) => (size === 'xs' ? 'xs' : 's');

const getSizeForIconButton = (size?: string) => {
    switch (size) {
        case 'l':
        case 'h2':
        case 'h3':
            return 'l';
        case 'm':
            return 'm';
        case 's':
        case 'h4':
            return 's';
        case 'xs':
        case 'h5':
        case 'h6':
            return 'xs';
        default:
            return 'm';
    }
};

const splitStoryProps = ({
    alignWithTitle,
    body,
    defaultIconContent,
    defaultIconPlacement,
    pin,
    text,
    title,
    type,
    ...accordionProps
}: any) => ({
    accordionProps,
    itemProps: {
        alignWithTitle,
        defaultIconContent,
        defaultIconPlacement,
        pin,
        title,
    },
    body,
});

export const createDefaultStory = (Accordion: any, AccordionItem: any) => (props: any) => {
    const { accordionProps, itemProps, body } = splitStoryProps(props);

    return (
        <Accordion {...accordionProps}>
            {[0, 1, 2].map((key) => (
                <AccordionItem key={key} {...itemProps}>
                    {body}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export const createControlledStory = (Accordion: any, AccordionItem: any, IconButton: any) => (props: any) => {
    const { accordionProps, itemProps, body } = splitStoryProps(props);
    const [openedItems, setOpenedItems] = useState([false, false, false]);

    const toggleItem = (index: number) => {
        setOpenedItems((items) => items.map((opened, itemIndex) => (itemIndex === index ? !opened : opened)));
    };

    return (
        <Accordion {...accordionProps}>
            {openedItems.map((opened, index) => (
                <AccordionItem
                    key={index}
                    {...itemProps}
                    contentRight={
                        <IconButton
                            view="secondary"
                            size={getSizeForIconButton(accordionProps.size)}
                            onClick={() => toggleItem(index)}
                        >
                            <IconPlus size={getSizeForIcon(accordionProps.size)} />
                        </IconButton>
                    }
                    opened={opened}
                >
                    {body}
                </AccordionItem>
            ))}
        </Accordion>
    );
};
