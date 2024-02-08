import { FaInstagram } from 'react-icons/fa';
import Footer from '../Footer/Footer.js';

function About() {
	return (
		<div className='about container'>
			<div className='section'>
				<h1>ABOUT.</h1>
				<ul>
					<li>Avid language-learner (both human and programming)</li>
					<li>Passionate about creating beautiful and functional applications</li>
					<li>Enthusiastic about learning new things in all areas of my life</li>
					<li>
						<span>
							When I'm not coding, I'm crafting
							<a href='https://www.instagram.com/handmadebykash' target='_blank' rel='noreferrer'>
								<FaInstagram />
							</a>
						</span>
					</li>
					<li>Otherwise found cooking, doing yoga or travelling.</li>
				</ul>
			</div>
			<Footer />
		</div>
	);
}

export default About;
