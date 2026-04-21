import { browser } from '$app/environment';
import { beforeNavigate, invalidateAll, pushState } from '$app/navigation';
import { page as pageState} from '$app/state';

export const Shallow = {
    invalidateAllBeforeNavigate() {
        // FIX INVALIDATION ON NAVIGATION FROM SHALLOW ROUTE VIA LINK AND FORM
        beforeNavigate(({ type, from, to, cancel }) => {
            const types = ['link', 'form'];
            // If navigating from shallow route to regular route via link or form to the same page
            if (pageState.state?.['shallow'] && types.includes(type) && from.url.pathname === to.url.pathname) {
                pushState(from.url.pathname + from.url.search + from.url.hash, {});
                invalidateAll();
                cancel();
            }
        });
    },
    reloadOnPopstate() {
        if (browser) {
            window.addEventListener('popstate', (e) => {
                e.stopImmediatePropagation();
                location.reload();
            }, true)
        }
    },
    init() {
        this.invalidateAllBeforeNavigate();
        this.reloadOnPopstate();
    }
}