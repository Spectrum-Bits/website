<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>SpectrumBits Robotics</title>
	<link rel="icon" type="image/x-icon" href="/assets/SpectrumBits.jpg" />
</svelte:head>

<Navbar />
{@render children?.()}
