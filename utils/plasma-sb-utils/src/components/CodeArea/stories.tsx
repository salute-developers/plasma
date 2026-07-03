import React from 'react';
import { IconCopyOutline } from '@salutejs/plasma-icons';
import styled from 'styled-components';

import { getCodeByLanguage } from './fixtures';

const StyledIconCopyOutline = styled(IconCopyOutline)`
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        color: var(--text-secondary-hover);
    }
`;

const SlotContent = ({ children }: { children: React.ReactNode }) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '3rem',
            background:
                'linear-gradient(to right, #9747FF 0.063rem, transparent 0.063rem) 0 0, linear-gradient(to right, #9747FF 0.063rem, transparent 0.063rem) 0 100%, linear-gradient(to left, #9747FF 0.063rem, transparent 0.063rem) 100% 0, linear-gradient(to left, #9747FF 0.063rem, transparent 0.063rem) 100% 100%, linear-gradient(to bottom, #9747FF 0.063rem, transparent 0.063rem) 0 0, linear-gradient(to bottom, #9747FF 0.063rem, transparent 0.063rem) 100% 0, linear-gradient(to top, #9747FF 0.063rem, transparent 0.063rem) 0 100%, linear-gradient(to top, #9747FF 0.063rem, transparent 0.063rem) 100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1rem 1rem',
        }}
    >
        {children}
    </div>
);

const ActionContent = () => <StyledIconCopyOutline size="s" color="inherit" />;

export const createDefaultStory = (CodeArea: any) => {
    return ({ hasContentOuter, hasHeaderSlot, hasAction, width, height, language, ...rest }: any) => {
        return (
            <div style={{ height, width }}>
                <CodeArea
                    {...rest}
                    contentAction={hasAction ? <ActionContent /> : undefined}
                    contentHeader={hasHeaderSlot ? <SlotContent>Header</SlotContent> : undefined}
                    contentOuter={hasContentOuter ? <SlotContent>Content</SlotContent> : undefined}
                    language={language}
                >
                    {getCodeByLanguage(language)}
                </CodeArea>
            </div>
        );
    };
};
