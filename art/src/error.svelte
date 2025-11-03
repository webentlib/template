<script>
	import { page } from '$app/state';
</script>

<h1>Front Error</h1>
<h2>{page.status}</h2>
<h3>{page.error.message}</h3>