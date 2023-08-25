// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'PrimeNG',
    brandUrl: 'https://primeng.org',
    brandImage: 'https://primefaces.org/cdn/primeng/images/primeng-logo-dark.svg',
    brandTarget: '_self',
  }),
});