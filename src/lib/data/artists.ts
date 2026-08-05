import profileAngelle from '../assets/images/profile-angelle.png';
import profileAnthony from '../assets/images/profile-anthony.png';
import profileAshley from '../assets/images/profile-ashley.png';
import profileCody from '../assets/images/profile-cody.png';
import profileHarley from '../assets/images/profile-harley.png';
import profileLuis from '../assets/images/profile-luis.png';
import profileNadiya from '../assets/images/profile-nadiya.png';
import profileSeth from '../assets/images/profile-seth.png';

export interface Artist {
	slug: string;
	name: string;
	image: string;
	specialties: string[];
	bio: string;
	role: string;
	instagram: string;
}

export const artists: Artist[] = [
	{
		slug: 'angelle',
		name: 'Angelle',
		image: profileAngelle,
		specialties: [],
		bio: '',
		role: 'Apprentice',
		instagram: 'https://instagram.com/angelle_tattoos'
	},
	{
		slug: 'anthony',
		name: 'Anthony',
		image: profileAnthony,
		specialties: [],
		bio: '',
		role: 'Artist',
		instagram: 'https://instagram.com/buddha_ta2'
	},
	{
		slug: 'ashley',
		name: 'Ashley',
		image: profileAshley,
		specialties: [],
		bio: '',
		role: 'Artist',
		instagram: 'https://instagram.com/ashleyxxkarma'
	},
	{
		slug: 'cody',
		name: 'Cody',
		image: profileCody,
		specialties: [],
		bio: '',
		role: 'Artist',
		instagram: 'https://instagram.com/codycrochettattoos'
	},
	{
		slug: 'harley',
		name: 'Harley',
		image: profileHarley,
		specialties: [],
		bio: '',
		role: 'Piercer',
		instagram: 'https://instagram.com/harley.rose25'
	},
	{
		slug: 'luis',
		name: 'Luis',
		image: profileLuis,
		specialties: [],
		bio: '',
		role: 'Artist',
		instagram: 'https://instagram.com/ta2luis'
	},

	{
		slug: 'seth',
		name: 'Seth',
		image: profileSeth,
		specialties: [],
		bio: '',
		role: 'Artist',
		instagram: 'https://instagram.com/sethta2_bp'
	}
];
