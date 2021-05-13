import React from 'react';

export default function Header(props) {
	return (
		<header id="header-main">
			<div id="header-icons">
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.canva.com/design/DAEa1quHBdE/Av2MQ9oi0e0aXV7EcNyfdw/view?utm_content=DAEa1quHBdE&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
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
				I'm a full stack web developer. I am pivoting from a background in Petroleum Engineering to the
				Software Development world as it is ever expanding with increasing complexity and problems to solve. I
				am objective, cheerful, and love to learn. A small break for me a chance to learn about deep subjects
				(CPU architectures and how CPUs read machine code).
			</p>
			<div id="header-more" ref={props.myRef} onClick={props.executeScroll}>
				<span>learn more</span>
				<i className="fas fa-arrow-down"></i>
			</div>
		</header>
	);
}
