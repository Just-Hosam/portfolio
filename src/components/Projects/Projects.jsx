import projectCards from '../../data/projectCards';

import ProjectCard from './ProjectCard';

export default function Projects(props) {
	const projectsComponents = projectCards.map((elem, i) => {
		return <ProjectCard key={i} data={elem} setMode={props.setMode} executeScroll={props.executeScroll} />;
	});

	return (
		<div id="projects">
			<h2>Projects</h2>
			<div id="projects-cards-cont">{projectsComponents}</div>
		</div>
	);
}
