import React from 'react';
import styles from './TeachingStyles.module.css';
import pluggedIn from '../../../assets/pluggedIn.png';
import caap from '../../../assets/CAAP.png';
import MW from '../../../assets/MW.png';
import SOR from '../../../assets/SOR.png';
function Teaching() {
	return (
		<section
			id='teaching'
			className={styles.container}
		>
			<h1 className='sectionTitle'>Teaching</h1>
			<p>Former Instructor at:</p>

			<span>
				<a
					href='https://www.pluggedinband.org/'
					target='blank'
				>
					<img
						src={pluggedIn}
						alt='PluggedIn'
					/>
				</a>
				<a
					href='https://www.creativeartsatpark.org'
					target='blank'
				>
					<img
						src={caap}
						alt='caap'
					/>
				</a>
				<a
					href='https://www.mwschoolofmusic.com/'
					target='blank'
				>
					<img
						src={MW}
						alt='MW'
					/>
				</a>
				<a
					href='https://www.schoolofrock.com/locations/cherryhill'
					target='blank'
				>
					<img
						src={SOR}
						alt='SOR'
					/>
				</a>
			</span>
		</section>
	);
}

export default Teaching;
