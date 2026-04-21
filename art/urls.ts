import type { Pattern, Layout } from '/leg';

const layout: Layout = { page: () => import('/src/base.svelte') }

export const patterns: Pattern[] = [
    {path: '', page: () => import('/src/home.svelte'), layouts: [layout], name: 'HOME'},
    {path: 'test', page: () => import('/src/test.svelte'), layouts: [layout], wrapper: 'Default'},
    // {re: 'test', page: () => import('/src/test.svelte'), layouts: layouts, wrapper: 'DEFAULT'},
]
