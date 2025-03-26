import React from 'react';
import MusicHero from '../musician/sections/Hero/MusicHero.jsx';
import AlbumProjects from '../musician/sections/Projects/AlbumProjects.jsx';
import MusicSkills from '../musician/sections/Skills/MusicSkills.jsx';
import SoundDesign from '../musician/sections/SoundDesign/SoundDesign.jsx';
import Teaching from '../musician/sections/Teaching/Teaching.jsx';
import Footer from '../sections/Footer/Footer.jsx';
import Contact from '../sections/Contact/Contact.jsx';

function Musician() {
	return (
		<>
			<MusicHero />
			<AlbumProjects />
			<SoundDesign />
			<Teaching />
			<MusicSkills />
			<Contact />
			<Footer />
		</>
	);
}

export default Musician;
