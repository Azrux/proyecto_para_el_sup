import { useEffect, useState } from "react";

export default function Copas() {
	const [copas, setCopas] = useState(0);

	useEffect(() => {
		console.log("usando useEffect!");
		const interval = setInterval(() => {
			console.log("seteando mis copas");
			setCopas((copas) => copas + 1);
		}, 1200);

		return () => {
			clearInterval(interval);
		};
	}, [copas]);

	return (
		<div>
			<p>contemos las copas:</p>
			<h5>{copas} copas</h5>
		</div>
	);
}
