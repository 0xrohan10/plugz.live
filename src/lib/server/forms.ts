export function validateRequired(value: string | undefined, field: string): string | null {
	if (!value || value.trim() === '') return `${field} is required`;
	return null;
}

export function validateEmail(email: string | undefined): string | null {
	if (!email || email.trim() === '') return 'Email is required';
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email address';
	return null;
}

export interface FormErrors {
	[key: string]: string;
}

export function hasErrors(errors: FormErrors): boolean {
	return Object.values(errors).some((e) => e !== null && e !== undefined);
}

export function validateVenueApplication(data: FormData): { errors: FormErrors; valid: boolean } {
	const venueName = data.get('venueName') as string;
	const email = data.get('email') as string;

	const errors: FormErrors = {};
	const vnError = validateRequired(venueName, 'Venue name');
	if (vnError) errors.venueName = vnError;
	const emError = validateEmail(email);
	if (emError) errors.email = emError;

	return { errors, valid: !hasErrors(errors) };
}
