import Text from '../src';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Text',
  },
};

export const Secondary = {
  args: {
    label: 'Text',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Text',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Text',
  },
};
