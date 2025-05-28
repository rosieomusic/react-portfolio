import styles from './HeroStyles.module.css';
import heroImgDark from '../../assets/headshot_ascii_pink.png';
import heroImgLight from '../../assets/touchedupheadshotsun.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedInLight from '../../assets/linkedin-light.svg';
import linkedInDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Rose_OMalley_Resume2025.pdf';
import { useTheme } from '../../common/ThemeContext';
import { Link } from 'react-router-dom';

function Hero() {
	const { theme, toggleTheme } = useTheme();

	const themeIcon = theme === 'light' ? sun : moon;
	const githubIcon = theme === 'light' ? githubLight : githubDark;
	const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;
	const heroImg = theme === 'light' ? heroImgLight : heroImgDark;

	return (
		<section
			id='hero'
			className={styles.container}
		>
			<div className={styles.colorModeContainer}>
				<img
					className={styles.colorMode}
					src={themeIcon}
					alt='color mode icon'
					onClick={toggleTheme}
				/>
				<img
					className={styles.hero}
					src={heroImg}
					alt='Profile picture of Rose OMalley'
				/>
			</div>
			<div className={styles.info}>
				<h1 id='rose'>
					Rose <br />
					O'Malley
				</h1>
				<div>
					<h2>Developer</h2>
					<Link to='/musician'>
						<h2 className={styles.musician}>+ Musician +</h2>
					</Link>
				</div>
				<span>
					<a
						href='https://github.com/rosieomusic'
						target='_blank'
					>
						<img
							src={githubIcon}
							alt='Github icon'
						/>
					</a>
					<a
						href='https://www.linkedin.com/in/roseomalleydeveloper/'
						target='_blank'
					>
						<img
							src={linkedInIcon}
							alt='Linkedin icon'
						/>
					</a>
				</span>
				<p className={styles.description}>
					Full-Stack Software Engineer with a background in music, bringing
					creativity, precision, and a strong collaborative spirit to software
					development.
				</p>
				<a
					href={CV}
					download
				>
					<button className='hover'>Resume</button>
				</a>
			</div>
		</section>
	);
}

export default Hero;
