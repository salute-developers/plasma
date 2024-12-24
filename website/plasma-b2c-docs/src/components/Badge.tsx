import React from 'react';
import type { FC } from 'react';
import { Badge, Tooltip, BodyXS } from '@salutejs/plasma-b2c';

export const DocsBadge: FC<{ title: string; desctiption: string }> = ({ title, desctiption }) => (
    <div
        style={{
            marginTop: '-22px',
            marginBottom: '16px',
        }}
    >
        <Tooltip
            target={
                <Badge size="m" view="accent">
                    <BodyXS bold>{title}</BodyXS>
                </Badge>
            }
            text={desctiption}
            placement="right-start"
            trigger="hover"
            hoverTimeout={500}
            maxWidth="400px"
            hasArrow={false}
            style={{
                verticalAlign: 'middle',
            }}
        />
    </div>
);
