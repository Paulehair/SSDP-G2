export default {
	input: {
		zone: {
			name: 'zone',
			type: 'radio'
		},
		login: [
			{
				name: 'login',
				type: 'textlight',
				text: 'Identifiez-vous',
				placeholder: 'Exemple: YanSolo'
			},
			{
				name: 'login',
				type: 'textlight',
				text: 'Mot de passe'
			}
		],
		search: {
			name: 'search',
			type: 'text',
			value: '',
			placeholder: 'Rechercher'
		},
		addEmployee: [
			{
				name: 'firstName',
				type: 'text',
				value: '',
				required: true,
				placeholder: 'Prénom'
			},
			{
				name: 'lastName',
				type: 'text',
				value: '',
				required: true,
				placeholder: 'Nom'
			},
			{
				name: 'address',
				type: 'text',
				value: '',
				required: true,
				placeholder: 'Adresse'
			},
			{
				name: 'email',
				type: 'email',
				value: '',
				required: true,
				placeholder: 'Adresse email'
			},
			{
				name: 'sector',
				type: 'select',
				value: '',
				required: true,
				options: ['75', '92-94', '93']
			}
		]
	},
	icons: [
		{
			name: 'logout',
			classIcon: 'icon-logout',
			code: '&#xe800;'
		},
		{
			name: 'trash',
			classIcon: 'icon-trash',
			code: '&#xe801;'
		},
		{
			name: 'cancel',
			classIcon: 'icon-cancel',
			code: '&#xe802;'
		},
		{
			name: 'bell',
			classIcon: 'icon-bell',
			code: '&#xe803;'
		},
		{
			name: 'search',
			classIcon: 'icon-search',
			code: '&#xe804;'
		},
		{
			name: 'calplus',
			classIcon: 'icon-calendarplus',
			code: '&#xf271;'
		},
		{
			name: 'caltimes',
			classIcon: 'icon-calendartimes',
			code: '&#xf273;'
		}
	]
}
