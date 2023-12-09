import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'UI / Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Some placeholder',
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'Some value',
  },
};

export const TypeFile: Story = {
  args: {
    type: 'file',
  },
};
