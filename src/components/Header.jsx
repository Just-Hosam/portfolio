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
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
				into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
				release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
				software like Aldus PageMaker including versions of Lorem Ipsum.
			</p>
			<div id="header-more">
				<span>learn more</span>
				<i className="fas fa-arrow-down"></i>
			</div>
		</header>
	);
}
