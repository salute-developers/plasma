import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { disableProps } from '../../helpers';
import { arrayItemRemoving, arrayItemSelecting, arrayItemSwapping } from '../PreviewGallery';
import type { PreviewGalleryItemProps } from '../PreviewGallery';
import type { ValidationResult } from '../Upload';

import { UploadVisual } from '.';
import type { UploadVisualProps } from '.';

const meta: Meta<UploadVisualProps> = {
    title: 'Controls/UploadVisual',
    component: UploadVisual,
    decorators: [InSpacingDecorator],
    argTypes: {
        ...disableProps(['content', 'loader', 'items', 'deleteIcon']),
    },
};

export default meta;

const StyledWrapper = styled.div`
    width: 23.75rem;
`;

const images = [
    { id: Math.random(), image: './images/320_320_0.jpg', caption: '3:24' },
    { id: 2 * Math.random(), image: './images/320_320_1.jpg', isSelected: true },
    { id: 3 * Math.random(), image: './images/320_320_2.jpg' },
    { id: 4 * Math.random(), image: './images/320_320_3.jpg' },
    { id: 5 * Math.random(), image: './images/320_320_4.jpg' },
];

const addedImage = { id: 6 * Math.random(), image: './images/320_320_5.jpg' };

const addedErrorImage: PreviewGalleryItemProps = {
    id: 7 * Math.random(),
    image: './images/320_320_5.jpg',
    status: 'error',
};

const StorySelectable = (props: UploadVisualProps) => {
    const [state, setState] = useState({
        status: undefined,
        progress: undefined,
        message: undefined,
    });

    const [items, setItems] = useState<Array<PreviewGalleryItemProps>>(images);

    const onItemRemove = useCallback((id) => {
        setItems((oldItems) => {
            const newItems = arrayItemRemoving(oldItems, id);

            if (newItems.length === 1) {
                newItems[0].isSelected = true;
            }

            return newItems;
        });
    }, []);

    const onItemSelect = useCallback((id) => {
        setItems((oldItems) => {
            return arrayItemSelecting(oldItems, id);
        });
    }, []);

    const onValidation = useCallback(
        (result: ValidationResult) => {
            const { message, status: rStatus } = result;

            setState((prevState) => ({
                ...prevState,
                message,
                status: rStatus,
            }));
        },
        [setState],
    );

    const onChange = useCallback(() => {
        const interval = setInterval(
            () =>
                setState(({ progress }: { progress?: number }) => {
                    const value = progress === undefined ? 0 : progress;

                    if (value + 25 > 100) {
                        clearInterval(interval);

                        setItems((prevItems) => [...prevItems, addedImage]);

                        return {
                            progress: undefined,
                            status: undefined,
                            message: undefined,
                        };
                    }

                    return {
                        status: undefined,
                        progress: value + 25,
                        message: undefined,
                    };
                }),
            1000,
        );
    }, [setState, setItems]);

    return (
        <StyledWrapper>
            <UploadVisual
                maxCount={6}
                items={items}
                status={state.status}
                progress={state.progress}
                message={state.message}
                onChange={onChange}
                onItemAction={onItemRemove}
                onItemClick={onItemSelect}
                onValidation={onValidation}
                {...props}
            />
        </StyledWrapper>
    );
};

export const Selectable: StoryObj<UploadVisualProps> = {
    render: (args) => <StorySelectable {...args} />,
};

const StoryDraggable = (props: UploadVisualProps) => {
    const [state, setState] = useState({
        status: undefined,
        progress: undefined,
        message: undefined,
    });

    const [items, setItems] = useState<Array<PreviewGalleryItemProps>>(images);

    const onItemRemove = useCallback((id) => {
        setItems((oldItems) => {
            const newItems = arrayItemRemoving(oldItems, id);

            if (newItems.length === 1) {
                newItems[0].isSelected = true;
            }

            return newItems;
        });
    }, []);

    const onItemsSortEnd = useCallback(({ oldIndex, newIndex }) => {
        setItems((oldItems) => {
            return arrayItemSwapping(oldItems, oldIndex, newIndex);
        });
    }, []);

    const onValidation = useCallback(
        (result: ValidationResult) => {
            const { message, status: rStatus } = result;

            setState((prevState) => ({
                ...prevState,
                message,
                status: rStatus,
            }));
        },
        [setState],
    );

    const onChange = useCallback(() => {
        const interval = setInterval(
            () =>
                setState(({ progress }: { progress?: number }) => {
                    const value = progress === undefined ? 0 : progress;

                    if (value + 25 > 100) {
                        clearInterval(interval);

                        setItems((prevItems) => [...prevItems, addedErrorImage]);

                        return {
                            status: 'error',
                            progress: undefined,
                            message: 'Изображение не загрузилось',
                        };
                    }

                    return {
                        status: undefined,
                        progress: value + 25,
                        message: undefined,
                    };
                }),
            1000,
        );
    }, [setState, setItems]);

    return (
        <StyledWrapper>
            <UploadVisual
                items={items}
                status={state.status}
                progress={state.progress}
                message={state.message}
                onChange={onChange}
                onItemAction={onItemRemove}
                onItemsSortEnd={onItemsSortEnd}
                onValidation={onValidation}
                interactionType="draggable"
                {...props}
            />
        </StyledWrapper>
    );
};

export const Draggable: StoryObj<UploadVisualProps> = {
    render: (args) => <StoryDraggable {...args} />,
};
