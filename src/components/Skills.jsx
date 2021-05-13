import skillsData from '../data/skillsData';

import SkillList from './SkillList';

export default function Skills() {
	const skillListComponents = skillsData.map((elem, i) => {
		const isGood = i === skillsData.length - 1 ? false : true;
		return <SkillList key={i} data={elem} isGood={isGood} />;
	});

	return (
		<div id="skills">
			<h2>Skills</h2>
			<div id="skills-columns">{skillListComponents}</div>
		</div>
	);
}
