<script lang="ts">
	import Card from './Card.svelte';

	export let items: {
		title: string;
		url: string;
		special?: boolean;
		arrowBack?: boolean;
	}[] = [];
</script>

<div class="options">
	{#each items as item}
		<Card {...item} />
	{/each}
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
