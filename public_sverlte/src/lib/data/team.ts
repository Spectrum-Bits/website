export interface Member {
	name: string;
	role: string;
	photo: string;
	lead?: boolean;
	mentor?: boolean;
}

export const PR_MEMBERS: Member[] = [
	{ name: 'Cimpeni Eduard', role: 'PR', photo: '/assets/mugshots/Cimpeni_Eduard.jpg', lead: true },
	{ name: 'Revnic Matei', role: 'PR', photo: '/assets/mugshots/Revnic_Matei.jpg' },
	{ name: 'Tarmure Vanessa', role: 'PR', photo: '/assets/mugshots/Tarmure_Vanessa.jpg' },
	{ name: 'Opris Ingrid', role: 'PR', photo: '/assets/mugshots/Opris_Ingrid.jpg' },
	{ name: 'Lacusteanu Alex', role: 'PR', photo: '/assets/mugshots/Lacusteanu_Alex.jpg' },
	{ name: 'Magdaș Teodora-Diana', role: 'PR', photo: '/assets/SpectrumBits.jpg' },
	{ name: 'Muresan David', role: 'PR', photo: '/assets/mugshots/Muresan_David.jpg' },
	{ name: 'Manole Maria', role: 'PR', photo: '/assets/SpectrumBits.jpg' },
	{ name: 'Pop Matei', role: 'PR', photo: '/assets/SpectrumBits.jpg' }
];

export const ENGINEERING_MEMBERS: Member[] = [
	{
		name: 'Gabor Bogdan',
		role: 'Software + Hardware',
		photo: '/assets/mugshots/Gabor_bogdan.jpg',
		lead: true
	},
	{
		name: 'Diosan Stefan Andrei',
		role: 'Hardware + Software',
		photo: '/assets/mugshots/Diosan_Stefan_Andrei.jpg',
		lead: true
	},
	{ name: 'Mateiu Vladimir', role: 'Software + Hardware', photo: '/assets/SpectrumBits.jpg' },
	{ name: 'Hopârtean Radu Alexandru', role: 'Software', photo: '/assets/SpectrumBits.jpg' },
	{ name: 'Vadan Filip', role: 'Software + PR', photo: '/assets/mugshots/Vadan_Filip.jpg' },
	{ name: 'Chis Victor', role: 'Hardware', photo: '/assets/mugshots/Chis_Victor.jpg' },
	{ name: 'Schiau Alex', role: 'PR + Hardware', photo: '/assets/mugshots/Schiau_Alex1.jpg' },
	{ name: 'Hrusca Marc', role: 'Hardware', photo: '/assets/mugshots/Hrusca_Marc.jpg' }
];
