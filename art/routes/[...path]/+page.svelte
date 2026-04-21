<script>
    import { routeStore } from '/leg';
    const { data } = $props();
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
{@render draw($routeStore, 0)}
