import ProjectCard from './ProjectCard';

const projectsData = [
	{
		title: '@Home',
		logo:
			'https://see.fontimg.com/api/renderfont4/d9nn7/eyJyIjoiZnMiLCJoIjo3MSwidyI6MTAwMCwiZnMiOjcxLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzI1MkMzNSIsInQiOjF9/QEhvbWU/candycane.png',
		bgColor: 'linear-gradient(rgb(128, 118, 251), rgb(128, 118, 251))',
		description: 'A productivity dashboard Built for families to help them organize their lives.',
	},
	{
		title: 'NotSoSmart',
		logo:
			'https://see.fontimg.com/api/renderfont4/w1l49/eyJyIjoiZnMiLCJoIjo2NCwidyI6MjAwMCwiZnMiOjMyLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Tm90U29TbWFydA/marshmallow-personal-use-regular.png',
		bgColor: 'linear-gradient(135deg, #e2c35d, #da785d',
		description: 'A TODO list app that automatically categorizes the given input using a multitude of APIs.',
	},
	{
		title: 'Scheduler',
		logo:
			'https://see.fontimg.com/api/renderfont4/K7ORW/eyJyIjoiZnMiLCJoIjo1MCwidyI6MTAwMCwiZnMiOjUwLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzI1MkMzNSIsInQiOjF9/U2NoZWR1bGVy/rondal-regular.png',
		bgColor: 'linear-gradient(#222f3e, #222f3e)',
		description: 'Schedule appointments between interviewer and students.',
	},
];

export default function Projects() {
	const projectsComponents = projectsData.map((elem, i) => {
		return <ProjectCard key={i} data={elem} />;
	});

	return (
		<div id="projects">
			<h2>Projects</h2>
			<div id="projects-cards-cont">{projectsComponents}</div>
		</div>
	);
}
