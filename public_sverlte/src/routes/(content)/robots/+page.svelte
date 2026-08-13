<script lang="ts">
	import RobotShowcase from '$lib/components/RobotShowcase.svelte';
</script>

<svelte:head>
	<title>SpectrumBits | Robots</title>
</svelte:head>

<RobotShowcase
	kicker="2026 Competition Robot"
	title="SpectrumBits FTC Robot"
	lead="A demo image of our robot"
	details={[
		{ label: 'Robot Name', value: 'FTC YGA' },
		{ label: 'Season', value: '2026–2027' }
	]}
	body="Our current robot is still under development, we are in the process of testing and iterating."
	mediaSrc="/assets/robot.jpeg"
	mediaAlt="SpectrumBits FTC Robot"
/>
