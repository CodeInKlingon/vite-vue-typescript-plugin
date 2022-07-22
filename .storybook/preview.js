import { app } from '@storybook/vue3';
import {default as library } from '../src/entry.esm';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [(story) => ({
  components: { story },
  template: '<cb-app><story /></cb-app>'
})];

app.use( library );