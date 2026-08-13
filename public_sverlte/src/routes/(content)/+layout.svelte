<script lang="ts">
	let { children } = $props();
</script>

<main class="page-content">
	{@render children?.()}
</main>

<style>
	.page-content {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - 104px);
		max-width: 1120px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
		text-align: center;
	}
</style>
