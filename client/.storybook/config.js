import { configure } from '@storybook/react';

import '../src/theme/index.scss';

configure(require.context('../src', true, /\.stories\.js$/), module);
