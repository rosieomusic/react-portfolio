import styles from './MusicHeroStyles.module.css';
import heroImg from '../../../assets/circular_avatar_5.png';
import sun from '../../../assets/sun.svg';
import moon from '../../../assets/moon.svg';
import { useTheme } from '../../../common/ThemeContext';
import { Link } from 'react-router-dom';

function MusicHero() {
	const { theme, toggleTheme } = useTheme();

	const themeIcon = theme === 'light' ? sun : moon;

	return (
		<section
			id='hero'
			className={styles.container}
		>
			<div className={styles.colorModeContainer}>
				<img
					className={styles.hero}
					src={heroImg}
					alt='Profile picture of Rose OMalley'
				/>
				<img
					className={styles.colorMode}
					src={themeIcon}
					alt='color mode icon'
					onClick={toggleTheme}
				/>
			</div>
			<div className={styles.info}>
				<h1>
					Rose <br />
					O'Malley
				</h1>
				<div>
					<Link to='/'>
						<h2 className={styles.dev}>Full Stack Developer</h2>
					</Link>
					<h2> + Musician +</h2>
				</div>
				<p className={styles.description}>
					Guitarist, Bassist, Educator, Production Enthusiast, Human Jukebox
				</p>
			</div>
		</section>
	);
}

export default MusicHero;
