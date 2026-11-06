// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface Window {
		hcaptcha?: {
			render: (
				container: HTMLElement,
				params: { sitekey: string; theme?: 'light' | 'dark' }
			) => string;
			reset: (widgetId?: string) => void;
		};
		hcaptchaOnLoad?: () => void;
	}
}

export {};
