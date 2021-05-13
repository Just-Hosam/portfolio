export default function ProjectCard(props) {
	const handleClick = (mode) => {
		props.setMode(mode);
		props.executeScroll();
	};

	return (
		<div className="project-card" style={{ backgroundImage: props.data.bgColor }}>
			<img src={props.data.logo} alt={props.data.title} />
			<p>{props.data.description}</p>
			<span onClick={() => handleClick(props.data.mode)}>
				learn more
				<i className="fas fa-long-arrow-alt-right"></i>
			</span>
		</div>
	);
}
