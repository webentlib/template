import type { Pattern, Layout, Error } from '/leg';

const error: Error = { page: () => import('/src/error.svelte') }
const layout: Layout = { page: () => import('/src/base.svelte'), error: error }

export const patterns: Pattern[] = [
    {path: '', page: () => import('/src/tasks/tasks.svelte'), layouts: [layout], name: 'HOME'},
    {path: 'test', page: () => import('/src/test.svelte'), layouts: [layout], wrapper: 'Default'},
]
