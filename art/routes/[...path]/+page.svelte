<script>
    import { page } from '$app/state';
    import { Router } from '/leg';
    const { data } = $props();
    let route = $state();
    $effect(async () => {
        route = await Router.getRoute(page);
    });
</script>

{#snippet draw(route, index)}
    {@const Layout = route.layouts[index]}
    {@const Page = route.page}
    {#if route.layouts.length && index < route.layouts.length}
        <Layout {data}>
            {@render draw(route, index + 1)}
        </Layout>
    {:else}
        <Page {data}/>
    {/if}
{/snippet}

{#if route}
    {@render draw(route, 0)}
{/if}