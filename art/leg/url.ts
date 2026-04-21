import { page as pageState } from '$app/state';


export const Url: any = {}


Url.build = function(search_object={}) {

    const searchParams = new URLSearchParams(search_object)
    const searchString = searchParams.toString();
    const search = searchString ? '?' + searchString : '';
    const href = pageState.url.pathname + search + pageState.url.hash;

    const url = {
        searchParams,
        searchString,
        search,
        href,
    }

    return url;
}

Url.modify = function(search_object={}) {

    const current_params = Object.fromEntries(new URLSearchParams(pageState.url.search));
    const combined_params = {...current_params, ...search_object}
    const cleaned_params = Object.entries(combined_params).filter(([_, value]) =>
      value !== null && value !== undefined && value !== ''
    );

    const url = Url.build(cleaned_params)

    return url;
}