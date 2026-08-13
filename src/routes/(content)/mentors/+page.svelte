<script lang="ts">
	import RobotShowcase from '$lib/components/RobotShowcase.svelte';
	import InfoList from '$lib/components/InfoList.svelte';
	import { MENTORS } from '$lib/data/mentors';
</script>

<svelte:head>
	<title>SpectrumBits | Mentors</title>
</svelte:head>

<RobotShowcase
	kicker="Experience Matters"
	title="Mentors"
	lead="Mentors help us in the early and late stages of development by sharing their previous experience with us."
	mediaSrc="/assets/programming.avif"
	mediaAlt="SpectrumBits Mentors"
>
	<InfoList label="Name" items={MENTORS} ariaLabel="SpectrumBits Mentors" />
</RobotShowcase>
