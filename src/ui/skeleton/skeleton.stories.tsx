import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'UI / Skeleton',
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-2">
      <Skeleton className="h-16 w-full" />
      <div className="flex gap-2">
        <Skeleton className="h-8 flex-1" />
        <Skeleton className="h-8 flex-1" />
      </div>
    </div>
  ),
};
