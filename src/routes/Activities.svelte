<script lang="ts">
	import Card from './Card.svelte';

	export let exclude: string[] = [];
</script>

<div class="options">
	{#if exclude.length > 0}
		<Card title="Home" url="./" arrowBack />
	{/if}
	{#if !exclude.includes('stats')}
		<Card title="CST stats" url="./stats" />
	{/if}
	{#if !exclude.includes('problems')}
		<Card title="Fun coding problems" url="./problems" />
	{/if}
	{#if !exclude.includes('quiz')}
		<Card title="Controversial quiz" url="./quiz" />
	{/if}
	{#if !exclude.includes('signup')}
		<Card title="Sign up" url="./signup" special />
	{/if}
</div>

<style>
	.options {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--pad);
		width: 100%;
		padding: 0 10vw;
		box-sizing: border-box;
	}
</style>
