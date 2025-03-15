import styles from './HeroStyles.module.css';
import heroImg from '../../assets/circular_avatar_3.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedInLight from '../../assets/linkedin-light.svg';
import linkedInDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Rose_OMalley_Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
	const { theme, toggleTheme } = useTheme();

	const themeIcon = theme === 'light' ? sun : moon;
	const githubIcon = theme === 'light' ? githubLight : githubDark;
	const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

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
				<h2>Full Stack Developer / Musician</h2>
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
				<p>
					With a passion for developing modern React web apps for commercial
					buisinesses.
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
