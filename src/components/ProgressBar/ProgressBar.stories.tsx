import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressBar from './index';

export default {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  argTypes: {
    progress: {
      type: {
        name: 'number',
        required: true,
      },
    },
    label: {
      type: {
        name: 'string',
        required: true,
      },
    },
    color: {
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'blue',
    },
    max: {
      type: {
        name: 'number',
        required: false,
      },
      defaultValue: '100',
    },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  progress: 80,
  label: '80%',
};
