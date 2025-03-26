import React from 'react';
import styles from './SoundDesignStyles.module.css';
import water from '../../../assets/water.png';
import immigration from '../../../assets/immigration.png';

function SoundDesign() {
	return (
		<section
			id='sound-design'
			className={styles.container}
		>
			<h1 className='sectionTitle'>Sound Design</h1>
			<span>
				<a
					href='https://continuumdance.org/'
					target='blank'
				>
					<img
						src={water}
						alt='water'
					/>
					<p className={styles.blurb}>
						"Becoming Water" Continuum Dance Project 2023
					</p>
				</a>

				<a
					href='https://continuumdance.org/'
					target='blank'
				>
					<img
						src={immigration}
						alt='immigration'
					/>
					<p className={styles.blurb}>
						"Crossing: Stories of Immigration" Continuum Dance Project 2021
					</p>
				</a>
			</span>
		</section>
	);
}

export default SoundDesign;
