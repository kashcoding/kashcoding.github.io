import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import MenuOpen from './Navbar/MenuOpen';
import Work from './Work/Work';
import About from './About/About';
import Contact from './Contact/Contact';
import Entry from './Home/Entry';

function App() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Router>
			<div className='app'>
				<Navbar open={open} setOpen={setOpen} />
				{open ? (
					<MenuOpen open={open} setOpen={setOpen} />
				) : (
					<Routes>
						<Route path='/' element={<Entry />} />
						<Route path='/work' element={<Work />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				)}
			</div>
		</Router>
	);
}

export default App;
