import Text from '../src';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
