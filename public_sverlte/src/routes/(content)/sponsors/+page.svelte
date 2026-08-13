<script lang="ts">
	import RobotShowcase from '$lib/components/RobotShowcase.svelte';
	import InfoList from '$lib/components/InfoList.svelte';
	import { SPONSORS } from '$lib/data/sponsors';
</script>

<svelte:head>
	<title>SpectrumBits | Sponsors</title>
</svelte:head>

<RobotShowcase
	kicker="Supporting Innovation"
	title="Our Sponsors"
	lead="These organizations provide us with financial support to help us further develop our robot."
	mediaSrc="/assets/paper.jpg"
	mediaAlt="SpectrumBits Sponsors"
>
	<InfoList label="Sponsor Name" items={SPONSORS} ariaLabel="SpectrumBits Sponsors" />
</RobotShowcase>
