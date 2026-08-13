<script lang="ts">
	import TeamRoster from '$lib/components/TeamRoster.svelte';
	import { PR_MEMBERS, ENGINEERING_MEMBERS } from '$lib/data/team';
</script>

<svelte:head>
	<title>SpectrumBits | Team</title>
</svelte:head>

<TeamRoster
	kicker="Meet the Team"
	title="SpectrumBits Members"
	lead="Meet the people behind SpectrumBits, organized by department."
	prMembers={PR_MEMBERS}
	engMembers={ENGINEERING_MEMBERS}
/>
