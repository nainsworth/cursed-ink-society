import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit/hooks';
import { PREVIEW_KEY, MAINTENANCE_MODE } from '$app/env/private';

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname, searchParams } = event.url;

	// Let yourself in: visit any page with ?preview=YOUR_KEY once
	if (PREVIEW_KEY && searchParams.get('preview') === PREVIEW_KEY) {
		event.cookies.set('preview', PREVIEW_KEY!, {
			path: '/',
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 30
		});
	}

	const hasPreview = !!PREVIEW_KEY && event.cookies.get('preview') === PREVIEW_KEY;

	if (MAINTENANCE_MODE === 'true' && !hasPreview && pathname !== '/coming-soon') {
		redirect(307, '/coming-soon');
	}

	return resolve(event);
};
