<script lang="ts">
	import { resolve } from '$app/paths';

	const copyrightYear = new Date().getFullYear();
</script>

<svelte:head>
	<title>SpectrumBits Robotics</title>
</svelte:head>

<section class="hero-section">
	<div class="hero-content mx-auto flex w-full max-w-7xl flex-1 flex-col">
		<div class="hero-grid grid items-center lg:grid-cols-2">
			<!-- LEFT -->
			<div class="text-center lg:text-left">
				<div class="brand-row flex items-center justify-center gap-x-4 lg:justify-start">
					<h1 class="hero-title text-4xl leading-tight font-black sm:text-5xl md:text-7xl">
						Spectrum<span class="accent">Bits</span>
					</h1>

					<img
						src="/assets/Spectrum-logo.png"
						alt="SpectrumBits Logo"
						width="256"
						height="256"
						decoding="async"
						class="brand-logo-primary w-auto object-contain"
					/>

					<img
						src="/assets/SpectrumBits.jpg"
						alt="SpectrumBits Logo"
						width="150"
						height="150"
						decoding="async"
						class="brand-logo-secondary w-auto object-contain"
					/>
				</div>

				<p
					class="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 md:text-xl lg:mx-0 dark:text-zinc-300"
				>
					<i>"A Competitive Robotics Team"</i>
				</p>

				<div class="mt-8">
					<a id="sponsor-us" class="sponsor-button" href={resolve('/contact/')}>Sponsor Us</a>
				</div>
			</div>

			<!-- RIGHT -->
			<div class="flex justify-center">
				<div class="code-window">
					<div class="code-header">
						<span>spectrum_bits_snippet.java</span>
						<span>● ● ●</span>
					</div>
					<pre class="code-body"> <span class="keyword">public static void</span> <span
							class="method-name">main</span
						>(String[] args) &lbrace;
     <span class="keyword">while</span> (<span class="boolean">true</span>) &lbrace;
         <span class="method-call">code</span>();
         <span class="method-call">test</span>();
         <span class="method-call">solve</span>();
     &rbrace;
 &rbrace;
</pre>
				</div>
			</div>
		</div>

		<!-- STATS -->
		<div class="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
			<div class="stat-card rounded-2xl p-4 text-center sm:p-6 md:rounded-3xl">
				<h2
					class="text-3xl font-black text-purple-700 sm:text-4xl md:text-5xl dark:text-purple-300"
				>
					17
				</h2>
				<p class="mt-2 font-medium text-zinc-500 dark:text-zinc-400">Members</p>
			</div>

			<div class="stat-card rounded-2xl p-4 text-center sm:p-6 md:rounded-3xl">
				<h2
					class="text-3xl font-black text-purple-700 sm:text-4xl md:text-5xl dark:text-purple-300"
				>
					2
				</h2>
				<p class="mt-2 font-medium text-zinc-500 dark:text-zinc-400">Departaments</p>
			</div>

			<div class="stat-card rounded-2xl p-4 text-center sm:p-6 md:rounded-3xl">
				<h2
					class="text-3xl font-black text-purple-700 sm:text-4xl md:text-5xl dark:text-purple-300"
				>
					1
				</h2>
				<p class="mt-2 font-medium text-zinc-500 dark:text-zinc-400">Robot</p>
			</div>

			<div class="stat-card rounded-2xl p-4 text-center sm:p-6 md:rounded-3xl">
				<h2
					class="text-3xl font-black text-purple-700 sm:text-4xl md:text-5xl dark:text-purple-300"
				>
					1
				</h2>
				<p class="mt-2 font-medium text-zinc-500 dark:text-zinc-400">Goal</p>
			</div>
		</div>

		<section class="hero-footer text-center">
			<p class="copyright">© {copyrightYear} SpectrumBits. All rights reserved.</p>
			<h6>site version 1.0.2</h6>
		</section>
	</div>
</section>

