import { useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import Footer from '../Footer/Footer';

function Contact() {
	let navigate = useNavigate();

	const handleWorkClick = (e) => {
		const string = e.target.innerText.toLowerCase();
		const target = string.substring(0, string.length - 1);
		navigate(`/${target}`);
	};

	return (
		<div className='contact container'>
			<div className='section heading'>
				<a href='https://www.linkedin.com/in/k-dutch'>
					<h1>Let's talk.</h1>
				</a>
				<p>Let's work together to solve problems with creative, impactful solutions.</p>
				<a href='mailto:kasiadutch@hotmail.co.uk'>
					<p style={{ fontSize: '1.5rem' }}>
						<MdOutlineEmail style={{ position: 'relative', top: '4px' }} /> Email: kasiadutch@hotmail.co.uk
					</p>
				</a>
			</div>
			<div className='heading'>
				<h1 onClick={(e) => handleWorkClick(e)}>WORK.</h1>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
