import React, { useState, useRef } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconHelp } from '@salutejs/plasma-icons';
import styled from 'styled-components';

import { InSpacing } from '../../helpers/StoryDecorators';
import { Button } from '../Button';
import { PopupBaseProvider } from '../PopupBase';
import { Body1, Body3 } from '../Typography';
import { disableProps } from '../../helpers';

import { Confirm, ConfirmProps } from '.';

export default {
    title: 'Controls/Confirm',
    decorators: [InSpacing],
    component: Confirm,
    argTypes: {
        buttonsDirection: {
            options: ['horizontal', 'horizontal-reverse', 'vertical', 'vertical-reverse', undefined],
            control: {
                type: 'select',
            },
        },
        placement: {
            options: [
                'center',
                'top',
                'bottom',
                'right',
                'left',
                'top-right',
                'top-left',
                'bottom-right',
                'bottom-left',
            ],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['onApprove', 'onDismiss', 'extraContent']),
    },
};

const onApproveAction = action('onApprove');
const onDismissAction = action('onDismiss');

const ExtraContentBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
`;

export const Default: Story<ConfirmProps> = ({ visible: _visible, ...rest }) => {
    const [visible, setVisible] = useState(_visible);

    const btnRef = useRef<HTMLButtonElement>(null);

    const hide = () => {
        setVisible(false);
    };

    const onDismiss = () => {
        onDismissAction();
        hide();
    };

    const onApprove = () => {
        onApproveAction();
        hide();
    };

    return (
        <PopupBaseProvider>
            <Button ref={btnRef} text="Show Confirm" onClick={() => setVisible(true)} />
            <Confirm visible={visible} onApprove={onApprove} onDismiss={onDismiss} {...rest} />
            <Body1 mt={12}>
                I have a dream that one day this nation will rise up and live out the true meaning of its creed. We hold
                these truths to be self-evident that all men are created equal. I have a dream that one day on the red
                hills of Georgia the sons of former slaves and the sons of former slaveowners will be able to sit down
                together at the table of brotherhood. I have a dream that one day even the state of Mississippi, a state
                sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into
                an oasis of freedom and justice. I have a dream that my four little children will one day live in a
                nation where they will not be judged by the color of their skin but by the content of their character. I
                have a dream today. I have a dream that one day down in Alabama, with its vicious racists, with its
                governor having his lips dripping with the words of interposition and nullification; one day right down
                in Alabama little black boys and black girls will be able to join hands with little white boys and white
                girls as sisters and brothers. I have a dream today. I have a dream that one day every valley shall be
                engulfed, every hill shall be exalted and every mountain shall be made low, the rough places will be
                made plains and the crooked places will be made straight and the glory of the Lord shall be revealed and
                all flesh shall see it together. This is our hope. This is the faith that I will go back to the South
                with. With this faith we will be able to hew out of the mountain of despair a stone of hope. With this
                faith we will be able to transform the jangling discords of our nation into a beautiful symphony of
                brotherhood. With this faith we will be able to work together, to pray together, to struggle together,
                to go to jail together, to stand up for freedom together, knowing that we will be free one day. This
                will be the day… this will be the day when all of God&#39;s children will be able to sing with new
                meaning vMy country &#39;tis of thee, sweet land of liberty, of thee I sing. Land where my father&#39;s
                died, land of the Pilgrim&#39;s pride, from every mountainside, let freedom ring!&#34; And if America is
                to be a great nation, this must become true. So let freedom ring from the prodigious hilltops of New
                Hampshire. Let freedom ring from the mighty mountains of New York. Let freedom ring from the heightening
                Alleghenies of Pennsylvania. Let freedom ring from the snow-capped Rockies of Colorado. Let freedom ring
                from the curvaceous slopes of California. But not only that, let freedom, ring from Stone Mountain of
                Georgia. Let freedom ring from Lookout Mountain of Tennessee. Let freedom ring from every hill and
                molehill of Mississippi, from every mountainside. Let freedom ring and when this happens… when we allow
                freedom ring, when we let it ring from every village and every hamlet, from every state and every city,
                we will be able to speed up that day when all of God&#39;s children, black men and white men, Jews and
                Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old
                spiritual, &#34;Free at last, free at last. Thank God Almighty, we are free at last.&#34;
            </Body1>
        </PopupBaseProvider>
    );
};

Default.args = {
    title: 'Использовать максимум возможностей?',
    subtitle: 'Возможно всё.',
    view: 'primary',
    approveText: 'Да',
    dismissText: 'Нет',
    placement: 'top',
    visible: false,
    stretch: true,
    reverseButtons: false,
    buttonsDirection: undefined,
};

export const ExtraContent: Story<ConfirmProps> = ({ visible: _visible, ...rest }) => {
    const [visible, setVisible] = useState(_visible);

    const hide = () => {
        setVisible(false);
    };

    const onDismiss = () => {
        onDismissAction();
        hide();
    };

    const onApprove = () => {
        onApproveAction();
        hide();
    };

    const extraContent = (
        <ExtraContentBlock>
            <IconHelp />
            <Body3 style={{ paddingLeft: '0.5rem' }}>Дополнительный контент</Body3>
        </ExtraContentBlock>
    );

    return (
        <>
            <Button text="Show Confirm" onClick={() => setVisible(true)} />
            <Confirm
                visible={visible}
                extraContent={extraContent}
                onApprove={onApprove}
                onDismiss={onDismiss}
                {...rest}
            />
        </>
    );
};

ExtraContent.args = {
    title: 'Использовать максимум возможностей?',
    subtitle: 'Возможно всё.',
    view: 'primary',
    approveText: 'Да',
    dismissText: 'Нет',
    placement: 'top',
    visible: false,
    stretch: true,
    reverseButtons: false,
    buttonsDirection: undefined,
};
