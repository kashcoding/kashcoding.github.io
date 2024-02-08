import { useNavigate } from 'react-router-dom';

function About() {
	let navigate = useNavigate();

	const handleRedirect = (e) => {
		const target = e.target.innerText.toLowerCase();
		if (target === 'exit') {
			navigate(`/dashboard`);
		} else {
			navigate(`/${target}`);
		}
	};

	return (
		<div className='about container'>
			<div className='section'>
				<h1>ABOUT.</h1>
			</div>
		</div>
	);
}

export default About;
