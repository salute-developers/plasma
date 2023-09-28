import React from 'react';
import { IconDownload } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

const Icon = () => <IconDownload color="inherit" size="xs" />;

describe('plasma-b2c: Button', () => {
    const Button = getComponent('Button');

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_size_xs" size="xs" contentLeft={<Icon />} />
                <PadMe />
                <Button text="Button_size_xxs" size="xxs" contentLeft={<Icon />} />
                <PadMe />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
