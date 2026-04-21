<script>
    import { pageState, pushState } from '/sve';
    import { Modal } from '/leg';
    // import { Modal, Url } from '/leg';
    //
    let opened_mini = $state(false);
    let opened = $derived.by(() => {
       const _ = $state(pageState.url.searchParams.get('opened'));
       return _;
    });
    //
    function open() {
        opened = true;
    //     pushState(Url.modify({ opened: true }).href, { shallow: true });
    }
    //
    function closeCallback() {
        // pushState(Url.modify({ opened: null }).href, { shallow: true });
    }
</script>

<div class="Header">
    {#each ['/'] as url}<a href={url} data-sveltekit-reload={pageState.url.pathname === url} class:_Current={pageState.url.pathname === url} class="Link Logo">Logo</a>{/each}
    {#each ['/test'] as url}<a href={url} data-sveltekit-reload={pageState.url.pathname === url} class:_Current={pageState.url.pathname === url} class="Link">Тест</a>{/each}
    <a class="Link" class:_Opened={opened} href="javascript:;" onclick={() => open()}>
        Modal
    </a>
    <a class="Link" class:_Opened={opened_mini} href="javascript:;" onclick={() => opened_mini = !opened_mini}>
        Modal Mini
    </a>
    <div style="margin-left:auto;">|||</div>
</div>

<Modal bind:opened {closeCallback}>
    Something
    <div style="height:3000px"></div>
</Modal>

<Modal bind:opened={opened_mini}>
    Something
</Modal>
