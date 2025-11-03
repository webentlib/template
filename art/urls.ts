import { Sides } from '/router/enums.ts';
import type { Pattern, Layout, Error } from '/router/types.ts';

// ENUMS
export enum Layouts {
    DEFAULT = 'DEFAULT',
    CUSTOM = 'CUSTOM',
    BLANK = 'BLANK',
}

export enum Wrappers {
    WIDE = 'WIDE',
    DEFAULT = 'DEFAULT',
    NARROW = 'NARROW',
    FORM = 'FORM',
}

export enum Extras {
    GO_TOP = 'GO_TOP',
}

// ERRORS
export const error: Error = () => import('/src/error.svelte');

// DEFAULTS
const layout: Layout = {page: () => import('/src/base.svelte'), error: error}
const layouts: Layout[] = [layout];

// // SPECIFIC
// const task_layout: Layout = {page: () => import('/src/tasks/task.svelte'), error: error}
// const task_layouts: Layout[] = [layout, task_layout];
//
// const showcase_layout: Layout = {page: () => import('/src/showcase/showcase.svelte'), error: error}
// const showcase_layouts: Layout[] = [showcase_layout];

export const patterns: Pattern[] = [
    {re: '',                         page: () => import('/src/home.svelte'),     layouts: layouts,          layout: Layouts.DEFAULT, wrapper: Wrappers.DEFAULT, extras: [Extras.GO_TOP],},
    // {re: 'login',                    page: () => import('/src/auth/login.svelte'),      layouts: layouts,          layout: Layouts.BLANK,   wrapper: Wrappers.DEFAULT, extras: []             , title: 'Войти',},
    // {re: 'profile',                  page: () => import('/src/users/profile.svelte'),   layouts: layouts,          layout: Layouts.DEFAULT, wrapper: Wrappers.NARROW , extras: []             ,  title: 'Профиль',},
    // {re: 'new-task',                 page: () => import('/src/tasks/task_form.svelte'), layouts: layouts,          layout: Layouts.DEFAULT, wrapper: Wrappers.FORM   , extras: []             ,  title: 'Новая задача',     name: 'TASK'},
    // {re: 'new-schedule',             page: () => import('/src/tasks/task_form.svelte'), layouts: layouts,          layout: Layouts.DEFAULT, wrapper: Wrappers.FORM   , extras: []             ,  title: 'Новое расписание', name: 'SCHEDULE'},
    // {re: 'tasks/(<id>[0-9]+)',       page: () => import('/src/tasks/results.svelte'),   layouts: task_layouts,     layout: Layouts.DEFAULT, wrapper: Wrappers.DEFAULT, extras: [Extras.GO_TOP],},
    // {re: 'tasks/(<id>[0-9]+)/vulns', page: () => import('/src/tasks/vulns.svelte'),     layouts: task_layouts,     layout: Layouts.DEFAULT, wrapper: Wrappers.DEFAULT, extras: [Extras.GO_TOP],},
    // {re: 'schedules',                page: () => import('/src/tasks/schedules.svelte'), layouts: layouts,          layout: Layouts.DEFAULT, wrapper: Wrappers.DEFAULT, extras: [Extras.GO_TOP], title: 'Расписание'},
    // {re: 'schedules/(<id>[0-9]+)',   page: () => import('/src/tasks/task.svelte'),      layouts: layouts,          layout: Layouts.DEFAULT, wrapper: Wrappers.DEFAULT, extras: [Extras.GO_TOP],},
    // {re: 'targets',                  page: () => import('/src/targets/targets.svelte'), layouts: layouts,          layout: Layouts.DEFAULT, wrapper: Wrappers.DEFAULT, extras: [Extras.GO_TOP], title: 'Цели',       h1: 'Цели [в разработке]'},
    // {re: 'showcase/tables',          page: () => import('/src/showcase/tables.svelte'), layouts: showcase_layouts, layout: Layouts.DEFAULT, wrapper: Wrappers.DEFAULT, extras: [Extras.GO_TOP],},
]
