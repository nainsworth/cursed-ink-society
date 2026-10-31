import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PREVIEW_KEY: { schema: (input) => input ?? '' },
	MAINTENANCE_MODE: { schema: (input) => input ?? '' }
});
