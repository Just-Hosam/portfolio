import SkillList from './SkillList';

const data = [
	{
		title: 'Languages',
		listItems: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Ruby'],
	},
	{
		title: 'Frameworks',
		listItems: ['React', 'ExpressJS', 'Sass', 'NodeJS', 'Rails'],
	},
	{
		title: 'Testing',
		listItems: ['Cypress', 'Storybooks', 'Jest', 'Mocha', 'RSpec'],
	},
	{
		title: 'Currently Learing',
		listItems: ['TypeScript', 'Data Structures', 'Refactoring by Martin Fowler', 'Scrum Methodology'],
	},
	{
		title: 'Future',
		listItems: ['Python', 'Django', 'AWS certification', ''],
	},
];

export default function Skills() {
	const skillListComponents = data.map((elem, i) => {
		const isGood = i === data.length - 1 ? false : true;
		return <SkillList key={i} data={elem} isGood={isGood} />;
	});

	return (
		<div id="skills">
			<h2>Skills</h2>
			<div id="skills-columns">{skillListComponents}</div>
		</div>
	);
}
