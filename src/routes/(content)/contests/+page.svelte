<script lang="ts">
	import RobotShowcase from '$lib/components/RobotShowcase.svelte';
</script>

<svelte:head>
	<title>SpectrumBits | Contests</title>
</svelte:head>

<RobotShowcase
	kicker="Contests"
	title="FTC"
	lead="We are currently preparing for the 2026-2027 season of FTC"
	details={[
		{ label: 'League', value: 'FIRST Tech Challenge' },
		{ label: 'Season', value: '2026–2027' },
		{ label: 'Results', value: 'Coming Soon' }
	]}
	body="Our main goal until the start of the season is to design, build, iterate and test our robot to ensure it is ready for the competition"
	mediaSrc="/assets/contest.jpg"
	mediaAlt="FTC Competitions"
/>
