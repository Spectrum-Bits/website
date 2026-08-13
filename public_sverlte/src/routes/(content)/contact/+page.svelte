<script lang="ts">
	import RobotShowcase from '$lib/components/RobotShowcase.svelte';
</script>

<svelte:head>
	<title>SpectrumBits | Contact</title>
</svelte:head>

<RobotShowcase
	kicker="Get in Touch"
	title="Contact SpectrumBits"
	lead="Are you interested in learning more about our team or even joining us as a sponsor? Check out our contact info!"
	details={[
		{
			label: 'Email',
			value: 'spectrum.bits@spectrum.ro',
			href: 'mailto:spectrum.bits@spectrum.ro'
		},
		{
			label: 'Instagram',
			value: '@spectrumbits',
			href: 'https://instagram.com/spectrumbits',
			external: true
		},
		{
			label: 'LinkedIn',
			value: '@spectrum-bits',
			href: 'https://www.linkedin.com/in/spectrum-bits-29155b3b7?',
			external: true
		},
		{
			label: 'Facebook',
			value: '@spectrum-bits',
			href: 'https://www.facebook.com/profile.php?id=61582144958171',
			external: true
		}
	]}
	mediaSrc="/assets/phone.avif"
	mediaAlt="SpectrumBits Contact"
/>
