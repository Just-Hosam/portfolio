import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Skills from './Skills';
import Projects from './Projects/Projects';
import Contact from './Contact';
import AtHomeProject from './Projects/AtHomeProject';
import NotSoSmartProject from './Projects/NotSoSmartProject';
import SchedulerProject from './Projects/SchedulerProject';

export default function Details() {
	return (
		<Router>
			<div id="details">
				<Link to="/">MAIN</Link>
				<Switch>
					<Route path="/AtHome">
						<AtHomeProject />
					</Route>
					<Route path="/NotSoSmart">
						<NotSoSmartProject />
					</Route>
					<Route path="/Scheduler">
						<SchedulerProject />
					</Route>
					<Route path="/">
						<Skills />
						<Projects />
						<Contact />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
