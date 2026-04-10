export interface Venue {
	name: string;
	lat: number;
	lng: number;
	city: string;
	state: string;
}

export const venues: Venue[] = [
	{ name: 'Moody Center', lat: 30.2812, lng: -97.7325, city: 'Austin', state: 'TX' },
	{ name: 'CFG Bank Arena', lat: 39.3048, lng: -76.6226, city: 'Baltimore', state: 'MD' },
	{ name: 'Acrisure Arena', lat: 33.7235, lng: -116.3765, city: 'Palm Desert', state: 'CA' },
	{ name: 'Budweiser Stage', lat: 43.6291, lng: -79.4153, city: 'Toronto', state: 'ON' },
	{ name: 'The Pabst Theater', lat: 43.0389, lng: -87.9106, city: 'Milwaukee', state: 'WI' },
	{ name: 'The Riverside Theater', lat: 43.0385, lng: -87.9109, city: 'Milwaukee', state: 'WI' },
	{ name: 'Miller High Life Theatre', lat: 43.0393, lng: -87.9186, city: 'Milwaukee', state: 'WI' },
	{ name: 'Turner Hall Ballroom', lat: 43.0387, lng: -87.9131, city: 'Milwaukee', state: 'WI' },
	{ name: 'Vivarium', lat: 43.0379, lng: -87.9116, city: 'Milwaukee', state: 'WI' },
	{ name: 'PHX Arena', lat: 33.4457, lng: -112.0712, city: 'Phoenix', state: 'AZ' },
	{ name: 'Enterprise Center', lat: 38.6268, lng: -90.2027, city: 'St. Louis', state: 'MO' }
];
