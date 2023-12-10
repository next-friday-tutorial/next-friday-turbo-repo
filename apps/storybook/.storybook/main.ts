import { join, dirname } from 'path';

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}

interface StorybookConfig {
  stories: string[];
  addons: string[];
  framework: {
    name: string;
    options: {};
  };
  docs: {
    autodocs: string;
  };
}

const config: StorybookConfig = {
  stories: ['../../../packages/components/**/stories/**/*.stories.@(ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
