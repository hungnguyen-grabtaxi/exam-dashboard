// path: src/layouts/register.ts

import { App } from 'vue';
import Default from './Default.vue';
import Empty from './Empty.vue';

/**
 * Register layouts in the app instance
 *
 * @param {App<Element>} app
 */
export function registerLayouts(app: App<Element>) {
  app.component('Default', Default);
  app.component('Empty', Empty);
}
