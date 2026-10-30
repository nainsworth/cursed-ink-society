import { redirect, type Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const handle: Handle = async ({ event, resolve }) => {
	const { pathname, searchParams } = event.url;

	// Let yourself in: visit any page with ?preview=YOUR_KEY once
	if (searchParams.get('preview') === env.PREVIEW_KEY) {
		event.cookies.set('preview', env.PREVIEW_KEY!, {
			path: '/',
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 30
		});
	}
	const hasPreview = event.cookies.get('preview') === env.PREVIEW_KEY;

	if (env.MAINTENANCE_MODE === 'true' && !hasPreview && pathname !== '/coming-soon') {
		redirect(307, '/coming-soon');
	}

	return resolve(event);
};
