import { BiLogoAws, BiLogoDjango, BiLogoFlask, BiLogoTypescript, BiLogoVuejs } from 'react-icons/bi';
import { DiMongodb, DiMsqlServer } from 'react-icons/di';
import { FaBootstrap, FaCloud, FaMicrosoft, FaPython, FaReact } from 'react-icons/fa';
import {
	SiMui,
	SiMysql,
	SiShadcnui,
	SiTailwindcss
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Core Stack I Work With',
		items: [
			{
				title: 'Next JS',
				icon: <TbBrandNextjs color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'React JS',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgb(97, 219, 251, 0.6)',
			},
			{
				title: 'Python',
				icon: <FaPython color='rgb(104, 160, 99)' />,
				color: 'rgb(104, 160, 99)',
			},
			{
				title: 'TypeScript',
				icon: <BiLogoTypescript color='rgb(0, 122, 204)' />,
				color: 'rgba(0, 122, 204, 0.6)',
			},
			{
				title: 'Django',
				icon: <BiLogoDjango color='rgba(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Flask',
				icon: <BiLogoFlask color='rgba(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Vue.js',
				icon: <BiLogoVuejs color='rgba(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
		],
	},
	{
		heading: 'Cloud Platforms',
		items: [
			{
				title: 'AWS',
				icon: <BiLogoAws color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Microsoft Azure',
				icon: <FaMicrosoft color='rgb(97, 219, 251)' />,
				color: 'rgb(97, 219, 251, 0.6)',
			},
			{
				title: 'Google Cloud',
				icon: <FaCloud color='rgb(104, 160, 99)' />,
				color: 'rgb(104, 160, 99)',
			},
		],
	},
	{
		heading: 'UI & Styling',
		items: [
			{
				title: 'Material UI',
				icon: <SiMui color='rgb(0, 127, 255)' />,
				color: 'rgb(0, 127, 255, 0.6)',
			},
			{
				title: 'ShadCn UI',
				icon: <SiShadcnui color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='rgb(6, 182, 212)' />,
				color: 'rgb(6, 182, 212, 0.7)',
			},
			{
				title: 'Bootstrap',
				icon: <FaBootstrap color='rgb(125, 17, 248)' />,
				color: 'rgb(125, 17, 248, 0.75)',
			},
			// Optionally add ShadCn here
		],
	},
	{
		heading: 'Databases I Use',
		items: [
			{
				title: 'MsSQL',
				icon: <DiMsqlServer color='rgb(230, 50, 42)' />,
				color: 'rgb(241, 83, 75, 0.5)',
			},
			{
				title: 'MongoDB',
				icon: <DiMongodb color='rgb(0, 237, 100)' />,
				color: 'rgb(0, 237, 100, 0.7)',
			},
			{
				title: 'MySQL',
				icon: <SiMysql color='rgb(0, 122, 158)' />,
				color: 'rgb(0, 122, 158, 0.75)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='SET'
				/>
			</div>
		</section>
	);
};
