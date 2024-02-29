import { createStore } from './store';

interface Accordion {
  active: boolean;
  height: string;
}

const defaultState: Accordion = { active: false, height: '0px' };

export const [useAccordionMy] = createStore(defaultState);