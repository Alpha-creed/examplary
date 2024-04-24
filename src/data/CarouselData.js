export const data = [
	{
		title: 'What our clients say',
		description:
			'Our clients happily stay with our services for more several years now. See real reviews from our clients.',
		image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ul4vCG1FjYmVfs-oczaKtgHaFL%26pid%3DApi&f=1&ipt=8798def19149a2c22d56f091f9eedc9b1307ac4d6ff87bbbc09dc456bb22426f&ipo=images',
	},
	{
		title: 'Our security ',
		description: 'Learn more about our security systems to make sure your data is always safe',
		image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5tS2YXcIusyrxpQhayJWyQHaEL%26pid%3DApi&f=1&ipt=7d350000a0a93c89c320e049aa81fa28ec4e3153ca9374ef2f93e4db2f9c6cdc&ipo=images',
	},
	{
		title: 'Our Team',
		description: 'Our team consists of the best experts in the industry, learn about them',
		image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.t3AeRbnlAKmcn2lqzGfKuwHaE8%26pid%3DApi&f=1&ipt=02d24c2194fde584816a67e2dc4aee4f735f328e237e395bd80f234ff155681e&ipo=images',
	},
	{
		title: 'Our servers',
		description: 'Find more about hardware and software used for your service',
		image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg',
	},
	{
		title: 'Our top clients',
		description: 'We have provided services to top clients in tech industry',
		image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};