<script lang="ts">
	import Activities from '../Activities.svelte';
	import Page from '../Page.svelte';
	import Title from '../Title.svelte';
</script>

<Page>
	<Title title="ACSL" subtitle="Some useful links" />
	<Activities
		items={[
			{
				title: 'Form to choose division',
				url: 'https://forms.gle/zVvtcxtFkykzujHL6',
				target: '_blank'
			},
			{
				title: 'ACSL study materials',
				url: 'https://www.acsl.org/get-started/study-materials',
				target: '_blank'
			}
		]}
	/>
</Page>
