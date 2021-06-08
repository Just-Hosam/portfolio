import { useState } from 'react';

import projectDetails from '../data/projectDetails';

import Skills from './Skills';
import Projects from './Projects/Projects';
import Contact from './Contact';
import ProjectDetails from './Projects/ProjectDetails';

export default function Details(props) {
	const [mode, setMode] = useState('MAIN');

	return (
		<div id="details">
			{mode === '@HOME' && (
				<ProjectDetails data={projectDetails.atHome} setMode={setMode} executeScroll={props.executeScroll} />
			)}
			{mode === 'NOTSOSMART' && (
				<ProjectDetails
					data={projectDetails.notSoSmart}
					setMode={setMode}
					executeScroll={props.executeScroll}
				/>
			)}
			{mode === 'WANNABITLY' && (
				<ProjectDetails
					data={projectDetails.wannabitly}
					setMode={setMode}
					executeScroll={props.executeScroll}
				/>
			)}
			{mode === 'MAIN' && <Skills />}
			{mode === 'MAIN' && <Projects setMode={setMode} executeScroll={props.executeScroll} />}
			{mode === 'MAIN' && <Contact />}
		</div>
	);
}
