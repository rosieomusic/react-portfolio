import React from 'react';
import styles from './SkillsStyles.module.css';
import darkMark from '../../assets/checkmark-dark.svg';
import lightMark from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList.jsx';
import { useTheme } from '../../common/ThemeContext.jsx';

function Skills() {
	const { theme } = useTheme();
	const checkMarkIcon = theme === 'light' ? lightMark : darkMark;

	return (
		<section
			id='skills'
			className={styles.container}
		>
			<h1 className='sectionTitle'>Skills</h1>

			<div className={styles.skillsContainer}>
				<div className={styles.category}>
					<p>Object Oriented Programming:</p>
					<div className={styles.skillList}>
						<SkillList
							src={checkMarkIcon}
							skill='Java'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='Python'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='MVC Design Pattern'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='Interfaces'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='Inheritance'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='Encapsulation'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='Polymorphism'
						/>
					</div>
				</div>
				<div className={styles.category}>
					<p>Web Application Development:</p>
					<div className={styles.skillList}>
						<SkillList
							src={checkMarkIcon}
							skill='Vue'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='React'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='HTML'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='CSS'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='RESTful API'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='Responsive design'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='Figma wireframing / prototyping'
						/>
					</div>
				</div>

				<div className={styles.category}>
					<p>Database Programming:</p>
					<div className={styles.skillList}>
						<SkillList
							src={checkMarkIcon}
							skill='PostgreSQL'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='E/R diagram design'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='JDBC'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='pgAdmin'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='Supabase'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='KoyebDB'
						/>
					</div>
				</div>

				<div className={styles.category}>
					<p>Development Tools & Techniques:</p>
					<div className={styles.skillList}>
						<SkillList
							src={checkMarkIcon}
							skill='Git/Github'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='Agile/Scrum'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='VS code'
						/>
						<br /> <br /> <br />
						<SkillList
							src={checkMarkIcon}
							skill='PyCharm'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='IntelliJ IDEA'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='DevTools'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='Unit testing (JUnit)'
						/>
						<SkillList
							src={checkMarkIcon}
							skill='Postman API testing'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
