<script lang="ts">
	import { resolve } from '$app/paths';

	let mobileOpen = $state(false);

	const links = [
		{ href: resolve('/'), label: 'Home' },
		{ href: resolve('/team/'), label: 'Team' },
		{ href: resolve('/robots/'), label: 'Robots' },
		{ href: resolve('/sponsors/'), label: 'Sponsors' },
		{ href: resolve('/mentors/'), label: 'Mentors' },
		{ href: resolve('/contests/'), label: 'Contests' },
		{ href: resolve('/contact/'), label: 'Contact' }
	];
</script>

<header class="sticky top-0 z-50">
	<div class="mx-auto max-w-7xl px-4 pt-4 md:px-6">
		<nav class="glass rounded-2xl px-5 py-4">
			<div class="flex items-center justify-between">
				<!-- Logo -->
				<div class="flex items-center gap-3">
					<div>
						<h1 class="text-lg font-black text-purple-700">SpectrumBits</h1>
						<p class="text-xs text-zinc-500">Robotics Team</p>
					</div>
				</div>

				<!-- Desktop Links -->
				<div class="hidden items-center gap-8 md:flex">
					{#each links as link (link.href)}
						<a href={link.href} class="nav-link font-medium text-zinc-600">{link.label}</a>
					{/each}
				</div>

				<!-- Mobile Menu Button -->
				<button
					class="text-2xl md:hidden"
					onclick={() => (mobileOpen = !mobileOpen)}
					aria-expanded={mobileOpen}
					aria-label="Toggle menu"
				>
					☰
				</button>
			</div>

			<!-- Mobile Menu -->
			{#if mobileOpen}
				<div class="mt-5 border-t border-zinc-200 pt-5 md:hidden">
					<div class="flex flex-col gap-4">
						{#each links as link (link.href)}
							<a href={link.href} class="text-zinc-600">{link.label}</a>
						{/each}
					</div>
				</div>
			{/if}
		</nav>
	</div>
</header>
