import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { Button } from './button';

it('displays passed content', () => {
  const children = 'Any string';
  render(<Button>{children}</Button>);

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(children);
});

it('properly triggers onClick', async () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>anything</Button>);

  await userEvent.click(screen.getByRole('button'));

  expect(onClick).toBeCalledTimes(1);
});
