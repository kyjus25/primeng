import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    stories: [
        './pages/**/*.mdx', 
        '../components/**/*.mdx', 
        '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: {
        name: '@storybook/angular',
        options: {}
    },
    docs: {
        autodocs: 'tag'
    }
};
export default config;
