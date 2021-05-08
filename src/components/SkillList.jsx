import React from 'react';

export default function SkillList(props) {
	const list = props.data.listItems.map((elem, i) => {
		return <li key={i}>{elem}</li>;
	});

	let classes = 'skill-list';
	if (props.isGood) classes += ' border';

	return (
		<div className={classes}>
			<h4>{props.data.title}</h4>
			<ul>{list}</ul>
		</div>
	);
}
