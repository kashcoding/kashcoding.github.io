function Logo(props) {
	return (
		<h1 className={`logo ${props.open ? "open" : ""}`}>
			KD<span style={{ fontSize: "1.5em" }}>.</span>
		</h1>
	);
}

export default Logo;
