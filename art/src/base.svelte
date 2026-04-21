<script>
    /* LAB */
    import '/lab/reset.css';
    import '/lab/vars.css';

    /* LIB */
    import '/lib/styles.css';

    /* LES */
    import { routeStore } from '/leg';

    /* SRC */
    import Header from '/src/Header.svelte';

    let { children } = $props();

    /* SPECIFIC */

    /* Shallow */
    import { Shallow } from '/leg';
    Shallow.init()
</script>

<svelte:head>
    <title>{$routeStore.pattern.title || 'LOGO'}</title>
</svelte:head>

<Header/>

<main data-name={$routeStore.pattern.name} class={`Wrapper` + ($routeStore.pattern.wrapper ? ' _' + $routeStore.pattern.wrapper : '')}>
    {#if $routeStore.pattern.h1}
        <div class="Heading">
            <h1 class="Title">{$routeStore.pattern.h1}</h1>
        </div>
    {/if}
    <div class={`Children` + ($routeStore.pattern.children ? ' _' + $routeStore.pattern.children : '')}>
        {@render children?.()}
    </div>
</main>
