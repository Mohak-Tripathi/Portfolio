import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className={styles.experiences}>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Experience
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
					Internship | B.A. LLB {' '}
					<a href='http://www.slic.org.in/'>@ Human Rights Law Network (NGO)</a>
				</div>
				<div className={styles.date}>November 2016</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
						My role was related to research and fieldwork. My task was to provide legal aid to the marginalized and downtrodden sections of society and make them aware of their basic rights.

						</li>
						<li>
						This internship helped me to understand India from the grassroots level.
						</li>
					
					</ul>
				</fieldset>
			</div>

			<br/>			

		</div>
	);
};

export default Experiences;
