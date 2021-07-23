import React from 'react';
import { Form } from '@salutejs/plasma-temple';
import { Button, Header } from '@salutejs/plasma-ui';
import { isSberBox } from '@salutejs/plasma-ui/utils';
import { IconKeyboard } from '@salutejs/plasma-icons';

import { PageComponentProps, Recipient } from '../../types';
import { RecipientInfoContext } from '../MakeOrder/RecipientInfoContext';

import { FormContent } from './components/FormContent/FormContent';

const ManualModeButton: React.FC<{ onClick: () => void }> = ({ onClick }) =>
    isSberBox() ? null : (
        <Button contentLeft={<IconKeyboard />} text="Клавиатура" view="clear" size="s" onClick={onClick} />
    );

export const RecipientForm: React.FC<PageComponentProps<'recipient'>> = ({ name: screen, popScreen, ...props }) => {
    const [manualMode, setManualMode] = React.useState(true);

    const { recipient, changeRecipientInfo } = React.useContext(RecipientInfoContext);

    const onSubmitHandler = React.useCallback(
        (data: Recipient) => {
            changeRecipientInfo({ recipient: data });
            popScreen();
        },
        [popScreen, changeRecipientInfo],
    );

    const header = {
        ...props.header,
        children: !manualMode && <ManualModeButton onClick={() => setManualMode(true)} />,
        title: 'Данные получателя',
    };

    return (
        <>
            <Header {...header} />
            <Form initialData={recipient} onSubmit={onSubmitHandler} sequence={['address', 'name', 'phone', 'email']}>
                {(formProps) => (
                    <FormContent screen={screen} manualMode={manualMode} setManualMode={setManualMode} {...formProps} />
                )}
            </Form>
        </>
    );
};
