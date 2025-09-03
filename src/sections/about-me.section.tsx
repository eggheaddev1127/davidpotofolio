import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Senior Software Engineer',
				place: 'H-E-B',
				timePeriod: 'Oct 2021 - Present',
				description: (
					<ul>
						<li>Led the design and development of an advanced application using Python (Django) and TypeScript, enabling rapid feature scaling through robust architecture.</li>
						<li>Architected scalable REST and GraphQL APIs with FastAPI to ensure seamless data flow between frontend and backend, boosting platform performance.</li>
						<li>Developed high-performance frontends with React, Redux, and Tailwind CSS, enhancing user experience and driving engagement across web and mobile.</li>
						<li>Designed a modular state management solution with Redux to support complex data workflows and maintain clean, scalable code architecture.</li>
						<li>Managed CI/CD pipelines using Jenkins and GitHub Actions, automating testing and streamlining release processes for faster delivery.</li>
						<li>Leveraged AWS services (ECS, S3) and Terraform to automate infrastructure provisioning, improving deployment reliability and resource efficiency.</li>
						<li>Integrated Datadog for advanced analytics and monitoring, enabling proactive issue resolution and improving system reliability.</li>
						<li>Configured and monitored AWS infrastructure with Datadog and PagerDuty, reducing downtime through real-time insights and alerting.</li>
						<li>Mentored junior engineers, advocated best coding practices, and contributed to architectural decisions and long-term technical roadmaps.</li>
						<li>Implemented comprehensive testing strategies using Jest, Mocha, Chai, Enzyme, and React Testing Library to ensure code quality and reliability.</li>
					</ul>
				),
			},
			{
				title: 'Senior Software Engineer',
				place: 'USAA',
				timePeriod: 'June 2018 - Oct 2021',
				description: (
					<ul>
						<li>Engineered a comprehensive tech stack for banking features focused on scalability and secure data handling using React, Next.js, TypeScript, and FastAPI.</li>
						<li>Built backend services with FastAPI and SQLAlchemy to manage complex data interactions, optimized for real-time processing and low-latency responses.</li>
						<li>Developed a secure and scalable API layer to enhance backend communication and enable seamless data synchronization for finance applications.</li>
						<li>Created high-performance front-end applications with React and Next.js, leveraging server-side rendering and dynamic routing to improve load times and user experience.</li>
						<li>Led API development using GraphQL and RESTful standards, improving backend efficiency and enabling real-time data synchronization.</li>
						<li>Integrated Tailwind CSS and vanilla-extract to ensure consistent UI across platforms, delivering streamlined and responsive layouts.</li>
						<li>Built robust CI/CD pipelines and structured testing frameworks with Jest, Cypress, and Enzyme to improve deployment reliability and accelerate development workflows.</li>
						<li>Collaborated with cross-functional teams in an agile environment, conducting code reviews and driving iterative improvements in product features.</li>
						<li>Mentored junior engineers, fostering best practices and cultivating a collaborative, high-performing engineering culture.</li>
					</ul>
				),
			},
			{
				title: 'Web Developer',
				place: 'St. Mary’s University',
				timePeriod: 'Mar 2017 - Jun 2018',
				description: (
					<ul>
						<li>Led frontend development of a healthcare application using the MERN stack, integrating complex data visualizations with D3.js and real-time updates via Firebase for enhanced functionality.</li>
						<li>Implemented map visualization features using React Google Maps, significantly improving location-based services and user experience.</li>
						<li>Designed and developed dynamic UI components for high-traffic applications, ensuring responsiveness, cross-device compatibility, and intuitive user interaction.</li>
						<li>Managed Firebase real-time database solutions to support scalable data flow and interactive components, optimizing user data management.</li>
					</ul>
				),
			},
			{
				title: 'Software Developer (Internship)',
				place: 'USAA',
				timePeriod: 'May 2016 - Aug 2016',
				description: (
					<ul>
						<li>Collaborated with a team of three to design, build, and deploy a dashboard for IT users to streamline system debugging workflows.</li>
						<li>Constructed database queries using Java Persistence API and built the data pipeline to the frontend, rendered via HTML/JSP with the ExtJS JavaScript framework.</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Certification',
		items: [
			{
				title: 'Triplebyte Generalist Software Engineering Certificate',
				place: '',
				timePeriod: '2020',
				description: (
					<ul>
						<li>Earned a prestigious Triplebyte Generalist Software Engineering Certificate by excelling in a rigorous technical assessment covering algorithms, data structures, system design, and coding skills.</li>
						<li>This certification validates my comprehensive software engineering expertise and problem-solving abilities, recognized by leading tech companies.</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Science in Computer Science (BSCS)',
				place: "St. Mary's University",
				timePeriod: '2014 - 2018',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px', textAlign: 'justify' }}>
						👋 Hey, I'm David Cox, a Full Stack Developer.
						Accomplished Senior Full Stack Engineer with over 10 years of experience designing and implementing scalable web applications in
						Healthcare, Fintech, and Real Estate. Expertise in developing robust and high-performance platforms with a focus on <strong>Python</strong>, <strong>TypeScript</strong>, <strong>Django</strong>, and <strong>FastAPI</strong>, along with modern frontend technologies like <strong>React</strong>, <strong>React Native</strong>, <strong>Vue</strong> and <strong>Next</strong>. Proficient in
						managing end-to-end infrastructure in cloud environments (AWS, GCP) and driving continuous delivery through CI/CD and automation. Recognized for strategic architecture planning, cross-functional collaboration, and commitment to delivering impactful solutions in fast- paced environments.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
