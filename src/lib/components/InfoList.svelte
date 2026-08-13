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
		background: hsla(0, 0%, 100%, 0.8);
		border: 1px solid rgba(109, 40, 217, 0.1);
		border-radius: 8px;
		padding: 0.9rem;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 1rem;
		color: var(--ink);
		font-size: 0.98rem;
	}

	.team-row-heading {
		background: rgba(109, 40, 217, 0.06);
	}

	.team-row-heading span {
		display: block;
		color: #71717a;
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
