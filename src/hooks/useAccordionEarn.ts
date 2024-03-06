import { createStore } from './store';

export interface Accordion {
  base: string;
  active: boolean;
  height: string;
}

const defaultState: Accordion[] = []// { active: false, height: '60px' };

export const [useAccordionEarn] = createStore(defaultState);