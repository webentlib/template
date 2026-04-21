<script lang="ts">
	import { page } from '$app/state';
	import { Router } from '/leg';
</script>
{#await Router.error(page.url.pathname) then Error}
    {#if !Error}
        <h1>{page.error.message}</h1>
    {:else}
        <Error/>
    {/if}
{/await}