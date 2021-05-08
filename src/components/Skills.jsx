import SkillList from './SkillList';

const data = [
	{
		title: 'Languages',
		listItems: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Ruby'],
	},
	{
		title: 'Frameworks',
		listItems: ['one', 'two', 'three'],
	},
	{
		title: 'Testing',
		listItems: ['one', 'two', 'three'],
	},
	{
		title: 'Learing',
		listItems: ['one', 'two', 'three'],
	},
];

export default function Skills() {
	const skillListComponents = data.map((elem, i) => {
		const isGood = i === data.length - 1 ? false : true;
		return <SkillList key={i} data={elem} isGood={isGood} />;
	});

	return (
		<div id="skills">
			<h2>Some of my Skills</h2>
			<div id="skills-columns">{skillListComponents}</div>
		</div>
	);
}
