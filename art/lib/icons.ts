/*
https://tabler.io/icons
https://heroicons.com/
https://feathericons.com/
*/

import { svg } from '/leg';

export const Icons = {
    tabler: {},
    hero: {},
    feather: {},
    custom: {},
}

Icons.tabler = {
    'chevron-up': ({size, width, height, stroke, style, cls, title, attrs}:any = {}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 15l6 -6l6 6" />
    `),
    'chevron-down': ({size, width, height, stroke, style, cls, title, attrs}:any = {}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" />
    `),
}