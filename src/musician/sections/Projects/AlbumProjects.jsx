import React from 'react';
import styles from './AlbumProjectsStyles.module.css';
import fwh from '../../../assets/fwh.png';
import ProjectCard from '../../../common/ProjectCard';
import zerodays from '../../../assets/zerodays.jpg';
import insane from '../../../assets/insane.jpg';
import beeps from '../../../assets/beeps.jpg';
import peach from '../../../assets/peach.jpg';

function AlbumProjects() {
	return (
		<section
			id='projects'
			className={styles.container}
		>
			<h1 className='sectionTitle'> Selected Recordings</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard
					src={fwh}
					link={
						'https://open.spotify.com/album/5cAl7UYrZ7Ic8v4LzPeKjP?si=uh4pBNjXTNuUXqOA93CerA'
					}
					h3='Sir Babygirl'
					p='Guitar'
				/>
				<ProjectCard
					src={zerodays}
					link={
						'https://open.spotify.com/album/3IwkjQs4GfeNXXNnXygkPK?si=HEtomyB2TYumElnsEba_jg'
					}
					h3='Diuretic'
					p='Bass'
				/>
				<ProjectCard
					src={beeps}
					link={'https://the-beeps.bandcamp.com/album/get-out-of-the-way'}
					h3='The Beeps'
					p='Guitar'
				/>

				<ProjectCard
					src={insane}
					link={'https://earthiscancelled.bandcamp.com/album/band-in-b-c'}
					h3='Insane Earth (fka The Cavemen)'
					p='Bass'
				/>

				<ProjectCard
					src={peach}
					link={'https://peachring666.bandcamp.com/album/rubber-baby'}
					h3='Peach Ring'
					p='Guitar/Mixing'
				/>
			</div>
		</section>
	);
}

export default AlbumProjects;
