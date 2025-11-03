<script module>
    import {meStore} from '/src/auth/stores.js';

    export async function load({url, params, route, data, fetch, setHeaders, depends, parent, untrack}) {
        // const response = await fetch(`/api/me/`);
        // const me = await response.json();
        // meStore.set(me);
    }
</script>

<script>
    import '/lab/index.css';
    import '/les/index.css';
    import '/lib/index.css';

    // ROUTER
    import { routeStore, Layouts, Wrappers, Extras } from '/all.ts';

    let title   = $derived($routeStore.title);
    let h1      = $derived($routeStore.h1);
    let layout  = $derived($routeStore.layout);
    let wrapper = $derived($routeStore.wrapper);
    let name    = $derived($routeStore.name);
    let extras  = $derived($routeStore.extras);

    // CSRF

    import '/lib/csrf.ts';

    // CUSTOM
    import { Nprogress, GoTop, writable, Icons } from '/all.ts';
    import Header from '/src/Header.svelte';

    let { children } = $props();
</script>

<svelte:head>
    <title>{title || 'White Hat'}</title>
</svelte:head>

{#if layout !== Layouts.BLANK}
    <Header/>
{/if}

{#if layout === Layouts.DEFAULT}
    <main
        class={`Wrapper`}
        class:_Wide={wrapper === Wrappers.WIDE}
        class:_Default={wrapper === Wrappers.DEFAULT}
        class:_Narrow={wrapper === Wrappers.NARROW}
        class:_Form={wrapper === Wrappers.FORM}
        data-name={name}
    >
        {#if h1}
            <div class="Heading">
                <h1 class="Title">{h1}</h1>
            </div>
        {/if}
        {@render children?.()}
    </main>
{:else}
    {@render children?.()}
{/if}

<Nprogress/>

{#if extras?.length && extras.includes(Extras.GO_TOP)}
    <GoTop/>
{/if}
