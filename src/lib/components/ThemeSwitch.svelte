<script lang="ts">
	import { theme, toggleTheme } from '$lib/theme.svelte';

	let isDark = $derived(theme.current === 'dark');
</script>

<button
	type="button"
	class="theme-switch"
	role="switch"
	aria-checked={isDark}
	aria-label="Toggle dark theme"
	onclick={toggleTheme}
>
	<span class="theme-switch-track">
		<span class="theme-switch-knob" aria-hidden="true">{isDark ? '☾' : '☀'}</span>
	</span>
</button>

<style>
	.theme-switch {
		flex-shrink: 0;
		width: 28px;
		height: 56px;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
	}

	.theme-switch-track {
		box-sizing: border-box;
		display: block;
		position: relative;
		width: 100%;
		height: 100%;
		border: 1px solid rgba(var(--brand-rgb), 0.25);
		border-radius: 999px;
		background: rgba(var(--brand-rgb), 0.08);
		transition:
			background 0.25s ease,
			border-color 0.25s ease;
	}

	.theme-switch:hover .theme-switch-track {
		border-color: rgba(var(--brand-rgb), 0.4);
	}

	.theme-switch-knob {
		position: absolute;
		top: 3px;
		left: 50%;
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: var(--second);
		color: #fff;
		font-size: 0.7rem;
		line-height: 1;
		box-shadow: 0 2px 6px var(--shadow-color);
		transform: translate(-50%, 0);
		transition:
			transform 0.25s ease,
			background 0.25s ease,
			color 0.25s ease;
	}

	.theme-switch[aria-checked='true'] .theme-switch-knob {
		background: var(--third);
		color: #3f3f46;
		transform: translate(-50%, 28px);
	}
</style>
