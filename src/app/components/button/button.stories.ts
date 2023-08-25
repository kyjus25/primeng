import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button';
import icons from '../../storybook/icons';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Button> = {
  title: 'Components/Form/Button',
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
    disabled: { control: 'boolean', defaultValue: false },
    icon: { control: 'select', options: icons() },
    loadingIcon: { control: 'select', options: icons() },
    style: { control: 'text' },
    styleClass: { control: 'select', options: ['p-button-primary', 'p-button-secondary', 'p-button-success', 'p-button-danger', 'p-button-info', 'p-button-warning', 'p-button-help',], }
  },
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

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Simple: Story = {
  args: {
    ..._
  }
};

export const Loading: Story = {
  args: {
    ..._,
    loading: true,
  }
};
