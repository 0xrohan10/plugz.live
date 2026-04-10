import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { validateVenueApplication } from '$lib/server/forms';

export const actions: Actions = {
	default: async ({ request }) => {
		const { errors, valid } = validateVenueApplication(await request.formData());
		if (!valid) return fail(400, { errors, success: false });

		// TODO: Connect to email service / webhook
		return { errors: {}, success: true };
	}
};
