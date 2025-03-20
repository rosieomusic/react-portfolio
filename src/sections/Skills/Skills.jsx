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
			<div className={styles.skillList}>
				<SkillList
					src={checkMarkIcon}
					skill='Java'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Javascript'
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
					skill='PostgreSQL'
				/>
			</div>
			<hr />
			<div className={styles.skillList}>
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
					skill='Git'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Docker'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Node'
				/>
			</div>
		</section>
	);
}

export default Skills;
