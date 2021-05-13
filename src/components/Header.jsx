import React from 'react';

export default function Header() {
	return (
		<header id="header-main">
			<div id="header-icons">
				<i className="fas fa-file-alt"></i>
				<i className="fab fa-github"></i>
				<i className="fab fa-linkedin-in"></i>
			</div>
			<h1>Hosam Dahrooge</h1>
			<p>
				I'm a full stack web developer. I am pivoting from a background in Petroleum Engineering to the
				Software Development world as it is ever expanding with increasing complexity and problems to solve. I
				am objective, cheerful, and love to learn. A small break for me a chance to learn about deep subjects
				(CPU architectures and how CPUs read machine code).
			</p>
			<div id="header-more">
				<span>learn more</span>
				<i className="fas fa-arrow-down"></i>
			</div>
		</header>
	);
}
