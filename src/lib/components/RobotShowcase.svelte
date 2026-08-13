<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Detail {
		label: string;
		value: string;
		href?: string;
		external?: boolean;
	}

	let {
		kicker,
		title,
		lead,
		details = [],
		body = '',
		mediaSrc,
		mediaAlt,
		children
	}: {
		kicker: string;
		title: string;
		lead: string;
		details?: Detail[];
		body?: string;
		mediaSrc: string;
		mediaAlt: string;
		children?: Snippet;
	} = $props();
</script>

<section class="robot-showcase">
	<div class="robot-copy">
		<p class="robot-kicker">{kicker}</p>
		<h1>{title}</h1>

		<p class="robot-lead">
			{lead}
		</p>

		{#if details.length > 0}
			<div class="robot-details">
				{#each details as detail (detail.label)}
					<div>
						<span>{detail.label}</span>
						<strong>
							{#if detail.href}
								<a
									href={detail.href}
									target={detail.external ? '_blank' : undefined}
									rel="noopener external">{detail.value}</a
								>
							{:else}
								{detail.value}
							{/if}
						</strong>
					</div>
				{/each}
			</div>
		{/if}

		{@render children?.()}

		{#if body}
			<p>
				{body}
			</p>
		{/if}
	</div>

	<figure class="robot-media">
		<img src={mediaSrc} alt={mediaAlt} />
	</figure>
</section>

<style>
	.robot-showcase {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
		gap: 2rem;
		align-items: center;
		width: 100%;
		padding: 2rem;
		background: hsla(0, 0%, 100%, 0.75);
		backdrop-filter: blur(16px);
		border: 1px solid rgba(109, 40, 217, 0.08);
		border-radius: 20px;
		box-shadow: 0 20px 45px rgba(0, 0, 0, 0.07);
		text-align: left;
	}

	.robot-copy {
		min-width: 0;
	}

	.robot-copy h1 {
		color: var(--second);
		font-size: 2.8rem;
		font-weight: 900;
		line-height: 1.05;
		margin-bottom: 1rem;
	}

	.robot-copy p {
		color: #52525b;
		font-size: 1.05rem;
		line-height: 1.75;
	}

	.robot-kicker {
		margin-bottom: 0.75rem;
		color: var(--second);
		font-size: 0.85rem !important;
		font-weight: 800;
		letter-spacing: 0;
		text-transform: uppercase;
	}

	.robot-lead {
		color: #3f3f46;
		font-size: 1.18rem;
		margin-bottom: 1.4rem;
	}

	.robot-details {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
		margin: 1.5rem 0;
	}

	.robot-details div {
		background: hsla(0, 0%, 100%, 0.8);
		border: 1px solid rgba(109, 40, 217, 0.1);
		border-radius: 8px;
		padding: 0.9rem;
	}

	.robot-details span {
		display: block;
		color: #71717a;
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0;
		text-transform: uppercase;
	}

	.robot-details strong {
		display: block;
		color: var(--ink);
		font-size: 0.98rem;
		margin-top: 0.35rem;
		overflow-wrap: anywhere;
		word-break: break-word;
	}

	.robot-details strong :global(a) {
		color: inherit;
		text-decoration: none;
		overflow-wrap: anywhere;
		word-break: break-word;
		transition: color 0.2s ease;
	}

	.robot-details strong :global(a:hover) {
		color: #3b82f6;
		text-decoration: underline;
	}

	.robot-media {
		width: 100%;
		max-width: 700px;
		margin: 0 auto;
	}

	.robot-media img {
		width: 100%;
		height: 100%;
		min-height: 400px;
		object-fit: cover;
		display: block;
		border-radius: 16px;
		box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
	}

	@media (max-width: 800px) {
		.robot-showcase {
			grid-template-columns: 1fr;
			padding: 1.25rem;
		}

		.robot-copy h1 {
			font-size: 2.1rem;
		}

		.robot-details {
			grid-template-columns: 1fr;
		}
	}
</style>
