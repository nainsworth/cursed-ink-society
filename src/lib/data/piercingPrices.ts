export interface PiercingProduct {
	product: string;
	price: string;
	note?: string;
}

export interface PiercingType {
	type: string;
	products: PiercingProduct[];
}

export const piercingProducts: PiercingType[] = [
	{
		type: 'Ears',
		products: [
			{ product: 'Lobe (Single)', price: '$50' },
			{ product: 'Lobe (Double)', price: '$70' },
			{ product: 'Helix', price: '$50' },
			{ product: 'Daith', price: '$50' },
			{ product: 'Tragus', price: '$50' },
			{ product: 'Conch', price: '$50' },
			{ product: 'Rook', price: '$50' },
			{ product: 'Industrial', price: '$60' }
		]
	},
	{
		type: 'Face',
		products: [
			{ product: 'Eyebrow', price: '$50' },
			{ product: 'Nostril', price: '$50' },
			{ product: 'Septum', price: '$50' },
			{ product: 'Tongue', price: '$60' },
			{ product: 'Smiley', price: '$60' },
			{ product: 'Labret (Single)', price: '$60', note: 'Medusa, Monroe, Vertical, etc.' },
			{ product: 'Labret (Double)', price: '$100', note: 'Snake/Spider Bites, etc.' },
			{ product: 'Canine Bites', price: '$140' }
		]
	},
	{
		type: 'Body',
		products: [
			{ product: 'Surface', price: '$100' },
			{ product: 'Nipple (Single)', price: '$50' },
			{ product: 'Nipple (Double)', price: '$100' },
			{ product: 'Navel', price: '$50' },
			{ product: 'Genitals', price: '$100' }
		]
	},
	{
		type: 'Jewelry',
		products: [
			{
				product: 'Single Top/Bottom',
				price: '$5'
			},
			{
				product: 'Single Piece',
				price: '$10',
				note: '20g, 18g, or 16g'
			},
			{
				product: 'Single Navel/Industrial',
				price: '$15',
				note: '14g'
			},
			{
				product: 'Double/Pair',
				price: '$20',
				note: '20g, 18g, or 16g'
			}
		]
	},
	{
		type: 'Misc.',
		products: [
			{
				product: 'Jewelry Change (With Purchase)',
				price: 'Free'
			},
			{
				product: 'Jewelry Change (Outside Jewelry)',
				price: '$5'
			},
			{
				product: 'Aftercare',
				price: '$10'
			}
		]
	}
];
