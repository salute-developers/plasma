import type { Meta, StoryObj } from '@storybook/react-vite';

import { WorkflowMetrics } from './WorkflowMetrics';

const meta: Meta<typeof WorkflowMetrics> = {
    title: 'Engineering/Workflow Metrics',
    component: WorkflowMetrics,
    tags: ['!autodocs'],
    parameters: {
        layout: 'fullscreen',
        controls: { disable: true },
    },
};

export default meta;

export const Cypress: StoryObj<typeof WorkflowMetrics> = {
    args: {
        dataBaseUrl: process.env.STORYBOOK_WORKFLOW_METRICS_URL || './workflow-metrics',
    },
};
