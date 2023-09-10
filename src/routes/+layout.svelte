<script lang="ts">
	import './global.css';
	import '@fontsource-variable/jetbrains-mono';
	import { dev } from '$app/environment';

	// imports to show current page
	import { page } from '$app/stores';

	$: prettyPage =
		$page.url.pathname.length == 1
			? ''
			: '/' +
			  $page.url.pathname
					.slice(1)
					.split('-')
					.map((word) => word[0] + word.slice(1))
					.join(' ');
</script>

<header>
	<h1><a href="/">{'CST=>'}</a> <span class="page">{prettyPage}</span></h1>
	{#if dev}
		<div class="links">
			<a href="https://google.com">Github</a>
			<button on:click={() => localStorage.clear()}>Clear localStorage</button>
		</div>
	{/if}
</header>
<main>
	<slot />
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1em;
		background: var(--back-1);
	}

	main {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.links {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--pad);
	}

	.page {
		color: var(--text);
		font-weight: 400;
	}
</style>
