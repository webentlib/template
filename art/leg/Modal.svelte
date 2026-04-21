<!--
vars.css:
--semibold
--header-height
--border-color
--border-radius
--box-shadow

index.ts:
export { default as Modal } from './Modal.svelte';
-->

<!--
REQUIREMENTS:
- Глобальный скрол должен замениться на частный (с тёмным оформлением), при этом Шапка, Контент и т.д. не должны уезжать за скролбар.
- Закрытие по крестику, click-outside, escape.
- click-outside — когда и нажатие и отпуск клавиши происходит вне контента и скролбара.
- Выделение не должно выделять то, что за пределами модалки.
- Возможность пустого окна, а также Напка + Контейнер/Контент + Подвал.

TODO:
[ ] Крестик внутри хедера
-->
<script>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    import { svg } from '.';

    let {
        opened = $bindable(),
        children = null,
        header = null,
        container = null,
        content = null,
        footer = null,
        closeCallback = () => {},
    } = $props();

    const Icons = {
        tabler: {
            x: ({size, width, height, stroke, style, cls, title, attrs}={}) => svg(size, width, height, stroke, style, cls, title, attrs,`
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" />
            `),
        }
    }

    let mounted = $state(false);
    onMount(() => {
        mounted = true;
    })

    let HEADER_HEIGHT = $state(0);
    onMount(() => {
        HEADER_HEIGHT = getComputedStyle(document.documentElement).getPropertyValue('--header-height').replace(/\D/g, '') || 48;
    })

    let modal = $state();
    let modal_window = $state();
    let modal_close = $state();

    let clicked_inside;
    function prevent_close_on_intersect(e) {
        if (!e.target?.contains(modal_window) || modal.clientWidth < e.clientX || modal.clientHeight < e.clientY) {
            clicked_inside = true;
        }
    }

    function close_on_click_outside(e) {
        if (!clicked_inside && e.target?.contains(modal_window) && !(modal.clientWidth < e.clientX) && !(modal.clientHeight < e.clientY)) {
            close()
        }
        clicked_inside = false;
    }

    function close_on_escape(e) {
        if (e.key === 'Escape') {
            close()
        }
    }

    function close_on_x(e) {
        clicked_inside = null;
        close()
    }
    
    function close() {
        opened = false;
        closeCallback();
    }

    function add_event_listeners() {
        modal_close.addEventListener('click', close_on_x);

        modal.addEventListener('mousedown', prevent_close_on_intersect);
        modal.addEventListener('touchstart', prevent_close_on_intersect, {passive: true});

        modal.addEventListener('mouseup', close_on_click_outside);
        modal.addEventListener('touchend', close_on_click_outside, {passive: true});

        window.addEventListener('keydown', close_on_escape);
    }

    function remove_event_listeners() {
        modal_close.removeEventListener('click', close_on_x);

        modal.removeEventListener('mousedown', prevent_close_on_intersect);
        modal.removeEventListener('touchstart', prevent_close_on_intersect);

        modal.removeEventListener('mouseup', close_on_click_outside);
        modal.removeEventListener('touchend', close_on_click_outside);

        window.removeEventListener('keydown', close_on_escape);
    }

    $effect.pre(() => {
        if (browser && modal_window && modal_close) {
            if (opened) {
                add_event_listeners();
            } else {
                remove_event_listeners();
            }
        }
    });
    onDestroy(() => {
        if (browser && modal_window && modal_close) {
            remove_event_listeners();
        }
    });

    function measure_scrollbar_action(node) {
        function measure_scrollbar() {
            const scrollbar_width_y = node.offsetWidth - node.clientWidth;
            const scrollbar_width_x = node.offsetHeight - node.clientHeight;
            document.documentElement.style.setProperty('--modal-scrollbar-width-y', scrollbar_width_y + 'px');
            document.documentElement.style.setProperty('--modal-scrollbar-width-x', scrollbar_width_x + 'px');
        }
        const resize_observer = new ResizeObserver(() => {
            measure_scrollbar();
        })
        resize_observer.observe(node);
        return {
            destroy() {
                resize_observer.disconnect();
            }
        }
    }
</script>

{#if opened}
    <div class="MODAL" bind:this={modal} use:measure_scrollbar_action>
        <div class="MODAL_WINDOW" bind:this={modal_window}>
            {#if header}
                <div class="MODAL_HEADER">
                    {@render header?.()}
                </div>
            {/if}
            {#if container}
                <div class="MODAL_CONTAINER">
                    {@render container?.()}
                </div>
            {/if}
            {#if content}
                <div class="MODAL_CONTENT">
                    {@render content?.()}
                </div>
            {/if}
            {#if children}
                <div class="MODAL_CHILDREN">
                    {@render children?.()}
                </div>
            {/if}
            {#if footer}
                <div class="MODAL_FOOTER">
                    {@render footer?.()}
                </div>
            {/if}
        </div>
        <button class="MODAL_CLOSE" bind:this={modal_close} onclick={() => close_on_x()}>
            {#if HEADER_HEIGHT}
                {@html Icons.tabler.x({size: HEADER_HEIGHT, stroke: 2})}
            {/if}
        </button>
    </div>
{/if}

<style>
    :global(:root) {
        --modal-scrollbar-width-y:0px;
        --modal-scrollbar-width-x:0px;
    }
    :global(html:has(.MODAL)) {
        padding-right:var(--scrollbar-width-y);
        padding-bottom:var(--scrollbar-width-x);
    }
    :global(body:has(.MODAL)) {
        overflow:hidden;
        user-select:none;
        -webkit-user-select:none;
    }

    .MODAL {
        overflow:auto;
        position:fixed;top:0;left:0;bottom:0;right:0;z-index:100;
        background:rgba(0,0,0,0.8);
        padding:var(--header-height) 0 48px;
        color-scheme:dark;
        user-select:text;
        -webkit-user-select:text;
        scrollbar-gutter:stable;
    }
        .MODAL_WINDOW {
            position:relative;max-width:768px;background:#fff;color-scheme:normal;margin:0 auto;border-radius:var(--border-radius);box-shadow:var(--box-shadow);}
            .MODAL_HEADER {display:flex;border-bottom:1px solid var(--border-color);line-height:30px;font-size:20px;font-weight:var(--semibold);padding:24px calc(60px + 12px) 24px 24px;}
            .MODAL_CONTAINER {}
            .MODAL_CONTENT  {padding:24px;}
            .MODAL_CHILDREN {padding:24px;}
            .MODAL_FOOTER {padding:24px;border-top:1px solid var(--border-color);display:flex;}

            /* CLOSE */

            /* Outside */
            .MODAL_CLOSE {border:0;background:none;position:fixed;top:0;right:var(--modal-scrollbar-width-y);color:hsl(0,0%,80%);}
            .MODAL:hover .MODAL_CLOSE {color:#fff;}
            .MODAL_WINDOW:hover ~ .MODAL_CLOSE {color:hsl(0,0%,80%);}
</style>