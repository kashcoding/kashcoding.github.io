import { FaGithub, FaBehanceSquare, FaLinkedin, FaTwitterSquare, FaDribbbleSquare } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

function Contact(props) {
	return (
		<div className='footer container'>
			<div>
				<a href='mailto:kasiadutch@hotmail.co.uk' target='_blank' rel='noreferrer'>
					<MdOutlineEmail className='icon' />
				</a>
				<a href='https://www.linkedin.com/in/k-dutch' target='_blank' rel='noreferrer'>
					<FaLinkedin className='icon' />
				</a>
				<a href='https://www.github.com/kashcoding' target='_blank' rel='noreferrer'>
					<FaGithub className='icon' />
				</a>
			</div>
			Kasia Dutch © 2023
			<span className='bottom' id='bottom' />
		</div>
	);
}

export default Contact;