<style>
	.hero-section {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-height: 100dvh;
		padding: 3.5rem 1rem 4rem;
	}

	.hero-grid {
		gap: 3rem;
	}

	.hero-footer {
		margin-top: auto;
		padding-top: 2.5rem;
	}

	.copyright {
		color: var(--muted);
		font-size: 0.9rem;
		margin-bottom: 0.35rem;
	}

	.brand-row {
		flex-wrap: wrap;
		row-gap: 0.75rem;
	}

	.brand-logo-primary {
		height: 2.5rem;
	}

	.brand-logo-secondary {
		height: 2.125rem;
	}

	.hero-title {
		color: var(--second);
	}

	.accent {
		color: var(--third);
	}

	.sponsor-button {
		position: relative;
		overflow: hidden;

		padding: 16px 40px;
		border: none;
		border-radius: 20px;

		font-size: 1.1rem;
		font-weight: 800;
		letter-spacing: 0.5px;

		color: white;
		cursor: pointer;
		display: inline-block;
		text-decoration: none;

		background: linear-gradient(135deg, #6d28d9 0%, #8b5cf6 55%, #eefa15 100%);

		box-shadow:
			0 15px 35px rgba(109, 40, 217, 0.35),
			0 5px 15px rgba(250, 204, 21, 0.25);

		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease;
	}

	.sponsor-button:hover {
		transform: translateY(-4px) scale(1.03);

		box-shadow:
			0 20px 45px rgba(109, 40, 217, 0.45),
			0 10px 25px rgba(21, 116, 250, 0.35);
	}

	.sponsor-button:active {
		transform: translateY(-1px) scale(0.98);
	}

	.sponsor-button::before {
		content: '';

		position: absolute;
		top: 0;
		left: -120%;

		width: 60%;
		height: 100%;

		background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.55), transparent);

		transform: skewX(-25deg);
		transition: left 0.8s ease;
	}

	.sponsor-button:hover::before {
		left: 130%;
	}

	.sponsor-button::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 20px;

		box-shadow: 0 0 0 rgba(250, 204, 21, 0);

		animation: sponsorPulse 2.5s infinite;
	}

	@keyframes sponsorPulse {
		0% {
			box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.4);
		}

		70% {
			box-shadow: 0 0 0 16px rgba(250, 204, 21, 0);
		}

		100% {
			box-shadow: 0 0 0 0 rgba(250, 204, 21, 0);
		}
	}

	.code-window {
		background: #1d1e22;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
		width: min(100%, 36rem);
	}

	.code-header {
		min-height: 52px;
		background: #2a2b31;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1.25rem;
		color: #c4c4c4;
		font-weight: 600;
	}

	.code-header span:first-child {
		min-width: 0;
		overflow-wrap: anywhere;
	}

	.code-body {
		padding: 1rem;
		color: #f8f8f2;
		font-size: 0.95rem;
		line-height: 1.65;
		min-height: auto;
		overflow-x: auto;
		white-space: pre;
		font-family: Consolas, Monaco, monospace;
		tab-size: 4;
	}

	.code-body :global(.keyword) {
		color: #c678dd;
	}

	.code-body :global(.method),
	.code-body :global(.method-name),
	.code-body :global(.method-call) {
		color: #61afef;
	}

	.code-body :global(.boolean) {
		color: #e5c07b;
	}

	.stat-card {
		background: rgba(var(--surface-rgb), 0.8);
		backdrop-filter: blur(12px);
		border: 1px solid rgba(var(--brand-rgb), 0.08);
		transition: 0.25s ease;
	}

	.stat-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 15px 40px var(--shadow-color);
	}

	@media (max-width: 768px) {
		.hero-section {
			padding-top: 2.5rem;
		}

		.code-body {
			font-size: 0.85rem;
		}
	}

	@media (min-width: 768px) {
		.hero-section {
			padding: 5rem 1.5rem 5.5rem;
		}

		.hero-grid {
			gap: 5rem;
		}

		.brand-logo-primary {
			height: 4rem;
		}

		.brand-logo-secondary {
			height: 3.5rem;
		}

		.code-body {
			padding: 1.25rem 1.5rem;
			font-size: 1rem;
		}
	}

	@media (max-width: 480px) {
		.sponsor-button {
			width: 100%;
			max-width: 15rem;
			padding: 14px 24px;
			font-size: 1rem;
			border-radius: 16px;
		}

		.code-header {
			padding-inline: 1rem;
			font-size: 0.85rem;
		}

		.code-body {
			font-size: 0.78rem;
		}

		.stat-card {
			padding: 1rem;
		}
	}
</style>
