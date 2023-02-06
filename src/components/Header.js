import React from "react";
import logo from "../Images/logo.png";

const Header = () => {
	return (
		<header>
			<img src={logo} alt="Problem?" />
			<h4>Lambert Wijshake Creations</h4>
			<h2> Meme Generator</h2>
		</header>
	);
};

export default Header;
