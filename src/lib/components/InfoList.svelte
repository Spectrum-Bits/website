<script lang="ts">
	let {
		label,
		items,
		ariaLabel
	}: {
		label: string;
		items: string[];
		ariaLabel: string;
	} = $props();
</script>

<div class="team-list" aria-label={ariaLabel}>
	<div class="team-row team-row-heading">
		<span>{label}</span>
	</div>

	{#each items as item (item)}
		<div class="team-row">
			<span>{item}</span>
		</div>
	{/each}
</div>

<style>
	.team-list {
		display: grid;
		gap: 0.65rem;
		margin: 1.5rem 0;
	}

	.team-row {
		background: rgba(var(--surface-rgb), 0.8);
		border: 1px solid rgba(var(--brand-rgb), 0.1);
		border-radius: 8px;
		padding: 0.9rem;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 1rem;
		color: var(--ink);
		font-size: 0.98rem;
	}

	.team-row-heading {
		background: rgba(var(--brand-rgb), 0.06);
	}

	.team-row-heading span {
		display: block;
		color: var(--muted);
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0;
		text-transform: uppercase;
	}

	@media (max-width: 800px) {
		.team-row {
			grid-template-columns: 1fr;
		}
	}
</style>
