// import Button from './Button';

import { component, mergeConfig } from '@salutejs/plasma-new-hope';

import { buttonConfig } from '@salutejs/plasma-new-hope';

const cong = mergeConfig(buttonConfig, {});
const Button = component(cong);

export { Button, buttonConfig };
