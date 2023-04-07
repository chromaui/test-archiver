import { test as base, expect } from '@playwright/test';

import { makeTest } from './playwright-api/makeTest';

export const test = makeTest(base);
export { expect };

export { takeSnapshot as snapshot } from './playwright-api/takeSnapshot';