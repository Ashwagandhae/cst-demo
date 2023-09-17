<script lang="ts">
	import { base } from '$app/paths';
	import Activities from '../Activities.svelte';
	import Page from '../Page.svelte';
	import Title from '../Title.svelte';
</script>

<Page>
	<Title title="Welcome to CST's club fair activities" subtitle="Check out some fun things to do" />
	<Activities
		items={[
			{
				title: 'Controversial quiz',
				url: `${base}/fair/quiz`
			},
			{
				title: 'Fun coding problems',
				url: `${base}/fair/problems`
			},
			{
				title: 'CST stats',
				url: `${base}/fair/stats`
			},
			{
				title: 'Sign up',
				url: `${base}/fair/signup`,
				special: true
			}
		]}
	/>
</Page>
