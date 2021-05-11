import { useHistory } from 'react-router-dom';

export default function ProjectCard(props) {
	let history = useHistory();

	return (
		<div className="project-card" style={{ backgroundImage: props.data.bgColor }}>
			<img src={props.data.logo} alt={props.data.title} />
			<p>{props.data.description}</p>
			<span onClick={() => history.push(props.data.link)}>
				learn more<i className="fas fa-long-arrow-alt-right"></i>
			</span>
		</div>
	);
}
