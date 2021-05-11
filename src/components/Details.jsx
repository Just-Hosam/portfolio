import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Skills from './Skills';
import Projects from './Projects/Projects';
import Contact from './Contact';
import ProjectDetails from './Projects/ProjectDetails';

export default function Details() {
	const projectDetails = {
		atHome: {
			title: '@Home',
			github: 'https://github.com/Just-Hosam/modular_dashboard',
			website: 'https://www.athomedashboard.com/',
			summary: (
				<div>
					<p>
						@Home is a household productivity dashboard that aims to bring organization, democracy and
						collaboration to every family. Visit the hosted version of this project{' '}
						<a
							rel="noreferrer"
							target="_blank"
							href="https://www.youtube.com/watch?v=i9a-0LJa1nI&feature=youtu.be"
						>
							here
						</a>{' '}
						or watch our 5 minute presentation{' '}
						<a rel="noreferrer" target="_blank" href="https://www.athomedashboard.com/">
							here
						</a>
						.
					</p>
					<p>Dummy Accounts with prepopulated Dashboards:</p>
					<p>
						<strong>email:</strong> user1@test.com / <strong>password:</strong> test
						<br />
						<strong>email:</strong> user2@test.com / <strong>password:</strong> test
						<br />
						<strong>email:</strong> user3@test.com / <strong>password:</strong> test
						<br />
						<strong>email:</strong> user4@test.com / <strong>password:</strong> test
					</p>
					<p>This project was developed by Hosam Dahrooge, Nolan Eckert, and Kyle Lemmon.</p>
				</div>
			),
			img1: 'https://github.com/Just-Hosam/modular_dashboard/blob/main/private_docs/ReadMePics/Light-Grid.png?raw=true',
			bgColor1: 'rgb(128, 118, 251)',
			purpose: (
				<p>
					We've all grown up with an assortment of charts and cork boards that try to assist a family organize
					their daily life. So we decided to modernize this and allow easier access to each great widget
					through a dashboard that anyone can connect to.
				</p>
			),
			webstack: (
				<p>
					For our tech stack we chose to use a React frontend, Node & Express backend, and PostgreSQL
					(Postgres) for our database. We chose this because we wanted to solidify and become more familiar
					with what we learned during our bootcamp.
				</p>
			),
			img2: 'https://github.com/Just-Hosam/modular_dashboard/blob/main/private_docs/ReadMePics/Light-Recipe.png?raw=true',
			bgColor2: 'rgb(128, 118, 251)',
			problems: (
				<div>
					<p>
						During our time working on at home We discovered that working with different computer
						architectures can present issues from a collaboration perspective. This lead us to understand the
						importance of having a common development environment to avoid package versioning disasters.
					</p>

					<p>
						Also, In our initial planning we identified issues we had in the previous collaboration projects
						with working over other developers, causing merge and code conflicts. To keep that to a minimum,
						we divided the project into modules where each person was able to work in parallel. We also came
						together frequently to resolve bugs, conflicts, PRs and pair program throughout each day.
					</p>
				</div>
			),
			img3: 'https://github.com/Just-Hosam/modular_dashboard/blob/main/private_docs/ReadMePics/Dark-Grid.png?raw=true',
			bgColor3: '#2c303a',
		},
		notSoSmart: {
			title: 'NotSoSmart',
			github: 'https://github.com/Just-Hosam/Smart-TODO-List',
			website: 'https://notsosmart.herokuapp.com/login',
			summary: (
				<div>
					<p>
						Visit the hosted version of this project{' '}
						<a rel="noreferrer" target="_blank" href="https://notsosmart.herokuapp.com/login">
							here
						</a>
						. It is best viewed at a zoom of 67%.
					</p>
					<p>
						NotSoSmart is a smart TODO list categorizer that takes away the hassle of having to categorize
						movies or series you wish to watch, books or comics you might want to read, food or products you
						want to buy in the future. While also providing you with more details regarding each item added to
						the lists using multiple APIs.
					</p>
					<p>This project was developed by Hosam Dahrooge, Connie Ho, and Sydney Sisco.</p>
				</div>
			),
			img1: 'https://github.com/Just-Hosam/Smart-TODO-List/blob/master/docs/Readme-Screenshots/Light%20Mode.png?raw=true',
			bgColor1: '#2C303A',
			purpose: <p>TODO lists are meant to be lazy. sigh</p>,
			webstack: (
				<p>
					For our tech stack we chose to use a EJS for template rendering, Node & Express backend, and
					PostgreSQL (Postgres) for our database. We chose this because we wanted to solidify and become more
					familiar with what we learned during our bootcamp at that point in time.
				</p>
			),
			img2: 'https://github.com/Just-Hosam/Smart-TODO-List/blob/master/docs/Readme-Screenshots/Pending%20Bar.gif?raw=true',
			bgColor2: '',
			problems: <p>We were perfect and had no problems {':)'}</p>,
			img3: 'https://github.com/Just-Hosam/Smart-TODO-List/blob/master/docs/Readme-Screenshots/Dark%20Mode.png?raw=true',
			bgColor3: '#2C303A',
		},
		scheduler: {
			title: 'Scheduler',
			github: 'https://github.com/Just-Hosam/modular_dashboard',
			website: '',
			summary: 'I am a summary about @Home',
			img1: 'https://github.com/Just-Hosam/modular_dashboard/blob/main/private_docs/ReadMePics/Light-Grid.png?raw=true',
			bgColor1: '',
			purpose: 'I am the purpose',
			webstack: 'I am the webStack',
			img2: 'https://github.com/Just-Hosam/modular_dashboard/blob/main/private_docs/ReadMePics/Light-Grid.png?raw=true',
			bgColor2: '',
			problems: 'I am problems',
			img3: 'https://github.com/Just-Hosam/modular_dashboard/blob/main/private_docs/ReadMePics/Light-Grid.png?raw=true',
			bgColor3: '',
		},
	};
	return (
		<Router>
			<div id="details">
				<Switch>
					<Route path="/AtHome">
						<ProjectDetails data={projectDetails.atHome} />
					</Route>
					<Route path="/NotSoSmart">
						<ProjectDetails data={projectDetails.notSoSmart} />
					</Route>
					<Route path="/Scheduler">
						<ProjectDetails data={projectDetails.scheduler} />
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
