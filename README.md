# Base

    - Delete: .gitignore, README.md, everything from src/ except app.html
    - Exclude and hide: .svelte-kit/, .vscode/, node_modules/
    - Create folders: lab/, leg/, lib/ 
    - Create files: leg/index.ts, lib/index.ts, src/index.ts 

# Router [ts](https://github.com/webentlib/gists/blob/main/router.ts)/[md](https://github.com/webentlib/gists/blob/main/router.md)

    Copy files:
    - leg/router.ts (reexport it in leg/index.ts)
    - routes/*
    - urls.ts (remove all patterns except first)
    - src/base.svelte (remove everything except `let { children } = $props();` and `{@render children?.()}`
    - src/error.svelte, src/error.html

    Copy rules:
    - vite.config.js:allow.fs.allow
    - svelte.config.js:config.kit.files.routes
    - svelte.config.js:config.kit.typescript.config
    - tsconfig.json (everything from `/* CUSTOM */` block, comment upper rules that a are overriden)

# Header and Layout

    Assets:
    - Rename: static/ -> assets/
    - Copy rule: svelte.config.js:config.kit.files.assets
    
    Scrollbar:
    - Copy file: assets/scrollbar.js
    - Copy rule: app.html — `<script src="%sveltekit.assets%/scrollbar.js"></script>`

    Styles:
    - Copy files: lab/reset.css, lab/vars.css
    - Copy file: lib/styles.css (remove everything except `/* GLOBAL */` block)

    Header:
    - Copy file: src/Header.svelte (remove everything in script except pageStore import; remove everything from html except Header and Logo; note `each`, `reload`, `Current`)
    - Copy rules: lib/styles.css (`/* HEADER */`)
    - Change rule: app.html — `data-sveltekit-preload-data="hover"` -> `data-sveltekit-preload-data="off"`
    
    Wrapper & Heading & Children
    - Copy file: src/base.svelte (remove `/* SPECIFIC */` block in `<script>`).
    - Copy rules: lib/styles.css (`/* WRAPPER & HEADING & CHILDREN */`)

# Icons
    - Copy file: lab/svg.ts (reexport it in lab/index.ts)
    - Copy file: lib/icons.ts (reexport it in lib/index.ts) (remove everything except 1 icon, leave it for example)

# Bonus
    - Pin: styles.css, base.svelte, urls.ts
    - Disable validations, including Sveltes': Languages & Frameworks -> TypeScript -> Svelte -> Disable 