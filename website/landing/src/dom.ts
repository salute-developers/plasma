export const select = (selector: string): any => document.querySelector(selector);
export const selectAll = (selector: string): any[] => Array.from(document.querySelectorAll(selector));
export const byId = (id: string): any => document.getElementById(id);
