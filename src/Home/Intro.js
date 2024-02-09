import { useNavigate } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';

function Intro() {
	let navigate = useNavigate();

	const handleContact = (e) => {
		const string = e.target.innerText.toLowerCase();
		const target = string.substring(0, string.length - 1);
		navigate(`/${target}`);
	};

	return (
		<div className='intro container'>
			<div className='main'>
				<Container className='segment'>
					<img className='avatar' alt='' src='/assets/kasia.jpeg' />
				</Container>
				<Container className='segment heading'>
					<h2>
						KASIA DUTCH<span className='period'>.</span>
					</h2>
					<a href='https://www.github.com/kashcoding' target='_blank' rel='noreferrer'>
						<p>GITHUB </p>
					</a>
					<a href='https://www.linkedin.com/in/k-dutch' target='_blank' rel='noreferrer'>
						<p>LINKEDIN</p>
					</a>
					<h3 onClick={handleContact}>
						CONTACT<span className='period'>.</span>
					</h3>
				</Container>
				<Container className='segment'>
					<h4>INTRODUCTION</h4>
					<p>Full stack software engineer passionate about creating people-oriented solutions</p>
					<Scroll to='bottom' smooth={true}>
						<h6>LEARN MORE ↓</h6>
					</Scroll>
				</Container>
			</div>
		</div>
	);
}

export default Intro;
