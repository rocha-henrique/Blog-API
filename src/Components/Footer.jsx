import React from "react";
import '../Css/Footer.css';
import github from "../images/github.png";
import linkedin  from "../images/linkedin.png";

function Footer() {
	return (
	  <footer class="footer navbar-fixed-bottom">
			<a
				href="https://www.linkedin.com/in/henrique-rocha-de-sousa/"
				target="_Blank"
				rel="noreferrer"
				className="linkedin"
			>
				<img className="linkedin" src={linkedin} alt="linkedin" />
			</a>
			<p className="container-copyright"> © Triibo todos os direitos reservados</p>
			<a
				href="https://github.com/rocha-henrique"
				target="_Blank"
				rel="noreferrer"				
				className="github"
			>
				<img className="github" src={github} alt="github" />
			</a>
	  </footer>
	);
};




export default Footer;
