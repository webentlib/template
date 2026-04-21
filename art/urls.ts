import type { Pattern, Layout, Error } from '/leg';

const error: Error = () => import('/src/error.svelte');
const layout: Layout = { page: () => import('/src/base.svelte'), error };

export const patterns: Pattern[] = [
    {path: '', page: () => import('/src/home.svelte'), layouts: [layout], name: 'HOME'},
    {path: 'test', page: () => import('/src/test.svelte'), layouts: [layout], wrapper: 'Default'},
]
