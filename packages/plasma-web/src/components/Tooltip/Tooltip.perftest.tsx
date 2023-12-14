/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { IconDownload } from '@salutejs/plasma-icons';

import { Button } from '../Button';

import { Tooltip } from '.';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-gap: 1rem 3.5rem;
    padding: 2.5rem;
`;

export const All = () => {
    return (
        <StyledGrid>
            <Tooltip
                target={
                    <Tooltip
                        target={<Button contentLeft={<IconDownload />} />}
                        placement="left"
                        isOpen
                        hasArrow
                        text="Left"
                    />
                }
                placement="top-start"
                isOpen
                hasArrow
                text="Top start"
            />
            <Tooltip target={<Button contentLeft={<IconDownload />} />} placement="top" isOpen hasArrow text="Top" />
            <Tooltip
                target={
                    <Tooltip
                        target={<Button contentLeft={<IconDownload />} />}
                        placement="right"
                        isOpen
                        hasArrow
                        text="Right"
                    />
                }
                placement="top-end"
                isOpen
                hasArrow
                text="Top end"
            />
            <Tooltip
                target={<Button contentLeft={<IconDownload />} />}
                placement="bottom-start"
                isOpen
                hasArrow
                text="Bottom start"
            />
            <Tooltip
                target={<Button contentLeft={<IconDownload />} />}
                placement="bottom"
                isOpen
                hasArrow
                text="Bottom"
            />
            <Tooltip
                target={<Button contentLeft={<IconDownload />} />}
                placement="bottom-end"
                isOpen
                hasArrow
                text="Bottom end"
            />
        </StyledGrid>
    );
};
