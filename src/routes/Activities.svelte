<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import Card from './Card.svelte';

	export let items: ComponentProps<Card>[];
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
