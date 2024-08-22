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
                        opened
                        hasArrow
                        text="Left"
                    />
                }
                placement="top-start"
                opened
                hasArrow
                text="Top start"
            />
            <Tooltip target={<Button contentLeft={<IconDownload />} />} placement="top" opened hasArrow text="Top" />
            <Tooltip
                target={
                    <Tooltip
                        target={<Button contentLeft={<IconDownload />} />}
                        placement="right"
                        opened
                        hasArrow
                        text="Right"
                    />
                }
                placement="top-end"
                opened
                hasArrow
                text="Top end"
            />
            <Tooltip
                target={<Button contentLeft={<IconDownload />} />}
                placement="bottom-start"
                opened
                hasArrow
                text="Bottom start"
            />
            <Tooltip
                target={<Button contentLeft={<IconDownload />} />}
                placement="bottom"
                opened
                hasArrow
                text="Bottom"
            />
            <Tooltip
                target={<Button contentLeft={<IconDownload />} />}
                placement="bottom-end"
                opened
                hasArrow
                text="Bottom end"
            />
        </StyledGrid>
    );
};
