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
				<p>Web Application Development</p>
				<div className={styles.skillList}>
					<SkillList
						src={checkMarkIcon}
						skill='Java'
					/>
					<SkillList
						src={checkMarkIcon}
						skill='Spring Boot'
					/>
					<SkillList
						src={checkMarkIcon}
						skill='Unit Testing'
					/>
					<SkillList
						src={checkMarkIcon}
						skill='PostgreSQL'
					/>
					<SkillList
						src={checkMarkIcon}
						skill='REST APIs'
					/>
				</div>

				<div className={styles.skillList}>
					<SkillList
						src={checkMarkIcon}
						skill='Javascript'
					/>
					<SkillList
						src={checkMarkIcon}
						skill='React'
					/>
					<SkillList
						src={checkMarkIcon}
						skill='Vue'
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
						skill='Node'
					/>
				</div>

				<div className={styles.skillList}>
					<SkillList
						src={checkMarkIcon}
						skill='InteliJ'
					/>
					<SkillList
						src={checkMarkIcon}
						skill='Visual Studio Code'
					/>
					<SkillList
						src={checkMarkIcon}
						skill='Postman'
					/>
					<SkillList
						src={checkMarkIcon}
						skill='pgAdmin'
					/>
					<SkillList
						src={checkMarkIcon}
						skill='DevTools'
					/>
					<SkillList
						src={checkMarkIcon}
						skill='Git'
					/>
				</div>
			</div>
		</section>
	);
}

export default Skills;
