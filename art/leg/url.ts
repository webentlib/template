import { page as pageState } from '$app/state';


export const Url: any = {}


Url.cleaned = function(params={}) {
    const cleanedParams = Object.entries(params).filter(([_, value]) =>
      value !== null && value !== undefined && value !== ''
    ).map(([key, value]) => [key, String(value)]); // Ensure values are strings
    return cleanedParams;
}

Url.build = function(params={}) {

    const cleanedParams = Url.cleaned(params);

    const searchParams = new URLSearchParams(cleanedParams)
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

Url.modify = function(params={}) {

    const currentParams = Object.fromEntries(new URLSearchParams(pageState.url.search));
    const combinedParams = {...currentParams, ...params}

    const url = Url.build(combinedParams)

    return url;
}