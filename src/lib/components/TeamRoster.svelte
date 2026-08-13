<script lang="ts">
	import type { Member } from '$lib/data/team';

	let {
		kicker,
		title,
		lead,
		prMembers,
		engMembers
	}: {
		kicker: string;
		title: string;
		lead: string;
		prMembers: Member[];
		engMembers: Member[];
	} = $props();
</script>

{#snippet memberCard(member: Member)}
	{@const isPlaceholder = member.photo.endsWith('SpectrumBits.jpg')}
	<article class="member-card" class:is-lead={member.lead}>
		<div class="member-avatar-wrap">
			<img
				class="member-avatar"
				class:member-avatar-photo={!isPlaceholder}
				src={member.photo}
				alt={member.name}
			/>
		</div>
		<h3 class="member-name">{member.name}</h3>
		<p class="member-role">{member.role}</p>
		{#if member.lead}
			<span class="lead-badge">Lead</span>
		{/if}
		{#if member.mentor}
			<span class="mentor-badge">Mentor</span>
		{/if}
	</article>
{/snippet}

<section class="team-roster">
	<p class="robot-kicker">{kicker}</p>
	<h1>{title}</h1>
	<p class="robot-lead">
		{lead}
	</p>

	<div class="team-columns">
		<div class="team-column">
			<h2 class="team-column-title">Public Relations</h2>
			<div class="team-grid">
				{#each prMembers as member (member.name)}
					{@render memberCard(member)}
				{/each}
			</div>
		</div>
		<div class="team-column">
			<h2 class="team-column-title">Engineering</h2>
			<div class="team-grid">
				{#each engMembers as member (member.name)}
					{@render memberCard(member)}
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.team-roster {
		width: 100%;
		text-align: left;
	}

	.team-roster .robot-kicker,
	.team-roster h1,
	.team-roster .robot-lead {
		text-align: center;
	}

	.team-roster h1 {
		color: var(--second);
		font-size: 2.8rem;
		font-weight: 900;
		line-height: 1.05;
		margin-bottom: 1rem;
	}

	.team-roster .robot-kicker {
		margin-bottom: 0.75rem;
		color: var(--second);
		font-size: 0.85rem !important;
		font-weight: 800;
		letter-spacing: 0;
		text-transform: uppercase;
	}

	.team-roster .robot-lead {
		color: #3f3f46;
		font-size: 1.18rem;
		margin-bottom: 1.4rem;
	}

	.team-columns {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 2.5rem;
		width: 100%;
		text-align: left;
		margin-top: 2rem;
	}

	.team-column-title {
		font-size: 1.35rem;
		font-weight: 900;
		color: var(--second);
		text-transform: uppercase;
		letter-spacing: 0.03em;
		margin-bottom: 1.25rem;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid rgba(109, 40, 217, 0.12);
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}

	.member-card {
		background: rgba(255, 255, 255, 0.8);
		border: 1px solid rgba(109, 40, 217, 0.08);
		backdrop-filter: blur(10px);
		border-radius: 14px;
		padding: 1rem 0.75rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		transition: 0.25s ease;
	}

	.member-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
	}

	.member-card.is-lead {
		border-color: var(--third);
		box-shadow: 0 0 0 2px rgba(250, 204, 21, 0.4);
	}

	.member-avatar-wrap {
		width: 84px;
		height: 84px;
		border-radius: 50%;
		overflow: hidden;
		background: #f4f0ff;
		border: 2px solid rgba(109, 40, 217, 0.15);
		margin-bottom: 0.65rem;
		flex-shrink: 0;
	}

	.member-avatar {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 20%;
	}

	.member-avatar-photo {
		transform: scale(1.35);
		transform-origin: 50% 20%;
	}

	.member-name {
		font-size: 0.92rem;
		font-weight: 800;
		color: var(--ink);
		margin-bottom: 0.2rem;
	}

	.member-role {
		font-size: 0.68rem;
		color: #71717a;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		margin-bottom: 0.4rem;
	}

	.lead-badge,
	.mentor-badge {
		display: inline-block;
		font-size: 0.62rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		padding: 0.2rem 0.55rem;
		border-radius: 999px;
	}

	.lead-badge {
		background: var(--third);
		color: #3f3f46;
	}

	.mentor-badge {
		background: var(--second);
		color: #fff;
	}

	@media (max-width: 800px) {
		.team-columns {
			grid-template-columns: 1fr;
		}

		.team-roster h1 {
			font-size: 2.1rem;
		}
	}

	@media (max-width: 480px) {
		.team-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
