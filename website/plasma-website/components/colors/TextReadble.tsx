import React from 'react';
import styled from 'styled-components';
import {ContrastRatioChecker} from 'contrast-ratio-checker';
import { IconAttentionCircleOutline } from '@salutejs/plasma-icons';

const justify: {[key: string]: string} = { 
    left: 'flex-end',
    right: 'flex-start',
};

const columnDirection: {[key: string]: string} = { 
    top: 'column',
    bottom: 'column-reverse',
};

const rowDirection: {[key: string]: string} = { 
    left: 'row',
    right: 'row-reverse',
};

const text = { 
    'AAA': 'Отлично',
    'AA': 'Нормально',
    'Poor': 'Плохо'
}

const getWCAGIndex = (ratio: number, type: 'small' | 'lagre') => { 
    if(ratio > 7){
        return 'AAA';
    }else if(ratio > 4.5){
        return type === 'small' ? 'AA' : 'AAA';
    }else if(ratio  >  3 && type === 'lagre'){
        return 'AA';
    }else{
        return 'Poor';
    }
}

const MainWrapper = styled.div<{alignX: string}>`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: ${({alignX}) => justify?.[alignX]};
`;

const TextWrapper = styled.div<{alignX: string, alignY: string}>`
    display: flex;
    flex-direction: ${({alignY}) => columnDirection?.[alignY]};
    align-items: ${({alignX}) => justify?.[alignX]};
    gap: 0.5rem;
`;

const TextSmall = styled.div<{alignX: string, score: string}>`
    font-size: 0.875rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    flex-direction: ${({alignX}) => rowDirection[alignX]};
    gap: 0.5rem;
    cursor: default;

    &:hover{
        color: ${({score}) => score === 'Poor' ? 'red' : 'inhert'}
    }
`;
const TextLarge = styled.div<{alignX: string, score: string}>`
    font-size: 2rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-direction: ${({alignX}) => rowDirection[alignX]};
    cursor: default;

    &:hover{
        color: ${({score}) => score === 'Poor' ? 'red' : 'inhert'}
    }
`;

export const TextReadble: React.FC<{background: string, color: string, alignX: 'left' | 'right', alignY: 'top' | 'bottom'}> = ({ background, color, alignX, alignY }) => {
    const checker = new ContrastRatioChecker();
    
    const ratio = Math.round(checker.getContrastRatioByHex(background, color) * 100) / 100;

    const small = getWCAGIndex(ratio,'small');
    const lagre = getWCAGIndex(ratio,'lagre');

    const smallText = [text[small], small, ratio];
    const lagreText = [text[lagre], lagre, ratio];

    return (
        <MainWrapper alignX={alignX} style={{color: color, background: background}}>
            <TextWrapper alignX={alignX} alignY={alignY}>
                <TextLarge score={lagre} alignX={alignX}>{
                    lagre === 'Poor' && 
                        <IconAttentionCircleOutline color='red' />
                    }
                    {alignX == 'right' ? lagreText.reverse().join(' ') : lagreText.join(' ')}</TextLarge>
                <TextSmall score={small} alignX={alignX}>
                    { small === 'Poor' &&
                        <IconAttentionCircleOutline color='red' size='xs' />}
                    {alignX == 'right' ? smallText.reverse().join(' ') : smallText.join(' ')}</TextSmall>
            </TextWrapper>
        </MainWrapper>
    );
}