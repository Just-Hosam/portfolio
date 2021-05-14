import React from 'react';

export default function Header(props) {
	return (
		<header id="header-main">
			<div id="header-icons">
				<a
					rel="noreferrer"
					target="_blank"
					href="https://github.com/Just-Hosam/portfolio/blob/master/public/Hosam_Dahrooge.pdf"
				>
					<i className="fas fa-file-alt"></i>
				</a>
				<a rel="noreferrer" target="_blank" href="https://github.com/Just-Hosam">
					<i className="fab fa-github"></i>
				</a>
				<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hosam-dahrooge/">
					<i className="fab fa-linkedin-in"></i>
				</a>
			</div>
			<h1>Hosam Dahrooge</h1>
			<p>
				I'm a full stack web developer pivoting from a background in Petroleum Engineering to the Software
				Development world as it is ever expanding with increasing complexity and problems to solve.
				<br />
				<br />I am objective, cheerful, and love to learn. A small break for me is a chance to learn about
				deep subjects (CPU architectures and how CPUs read machine code).
			</p>
			<div id="header-more" ref={props.myRef} onClick={props.executeScroll}>
				<i className="fas fa-arrow-down"></i>
			</div>
		</header>
	);
}
