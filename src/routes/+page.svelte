<script lang="ts">
	import Activities from './Activities.svelte';
	import Page from './Page.svelte';
	import Title from './Title.svelte';
</script>

<Page>
	<Title title="Welcome to Computer Science Team" subtitle="Check out some fun things to do" />
	<Activities
		items={[
			{
				title: 'Slides',
				url: 'slides'
			},
			{
				title: 'Club fair activities',
				url: 'fair'
			}
		]}
	/>
</Page>
