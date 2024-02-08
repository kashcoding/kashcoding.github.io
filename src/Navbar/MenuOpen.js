import { useNavigate } from 'react-router-dom';

function MenuOpen(props) {
	let navigate = useNavigate();

	const handleRedirect = (e) => {
		const string = e.target.innerText.toLowerCase();
		const target = string.substring(0, string.length - 1);
		navigate(`/${target}`);
		props.setOpen(!props.open);
	};

	return (
		<div className='menu container'>
			<div className='section heading'>
				<h1 onClick={handleRedirect}>
					WORK<span className='period'>.</span>
				</h1>
				<h1 onClick={handleRedirect}>
					ABOUT<span className='period'>.</span>
				</h1>
				<h1 onClick={handleRedirect}>
					CONTACT<span className='period'>.</span>
				</h1>
			</div>
		</div>
	);
}

export default MenuOpen;
