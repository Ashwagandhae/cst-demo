<script lang="ts">
	export let number: number;
	export let unit: string | null = null;
	export let description: string | null = null;
</script>

<div class="stat">
	<h2>
		{number}{#if unit != null}{' ' + unit}{/if}
	</h2>
	<h3>{description}</h3>
</div>

<style>
	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: var(--pad);
		background: var(--back-1);
		box-sizing: border-box;
		gap: 1rem;

		border-radius: var(--rad);
	}

	h2 {
		margin: 0;
		padding: 0;
		font-size: 2em;
		font-weight: 600;
	}

	h3 {
		margin: 0;
		padding: 0;
		font-size: 1.2em;
		line-height: 1.5em;
		font-weight: 400;
	}
</style>
