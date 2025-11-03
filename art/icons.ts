/*
https://tabler.io/icons
https://heroicons.com/
https://feathericons.com/
*/

import { svg } from '/all.ts'

// import {LesIcons} from '/les/';
//
// LesIcons.go_top_up = ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
//         <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//     `)

export const Icons = {
    user_circle: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    `),
    check_circle: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    `),
    check: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" />
    `),
    document: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    `),
    note: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 20l7 -7" /><path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7" />
    `),
    circle_dashed_check: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" /><path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" /><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" /><path d="M8.56 20.31a9 9 0 0 0 3.44 .69" /><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" /><path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" /><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" /><path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" /><path d="M9 12l2 2l4 -4" />
    `),
    document_minus: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    `),
    chevron_down: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    `),
    chevron_up: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    `),
    chevron_left: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path d="M15.75 19.5 8.25 12l7.5-7.5" />
    `),
    bars: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
    `),
    menu: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8l16 0" /><path d="M4 16l16 0" />
    `),
    x: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" />
    `),
    route_scan: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /><path d="M7 12v-3h3" /><path d="M14 9h3v3" /><path d="M7 9l4.414 4.414a2 2 0 0 1 .586 1.414v2.172" /><path d="M17 9l-4.414 4.414a2 2 0 0 0 -.586 1.414v2.172" />
    `),
    zoom_scan: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /><path d="M8 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16 16l-2.5 -2.5" />
    `),
    cancel: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M18.364 5.636l-12.728 12.728" />
    `),
    calendar_time: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" /><path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M15 3v4" /><path d="M7 3v4" /><path d="M3 11h16" /><path d="M18 16.496v1.504l1 1" />
    `),
    calendar: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" /><path d="M15 3v4" /><path d="M7 3v4" /><path d="M3 11h16" />
    `),
    rocket_launch: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    `),
    cube_transparent: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
    `),
    exclamation_circle: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 9v4" /><path d="M12 16v.01" />
    `),
    clock_hour_4: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12l3 2" /><path d="M12 7v5" />
    `),
    clock_plus: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.984 12.535a9 9 0 1 0 -8.468 8.45" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M12 7v5l3 3" />
    `),
    clock_edit: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -9.972 8.948c.32 .034 .644 .052 .972 .052" /><path d="M12 7v5l2 2" /><path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
    `),
    clock_play: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 7v5l2 2" /><path d="M17 22l5 -3l-5 -3z" /><path d="M13.017 20.943a9 9 0 1 1 7.831 -7.292" />
    `),
    clock_check: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" /><path d="M12 7v5l3 3" /><path d="M15 19l2 2l4 -4" />
    `),
    progress: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" /><path d="M14 3.223a9.003 9.003 0 0 1 0 17.554" /><path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" /><path d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" /><path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" />
    `),
    refresh: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
    `),
    edit: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" />
    `),
    schedule_edit_custom: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" />
        <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
    `),
    arrows_sort: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9l4 -4l4 4m-4 -4v14" /><path d="M21 15l-4 4l-4 -4m4 4v-14" />
    `),
    brand_redhat: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 10.5l1.436 -4c.318 -.876 .728 -1.302 1.359 -1.302c.219 0 1.054 .365 1.88 .583c.825 .219 .733 -.329 .908 -.487c.176 -.158 .355 -.294 .61 -.294c.242 0 .553 .048 1.692 .448c.759 .267 1.493 .574 2.204 .922c1.175 .582 1.426 .913 1.595 1.507l.816 4.623c2.086 .898 3.5 2.357 3.5 3.682c0 1.685 -1.2 3.818 -5.957 3.818c-6.206 0 -14.043 -4.042 -14.043 -7.32c0 -1.044 1.333 -1.77 4 -2.18z" /><path d="M6 10.5c0 .969 4.39 3.5 9.5 3.5c1.314 0 3 .063 3 -1.5" />
    `),
    timezone: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.884 10.554a9 9 0 1 0 -10.337 10.328" /><path d="M3.6 9h16.8" /><path d="M3.6 15h6.9" /><path d="M11.5 3a17 17 0 0 0 -1.502 14.954" /><path d="M12.5 3a17 17 0 0 1 2.52 7.603" /><path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M18 16.5v1.5l.5 .5" />
    `),
    search: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    `),
    file_type_xls: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M4 15l4 6" /><path d="M4 21l4 -6" /><path d="M17 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /><path d="M11 15v6h3" />
    `),
    logout_2: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" /><path d="M15 12h-12l3 -3" /><path d="M6 15l-3 -3" />
    `),
    tie_edited: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.936 -1.351h-3.114a1 1 0 0 0 -.936 1.351l.993 2.649l-2.5 11l4 4z" /><!--path d="M10.5 7h3l5" /--><!--path d="M10.5 7h3l5" /-->
    `),
    text_scan_2: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /><path d="M8 12h8" /><path d="M8 9h6" /><path d="M8 15h4" />
    `),
    calendar_custom: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path d="M9.015  14a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"></path>
        <path d="M13.015 14a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"></path>
        <path d="M17.02  14a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"></path>
        <path d="M12.02  17a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z"></path>
        <path d="M9.015  18a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"></path>
        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
        <path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h16"></path>
    `),
    question_mark: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" /><path d="M12 19l0 .01" />
    `),
    status_change: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M6 12v-2a6 6 0 1 1 12 0v2" /><path d="M15 9l3 3l3 -3" />
    `),
    flag_3: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
    `),
    pennant: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 21l4 0" /><path d="M10 21l0 -18" /><path d="M10 4l9 4l-9 4" />
    `),
    rotate_rectangle: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.09 4.01l.496 -.495a2 2 0 0 1 2.828 0l7.071 7.07a2 2 0 0 1 0 2.83l-7.07 7.07a2 2 0 0 1 -2.83 0l-7.07 -7.07a2 2 0 0 1 0 -2.83l3.535 -3.535h-3.988" /><path d="M7.05 11.038v-3.988" />
    `),
    clock_bolt: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M20.984 12.53a9 9 0 1 0 -7.552 8.355" />
        <path d="M12 7v5l3 3" />
        <path d="M19 16l-2 3h4l-2 3" />
    `),
    delayed_custom: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 7v5l3 3" />
        <path d="M7.5 4.2v.01" />
        <path d="M4.2 7.5v.01" />
        <path d="M3 12a9 9 0 1 0 9 -9" />
    `),
    blocks: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 4a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z" /><path d="M3 14h12a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v12" />
    `),
    filter: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
    `),
    stopwatch: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0z" /><path d="M14.5 10.5l-2.5 2.5" /><path d="M17 8l1 -1" /><path d="M14 3h-4" />
    `),
    alarm: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M12 10l0 3l2 0" /><path d="M7 4l-2.75 2" /><path d="M17 4l2.75 2" />
    `),
}
