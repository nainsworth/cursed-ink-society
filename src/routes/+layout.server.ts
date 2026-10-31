import type { LayoutServerLoad } from './$types';

// Returning the path makes this rerun on every navigation, so the hook always runs
export const load: LayoutServerLoad = ({ url }) => {
	return { pathname: url.pathname };
};
