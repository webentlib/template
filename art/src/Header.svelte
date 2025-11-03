<script>
    import {
        Toaster,
        Modal,
        goto,
        routeStore,
        Icons,
        Select,
        DatetimeHelper,
        // TimezonesLocale,
        // timezoneStore,
        dropdownsStore
    } from '/all.ts';
    import {meStore} from '/src/auth/stores.js';

    async function logout(e) {
        const response = await fetch('/api/logout/', {method: 'POST'});
        if (response.ok) {
            goto('/login');
        } else {
            Toaster.bake('Что-то пошло не так');
        }
    }

    let opened = $state(false);
</script>
<Modal bind:opened>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
    Тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки, тест большой модалки<br>
</Modal>
<div class="Header">
    <a href="javascript:;" class="HeaderLink _Square">{@html Icons.bars({size:24})}</a>
    {#each ['/'] as url}
    <a href={url} data-sveltekit-reload={$routeStore.url.pathname === url} class="HeaderLink Logo">
        {@html Icons.brand_redhat({size: 36, stroke: 2, style:'margin-right:10px'})}White Hat
    </a>
    {/each}
    <div class="HeaderMenu NOSCROLLBAR">
        {#each ['/'] as url}<a href={url} data-sveltekit-reload={$routeStore.url.pathname === url} class:_Current={$routeStore.url.pathname === url} class="HeaderLink">Задачи</a>{/each}
        {#each ['/schedules'] as url}<a href={url} data-sveltekit-reload={$routeStore.url.pathname === url} class:_Current={$routeStore.url.pathname === url} class="HeaderLink">Расписание</a>{/each}
        {#each ['/targets'] as url}<a href={url} data-sveltekit-reload={$routeStore.url.pathname === url} class:_Current={$routeStore.url.pathname === url} class="HeaderLink">Цели</a>{/each}
        <!--{#each ['/results'] as url}<a href={url} data-sveltekit-reload={$routeStore.url.pathname === url} class:_Current={$routeStore.url.pathname === url} class="HeaderLink">Результаты</a>{/each}-->
        <!--{#each ['#'] as url}<a href={url} data-sveltekit-reload={$routeStore.url.pathname === url} class:_Current={$routeStore.url.pathname === url} class="HeaderLink" onclick={(e) => {e.preventDefault();opened = true}}>Тест</a>{/each}-->
    </div>
    <div class="UserMenu">
        <div style="margin-top:12px;margin-right:12px">
            <div class="SELECT_WITH_ICON _ICON_INSIDE">
                <span class="SELECT_ICON">
                    {@html Icons.timezone({size: 24})}
                </span>
<!--                <select class="SELECT _ROUNDED" use:Select title="Часовой пояс" bind:value={$timezoneStore}>-->
<!--                    {#if !$timezoneStore}-->
<!--                        <option value="">...</option>-->
<!--                    {/if}-->
                    <!--{#each DatetimeHelper.timezones as value}-->
                    <!--    <option value={value}>-->
                    <!--        {TimezonesLocale[value] || (value.includes('/') ? value.split('/')[1] : value)}-->
                    <!--    </option>-->
                    <!--{/each}-->
<!--                </select>-->
            </div>
        </div>
        {#each ['/profile'] as url}
            <a href={url} class="HeaderLink _Square" class:_Current={$routeStore.url.pathname === url} data-sveltekit-reload={$routeStore.url.pathname === url}>
                {@html Icons.user_circle({size:48,style:'background:#fff;border-radius:100%;'})}
            </a>
        {/each}
        {#each ['user_menu'] as dropdown}
            <div use:dropdownsStore.add={dropdown} class="DROPDOWN" style="display:flex;align-items:stretch;">
                <a href="javascript:;"
                   class="HeaderLink _Square"
                   class:_Opened={$dropdownsStore?.[dropdown]?.opened}
                   onclick={() => $dropdownsStore[dropdown].opened = !$dropdownsStore[dropdown].opened}
                >
                    {#if !$dropdownsStore?.[dropdown]?.opened}
                        {@html Icons.chevron_down({size:24})}
                    {:else}
                        {@html Icons.chevron_up({size:24})}
                    {/if}
                </a>
                {#if $dropdownsStore?.[dropdown]?.opened}
                    <div class="DROPDOWN_WINDOW _RIGHT" style="min-width:240px;">
                        {#if $meStore?.is_superuser}
                            <a class="DROPDOWN_ITEM" href="/tie/" data-sveltekit-reload>
                                <span class="DROPDOWN_ICON">
                                    {@html Icons.tie_edited({size:24})}
                                </span>
                                Панель администратора
                            </a>
                            <a class="DROPDOWN_ITEM" href="/showcase/tables" data-sveltekit-reload>
                                <span class="DROPDOWN_ICON">
                                    {@html Icons.blocks({size:24})}
                                </span>
                                Showcase
                            </a>
                        {/if}
                        <a class="DROPDOWN_ITEM" href="javascript:;" onclick={logout}>
                            <span class="DROPDOWN_ICON">
                                {@html Icons.logout_2({size:24})}
                            </span>
                            Выйти
                        </a>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>
