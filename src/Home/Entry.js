import { useEffect } from "react";
import Intro from "./Intro";
import Work from "../Work/Work";

function Entry() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="home">
			<Intro />
			<Work />
		</div>
	);
}

export default Entry;
