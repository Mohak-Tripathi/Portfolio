import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
// import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	// const [width] = WindowSize();
	// const img =
	// 	width < 650
	// 		? 'https://avatars.githubusercontent.com/u/86410121?v=4' // my Picture
	// 		: 'https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true';
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					Hi Everyone! I am Mohak Tripathi. I always believe that direction is far more important than speed. Keeping that in mind and understanding my inner self and where the world is heading, I decided to take pivot in my career to become software developer. <br/>  I love to be involved with technology and I like to build web applications<br/> .
					<br/> Fast Forwarding to today, I built a number of web
					applications using MERN stack and develped key projects in it. I also learned a great deal
					about teamwork, leadership, empathy, compassion and communication. After months
					of rigorous training, here I am
					<span style={{ color: `#00a0a0` }}>
						{' '}
						looking for an opportunity as a full stack web developer
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
