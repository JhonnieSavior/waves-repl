export const SET_THEME = 'SET_THEME';
export const SET_LAYOUT = 'SET_LAYOUT';
export function setTheme(value: string) { return { type: SET_THEME, value }; };
export function setLayout(value: string) { return { type: SET_LAYOUT, value }; };