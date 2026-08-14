<script lang="ts">
	import { onMount } from 'svelte';
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { initTheme } from '$lib/theme.svelte';

	let { children } = $props();

	onMount(() => {
		initTheme();
	});
</script>

<svelte:head>
	<title>SpectrumBits Robotics</title>
	<link rel="icon" type="image/x-icon" href="/assets/SpectrumBits.jpg" />
</svelte:head>

<Navbar />
{@render children?.()}
