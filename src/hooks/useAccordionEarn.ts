import { createStore } from './store';

interface Accordion {
  active: boolean;
  height: string;
}

const defaultState: Accordion = { active: false, height: '60px' };

export const [useAccordionEarn] = createStore(defaultState);