<script module>
    import { get } from '/sve';
    import { routeStore } from '/leg';
    import { redirect } from '@sveltejs/kit';

    async function fetch_users(search) {
        const response = await (await fetch(`https://rickandmortyapi.com/api/character/${search}`)).json();
        const users = response.results;
        return users;
    }

    export async function load({ url }) {

        if (!url.searchParams.get('gender')) {
            redirect(307, '/test?gender=male');
        }

        if (get(routeStore)?.users) {
            return {
                users: get(routeStore).users,
            }
        }

        const users = await fetch_users(url.search);

        return {
            users,
        }
    }
</script>

<script>
    import { pageState, goto, pushState } from '/sve';
    import { Url } from '/leg';

    const { data } = $props();

    // FILTER

    const Filter = new class {
        els = {}

        params = $derived.by(() => {
            const _ = $state({
                gender: pageState.url.searchParams.get('gender'),
            });
            return _;
        })

        genders = [{'value': 'male', 'text': 'Male'}, {'value': 'female', 'text': 'Female'}]

        async push(params = this.params) {
            const url = Url.build(params);
            pushState(url.href, { shallow: true });
            users = await fetch_users(url.search);
        }
    }

    let users = $state(data.users); $effect(() => users = data.users);
</script>

<button onclick={() => {$routeStore.users = users;goto('/test', {invalidateAll: true})}}>
    router hack
</button>

<button onclick={() => goto('/test', {invalidateAll: true})}>
    goto
</button>

<button onclick={() => goto('/', {invalidateAll: true})}>
    gotomain
</button>

<select bind:value={Filter.params.gender} onchange={async () => Filter.push()}>
    {#each Filter.genders as gender}
        <option value={gender.value}>{gender.text}</option>
    {/each}
</select>

{#each users as user}
    <div>{user.gender} {user.name}</div>
{:else}
    {#if !users}
        <div>LOADING</div>
    {:else if !users?.length}
        <div>Not found</div>
    {/if}
{/each}