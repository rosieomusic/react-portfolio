import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Musician from './pages/Musician';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
function Home() {
	return (
		<>
			<Hero />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</>
	);
}

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				></Route>
				<Route
					path='/musician'
					element={<Musician />}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
