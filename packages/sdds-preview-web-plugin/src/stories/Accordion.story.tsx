import { component, accordionConfig, mergeConfig, AccordionItem } from '@salutejs/plasma-new-hope/styled-components';

const Accordion = component(mergeConfig(accordionConfig as any, {}));

const AccordionDefault = {
    name: 'Default',
    args: [
        {
            name: 'type',
            value: 'arrow',
            items: [
                {
                    value: 'arrow',
                    label: 'arrow',
                },
                {
                    value: 'sign',
                    label: 'sign',
                },
                {
                    value: 'clear',
                    label: 'clear',
                },
            ],
        },
        {
            name: 'pin',
            value: 'square-square',
            items: [
                {
                    value: 'square-square',
                    label: 'square-square',
                },
                {
                    value: 'square-clear',
                    label: 'square-clear',
                },
                {
                    value: 'clear-square',
                    label: 'clear-square',
                },
                {
                    value: 'clear-clear',
                    label: 'clear-clear',
                },
                {
                    value: 'clear-circle',
                    label: 'clear-circle',
                },
                {
                    value: 'circle-clear',
                    label: 'circle-clear',
                },
                {
                    value: 'circle-circle',
                    label: 'circle-circle',
                },
            ],
        },
        {
            name: 'stretching',
            value: 'filled',
            items: [
                {
                    value: 'fixed',
                    label: 'fixed',
                },
                {
                    value: 'filled',
                    label: 'filled',
                },
            ],
        },
        {
            name: 'title',
            value: 'Как оплатить заправку бонусами СберСпасибо?',
        },
        {
            name: 'body',
            value:
                'После указания деталей заправки нажмите кнопку «К оплате». Откроется окно оплаты, где вы сможете списать бонусы и оплатить ими до 99% стоимости топлива',
        },
        {
            name: 'singleActive',
            value: false,
        },
        {
            name: 'disabled',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const props = { ...args, text: undefined };

        return (
            <Accordion {...props}>
                <AccordionItem type={props.type} pin={props.pin} title={props.title}>
                    {props.body}
                </AccordionItem>
                <AccordionItem type={props.type} pin={props.pin} title={props.title}>
                    {props.body}
                </AccordionItem>
                <AccordionItem type={props.type} pin={props.pin} title={props.title}>
                    {props.body}
                </AccordionItem>
            </Accordion>
        );
    },
};

export const AccordionStories = [AccordionDefault];
