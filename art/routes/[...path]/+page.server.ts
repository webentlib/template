import {Router} from '/leg';

export async function load(params) {
    return await Router.route(params, true)
}