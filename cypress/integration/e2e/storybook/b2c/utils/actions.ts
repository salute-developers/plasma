import { STORY_RENDER_TIMEOUT } from '../constants/constants';

export const waitForStoryLoading = (selector: string) => cy.get(selector, { timeout: STORY_RENDER_TIMEOUT });
