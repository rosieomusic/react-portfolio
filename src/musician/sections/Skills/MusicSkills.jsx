import React from 'react';
import styles from './MusicSkillsStyles.module.css';
import darkMark from '../../../assets/checkmark-dark.svg';
import lightMark from '../../../assets/checkmark-light.svg';
import SkillList from '../../../common/SkillList.jsx';
import { useTheme } from '../../../common/ThemeContext.jsx';

function MusicSkills() {
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
					skill='ProTools'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Ableton'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Logic'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Reason'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Finale'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Sibelius'
				/>
			</div>
			<hr />
			<div className={styles.skillList}>
				<SkillList
					src={checkMarkIcon}
					skill='Sound Design'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Audio Engineering'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Mixing'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Mastering'
				/>
				<SkillList
					src={checkMarkIcon}
					skill='Session Work'
				/>
			</div>
		</section>
	);
}

export default MusicSkills;
