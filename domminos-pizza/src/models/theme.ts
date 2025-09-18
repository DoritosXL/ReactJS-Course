export type Theme = 'light' | 'dark' | 'system'

export type ConcreteTheme = Exclude<Theme, 'system'>
