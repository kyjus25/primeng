import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from './documentation.json';
setCompodocJson(docJson);

// import '../../assets/components/themes/lara-light-blue/theme.css';
// import '../../assets/showcase/styles/primeng.css';

const preview: Preview = {
    parameters: {
        layout: 'centered',
        actions: { argTypesRegex: '^on[A-Z].*' },
        options: {
            storySort: {
                method: 'alphabetical',
                order: ['Getting Started', ['Installation', '*'], '*'],
                locales: 'en-US',
            }
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
};

export default preview;
