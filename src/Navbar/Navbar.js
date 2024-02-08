import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import { MdMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import Logo from './Logo.js';

function Navbar(props) {
	let navigate = useNavigate();

	const handleHomeClick = () => {
		navigate('/');
		props.setOpen(false);
	};

	const handleMenuClick = () => {
		props.setOpen(!props.open);
	};

	return (
		<div className='navbar'>
			<AppBar className={props.open ? 'transparent ' : 'white'} elevation={0}>
				<Toolbar className='wrapper'>
					<div onClick={handleHomeClick}>
						<Logo open={props.open} onClick={handleHomeClick} />
					</div>
					<div
						style={props.open ? { color: 'white' } : { color: 'black' }}
						className='section'
						onClick={handleMenuClick}
					>
						<span>MENU</span>
						{props.open ? <MdClose className='icon' /> : <MdMenu className='icon' />}
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
