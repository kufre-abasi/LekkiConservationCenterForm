// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Lead From',
		href:('https://leadfromdemo.netlify.app/'),
		category: 'Dynamic Web App',
		icon: "github",

		// img: require('@/assets/images/leadfrom.jpg'),
	},
	{
		id: 2,
		title: 'Tribinnov Africa',
		href:('https://tribinnovafrica.com/'),
		category: 'Dynamic Web App',
		icon: "github",

		// img: require('@/assets/images/logovertical.png'),
	},
	{ 
		id: 3,
		title: 'Trek Bay',
		href:'https://trek-bay.netlify.app/',
		category: 'Static Web App',
		icon: "github",

		// img: require('@/assets/images/trek-bay.jpg'),
	}, 
	// {
	//  	id: 4,
	//  	title: 'Themis ...a law agency',
	// 	href:'https://themis-law.netlify.app/',
	// 	category: 'Static Web App',
	// 	// img: require('@/assets/images/themis.jpg'),
	// },
	//  {
	//  	id: 5,
	//  	title: 'Frixx',
	// 	href:'https://frixxapp.com/',
	// 	category: 'Dynamic Web App',
	//  	// img: require('@/assets/images/mobile-project-1.jpg'),
	//  },
	//  {
	//  	id: 6,
	//  	title: 'Coop Wallet(% Calculator)',
	// 	href:'https://taskasss.netlify.app/',
	// 	category: 'Dynamic Web App',
	//  	// img: require('@/assets/images/web-project-1.jpg'),
	//  },
];

export default projects;
