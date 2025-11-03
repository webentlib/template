import { API_HOST, IS_IN_DOCKER, DOCKER_API_HOST } from '/conf/config.local.js';
import { redirect } from '@sveltejs/kit';
import { handle_device } from '/les/';

export async function handleFetch({ event, request, fetch}) {
	/*
	Когда мы внутри `load` вызываем fetch('/api/url/'),
	запрос идёт к фронт-сервису http://127.0.0.1:3000/api/url/ в обход прокси.
	Как это настроить на уровне vite/svelte — неизвестно.
	Поэтому, меняем http://127.0.0.1:3000 на http://127.0.0.1:8000
	*/
    const [host, ...slugs_array] = request.url.split('/').slice(2);

    const api_host = IS_IN_DOCKER ? DOCKER_API_HOST : API_HOST;
    const slugs = slugs_array.join('/')
	const url = api_host + '/' + (slugs || '');

	request = new Request(url, request);
	return fetch(request);
}

export async function handle({ event, resolve }) {

	// REDIRECT ALL ANONYMOUS
	// const me_response = await event.fetch(`/api/me/`);
	// const me = await me_response.json();
	// if (event.url.pathname !== '/login' && me.is_anonymous) {
	// 	redirect(307, '/login');
	// }

	// DEVICE HTML VARS
	const device_html_vars = handle_device(event);

	const options = {
		transformPageChunk: ({ html }) => {
			for (const [var_name, value] of Object.entries(device_html_vars)) {
				html = html.replace(var_name, value);
			}
			return html;
		}
	}

	const response = await resolve(event, options);
	return response;
}
