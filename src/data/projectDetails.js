// Data structure
// const projectDetails = {
// 	projectKey: {
// 		title: 'title',
// 		github: 'github link',
// 		website: 'live link',
// 		summary: 'jsx summary about project',
// 		img1: 'first image link',
// 		bgColor1: 'first image background color',
// 		purpose: 'jsx purpose about the project',
// 		webstack: 'jsx webstack about the project',
// 		img2: 'second image link',
// 		bgColor2: 'second image background color',
// 		problems: 'jsx problems about the project',
// 		img3: 'third image link',
// 		bgColor3: 'third image background color',
// 	},
//	...
// };

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
					<a rel="noreferrer" target="_blank" href="https://www.athomedashboard.com/">
						here
					</a>{' '}
					or watch our 5 minute presentation{' '}
					<a
						rel="noreferrer"
						target="_blank"
						href="https://www.youtube.com/watch?v=i9a-0LJa1nI&feature=youtu.be"
					>
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
				their daily life. So we decided to modernize this and allow easier access to each great widget through
				a dashboard that anyone can connect to.
			</p>
		),
		techStack: (
			<p>
				For our tech stack we chose to use a React frontend, Node & Express backend, and PostgreSQL (Postgres)
				for our database. We chose this because we wanted to solidify and become more familiar with what we
				learned during our bootcamp.
			</p>
		),
		img2: 'https://github.com/Just-Hosam/modular_dashboard/blob/main/private_docs/ReadMePics/Light-Recipe.png?raw=true',
		bgColor2: 'rgb(128, 118, 251)',
		problems: (
			<div>
				<p>
					During our time working on at home we discovered that working with different computer architectures
					can present issues from a collaboration perspective. This led us to understand the importance of
					having a common development environment to avoid package versioning disasters.
				</p>

				<p>
					Also, in our initial planning we identified issues we had in previous collaboration projects with
					working over other developers, causing merge and code conflicts. To keep that to a minimum, we
					divided the project into modules where each person was able to work in parallel. We also came
					together frequently to resolve bugs, conflicts, PRs and pair program throughout each day.
				</p>
			</div>
		),
		img3: 'https://github.com/Just-Hosam/modular_dashboard/blob/main/private_docs/ReadMePics/Dark-Grid.png?raw=true',
		bgColor3: '',
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
					want to buy in the future. It also provides you with more details regarding each item added to the
					lists using multiple APIs.
				</p>
				<p>This project was developed by Hosam Dahrooge, Connie Ho, and Sydney Sisco.</p>
			</div>
		),
		img1: 'https://github.com/Just-Hosam/Smart-TODO-List/blob/master/docs/Readme-Screenshots/Light%20Mode.png?raw=true',
		bgColor1: '',
		purpose: (
			<p>
				With a desire to explore the language analysis using Google's Natural Language API, we chose this
				project to build a truly smart TODO list that does all the hard work for you. NotSoSmart analyzes the
				input and classifies it into one of 5 categories (Watch, Eat, Read, Buy and General)
			</p>
		),
		techStack: (
			<p>
				For our tech stack we chose to use a EJS for template rendering, Node & Express backend, and
				PostgreSQL (Postgres) for our database. We chose this because we wanted to solidify and become more
				familiar with what we learned during our bootcamp at that point in time.
			</p>
		),
		img2: 'https://github.com/Just-Hosam/Smart-TODO-List/blob/master/docs/Readme-Screenshots/Pending%20Bar.gif?raw=true',
		bgColor2: '',
		problems: (
			<p>
				With NotSoSmart being our first large collaboration project, we ran into the problem of properly
				splitting the work (whether working horizontally or vertically) to minimize merge conflicts. We were
				able to overcome such an obstacle with the guidance of mentors and consistent communication.
			</p>
		),
		img3: 'https://github.com/Just-Hosam/Smart-TODO-List/blob/master/docs/Readme-Screenshots/Dark%20Mode.png?raw=true',
		bgColor3: '',
	},
	scheduler: {
		title: 'Scheduler',
		github: 'https://github.com/Just-Hosam/scheduler',
		website: '',
		summary: (
			<div>
				<p>
					Scheduler is a single-page application built using ReactJS. It allows the user to book interview
					appointments between students and interviewers throughout the week. The submission form uses a
					self-built history stack to transition between 'view modes'.
				</p>
				<p>
					Scheduler is dependant on an another project to run the server and the database. The API can be
					found{' '}
					<a rel="noreferrer" target="_blank" href="https://github.com/Just-Hosam/scheduler-api">
						here
					</a>
					.
				</p>
			</div>
		),
		img1: 'https://github.com/Just-Hosam/scheduler/blob/master/docs/Screen%20Shot%202021-03-24%20at%208.12.57%20PM.png?raw=true',
		bgColor1: '#54a0ff',
		purpose: '',
		techStack: (
			<div>
				<p>
					Scheduler is purely a front-end application built with ReactJS that depends on an external REST API
					(scheduler-API).
				</p>
				<p>
					Scheduler-API is built using NodeJS with Express to setup the server and PostgreSQL for the
					database.
				</p>
			</div>
		),
		img2: 'https://github.com/Just-Hosam/scheduler/blob/master/docs/Screen%20Shot%202021-03-24%20at%209.41.55%20PM.png?raw=true',
		bgColor2: '#54a0ff',
		problems: (
			<p>
				Scheduler, being my first React project I encountered multiple obstacles handling state and
				conditionally rendering the different views for the submission form. Thanks to React's popularity
				finding resources and documentation assisted me in overcoming these obstacles.
			</p>
		),
		img3: 'https://github.com/Just-Hosam/scheduler/blob/master/docs/Screen%20Shot%202021-03-24%20at%209.41.55%20PM.png?raw=true',
		bgColor3: '#54a0ff',
	},
	wannabitly: {
		title: 'WannaBitly',
		github: 'https://github.com/Just-Hosam/WannaBitly',
		website: 'https://wannabitly.netlify.app/',
		summary: (
			<div>
				<p>
					WannaBitly is a simple wannabe bitly. It is a single-page application that allows the user to
					shorten long URLs giving them the ability to post it on social media without needing as much
					character space, as well as keep track of when each URL is clicked allowing them to understand their
					audience better.
				</p>
			</div>
		),
		img1: 'https://github.com/Just-Hosam/scheduler/blob/master/docs/Screen%20Shot%202021-03-24%20at%208.12.57%20PM.png?raw=true',
		bgColor1: '',
		purpose: (
			<p>
				As I seek employement as a Web Developer I have applied to many job listings. I hoped to use shortened
				URLs to track what links employers tend to clicks (Resume? Portfolio? Github?...).
			</p>
		),
		techStack: (
			<div>
				<p>
					WannaBitly is a full stack application with its backend built with Typescript on NodeJS and
					Express.js. The database used is PostgreSQL. The backend (API) is hosted on Heroku.
				</p>
				<p>
					The frontend is built with React with TypeScript alongside Socket.io giving the user real-time
					updates as the clicks rack up on each URL.
				</p>
			</div>
		),
		img2: 'https://github.com/Just-Hosam/scheduler/blob/master/docs/Screen%20Shot%202021-03-24%20at%209.41.55%20PM.png?raw=true',
		bgColor2: '',
		problems: (
			<p>
				I ran into multiple problems building WannaBitly, especially when it came to DevOps setups. I was able
				to solve most of the problems with research (and some head banging) but I did also seek senior
				developers in some of the communities I'm a part of.
			</p>
		),
		img3: 'https://github.com/Just-Hosam/scheduler/blob/master/docs/Screen%20Shot%202021-03-24%20at%209.41.55%20PM.png?raw=true',
		bgColor3: '',
	},
};

export default projectDetails;
