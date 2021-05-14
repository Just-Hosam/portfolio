import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function ProjectDetails(props) {
	const handleBack = (isBottom) => {
		props.setMode('MAIN');
		if (isBottom) props.executeScroll();
	};

	return (
		<div className="project-details">
			<header>
				<IconButton className="project-back" onClick={() => handleBack(false)}>
					<ArrowBackIcon id="back-btn-icon" />
				</IconButton>
				<h2>{props.data.title}</h2>
				<div>
					{props.data.website && (
						<a rel="noreferrer" target="_blank" href={props.data.website}>
							<Button className="project-btns" variant="contained">
								Live Site
							</Button>
						</a>
					)}
					{props.data.github && (
						<a rel="noreferrer" target="_blank" href={props.data.github}>
							<Button className="project-btns" variant="contained">
								Github
							</Button>
						</a>
					)}
				</div>
			</header>
			<h3>Summary</h3>
			{props.data.summary}
			<div className="projects-img-cont" style={{ backgroundColor: props.data.bgColor1 }}>
				<img src={props.data.img1} alt="img1" />
			</div>
			<div className="projects-mid">
				<div className="projects-mid-details">
					{props.data.purpose && (
						<div>
							<h3>Purpose</h3>
							{props.data.purpose}
						</div>
					)}
					<h3>Web Stack</h3>
					{props.data.webstack}
				</div>
				<div className="projects-img-cont" style={{ backgroundColor: props.data.bgColor2 }}>
					<img src={props.data.img2} alt="img2" />
				</div>
			</div>
			<h3>Problems/Lesson</h3>
			{props.data.problems}
			<div className="projects-img-cont" style={{ backgroundColor: props.data.bgColor3 }}>
				<img src={props.data.img3} alt="img3" />
			</div>
			<Button onClick={() => handleBack(true)} className="project-back-bottom" variant="contained">
				Go Back
			</Button>
		</div>
	);
}
