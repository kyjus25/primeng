import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button';
import icons from '../../storybook/icons';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Button> = {
  title: 'Components/Button/Button',
  component: Button,
  tags: ['autodocs'],
  render: (args: Button) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    label: { control: 'text' },
    ariaLabel: { control: 'text' },
    badge: { control: 'text' },
    badgeClass: { control: 'text' },
    disabled: { control: 'boolean' },
    icon: { control: 'select', options: icons() },
    loadingIcon: { control: 'select', options: icons() },
    style: { control: 'text' },
    styleClass: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<Button>;

const _: Partial<Button> = {
  label: 'Button',
  ariaLabel: '',
  badge: '',
  loading: false,
  loadingIcon: 'pi pi-spinner pi-spin',
  disabled: false,
  iconPos: 'left',
  badgeClass: '',
  styleClass: 'p-button-primary'
}

// ['p-button-primary', 'p-button-secondary', 'p-button-success', 'p-button-danger', 'p-button-info', 'p-button-warning', 'p-button-help',]
// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Basic: Story = {
  args: {
    ..._
  }
};

export const Directive: Story = {
  args: {
    ..._,
    styleClass: 'p-button-secondary'
  }
};

export const Link: Story = {
  args: {
    ..._,
    styleClass: 'p-button-success'
  }
};

export const Icons: Story = {
  args: {
    ..._,
    styleClass: 'p-button-danger'
  }
};

export const Loading: Story = {
  args: {
    ..._,
    styleClass: 'p-button-info'
  }
};

export const Severity: Story = {
  args: {
    ..._,
    styleClass: 'p-button-warning'
  }
};

export const Disabled: Story = {
  args: {
    ..._,
    styleClass: 'p-button-help'
  }
};

export const Raised: Story = {
  args: {
    ..._,
    loading: true,
  }
};

export const Rounded: Story = {
  args: {
    ..._,
    loading: true,
  }
};

export const Text: Story = {
  args: {
    ..._,
    loading: true,
  }
};

export const RaisedText: Story = {
  args: {
    ..._,
    loading: true,
  }
};

export const Outline: Story = {
  args: {
    ..._,
    loading: true,
  }
};

export const IconOnly: Story = {
  args: {
    ..._,
    loading: true,
  }
};

export const Badges: Story = {
  args: {
    ..._,
    loading: true,
  }
};

export const ButtonSet: Story = {
  args: {
    ..._,
    loading: true,
  }
};

export const Sizes: Story = {
  args: {
    ..._,
    loading: true,
  }
};

export const Template: Story = {
  args: {
    ..._,
    loading: true,
  }
};
