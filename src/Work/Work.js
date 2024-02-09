import SiteCard from './SiteCard.js';
import Footer from '../Footer/Footer.js';
import '../styles.scss';

const portfolio = [
	{
		name: 'GeoKash',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		type: 'solo',
		time: '5 days',
		img: '/assets/GeoKASH.jpeg',
		url: 'https://kash.codes/countries-react/',
	},
	{
		name: 'Mixcloud Clone',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		type: 'group',
		time: '1 week',
		img: '/assets/mixcloud.jpeg',
		url: 'https://kash.codes/mixcloud-clone/',
	},
	{
		name: 'More Than Metrics',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		type: 'group',
		time: '2 weeks',
		img: '/assets/MTM.jpeg',
		url: 'https://morethanmetrics.netlify.app/',
	},
	{
		name: 'The World For Women',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		type: 'group',
		time: '1 week',
		img: '/assets/WFW.jpeg',
		url: 'https://world-for-women-12345.herokuapp.com/',
	},
	// {
	// 	name: 'Traveloquent',
	// 	description:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	// 	type: 'solo',
	// 	img: '/assets/Traveloquent.jpeg',
	// 	url: 'https://www.traveloquent.com',
	// },
];

function Work() {
	const renderSiteCards = () => {
		return portfolio.map((site, i) => {
			return <SiteCard siteData={portfolio[i]} />;
		});
	};

	const renderSiteImgs = () => {
		return portfolio.map((site, i) => {
			return (
				<div className='item card'>
					<p>{portfolio[i].name.toUpperCase()}</p>
					<img alt={portfolio[i].name} src={portfolio[i].img} />
					<a href={portfolio[i].url} target='_blank' rel='noreferrer'>
						<h6>LEARN MORE</h6>
					</a>
				</div>
			);
		});
	};

	return (
		<div className='work container' id='work'>
			<div className='section'>
				<h1>WORK.</h1>
				<div className='item cards'>{renderSiteImgs()}</div>
			</div>
			<Footer />
		</div>
	);
}

export default Work;
