const STORAGE_KEY = 'sb-theme';

type Theme = 'light' | 'dark';

export const theme = $state<{ current: Theme }>({ current: 'light' });

function setTheme(next: Theme) {
	theme.current = next;
	document.documentElement.dataset.theme = next;
}

export function initTheme() {
	const initial = (document.documentElement.dataset.theme as Theme | undefined) ?? 'light';
	theme.current = initial;

	if (localStorage.getItem(STORAGE_KEY)) return;

	const media = window.matchMedia('(prefers-color-scheme: dark)');
	media.addEventListener('change', (event) => {
		if (localStorage.getItem(STORAGE_KEY)) return;
		setTheme(event.matches ? 'dark' : 'light');
	});
}

export function toggleTheme() {
	const next = theme.current === 'dark' ? 'light' : 'dark';
	setTheme(next);
	localStorage.setItem(STORAGE_KEY, next);
}
