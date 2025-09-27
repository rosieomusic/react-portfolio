import React from 'react';
import styles from './ProjectsStyles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

import h2f from '../../assets/h2f.jpeg';
import ProjectCard from '../../common/ProjectCard';
import pawswipe from '../../assets/pawswipe.png';
import drum from '../../assets/drum.png';
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
			<h1 className={styles.title}>Projects</h1>

			<a href='https://github.com/rosieomusic'>
				<button
					id='repo'
					className='hover'
				>
					Github Repository
				</button>
			</a>

			<Swiper
				modules={[Navigation, Pagination]}
				navigation
				pagination={{ clickable: true }}
				spaceBetween={20}
				slidesPerView={1}
				breakpoints={{
					768: { slidesPerView: 2 }, // 2 cards on tablets
					1024: { slidesPerView: 3 }, // 3 cards on desktops
				}}
			>
				<SwiperSlide style={{ background: 'lightcoral', height: '200px' }}>
					Slide 1
				</SwiperSlide>
				<SwiperSlide style={{ background: 'lightblue', height: '200px' }}>
					Slide 2
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Projects;
