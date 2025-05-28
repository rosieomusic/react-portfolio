import React from 'react';
import styles from './ProjectsStyles.module.css';
import h2f from '../../assets/h2f.jpeg';
import ProjectCard from '../../common/ProjectCard';
import pawswipe from '../../assets/pawswipe.png';
import gigtracker from '../../assets/gigtracker.png';
import bratcalc from '../../assets/bratcalc.png';
import gaga from '../../assets/abracadabra.png';
import ascii from '../../assets/ascii.png';
import spotify from '../../assets/spotify2.png';

function Projects() {
	return (
		<section
			id='projects'
			className={styles.container}
		>
			<h1 className='sectionTitle'>Projects</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard
					src={h2f}
					link={'https://healinghandsfund.org/'}
					h3='Healing Hands Fund'
					p='Nonprofit Website'
				/>
				<ProjectCard
					src={pawswipe}
					link={'https://rosieomusic.github.io/pawswipe/'}
					h3='Paw Swipe'
					p='Pet Adoption Site'
				/>
				<ProjectCard
					src={spotify}
					link={'https://rosieomusic.github.io/spotify-react/'}
					h3='Mood Mixer'
					p='Joke and Spotify API Demo'
				/>
				<ProjectCard
					src={ascii}
					link={'https://rosieomusic.github.io/ascii-art/'}
					h3='ASCII'
					p='ASCII art generator'
				/>
				<ProjectCard
					src={gigtracker}
					link={'https://github.com/rosieomusic/gig_tracker_cli'}
					h3='Gig Tracker App'
					p='Musician Gig Tracker CLI'
				/>
				<ProjectCard
					src={bratcalc}
					link={'https://rosieomusic.github.io/brat-calculator/'}
					h3='brat calculator'
					p='Charli XCX themed calculator'
				/>
				<ProjectCard
					src={gaga}
					link={'https://rosieomusic.github.io/tic-tac-toe-react/'}
					h3='ABRACADABRA TOE'
					p='Lady Gaga themed Tic-Tac-Toe'
				/>
			</div>
		</section>
	);
}

export default Projects;
