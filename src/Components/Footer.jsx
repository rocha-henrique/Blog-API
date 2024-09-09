import React from "react";
import github from "../images/github.png";
import linkedin  from "../images/linkedin.png";
import '../Css/Footer.css';

function Footer() {
	return (
	  <div class="footer">
			<a
				href="https://www.linkedin.com/in/henrique-rocha-de-sousa/"
				target="_Blank"
				rel="noreferrer"
			>
				<img className="github" src={linkedin} alt="linkedin" />
			</a>

			<span className="copyright"> © Blog-API todos os direitos reservados</span>
			
			<a
				href="https://github.com/rocha-henrique"
				target="_Blank"
				rel="noreferrer"			
			>
				<img className="github" src={github} alt="github" />
			</a>
	  </div>
	);
};




export default Footer;
