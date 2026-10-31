const files = import.meta.glob<string>('../assets/images/recent-work/**/*.{JPG,jpg,webp}', {
	eager: true,
	query: '?url',
	import: 'default'
});

export interface Work {
	src: string;
	type: 'tattoo' | 'piercing';
	artist: string;
	style: string;
	date: string;
	alt: string;
}

const imageUrl = (file: string) => files[`../assets/images/recent-work/${file}`];

export const recentWork: Work[] = [
	{
		src: imageUrl('angelle/moth-with-flowers.JPG'),
		type: 'tattoo',
		artist: 'angelle',
		style: 'Black & Grey',
		date: '2026-10-18',
		alt: 'Black and grey moth between two large flowers with leaves, on a leg'
	},
	{
		src: imageUrl('angelle/samurai.JPG'),
		type: 'tattoo',
		artist: 'angelle',
		style: 'Black & Grey',
		date: '2026-09-22',
		alt: 'Black and grey armored samurai in a conical hat gripping a sword, surrounded by smoke, on an upper arm'
	},
	{
		src: imageUrl('angelle/spartan.JPG'),
		type: 'tattoo',
		artist: 'angelle',
		style: 'Black & Grey',
		date: '2026-10-29',
		alt: 'Matching Spartan helmet and shield tattoos with crossed swords and banners reading No Retreat, No Surrender, on two lower legs'
	},
	{
		src: imageUrl('anthony/medusa.JPG'),
		type: 'tattoo',
		artist: 'anthony',
		style: 'Black & Grey',
		date: '2026-09-23',
		alt: 'Medusa with lowered eyes and a head of coiling snakes, on a forearm'
	},
	{
		src: imageUrl('anthony/phoenix.JPG'),
		type: 'tattoo',
		artist: 'anthony',
		style: 'Realism',
		date: '2026-09-24',
		alt: 'Dark-feathered phoenix with spread wings and long flowing tail feathers, across an upper back'
	},
	{
		src: imageUrl('anthony/spider.JPG'),
		type: 'tattoo',
		artist: 'anthony',
		style: 'Realism',
		date: '2026-10-28',
		alt: 'Large realistic spider on a web across a shoulder, with a smaller spider below on the upper arm'
	},
	{
		src: imageUrl('ashley/ninja-turtle.JPG'),
		type: 'tattoo',
		artist: 'ashley',
		style: 'Full Color',
		date: '2026-10-18',
		alt: 'Cartoon Ninja Turtle head in a red mask with a sticker-style white outline'
	},
	{
		src: imageUrl('ashley/toy-story-alien.JPG'),
		type: 'tattoo',
		artist: 'ashley',
		style: 'Full Color',
		date: '2026-09-22',
		alt: 'Colorful Toy Story alien with heart-shaped pupils holding a pizza slice, above a bubble-letter name with stars and pink splashes'
	},
	{
		src: imageUrl('ashley/winnie-the-pooh.JPG'),
		type: 'tattoo',
		artist: 'ashley',
		style: 'Watercolor',
		date: '2026-10-28',
		alt: 'Winnie the Pooh floating from a red balloon over pink, purple and blue watercolor splashes, on an arm'
	},
	{
		src: imageUrl('cody/clockwork-man.JPG'),
		type: 'tattoo',
		artist: 'cody',
		style: 'Neo-Traditional',
		date: '2026-09-24',
		alt: 'Grinning figure with curled teal hair, a red and gold eye mask and a ruffled collar, on a forearm'
	},
	{
		src: imageUrl('cody/eye-with-time.JPG'),
		type: 'tattoo',
		artist: 'cody',
		style: 'Realism',
		date: '2026-10-28',
		alt: 'Black and grey clock with silhouettes of a family walking hand in hand, above a realistic eye and rose, on a forearm'
	},
	{
		src: imageUrl('cody/slinky-dog.JPG'),
		type: 'tattoo',
		artist: 'cody',
		style: 'Neo-Traditional',
		date: '2026-09-23',
		alt: 'Slinky Dog from Toy Story looking upward with its metal spring stretched behind it, on a light blue background'
	},
	{
		src: imageUrl('harley/ear-1.JPG'),
		type: 'piercing',
		artist: 'harley',
		style: 'Piercing',
		date: '2026-10-28',
		alt: 'Two silver curved rings with ball ends in the inner ear, with a jeweled hoop in the lobe'
	},
	{
		src: imageUrl('harley/ear-2.JPG'),
		type: 'piercing',
		artist: 'harley',
		style: 'Piercing',
		date: '2026-10-18',
		alt: 'Sparkling gem stud and flower-shaped cluster stud in the inner ear, with a gold stud and gold hoops in the lobe'
	},
	{
		src: imageUrl('luis/japanese-trad.JPG'),
		type: 'tattoo',
		artist: 'luis',
		style: 'Traditional',
		date: '2026-09-24',
		alt: 'Japanese-style dragon-headed koi rising through waves and black swirling clouds with cherry blossoms, on an upper arm'
	},
	{
		src: imageUrl('luis/memorial.JPG'),
		type: 'tattoo',
		artist: 'luis',
		style: 'Black & Grey',
		date: '2026-09-22',
		alt: 'Memorial piece with Dad in script, a dove, praying hands, an anchor and clouds with rays of light, on a forearm'
	},
	{
		src: imageUrl('luis/peony-with-eyeball.JPG'),
		type: 'tattoo',
		artist: 'luis',
		style: 'Neo-Traditional',
		date: '2026-10-28',
		alt: 'Teal and orange flower with an eyeball at its center and spider webs between the petals, on a forearm'
	},
	{
		src: imageUrl('seth/flowers.JPG'),
		type: 'tattoo',
		artist: 'seth',
		style: 'Black & Grey',
		date: '2026-09-23',
		alt: 'Cluster of large black and grey flowers with dark leaves, on a thigh'
	},
	{
		src: imageUrl('seth/mandala-with-flowers.JPG'),
		type: 'tattoo',
		artist: 'seth',
		style: 'Fine Line',
		date: '2026-09-24',
		alt: 'Dotwork mandalas and outlined peonies running down an arm'
	},
	{
		src: imageUrl('seth/skull-flail.JPG'),
		type: 'tattoo',
		artist: 'seth',
		style: 'Black & Grey',
		date: '2026-10-18',
		alt: 'Spiked skull with a broken thorned chain, on an upper arm beside other tattoos'
	}
];
