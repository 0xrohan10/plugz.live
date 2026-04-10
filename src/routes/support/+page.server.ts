import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { validateRequired, validateEmail, type FormErrors, hasErrors } from '$lib/server/forms';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const firstName = data.get('firstName') as string;
		const lastName = data.get('lastName') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;

		const errors: FormErrors = {};
		const fnError = validateRequired(firstName, 'First name');
		if (fnError) errors.firstName = fnError;
		const lnError = validateRequired(lastName, 'Last name');
		if (lnError) errors.lastName = lnError;
		const emError = validateEmail(email);
		if (emError) errors.email = emError;
		const msgError = validateRequired(message, 'Message');
		if (msgError) errors.message = msgError;

		if (hasErrors(errors)) {
			return fail(400, { errors, success: false });
		}

		// TODO: Connect to email service / webhook
		return { errors: {}, success: true };
	}
};
